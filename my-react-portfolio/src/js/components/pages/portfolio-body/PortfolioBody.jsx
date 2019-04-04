import React from 'react';
import ReactDOM from 'react-dom';

import PortfolioTile from './portfolio-tile/PortfolioTile';
import PortfolioItems from './portfolio-items/PortfolioItems';

import Footer from '../../Footer';

var $ = require('jquery');

var catTiles = null;

const page = $('html, body');

let bannersImageSources = [
    'images/portfolio/banners/cbu1.jpg',
    'images/portfolio/banners/cbu2.jpg',
    'images/portfolio/banners/cbu3.jpg',
    'images/portfolio/banners/cbu4.jpg',
    'images/portfolio/banners/longo1.jpg',
    'images/portfolio/banners/longo2.jpg',
    'images/portfolio/banners/longo3.jpg',
    'images/portfolio/banners/longo4.jpg',
    'images/portfolio/banners/longo5.jpg',
    'images/portfolio/banners/longo6.jpg',
    'images/portfolio/banners/longo7.jpg',
    'images/portfolio/banners/tvt1.jpg',
    'images/portfolio/banners/tvt2.jpg',
    'images/portfolio/banners/tvt3.jpg',
    'images/portfolio/banners/tvt4.jpg'
];

let billboardsImageSources = [
    'images/portfolio/billboards/bb1.jpg',
    'images/portfolio/billboards/bb2.jpg',
    'images/portfolio/billboards/bb3.jpg',
    'images/portfolio/billboards/bb4.jpg',
    'images/portfolio/billboards/bb5.jpg',
    'images/portfolio/billboards/bb6.jpg',
    'images/portfolio/billboards/cbu1.jpg',
    'images/portfolio/billboards/cbu2.jpg',
    'images/portfolio/billboards/cbu3.jpg'
];

let cartoonsImageSources = [
    'images/portfolio/drawings/cartoons/beast-sketch.jpg',
    'images/portfolio/drawings/cartoons/kuzco-sketch.jpg',
    'images/portfolio/drawings/cartoons/mufasa-sketch.jpg',
    'images/portfolio/drawings/cartoons/mushu-color.jpg',
    'images/portfolio/drawings/cartoons/mushu-sketch.jpg'
];

let lifeImageSources = [
    'images/portfolio/drawings/life-drawings/anatomy1.jpg',
    'images/portfolio/drawings/life-drawings/anatomy2.jpg',
    'images/portfolio/drawings/life-drawings/anatomy3.jpg',
    'images/portfolio/drawings/life-drawings/animals.jpg',
    'images/portfolio/drawings/life-drawings/models1.jpg',
    'images/portfolio/drawings/life-drawings/models2.jpg',
    'images/portfolio/drawings/life-drawings/models3.jpg',
    'images/portfolio/drawings/life-drawings/models4.jpg',
    'images/portfolio/drawings/life-drawings/models5.jpg',
    'images/portfolio/drawings/life-drawings/models6.jpg',
    'images/portfolio/drawings/life-drawings/zorro.jpg'
];

let portraitsImageSources = [
    'images/portfolio/drawings/portraits/audrey-hepburn.jpg',
    'images/portfolio/drawings/portraits/christian-bale.jpg',
    'images/portfolio/drawings/portraits/joker.jpg',
    'images/portfolio/drawings/portraits/model-forward.jpg',
    'images/portfolio/drawings/portraits/model-side.jpg',
    'images/portfolio/drawings/portraits/model-side2.jpg',
    'images/portfolio/drawings/portraits/monkey.jpg',
    'images/portfolio/drawings/portraits/zorro.jpg'
];

let eblastsImageSources = [
    'images/portfolio/eblasts/ims1.jpg',
    'images/portfolio/eblasts/ims2.jpg',
    'images/portfolio/eblasts/ims3.jpg',
    'images/portfolio/eblasts/ims4.jpg',
    'images/portfolio/eblasts/mst1.jpg',
    'images/portfolio/eblasts/mst2.jpg',
    'images/portfolio/eblasts/pj1.jpg',
    'images/portfolio/eblasts/pj2-mobile.jpg',
    'images/portfolio/eblasts/vc1.jpg'
];

let flyersImageSources = [
    'images/portfolio/flyers/cbu1-1.jpg',
    'images/portfolio/flyers/cbu2.jpg',
    'images/portfolio/flyers/cbu3.jpg',
    'images/portfolio/flyers/fc1.jpg',
    'images/portfolio/flyers/fc2.jpg',
    'images/portfolio/flyers/sm1.jpg'
];

