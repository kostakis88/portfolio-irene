import React from 'react';
import image from '../images/image.png'

const FeaturesList = () => {
    const features = [
        {
            imgSrc:
                image,
            imgSrcSet:
                image,
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
                image,
            imgSrcSet:
                image,
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
        <section className="features-list">
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
        </section>
    );
};

export default FeaturesList;
