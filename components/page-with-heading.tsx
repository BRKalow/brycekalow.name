export const PageWithHeading = ({ title, subtitle = null, children }) => (
  <>
    <div className="hero">
      <h1>{title}</h1>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
    <div>
      {children}
    </div>
    <style jsx>{`
        .hero {
          text-align: center;
          margin-bottom: 3rem; 
        }

        p {
          font-size: 1.5rem;
          margin: 0;
        }
      `}</style>
    </>
)
