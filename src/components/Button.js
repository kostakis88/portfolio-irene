import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({label}) => {
    return (
        <div className="margin-zero margin-top-xsmall">
            <div className="button-group is-center">
                <Link to={'/works'} className="button is-secondary">{label}</Link>
            </div>
        </div>
    );
}

Button.PropTypes = {
      label: PropTypes.string.isRequired,
}

export default Button;