let jsImageSources = [
    'images/portfolio/javascript/angular-weather.jpg',
    'images/portfolio/javascript/brain.jpg',
    'images/portfolio/javascript/corben.jpg',
    'images/portfolio/javascript/cycles.jpg',
    'images/portfolio/javascript/drunk-ball.jpg',
    'images/portfolio/javascript/gallery.jpg',
    'images/portfolio/javascript/globe.jpg',
    'images/portfolio/javascript/number-cube.jpg',
    'images/portfolio/javascript/onepage-slider.jpg',
    'images/portfolio/javascript/planet.jpg',
    'images/portfolio/javascript/transform.jpg'
];

let jsImageLinks = [
    'http://bennettcodes.com/sites/full/angular-test/weather',
    'http://bennettcodes.com/dev/cursor-move-events/',
    'http://bennettcodes.com/sites/full/corben-optometry/',
    'http://bennettcodes.com/sites/full/earth-parallax/',
    'http://bennettcodes.com/sites/full/drunk-ball/',
    'http://bennettcodes.com/dev/gallery-test/',
    'http://bennettcodes.com/sites/full/bc2/',
    'http://bennettcodes.com/dev/velocity/transform-test/',
    'http://bennettcodes.com/sites/full/onepage-performance-test/',
    'http://bennettcodes.com/dev/velocity/planet/',
    'http://bennettcodes.com/dev/css-transform-test/'
];

let sitesImageSources = [
    'images/portfolio/websites/aos.jpg',
    'images/portfolio/websites/apmg.jpg',
    'images/portfolio/websites/bp.jpg',
    'images/portfolio/websites/bp2.jpg',
    'images/portfolio/websites/ce.jpg',
    'images/portfolio/websites/crp.jpg',
    'images/portfolio/websites/fc.jpg',
    'images/portfolio/websites/fer.jpg',
    'images/portfolio/websites/gp.jpg',
    'images/portfolio/websites/icdc.jpg',
    'images/portfolio/websites/ifa2.jpg',
    'images/portfolio/websites/kb.jpg',
    'images/portfolio/websites/p.jpg',
    'images/portfolio/websites/pj.jpg',
    'images/portfolio/websites/poc.jpg',
    'images/portfolio/websites/thp.jpg'
];

let sitesImageLinks = [
    'http://bennettcodes.com/sites/full/ace-of-spades/',
    '#',
    'http://bennettplays.com',
    'http://bennettplays.com',
    'http://infocusadv.com/comet-live/',
    'http://cleanroomsplus.com/',
    'http://infocusadv.com/fazio15',
    'http://bennettcodes.com/sites/landing/fer-vegas-09-15/',
    'http://bennettcodes.com/sites/landing/greenpros-facebook-12-15/',
    'http://bennettcodes.com/sites/landing/icdc-national-11-15/',
    'http://bennettcodes.com/sites/full/ifa-dec-15/',
    'http://kestrelbiologic.com/',
    '#',
    'http://polachecks.com/',
    'http://infocusadv.com/pedes_live2/',
    'http://twohandspro.com/'
];

const whiteImageSource = 'images/portfolio/white-tile.jpg';

