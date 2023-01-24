import ThemeSwitcher from "./theme-switcher";

import s from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s["footer-inner"]}>
        <div className={s.blurb}></div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}
