import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavigationLink({
  href,
  matchNested = false,
  children,
  onMouseOver = (e, href) => {},
}) {
  const pathname = usePathname();

  return (
    <>
      <Link href={href} legacyBehavior>
        <a
          onMouseOver={(e) => onMouseOver(e, href)}
          className={
            pathname === href || (matchNested && pathname.startsWith(href))
              ? "active"
              : undefined
          }
        >
          {children}
        </a>
      </Link>
      <style jsx>{`
        a {
          --hover-bar-width: 100%;
          color: var(--font-color);
          font-weight: bold;
          text-decoration: none;
          position: relative;
          padding: 8px 0;
        }

        a.active::after {
          content: "";
          width: 100%;
          opacity: 0.75;
          height: 2px;
          animation: ${`gradient`} 3s ease infinite;
          background-image: linear-gradient(90deg, #12c2e9, #c471ed, #f64f59);
          filter: blur(10px);
          height: 50%;
          border-radius: 50% 50% 0 0;
          z-index: -1;
          position: absolute;
          bottom: 25%;
          left: 0;
          transition: width 1s ease, opacity 0s 0s;
        }
      `}</style>
    </>
  );
}
