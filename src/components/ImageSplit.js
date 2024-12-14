import React from 'react';

const ImageSplit = ({ src, srcSet, sizes, alt, className }) => {
    return (
        <div className="hero-split">
            <img src={src} srcSet={srcSet} sizes={sizes} alt={alt} className={className} loading="eager" />
        </div>
    );
};

export default ImageSplit;
