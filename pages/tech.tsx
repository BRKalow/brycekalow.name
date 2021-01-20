import Image from 'next/image'
import { PageWithHeading } from '../components/page-with-heading'

const techListData = [
  {
    title: 'Next.js',
    image: 'next.png',
    description: 'An extremely flexible web framework powered by React. I use it both personally and professionally.',
    url: 'https://nextjs.org'
  },
  {
    title: 'Fathom Analytics',
    image: 'fathom.png',
    description: 'A privacy-focused analytics alternative. I\'m using it for this site!',
    url: 'https://usefathom.com/ref/27Z2TI'
  },
  {
    title: 'Notion',
    image: 'notion.png',
    description: 'My personal knowledge management system. I use Notion to take notes, write posts, and organize any type of information I don\'t want to keep in my brain.',
    url: 'https://notion.so'
  }
]

const TechList = () => {
  return (<ul>
    {techListData.map(item => (
      <li key={item.title}>
        <a href={item.url} rel="noreferrer noopener" target="_blank">
          <div className="tech-image">
            <Image src={`/img/tech/${item.image}`} width="48" height="48" layout="fixed"/>
          </div>
          <div>
            <h2>
              {item.title}
            </h2>
            <p>
              {item.description}
            </p>
          </div>
        </a>
      </li>
    ))}
        <style jsx>{`
        .tech-image {
          border-radius: 8px;
          background-color: rgb(var(--bg-color));
          display: inline-block;
          height: 64px;
          width: 64px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 1px 4px 0 rgba(0,0,0,0.15);
          position: relative;
        }

        ul {
          list-style-type: none;
          padding-inline-start: 0;
        }
        
        li {
          margin-bottom: 2rem;
        }

        a {
          --gradient-background-rotation: 0;

          display: grid;
          grid-template-columns: 64px auto;
          grid-column-gap: 1rem;
          border-radius: .5rem;
          position: relative;
          transition: background-color 0s ease-in-out 0.25s;
          padding: 4px;
          text-decoration: none;
        }

        a:hover {
          transition: background-color 0s ease-in-out;
        }

        .tech-image::before {
          --border-size: 1px;

          content: '';
          height: 100%;
          width: 100%;
          background: var(--gradient-background);
          position: absolute;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: -1;
          top: -var(--border-size);
          left: -var(--border-size);
          border-radius: 8px;
          padding: var(--border-size);
        }

        a:hover .tech-image::before, a:active .tech-image::before, a:focus .tech-image::before {
          opacity: 1;
        }

        h2 {
          font-weight: bold;
          margin: 0;
          font-size: 1.25rem;
        }

        p {
          color: var(--secondary-font-color);
        }
    `}</style>
  </ul>)
}

const Tech = () => {
  return (
    <PageWithHeading
      title="Tech"
      subtitle="Take a look at the tools and software I use to build."
      >
       <TechList /> 
    </PageWithHeading>
  )
}

export default Tech;
