import React from 'react';

const IconButton = ({to}) => {
    return (
        <div className="portfolio-button-wrapper">
            <a className="button is-link is-icon inline-block" href={to}>
                <div>View work</div>
                <div className="icon">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 3L11 8L6 13"
                            stroke="CurrentColor"
                            strokeWidth="1.5"
                        ></path>
                    </svg>
                </div>
            </a>
        </div>
    );
}

export default IconButton;