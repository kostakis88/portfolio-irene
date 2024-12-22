import React from 'react';
import WorkItem from '../components/WorkItem';

const Work = () => {

    const workItems = [
        {
            id: 1,
            title: 'Crafting an Impactful Settings Menu',
            description: 'Analyzing best practices',
            tags: ['Personal Project'],
        },
        {
            id: 2,
            title: 'Creating a more personal Life is Strange episode selection screen',
            description: 'Redesign concept for episode selection screen in Life is Strange.',
            tags: ['Personal Project'],
        },
        {
            id: 3,
            title: 'Fortnite Battle Royale',
            description: 'Creating engaging user experiences for Fortnite Battle Royale at Epic Games',
            tags: ['Full Time Role'],
        },
        {
            id: 4,
            title: 'Designing a Mode Selection Menu for a Spider-Verse Game',
            description: 'Menu design concept for a spider-verse game.',
            tags: ['Personal Project'],
        },
        {
            id: 5,
            title: "Marvel's Spider-Man 2",
            description: "UI/UX Art Intern on Marvel's Spider-Man 2 at Insomniac Games",
            tags: ['Internship'],
        },
        {
            id: 6,
            title: 'Designing with Accessibility - The Walking Dead Final Season',
            description: 'Analyzing design approaches presented throughout The Walking Dead Final Season',
            tags: ['Personal Project'],
        },
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