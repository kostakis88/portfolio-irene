import React from "react";
import PropTypes from "prop-types";

const Feature = ({ iconSrc, iconAlt, title, description, className }) => (
    <div className={`feature ${className}`}>
        <div className={"feature-icon"}>
            <img src={iconSrc} alt={iconAlt} loading="lazy" />
        </div>
        <h3 className="h3 margin">{title}</h3>
        <p className="text">{description}</p>
    </div>
);

Feature.propTypes = {
    iconSrc: PropTypes.string.isRequired,
    iconAlt: PropTypes.string,
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

Feature.defaultProps = {
    iconAlt: "",
};

export default Feature;
