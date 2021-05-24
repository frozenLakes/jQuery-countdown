# jQuery-countdown
jQuery-countdown plugin easy to use.
It's an old puglin I made many years ago.
I just keep it here for the memory of what I done.

// Fire the plugin in JS file:

* Example :

    $('#countdown').countdown({
        
        "month":'Sep',
        "day": '15', 
        "hour": '00:00:00', 
        "year": '2015'
        
    });

// Just add a valid date and edit your html file. 

* Example :

        <div id='countdown'>
            <p>Il reste </p>
            <div id='days'></div>
            <p> jours</p>
            <div id='hours'></div>
            <p> heures</p>
            <div id='minutes'></div>
            <p> minutes et</p>
            <div id='secondes'></div>
            <p> secondes avant la fin de l'offre</p>
            <div id='count-msg'></div>          
        </div>


* Add Js File : 		

        <script src="../path/to/file/jQuery-countdown.js"></script>
