import Link from 'next/link';

export function Header() {
    return (
        <header className="header">
            <div>
                <span className="name">Bryce Kalow</span>
            </div>
            <nav>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/blog"><a>Blog</a></Link></li>
                </ul>
            </nav>
            <style jsx>{`
                header {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 1.5em;
                    display: grid;
                    grid-template-areas: 'name nav';
                }

                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
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
                    font-size: 2em;
                    font-weight: bold;
                    letter-spacing: -0.03em;
                }
        
                .name::after {
                    content: '';
                    background-color: #ed6f4d;
                    background-size: 400% 100%;
                    background-image: linear-gradient(90deg,#12c2e9,#c471ed,#f64f59);
                    animation: expand 1s ease-in-out 1, gradient 3s ease infinite;
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

                nav li > a {
                    --hover-bar-width: 100%;
                    color: black;
                    font-weight: bold;
                    text-decoration: none;
                    position: relative;
                }
                
                nav li > a:after {
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

                nav li > a:hover::after {
                    animation: expand 1s ease-in-out 1, gradient 3s ease infinite;
                    width: 100%;
                    opacity: 1;
                    height: 2px;
                    transition: width 1s ease, opacity 0s 0s;
                }

                nav li:not(:last-child) {
                    margin-right: 1.5em;
                }
            `}</style>
        </header>

    )
}