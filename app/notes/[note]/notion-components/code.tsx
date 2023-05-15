import { type ReactElement } from 'react'
import { ExtendedRecordMap, type CodeBlock } from 'notion-types'
import { getBlockTitle } from 'notion-utils'

import type { Highlighter, Lang, Theme } from 'shiki'
import { renderToHtml, getHighlighter } from 'shiki'

const SHIKI_THEMES: Record<string, Theme> = { dark: "github-dark", light: "github-light" }

let highlighters = new Map<string, Highlighter>()

async function highlight(code: string, theme: Record<string, Theme>, lang: Lang) {
  let results: string[] = []

  for (const [mode, themeValue] of Object.entries(theme)) {
    const key = `${mode}#${lang}`

    if (!highlighters.has(key)) {
      highlighters.set(key, await getHighlighter({
        langs: [lang],
        theme: themeValue
      }))
    }

    const highlighter = highlighters.get(key)
    const tokens = highlighter!.codeToThemedTokens(code, lang, themeValue, { includeExplanation: false })
    const html = renderToHtml(tokens, { bg: 'transparent', elements: {
      pre: ({ className = '', style = '', children }) => `<pre data-theme="${mode}" data-language="${lang}" class="${className}" style="${style}">${children}</pre>`,
      code: ({ className = '', style = '', children }) => `<code data-theme="${mode}" data-language="${lang}" class="${className}" style="${style}">${children}</code>`,
      line: ({ className, children }) => `<span class="${className}">${children || '&nbsp;'}</span>`
    } })

    results.push(html)
  }

  return <div dangerouslySetInnerHTML={{ __html: results.join('') }} />
}

export async function Code({ block, content, defaultLang = 'typescript' }: { recordId: string, block: CodeBlock, content?: ExtendedRecordMap, defaultLang?: string }) {
  // @ts-expect-error -- content may be undefined, that's okay if block is not a collection view
  const codeSource = getBlockTitle(block, content)
  let language = (
    block.properties?.language?.[0]?.[0] || defaultLang
  ).toLowerCase() as Lang

  // Ensure that JSX is properly highlighted
  if (language === 'typescript') {
    language = 'tsx'
  }

  return await highlight(codeSource, SHIKI_THEMES, language)
}
