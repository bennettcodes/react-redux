import React from 'react';

var $ = require('jquery');

const ContactBody = React.createClass({
   componentDidMount: function() {
    const paragraphs = $('p');
    TweenMax.staggerFrom(paragraphs, 1, {
        y: 50,
        opacity: 0,
        ease: Expo.easeOut,
        delay: 0.1
    }, 0.05);  
   },
    checkMount: function() {
      console.log(this.refs.pageBody.isMounted);  
    },
   render: function() {
       return (
           <div className="page-body-container">
            
           <p className="page-body"><br/><br/><span className="page-body-header">Let's talk about code</span><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper leo at bibendum efficitur. Etiam purus ligula, maximus eu nisl at, fermentum pellentesque tortor. Sed quis lectus vel mi ultrices dictum. Ut cursus est ut vulputate venenatis. Vivamus lacinia erat eget dignissim molestie. Donec ornare sit amet elit eget blandit. Nullam tincidunt ultrices malesuada. Fusce fringilla dolor et libero faucibus fringilla quis id enim. Curabitur a tempor eros. Curabitur sed nisl ultrices, convallis mauris eu, euismod orci. Fusce ultrices magna eget neque auctor, sodales sodales neque imperdiet. Vestibulum fringilla efficitur interdum. Ut malesuada condimentum libero id luctus.</p>
               
           <p className="page-body"><br/>Duis faucibus, diam ac placerat condimentum, dui ipsum suscipit mauris, eu viverra ligula mi eu nunc. In dapibus augue a lobortis venenatis. Pellentesque et iaculis arcu. Nulla id nisi volutpat, hendrerit dui id, malesuada orci. Cras faucibus libero justo, vel efficitur mi pellentesque sit amet. Aenean dui magna, auctor sed volutpat vitae, posuere non sem. Ut sit amet tortor in tellus hendrerit efficitur. Praesent ultricies, nulla at varius vehicula, turpis ligula commodo odio, sed gravida ante ante non nibh. Curabitur massa felis, pretium sed erat quis, varius porta elit. Praesent tincidunt urna vitae odio dignissim congue. Cras semper hendrerit metus non vehicula. Aenean scelerisque bibendum neque aliquet lacinia. Praesent a dui sed nisl fermentum tempus.</p>
               
           <p className="page-body"><br/>Ut molestie dignissim vulputate. Nulla euismod est a volutpat mollis. Duis vitae elit eleifend, lobortis orci eu, dapibus nunc. Suspendisse pellentesque nisl et fringilla suscipit. Nullam porta ante sapien, sit amet rutrum nisl finibus id. Morbi varius magna eget lacus mattis, nec mollis ante aliquam. Pellentesque porta molestie consequat. Aenean leo urna, aliquam non iaculis sed, bibendum id nisi. Pellentesque sit amet condimentum ipsum. Integer sit amet dignissim felis. Maecenas lacus risus, convallis vel tellus id, eleifend hendrerit erat. Aliquam nec placerat lectus. Maecenas bibendum nulla non diam tristique, et ultrices nisl tincidunt.</p>
               
           <p className="page-body"><br/>Fusce eros nisl, euismod nec consequat eget, consectetur at augue. Nullam at ex ullamcorper, viverra lacus vitae, mattis nisl. Fusce sed tellus neque. Etiam justo metus, varius fermentum metus et, ultrices posuere orci. Sed a magna consectetur, fermentum elit in, pellentesque justo. Donec ultrices pellentesque nisi a venenatis. Pellentesque tincidunt hendrerit elit sit amet vehicula. Sed turpis leo, fringilla at dui id, aliquam facilisis erat. Curabitur fringilla pulvinar tortor, vitae placerat sem efficitur at. Donec vel mollis odio. Duis hendrerit sollicitudin tortor, non vehicula ligula tempor ac. Etiam id vulputate ex, vitae dignissim urna. Vestibulum lacus elit, blandit vel auctor sed, condimentum sed dui.</p>
               
           <p className="page-body"><br/>Maecenas feugiat, velit sed cursus egestas, metus felis ornare nulla, eu feugiat eros ligula faucibus ligula. Nullam nisl ipsum, consectetur sed sapien sed, dictum tincidunt nunc. In luctus malesuada posuere. Ut sit amet ipsum nisi. Mauris non sem posuere dui volutpat eleifend. Aliquam nisl ex, vestibulum ut commodo eget, pulvinar ultricies dolor. Maecenas nec augue maximus, hendrerit mauris quis, laoreet massa. Nulla et lectus in erat efficitur imperdiet.</p>
               
           </div>
       );
   } 
});

export default ContactBody;