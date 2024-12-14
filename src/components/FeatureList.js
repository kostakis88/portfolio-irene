import React from 'react';

const FeaturesList = () => {
    const features = [
        {
            imgSrc:
                'https://cdn.prod.website-files.com/65789851928ac72747df11b7/6578a43a227178ececb21910_Epic%20Games%20Logo.png',
            imgSrcSet:
                'https://cdn.prod.website-files.com/65789851928ac72747df11b7/6578a43a227178ececb21910_Epic%20Games%20Logo-p-500.png 500w, https://cdn.prod.website-files.com/65789851928ac72747df11b7/6578a43a227178ececb21910_Epic%20Games%20Logo-p-800.png 800w, https://cdn.prod.website-files.com/65789851928ac72747df11b7/6578a43a227178ececb21910_Epic%20Games%20Logo-p-1080.png 1080w, https://cdn.prod.website-files.com/65789851928ac72747df11b7/6578a43a227178ececb21910_Epic%20Games%20Logo.png 1255w',
            imgAlt: 'Epic Games Logo',
            description: (
                <>
                    <strong>Epic Games - Fortnite</strong>
                    <br />
                    From starting out as an intern to currently a UX Designer II
                </>
            ),
        },
        {
            imgSrc:
                'https://cdn.prod.website-files.com/65789851928ac72747df11b7/6696b8067e5e5503b8d1ba59_Insomniac-Games-Logo-Thumb-Square-1.jpg',
            imgSrcSet:
                'https://cdn.prod.website-files.com/65789851928ac72747df11b7/6696b8067e5e5503b8d1ba59_Insomniac-Games-Logo-Thumb-Square-1-p-500.jpg 500w, https://cdn.prod.website-files.com/65789851928ac72747df11b7/6696b8067e5e5503b8d1ba59_Insomniac-Games-Logo-Thumb-Square-1-p-800.jpg 800w, https://cdn.prod.website-files.com/65789851928ac72747df11b7/6696b8067e5e5503b8d1ba59_Insomniac-Games-Logo-Thumb-Square-1.jpg 1000w',
            imgAlt: 'Insomniac Games Logo',
            description: (
                <>
                    <strong>Insomniac Games</strong>
                    <br />
                    UX/UI Intern on Marvel's Spider-Man 2
                </>
            ),
        },
    ];

    return (
        <div className="features-list">
            <div className="container-2">
                <div className="features-wrapper-two">
                    <div className="features-left">
                        <h3>Studios I've had the pleasure of being apart of</h3>
                        <p className="features-paragraph">On a journey, that only goes up my friend 😊</p>
                    </div>
                    <ul role="list" className="features-right w-list-unstyled">
                        {features.map((feature, index) => (
                            <li key={index} className="features-block-two">
                                <img
                                    src={feature.imgSrc}
                                    srcSet={feature.imgSrcSet}
                                    alt={feature.imgAlt}
                                    className="features-image"
                                    loading="lazy"
                                />
                                <p>{feature.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FeaturesList;
