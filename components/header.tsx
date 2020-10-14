import { NavigationLink } from './navigation-link';

export function Header() {
    return (
        <header className="header">
            <div>
                <span className="name">Bryce Kalow</span>
            </div>
            <nav>
                <ul>
                    <li><NavigationLink href="/">Home</NavigationLink></li>
                    <li><NavigationLink href="/blog" matchNested>Blog</NavigationLink></li>
                </ul>
            </nav>
            <style jsx>{`
                header {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 1.5em 0;
                    display: grid;
                    grid-template-areas: 'name nav';
                }

                @keyframes expand {
                    from {
                        width: 0;
                    }
        
                    to {
                        width: var(--hover-bar-width, 60%);
                    }
                }

                .name {
                    --hover-bar-width: 60%;
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 1.75em;
                    font-weight: bold;
                    letter-spacing: -0.03em;
                }
        
                .name::after {
                    content: '';
                    background-color: #ed6f4d;
                    background-size: 400% 100%;
                    background-image: linear-gradient(90deg,#12c2e9,#c471ed,#f64f59);
                    animation: expand 1s ease-in-out 1, ${`gradient`} 3s ease infinite;
                    height: 4px;
                    width: 60%;
                    display: block;
                    margin-top: 4px;
                    transition: width 1s ease;
                }

                nav {
                    display: grid;
                    place-self: end;
                }

                nav ul {
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
            `}</style>
        </header>

    )
}