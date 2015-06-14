   switchCat = function( src, nodeId ){
      
      var nodeRight = $( "#d_" + nodeId ).css( 'right' );
      var imageBox = $( '.imagesBox' );
      var d_active = $( '.description.active' );
      var b_active = $( '.button.active' );
      var descriptions = $( '.description' );
      var buttons = $( '.button' );
      var pictures = $( '.pictureFrame' );
      var d_current = $( '#d_' + nodeId );
      var b_current = $( '#b_' + nodeId );
      var p_current = $( '#p_' + nodeId );
      
      if(  $( window ).width() <= 550 )
      {
         if ( b_current.attr( 'href' ) ) {
            document.location.href=b_current.attr( 'href' );
         }
      }
      else if ( $( window ).width() <= 1170 ) {
         var faderStep = '10px';
         var buttonTop = 10;
      }
      else
      {
         var faderStep = '14.4%';
         var buttonTop = 128;
      }
      
      //imageBox.css({ 'background-image':'url( '+ src +' )' });
      pictures.addClass( 'transparent' ).css({ "z-index":"1" });
      p_current.removeClass( 'transparent' ).css({ "z-index":"2" }).animate({"opacity":"1"}, 600,function(){
         
         $( ".transparent" ).css({ "opacity":"0" });
      });
      
      if ( d_active.length > 0 ) {
         
         d_active.animate({ "right":"-60.6%" }, 300, function(){
            
            descriptions.removeClass( 'active' );
            d_current.addClass( 'active' ).animate({ "right":faderStep }, 600, 'easeOutBack' );
         });
      }
      else
      {
         d_current.addClass( 'active' ).animate({ "right":faderStep }, 600, 'easeOutBack' );
      }
      
      if ( b_active.length > 0 ) {
         
         b_active.animate({ "right":"-148px" }, 150, function(){
            
            buttons.removeClass( 'active' );
            b_current.css({ "top": ( d_current.innerHeight() + buttonTop ) + "px" });
            b_current.addClass( 'active' ).animate({ "right":faderStep }, 850, 'easeOutBack' );
         });
      }
      else
      {
         console.log( d_current.find( '.descriptionInner' ).outerHeight() );
         console.log( d_current.find( '.descriptionInner' ).innerHeight() );
         console.log( d_current.find( '.descriptionInner' ).height() );
         b_current.css({ "top": ( d_current.innerHeight() + buttonTop ) + "px" });
         b_current.addClass( 'active' ).animate({ "right":faderStep }, 850, 'easeOutBack');
      }
   }
   
   $( document ).ready( function(){
      
      if(  $( window ).width() > 550 )
      {
         $( '.hpSideCat:first' ).trigger( 'click' );
      }
      
   });