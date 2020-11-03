import React from 'react';

export const HeartIcon = () => {
    const [active, setActive] = React.useState(false);

    return (
        <button onClick={() => setActive(cur => !cur)} className={active ? 'active' : ''}>
            <style jsx>{`
                button {
                  border: none;
                  background: none;
                  padding: 0;
                  cursor: pointer;
                  border-radius: 50%;
                  stroke-width: 2px;
                  color: #cc0000;
                  fill: transparent;
                  stroke: currentColor;
                  position: relative;
                  height: 24px;
                  width: 24px;
                  padding: 8px;
                  box-sizing: content-box;
                  background-color: transparent;
                  transition: background-color 0.5s, fill 0.25s, stroke 0.25s;
                }

                svg.heart-icon {
                    margin-bottom: -4px;
                }

                button:focus {
                    outline: 0;
                }

                button:not(.active):hover {
                    animation: wiggle;
                    animation-duration: 0.75s;
                }

                .active {
                    color: #cc0000;
                    background-color: rgba(204,0,0,0.2);
                    fill: currentColor;
                    stroke: transparent;
                }

                .active svg.heart-icon {
                    transform: scale(1);
                    animation: iconPop;
                    animation-duration: 0.5s;
                }

                .active::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    border-radius: 50%;
                    box-shadow: 0 0 0 4px transparent;
                    transform: scale(1);
                    animation: ringPopOut;
                    animation-duration: 0.75s;
                }

                @keyframes ringPopOut {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                        box-shadow: 0 0 0 currentColor;
                    }

                    100% {
                        transform: scale(3);
                        opacity: 0;
                        box-shadow: 0 0 1px 1px transparent;
                    }
                }

                @keyframes iconPop {
                    0% {
                        transform: scale(0.75);
                    }

                    50% {
                        transform: scale(1.3);
                    }

                    100% {
                        transform: scale(1);
                    }
                }

                @keyframes wiggle {
                    0% {
                        transform: rotate(0deg);
                    }

                    33% {
                        transform: rotate(15deg);
                    }

                    67% {
                        transform: rotate(-15deg);
                    }

                    100$ {
                        transform: rotate(0deg);
                    }
                }
            `}</style>
           <svg className="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z"></path></svg>
        </button>
    )
}