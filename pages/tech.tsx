import Image from 'next/image'

const TechList = () => {
  return null
}

const Tech = () => {
  return (
    <>
    <div className="hero">
      <h1>Tech</h1>
      <p>Take a look at the tools and software I use to build.</p>
    </div>
    <div>
      <ul>
        <li>          <div className="tech-image">
            <Image src="/img/tech/next.png" width="48" height="48" layout="fixed"/>
          </div>Next.js</li>
        <li>
          <div className="tech-image">
            <Image src="/img/tech/fathom.png" width="64" height="64" layout="fixed"/>
          </div>
        </li>
      </ul>
    </div>
    <style jsx>{`
        .hero {
          text-align: center;
        }

        h1 {
          font-size: 2.25rem;
        }

        p {
          font-size: 1.5rem;
        }

        .tech-image {
          border-radius: 4px;
          background-color: white;
          display: inline-block;
          height: 64px;
          width: 64px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        ul {
          list-style-type: none;
        }
      `}</style>
    </>
  )
}

export default Tech;