const PortfolioBody = React.createClass({
    getInitialState: function() {
        return {
            bannersTileImageSrc: "url(images/portfolio/banners-tile.jpg)",
            billboardsTileImageSrc: "url(images/portfolio/billboards-tile.jpg)",
            cartoonsImageSrc: "url(images/portfolio/cartoons-tile.jpg)",
            lifeTileImageSrc: "url(images/portfolio/life-tile.jpg)",
            portraitsTileImageSrc: "url(images/portfolio/portraits-tile.jpg)",
            eblastsTileImageSrc: "url(images/portfolio/eblasts-tile.jpg)",
            flyersTileImageSrc: "url(images/portfolio/flyers-tile.jpg)",
            jsTileImageSrc: "url(images/portfolio/js-tile.jpg)",
            sitesTileImageSrc: "url(images/portfolio/sites-tile.jpg)",
            currentCat: '',
            catActive: false,
            catTiles: null
        }
    },
   componentDidMount: function() {
    const portfolioTile = $('.portfolio-tile');
    const pageBody = $('.page-body');
       
    TweenMax.set(pageBody, {
       perspective: 800,
        perspectiveOrigin: 'center',
        transformStyle: '2d'
    });
       
    TweenMax.staggerFrom(portfolioTile, 1, {
        y: 50,
        opacity: 0,
        ease: Expo.easeOut,
        delay: 0.1
    }, 0.05);  
   },
    checkMount: function() {
      console.log(this.refs.pageBody.isMounted);  
    },
    tileOver: function(e) {
        thisTile = e.target;
        console.log(thisTile);
        TweenMax.to(thisTile, 0.5, {
            opacity: 0.5
        }, 0);
    },
    tileOut: function(e) {
        thisTile = e.target;
        console.log(thisTile);
        TweenMax.to(thisTile, 0.5, {
            opacity: 1
        }, 0);
    },
    updateCat: function(cat) {
        console.log(catTiles.length);
        const portfolioItems = $('.portfolio-items');
        const portfolioItemTile = $('.portfolio-item-tile');
        this.setState({currentCat: cat, catActive: true});
        TweenMax.to(portfolioItems, 0.5, {
            opacity: 1,
            onComplete: function() {
                TweenMax.set(portfolioItems, {
                   pointerEvents: 'auto' 
                });
            }
        }, 0);
        
        TweenMax.to($('.footer'), 0.5, {
            opacity: 0
        }, 0);
       
        TweenMax.staggerFrom(portfolioItemTile, 1, {
            y: 50,
            opacity: 0,
            ease: Expo.easeOut,
            delay: 0.6
        }, 0.05);  
    },
    hideCat: function() {
        if (($('.portfolio-item-tile').hasClass('sites-tile')) || ($('.portfolio-item-tile').hasClass('js-tile'))) {
            $('.portfolio-item-tile').unwrap();
        }
        TweenMax.to(page, 0.5, {
            scrollTop: 0,
            ease: Circ.easeOut
        }, 0);
        const portfolioItems = $('.portfolio-items');
        this.setState({currentCat: '', catActive: false});
        TweenMax.to(portfolioItems, 0.5, {
            opacity: 0,
            onComplete: function() {
                TweenMax.set(portfolioItems, {
                   pointerEvents: 'none' 
                });
            }
        }, 0);
        
        TweenMax.to($('.footer'), 0.5, {
            opacity: 1,
            onComplete: function() {
                TweenMax.set(catTiles, {
                  display: 'none'  
                });
            }
        }, 0);
    },
    itemTileChange: function(e) {
    TweenMax.set(catTiles, {
      display: 'auto'  
    });
    TweenMax.to(page, 0.5, {
        scrollTop: 0,
        ease: Circ.easeOut
    }, 0);
    console.log('It returned the following: ' + e);
        switch(true) {
            case e === 'banners':
                for (var i = 0; i < catTiles.length; i++) {
                    catTiles[i].className = 'portfolio-item-tile banners-tile';
                    if (i < bannersImageSources.length) {
                        catTiles[i].src = bannersImageSources[i];
                        TweenMax.set(catTiles[i], {
                           display: 'inline' 
                        });
                    } else {
                        TweenMax.set(catTiles[i], {
                          display: 'none'  
                        });
                    }
                }
            break;
            case e === 'billboards':
                for (var i = 0; i < catTiles.length; i++) {
                    catTiles[i].className = 'portfolio-item-tile billboards-tile';
                    if (i < billboardsImageSources.length) {
                        catTiles[i].src = billboardsImageSources[i];
                        TweenMax.set(catTiles[i], {
                           display: 'inline' 
                        });
                    } else {
                        TweenMax.set(catTiles[i], {
                          display: 'none'  
                        });
                    }
                }
            break;
            case e === 'cartoons':
                for (var i = 0; i < catTiles.length; i++) {
                    catTiles[i].className = 'portfolio-item-tile cartoons-tile';
                    if (i < cartoonsImageSources.length) {
                        catTiles[i].src = cartoonsImageSources[i];
                        TweenMax.set(catTiles[i], {
                           display: 'inline' 
                        });
                    } else {
                        TweenMax.set(catTiles[i], {
                          display: 'none'  
                        });
                    }
                }
            break;
            case e === 'life':
                for (var i = 0; i < catTiles.length; i++) {
                    catTiles[i].className = 'portfolio-item-tile life-tile';
                    if (i < lifeImageSources.length) {
                        catTiles[i].src = lifeImageSources[i];
                        TweenMax.set(catTiles[i], {
                           display: 'inline' 
                        });
                    } else {
                        TweenMax.set(catTiles[i], {
                          display: 'none'  
                        });
                    }
                }
            break;
            case e === 'portraits':
                for (var i = 0; i < catTiles.length; i++) {
                    catTiles[i].className = 'portfolio-item-tile portraits-tile';
                    if (i < portraitsImageSources.length) {
                        catTiles[i].src = portraitsImageSources[i];
                        TweenMax.set(catTiles[i], {
                           display: 'inline' 
                        });
                    } else {
                        TweenMax.set(catTiles[i], {
                          display: 'none'  
                        });
                    }
                }
            break;
            case e === 'eblasts':
                for (var i = 0; i < catTiles.length; i++) {
                    catTiles[i].className = 'portfolio-item-tile eblasts-tile';
                    if (i < eblastsImageSources.length) {
                        catTiles[i].src = eblastsImageSources[i];
                        TweenMax.set(catTiles[i], {
                           display: 'inline' 
                        });
                    } else {
                        TweenMax.set(catTiles[i], {
                          display: 'none'  
                        });
                    }
                }
            break;
            case e === 'flyers':
                for (var i = 0; i < catTiles.length; i++) {
                    catTiles[i].className = 'portfolio-item-tile flyers-tile';
                    if (i < flyersImageSources.length) {
                        catTiles[i].src = flyersImageSources[i];
                        TweenMax.set(catTiles[i], {
                           display: 'inline' 
                        });
                    } else {
                        TweenMax.set(catTiles[i], {
                          display: 'none'  
                        });
                    }
                }
            break;
            case e === 'js':
                for (var i = 0; i < catTiles.length; i++) {
                    catTiles[i].className = 'portfolio-item-tile js-tile';
                    if (i < jsImageSources.length) {
                        catTiles[i].src = jsImageSources[i];
                        TweenMax.set(catTiles[i], {
                           display: 'inline' 
                        });
                    } else {
                        TweenMax.set(catTiles[i], {
                          display: 'none'  
                        });
                    }
                    $('.portfolio-item-tile').eq(i).wrap(`<a href=${jsImageLinks[i]} target="_blank"></a>`);
                }
            break;
            case e === 'sites':
                for (var i = 0; i < catTiles.length; i++) {
                    catTiles[i].className = 'portfolio-item-tile sites-tile';
                    var div = document.createElement("div");
                    div.id = "wrap";
                    if (i < sitesImageSources.length) {
                        catTiles[i].src = sitesImageSources[i];
                        TweenMax.set(catTiles[i], {
                           display: 'inline' 
                        });
                    } else {
                        TweenMax.set(catTiles[i], {
                          display: 'none'  
                        });
                    }
                    $('.portfolio-item-tile').eq(i).wrap(`<a href=${sitesImageLinks[i]} target="_blank"></a>`);
                }
            break;
            default:
                console.log('none!');
            break;
        }
    },
    getCatTiles: function(e) {
        catTiles = e;
    },
   render: function() {
       return (
           <div className="page-body-container">
            
                <div className="page-body">
                    <PortfolioItems getCatTiles={this.getCatTiles} active={this.state.catActive} hideCat={this.hideCat} />
                    <PortfolioTile itemTileChange={this.itemTileChange} currentCat={this.state.currentCat} catActive={this.state.catActive} cat="banners" catChange={this.updateCat} src={this.state.bannersTileImageSrc} />
                    <PortfolioTile itemTileChange={this.itemTileChange} currentCat={this.state.currentCat} catActive={this.state.catActive} cat="billboards" catChange={this.updateCat} src={this.state.billboardsTileImageSrc} />
                    <PortfolioTile itemTileChange={this.itemTileChange} currentCat={this.state.currentCat} catActive={this.state.catActive} cat="cartoons" catChange={this.updateCat} src={this.state.cartoonsImageSrc} />
                    <PortfolioTile itemTileChange={this.itemTileChange} currentCat={this.state.currentCat} catActive={this.state.catActive} cat="life" catChange={this.updateCat} src={this.state.lifeTileImageSrc} />
                    <PortfolioTile itemTileChange={this.itemTileChange} currentCat={this.state.currentCat} catActive={this.state.catActive} cat="portraits" catChange={this.updateCat} src={this.state.portraitsTileImageSrc} />
                    <PortfolioTile itemTileChange={this.itemTileChange} currentCat={this.state.currentCat} catActive={this.state.catActive} cat="eblasts" catChange={this.updateCat} src={this.state.eblastsTileImageSrc} />
                    <PortfolioTile itemTileChange={this.itemTileChange} currentCat={this.state.currentCat} catActive={this.state.catActive} cat="flyers" catChange={this.updateCat} src={this.state.flyersTileImageSrc} />
                    <PortfolioTile itemTileChange={this.itemTileChange} currentCat={this.state.currentCat} catActive={this.state.catActive} cat="js" catChange={this.updateCat} src={this.state.jsTileImageSrc} />
                    <PortfolioTile itemTileChange={this.itemTileChange} currentCat={this.state.currentCat} catActive={this.state.catActive} cat="sites" catChange={this.updateCat} src={this.state.sitesTileImageSrc} />
                </div>
               
           </div>
       );
   } 
});

export default PortfolioBody;