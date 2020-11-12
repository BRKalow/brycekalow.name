import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NavigationLink } from './navigation-link';
import { ThemeSwitcher } from './theme-switcher';

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [router.asPath]);

    return (
        <>
            <header className={`header ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                <div className="header-content">
                    <div className="name-container">
                        <Link href="/">
                            <a className="name">Bryce &nbsp;Kalow</a>
                        </Link>
                    </div>
                    <nav>
                        <ul>
                            <li><NavigationLink href="/">Home</NavigationLink></li>
                            <li><NavigationLink href="/blog" matchNested>Blog</NavigationLink></li>
                        </ul>
                    </nav>
                    <div className="settings">
                        <div className="theme-switcher">
                            <ThemeSwitcher />
                        </div>
                        <div className="mobile-menu-button">
                            <button onClick={() => setIsMobileMenuOpen(cur => !cur)}>
                                <span className="hamburger-box">
                                    <span className="hamburger-inner" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </header >
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <nav className="mobile">
                    <ul>
                        <li className="slide-in" style={{ '--n': 1 } as React.CSSProperties}><NavigationLink href="/">Home</NavigationLink></li>
                        <li className="slide-in" style={{ '--n': 2 } as React.CSSProperties}><NavigationLink href="/blog" matchNested>Blog</NavigationLink></li>
                    </ul>
                </nav>
                <ThemeSwitcher className="slide-in" style={{ '--n': 3 } as React.CSSProperties} />
            </div>
            <style jsx>{`
                header {
                    position: sticky;
                    top: 0;
                    backdrop-filter: blur(8px);
                    background-color: rgba(var(--bg-color), 0.7);
                    padding: 0 1.5rem;
                    z-index: 1;
                    border-bottom: 0px solid var(--border-color);
                }

                .header-content {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 1.5em 0;
                    display: grid;
                    grid-template-areas: 'name nav settings';
                    grid-template-columns: auto 1fr 80px;
                    column-gap: 2.5rem;
                }

                @keyframes expand {
                    from {
                        width: 0;
                    }
        
                    to {
                        width: var(--hover-bar-width, 70%);
                    }
                }

                .name-container {
                    display: grid;
                }

                .name {
                    --hover-bar-width: 72%;
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 1.5rem;
                    line-height: 1.3rem;
                    font-weight: bold;
                    letter-spacing: -0.03em;
                    align-self: center;
                    justify-self: start;
                    width: 90px;
                    text-decoration: none;
                }
        
                .name::after {
                    content: '';
                    background-color: #ed6f4d;
                    background-size: 400% 100%;
                    background-image: linear-gradient(90deg,#12c2e9,#c471ed,#f64f59);
                    animation: expand 1s ease-in-out 1, ${`gradient`} 3s ease infinite;
                    height: 4px;
                    width: var(--hover-bar-width);
                    display: block;
                    margin-top: 4px;
                    margin-left: 7px;
                    transition: width 1s ease;
                }

                nav {
                    margin: 0;
                    display: grid;
                    align-self: center;
                    justify-self: center;
                }

                nav ul {
                    margin: 0;
                    padding-inline-start: 0;
                }

                nav li {
                    list-style: none;
                    display: inline;
                    font-size: 1.25em;
                }

                nav li:not(:last-child) {
                    margin-right: 1.5em;
                }

                .settings {
                    display: grid;
                    align-self: center;
                    justify-self: end;
                }

                .mobile-menu-button, .mobile-menu {
                    display: none;
                }

                @media(max-width: 475px) {
                    :global(body .mobile-menu-open ~ main) {
                        padding-top: 80px;
                    }

                    :global(body .mobile-menu-open) {
                        overflow: hidden;
                    }

                    :global(.mobile-menu .slide-in) {
                        transform: translateX(-1rem);
                        opacity: 0;
                        transition: all 0.1s ease;
                    }

                    :global(.mobile-menu.open .slide-in) {
                        transform: translateX(0);
                        opacity: 1;
                        transition: all 0.4s ease;
                        transition-delay: calc(var(--n) * 0.1s);
                    }

                    .mobile-menu-open {
                        position: fixed;
                        border-bottom-width: 1px;
                        transition: border 0.3s;
                    }

                    .header-content {
                        padding: 0;
                        height: 80px;
                        box-sizing: border-box;
                    }

                    nav:not(.mobile) {
                        visibility: hidden;
                    }

                    nav.mobile {
                        margin-bottom: 3rem;
                    }

                    .theme-switcher {
                        visibility: hidden;
                        display: none;
                    }

                    .mobile-menu-button {
                        display: block;
                    }

                    .mobile-menu-button > button {
                        background: none;
                        border: 0;
                        fill: var(--font-color);
                    }
                    
                    .mobile-menu {
                        opacity: 0;
                        pointer-events: none;
                        transition: opacity 0.4s ease-out;
                        padding: 1.5rem;
                        position: fixed;
                        height: calc(100% - 80px);
                        width: 100%;
                        top: 81px;
                        backdrop-filter: blur(8px);
                        background-color: rgba(var(--bg-color), 0.7);
                        z-index: 999;
                        display: block;
                    }

                    .mobile-menu.open {
                        pointer-events: inherit; 
                        opacity: 1;
                        backdrop-filter: blur(8px);
                        background-color: rgba(var(--bg-color), 0.7);
                    }

                    .mobile-menu > nav li {
                        display: block;
                        font-size: 2rem;
                    }

                    .mobile-menu > nav li:not(:last-child) {
                        margin-bottom: 3rem;
                    }

                    .hamburger-box {
                        width: 24px;
                        height: 24px;
                        display: inline-block;
                        position: relative;
                    }
                      
                    .hamburger-inner {
                        display: block;
                        transition-duration: 0.2s;
                        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
                        top: 50%;
                    }

                    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
                        width: 24px;
                        height: 2px;
                        background-color: var(--font-color);
                        border-radius: 4px;
                        position: absolute;
                    }

                    .hamburger-inner::before, .hamburger-inner::after {
                        content: "";
                        display: block;
                    }

                    .hamburger-inner::before {
                        top: -8px;
                        transition: top 0.2s 0.12s ease, opacity 0.2s ease;
                    }

                    .hamburger-inner::after {
                        bottom: -8px;
                        transition: bottom 0.2s 0.12s ease, transform 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
                    }

                    .mobile-menu-open .hamburger-inner {
                        transform: rotate(45deg);
                        transition-delay: 0.12s;
                        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                    }

                    .mobile-menu-open .hamburger-inner::before {
                        top: 0;
                        opacity: 0;
                        transition: top 0.2s ease, opacity 0.2s 0.12s ease;
                    }

                    .mobile-menu-open .hamburger-inner::after {
                        bottom: 0;
                        transform: rotate(-90deg);
                        transition: bottom 0.2s ease, transform 0.2s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
                    }
                }
            `}</style>
        </>

    )
}