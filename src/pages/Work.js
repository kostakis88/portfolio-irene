import React from 'react';
import WorkItem from '../components/WorkItem';

const Work = () => {

    const workItems = [
        {
            title: 'Crafting an Impactful Settings Menu',
            date: 'Analyzing best practices',
            tags: ['Personal Project'],
        },
        {
            title: 'Creating a more personal Life is Strange episode selection screen',
            date: 'Redesign concept for episode selection screen in Life is Strange.',
            tags: ['Personal Project'],
        },
        {
            title: 'Fortnite Battle Royale',
            date: 'Creating engaging user experiences for Fortnite Battle Royale at Epic Games',
            tags: ['Full Time Role'],
        },
        {
            title: 'Designing a Mode Selection Menu for a Spider-Verse Game',
            date: 'Menu design concept for a spider-verse game.',
            tags: ['Personal Project'],
        },
        {
            title: "Marvel's Spider-Man 2",
            date: "UI/UX Art Intern on Marvel's Spider-Man 2 at Insomniac Games",
            tags: ['Internship'],
        },
        {
            title: 'Designing with Accessibility - The Walking Dead Final Season',
            date: 'Analyzing design approaches presented throughout The Walking Dead Final Season',
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
                            {workItems.map((item, index) => (
                                <WorkItem key={index} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;