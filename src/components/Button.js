import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <div className="margin-zero margin-top-xsmall">
            <div className="button-group is-center">
                <Link to={'/works'} className="button is-secondary">View all</Link>
            </div>
        </div>
    );
}

export default Button;