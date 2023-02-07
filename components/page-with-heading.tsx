import s from "./page-with-heading.module.css";

export const PageWithHeading = ({ title, subtitle = null, children }) => (
  <>
    <div className={s.hero}>
      <h1>{title}</h1>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
    <div>{children}</div>
  </>
);
