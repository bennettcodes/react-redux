import React from 'react';

var $ = require('jquery');

const HomeBody = React.createClass({
   componentDidMount: function() {
    const paragraphs = $('p');
    TweenMax.staggerFrom(paragraphs, 1, {
        y: 50,
        opacity: 0,
        ease: Expo.easeOut,
        delay: 0.1
    }, 0.1);  
   },
   render: function() {
       return (
           <div className="page-body-container">
           <p className="page-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum dignissim eros, ac vulputate elit bibendum nec. Etiam ut commodo risus, faucibus iaculis erat. Nunc nec tristique leo. Nunc tempus neque pretium posuere gravida. In interdum id metus sed efficitur. Proin sem velit, aliquam a justo a, cursus volutpat lorem. Nulla vel tellus nulla. Fusce ut risus semper neque tempor laoreet. Vestibulum ac lectus leo. Sed pellentesque consectetur scelerisque.</p><br/>

<p className="page-body">In at ligula sit amet metus pharetra mattis. Proin vel cursus justo. Etiam ultricies arcu diam, quis sollicitudin arcu mattis sit amet. Donec in ullamcorper sem. Vestibulum pharetra tincidunt ultrices. Integer ac odio rhoncus, elementum lorem et, volutpat arcu. Nulla dignissim faucibus tincidunt. Etiam vestibulum at dolor vitae placerat. Nullam ut sem id magna eleifend efficitur. Ut erat turpis, auctor in leo vitae, rhoncus porttitor turpis. Quisque viverra commodo quam sit amet varius. Mauris vel turpis pellentesque, fringilla nunc quis, placerat nibh. Pellentesque lacinia bibendum augue, sed elementum velit venenatis sit amet. Cras pretium eu sapien non facilisis.</p><br/>

<p className="page-body">Maecenas nisl augue, ultrices at ex quis, maximus blandit eros. Nullam ultricies libero ut libero ultricies, vitae accumsan eros lobortis. Etiam facilisis nec odio sit amet accumsan. Praesent varius finibus mauris, a suscipit tellus dapibus et. Etiam a finibus libero, id fermentum odio. Sed lobortis urna at ante ullamcorper, in suscipit mauris efficitur. Phasellus efficitur neque arcu, sit amet maximus nulla suscipit eu. Nunc ac dictum neque. Ut eleifend velit et nisl aliquam, quis volutpat dolor finibus. Duis scelerisque lectus nec elementum feugiat. Curabitur egestas turpis eu lacinia convallis. Nam ut neque enim. Nam id placerat sapien.</p>
           </div>
       );
   } 
});

export default HomeBody;