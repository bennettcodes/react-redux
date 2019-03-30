import React from 'react';

/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

var portfolioCategories = {
    categories: [
        {
            set: [
                'Banners',
                'Billboards',
                'Drawings: Cartoons',
                'Drawings: Life',
                'Drawings: Portraits',
                'Eblasts',
                'Flyers & Brochures',
                'JavaScript Tests',
                'Sites'
            ],
        }
    ]
}

var portfolio = {
    ...portfolioCategories,
    categoriesBody: () => {
        return (
            <div className="portfolio">
                <div className="section-header">Portfolio</div>
                <div className="categories-container">
                <div className="categories">{
                        portfolioCategories.categories[0].set.map(function(item, i) {
                            if (i % 2 === 0) {
                                return (
                                    <div className="category even-category stagger-item" key={i}>{item}</div>
                                );
                            } else {
                                return (
                                    <div className="category odd-category stagger-item" key={i}>{item}</div>
                                );
                            }
                        })}
                </div>
            </div>
            </div>
        );
    }
}


export default function (state = portfolio, action) {
    switch (action.type) {
        case 'GIVE_PORTFOLIO':
            
            break;
    }
    return state;
}
