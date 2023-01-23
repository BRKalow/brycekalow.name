import { useEffect, useRef, useState } from "react";

// c.f. https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
const cyrb53 = (str, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }

  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

function parseLineInputs(inputs) {
  let result = [];
  let index = 0;

  while (index < inputs.length) {
    let style = "";
    let className;
    let input = inputs[index];

    // %c is the format specifier for styles, if the input includes that, treat the next input as the style declaration
    if (input.includes("%c")) {
      style = inputs[index + 1];
      className = `console_${cyrb53(style)}`;
      style = `.${className} { ${style} }`;
      input = input.replace("%c", "");
      // skip over the style
      index += 1;
    }

    result.push(
      <>
        {/* If we have styles, inject a style tag */}
        {style && <style dangerouslySetInnerHTML={{ __html: style }} />}
        <span className={className}>{input}</span>
      </>
    );
    index += 1;
  }

  return result;
}

function ConsoleLine({ lineInputs, showInput }) {
  return (
    <>
      <style jsx>{`
        .line {
          padding: 0.5rem;
        }

        .line:not(:last-of-type) {
          border-bottom: 1px solid var(--border-color);
        }

        .input::before {
          content: "> ";
          opacity: 0.35;
        }
      `}</style>
      {showInput && (
        <span className="line input">
          console.log({lineInputs.map((input) => `"${input}"`).join(", ")})
        </span>
      )}
      <span className="line">{parseLineInputs(lineInputs)}</span>
    </>
  );
}

export default function Console({
  lines,
  showInput,
  interactive,
  placeholder,
}) {
  const [_lines, setLines] = useState(lines);
  const [input, setInput] = useState<string>();
  const linesRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (linesRef.current) {
      linesRef.current.scrollTo(0, linesRef.current.scrollHeight);
    }
  }, [_lines]);

  let prompt = null;
  if (interactive) {
    // Keep the size of the input element in-sync with the size of the input value, to make it look like the static text is part of the value
    const inputSize = Math.max(
      ((input?.length || placeholder?.length) ?? 1) - 1,
      1
    );

    prompt = (
      <>
        <style jsx>{`
          .prompt {
            padding: 0.5rem;
          }

          .prompt::before {
            content: "> ";
            opacity: 1;
          }

          .prompt input {
            background: none;
            border: none;
            color: inherit;
            font-family: inherit;
            font-size: inherit;
            width: fit-content;
            border: 2px dashed var(--border-color);
            border-radius: 4px;
          }
        `}</style>
        <div className="prompt">
          console.log(
          <input
            type="text"
            size={inputSize}
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                const inputToSplit = input || placeholder;
                // parse the inputs by splitting on , and remove wrapping quotes
                const inputs = inputToSplit
                  .split(/,\s?/)
                  .map((i) => i.replace(/^["'](.+)["']$/, "$1"));
                setLines((cur) => [...cur, inputs]);
                setInput("");
              }
            }}
            placeholder={placeholder}
          />
          )
        </div>
      </>
    );
  }

  return (
    <>
      <style jsx>{`
        pre {
          background: var(--code-bg-color);
          border-radius: 0.5rem;
          border: 1px solid var(--border-color);
        }

        .lines {
          display: grid;
          max-width: 100%;
          overflow-x: auto;
          max-height: 300px;
        }

        .prompt input {
          background: none;
          border: none;
        }
      `}</style>
      <pre>
        <span className="lines" ref={linesRef}>
          {_lines.map((lineInputs, index) => (
            <ConsoleLine
              key={JSON.stringify(lineInputs) + index}
              lineInputs={lineInputs}
              showInput={showInput}
            />
          ))}
        </span>
        {prompt}
      </pre>
    </>
  );
}
