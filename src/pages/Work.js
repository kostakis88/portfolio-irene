import React from 'react';
import WorkItem from '../components/WorkItem';

const Work = () => {

    const workItems = [
        {
            id: 1,
            title: 'Crafting Immersive UI/UX for the Main Battle Screen - Firestone Idle RPG',
            description: 'Designing an Intuitive Fantasy Battle Screen for Idle RPG Adventures',
            tags: ['Full Time Role'],
        },
        {
            id: 2,
            title: 'Gem Store Menu - Firestone Idle RPG',
            description: 'Creating Engaging Interfaces to Boost Purchases and Drive Monetization',
            tags: ['Full Time Role'],
        },
        {
            id: 3,
            title: 'Promotional Design for Google Play – Firestone Idle RPG',
            description: 'Festive Flair: Captivating Banner Designs for Seasonal Promotions',
            tags: ['Full Time Role'],
        },
        {
            id: 4,
            title: 'Designing Seasonal Event Promotional Banners - Firestone Idle RPG',
            description: 'Crafting Eye-Catching App Store Visuals for Game Promotions',
            tags: ['Full Time Role'],
        }
    ];

    return (
        <div className="section-work">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="margin-zero margin-bottom-xxlarge">
                            <div className="max-width-large">
                                <div className="margin-zero margin-bottom-small">
                                    <h2>Work</h2>
                                </div>
                            </div>
                        </div>
                        <div className="work-component">
                            {workItems.map((item) => (
                                <WorkItem key={item.id} id={item.id} title={item.title} description={item.description} tags={item.tags} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;