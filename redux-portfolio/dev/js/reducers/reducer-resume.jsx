import React from 'react';

/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

var resumeEmployment = {
    occupations: [
        {
            title: 'Senior Web Developer',
            company: 'in Focus Advertising: Advertising Agency',
            duration: 'October 2013 - March 2016',
            description: 'Take full command of all web-based projects relating to both the front-end and back-end as requested by a diverse catalogue of clients representing a colorful spectrum of industries. Routinely deploy everything from landing pages to full-blown E-commerce solutions complete with responsive design and performance parity across all major browsers and OS’s.'
        },
        {
            title: 'Post Production Artist',
            company: 'Graphic Orb: Post-Production Company',
            duration: 'April 2013 - July 2013',
            description: 'Handle a wide range of assets for film, including resizing thumbnails for Netflix, preparing key art and one-sheets for print, and coding HTML emails with tables.'
        },
        {
            title: 'Lead Artist/IT Specialist',
            company: 'Winnol.com: Internet Start-up',
            duration: 'October 2011 - March 2013',
            description: 'In charge of site’s user interface and experience. Design materials for mediums spanning both web and print. Help with PC and Mac-related issues.'
        }
    ]
}

var resumeSkillset = {
    skillset: [
        {
            set: [
                'React',
                'Redux',
                'Angular',
                'jQuery/AJAX',
                'HTML5/CSS3',
                'JavaScript',
                'Greensock JS'
            ],
        },
        {
            set: [
                'Node JS',
                'Express',
                'NPM',
                'Webpack',
                'PHP',
                'MongoDB',
                'MySQL'
            ],
        },
        {
            set: [
                'Photoshop',
                'Illustrator',
                'InDesign',
                'After Effects',
                'Premiere Pro',
                'Flash'
            ]
        }
    ]
}

var resume = {
    ...resumeEmployment,
    ...resumeSkillset,
    skillsetBody: () => {
        return (
            <div className="resume">
                <div className="section-header">Resume</div>
                <div className="employment">{
                                resumeEmployment.occupations.map(function(occupation, i) {
                                    return (
                                        <div className="occupation stagger-item" key={i}>
                                            <h2 className="occupation-title">{occupation.title}</h2>
                                            <h3 className="occupation-company">{occupation.company}</h3>
                                            <h4 className="occupation-duration">{occupation.duration}</h4>
                                            <p className="occupation-description">{occupation.description}</p>
                                        </div>
                                    );
                                })
                            }
                </div>
                <div className="sets">
                        <div className="set stagger-item">
                        <h1 className="set-title">Front End</h1>
                        <div className="set-body">{
                                resumeSkillset.skillset[0].set.map(function(item, i) {
                                    return (
                                        <p className="set-item" key={i}>{item}</p>
                                    );
                                })}
                        </div>
                    </div>
                        <div className="set stagger-item">
                        <h1 className="set-title">Back End</h1>
                        <div className="set-body">{
                                resumeSkillset.skillset[1].set.map(function(item, i) {
                                    return (
                                        <p className="set-item" key={i}>{item}</p>
                                    );
                                })}
                        </div>
                    </div>
                        <div className="set stagger-item">
                        <h1 className="set-title">Design</h1>
                        <div className="set-body">{
                                resumeSkillset.skillset[2].set.map(function(item, i) {
                                    return (
                                        <p className="set-item" key={i}>{item}</p>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default function (state = resume, action) {
    switch (action.type) {
        case 'GIVE_RESUME':
            return resume.name;
            break;
    }
    return state;
}
