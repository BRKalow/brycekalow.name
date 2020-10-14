import Link from 'next/link'
import { useRouter } from 'next/router';

export function NavigationLink({ href, children }) {
    const router = useRouter();

    return (
        <Link href={href}>
            <a className={router.pathname === href ? 'active' : undefined}>
                {children}
        <style jsx>{`
            a {
                --hover-bar-width: 100%;
                color: black;
                font-weight: bold;
                text-decoration: none;
                position: relative;
            }

            a.active::after {
                width: 100%;
                opacity: 1;
                height: 2px;
                animation: gradient 3s ease infinite;
            }
            
            a::after {
                content: '';
                background-color: #ed6f4d;
                background-size: 400% 100%;
                background-image: linear-gradient(90deg,#12c2e9,#c471ed,#f64f59);
                height: 2px;
                width: 0;
                position: absolute;
                bottom: -6px;
                left: 0;
                opacity: 0;
                transition: width 1s ease, opacity 0s 1s;
            }

            a:not(.active):hover::after {
                animation: expand 1s ease-in-out 1, gradient 3s ease infinite;
                width: 100%;
                opacity: 1;
                height: 2px;
                transition: width 1s ease, opacity 0s 0s;
            }
        `}</style>
            </a>
        </Link>
    );
}