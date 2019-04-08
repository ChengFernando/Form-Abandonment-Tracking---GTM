<script async> 

  (function() { 

    var formSelector = 'form#accountCreationForm'; 

    var attribute = 'name'; 

    var history = []; 

    var i; 

     

    var checkSubmit = function() { 

      i = window.dataLayer.length - 1; 

      while (i > -1) { 

        if (window.dataLayer[i]['event'] === 'gtm.formSubmit') { 

          return true; 

        } 

        i--; 

      } 

    }; 

     

    window.addEventListener('beforeunload', function() { 

      if (history.length && !checkSubmit()) { 

        window.dataLayer.push({ 

          'event' : 'formAbandonment', 

          'eventCategory' : 'Form Interaction | Signup', 

          'eventAction' : 'Abandon', 

          'eventLabel' : history.join(' > ') 

        }); 

      } 

    }); 

     

    document.querySelector(formSelector).addEventListener('focus', function(e) { 

      var att = e['target'].getAttribute(attribute); 

      if (att == null || att == ''){ 

        att = 'id-' + e['target'].getAttribute('id'); 

      } 

      if (history.length < 1){ 

      window.dataLayer.push({ 

        'event' : 'formFirstInteractionTimestamp', 

        'eventCategory' : 'Form Interaction | Signup', 

        'eventAction' : 'First Interaction', 

          'eventLabel' : att 

      }); 

      } 

      history.push(att); 

    }, true);    

     

  })(); 

</script> 