import { NavigationLink } from './navigation-link';
import { ThemeSwitcher } from './theme-switcher';

export function Header() {
    return (
        <header className="header">
            <div className="name-container">
                <span className="name">Bryce &nbsp;Kalow</span>
            </div>
            <nav>
                <ul>
                    <li><NavigationLink href="/">Home</NavigationLink></li>
                    <li><NavigationLink href="/blog" matchNested>Blog</NavigationLink></li>
                </ul>
            </nav>
            <div className="settings">
                <ThemeSwitcher />
            </div>
            <style jsx>{`
                header {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 1.5em 0;
                    display: grid;
                    grid-template-areas: 'name nav settings';
                    grid-template-columns: auto 1fr 80px;
                    column-gap: 2.5rem;
                    position: sticky;
                    top: 0;
                    backdrop-filter: blur(8px);
                    background-color: rgba(var(--bg-color), 0.7);
                    transition: color 0.3s ease-out, background-color 0.3s ease-out;
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
                    font-size: 1.5em;
                    line-height: 1.3rem;
                    font-weight: bold;
                    letter-spacing: -0.03em;
                    align-self: center;
                    justify-self: start;
                    width: 90px;
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
            `}</style>
        </header>

    )
}