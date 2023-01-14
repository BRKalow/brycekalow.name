import ThemeSwitcher from "./theme-switcher";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-inner">
          <div className="blurb"></div>
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </footer>
      <style jsx>{`
        footer {
          border-top: 1px solid var(--border-color);
        }

        .footer-inner {
          display: grid;
          grid-template-areas: "blurb settings";
          grid-template-columns: 1fr 80px;
          grid-auto-rows: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 1.5rem;
          box-sizing: border-box;

          grid-row-start: 3;
        }

        .blurb {
          color: var(--secondary-font-color);
          font-style: italic;
        }
      `}</style>
    </>
  );
}
