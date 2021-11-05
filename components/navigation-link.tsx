import Link from 'next/link'
import { useRouter } from 'next/router';

export function NavigationLink({ href, matchNested = false, children, onMouseOver = (e, href) => {} }) {
    const router = useRouter();

    return (
        <>
        <Link href={href}>
            <a onMouseOver={e => onMouseOver(e, href)} className={router.pathname === href || (matchNested && router.pathname.startsWith(href)) ? 'active' : undefined}>
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
            }

            a.active::after {
                content: "";
                width: 100%;
                opacity: 1;
                height: 2px;
                animation: ${`gradient`} 3s ease infinite;
                background-color: var(--font-color);
                height: 2px;
                position: absolute;
                bottom: -10px;
                left: 0;
                transition: width 1s ease, opacity 0s 0s;
            }
        `}</style>
        </>
    );
}
