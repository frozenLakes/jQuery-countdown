(function($) {

    $.fn.countdown=function(options) {
        
        //On définit nos paramètres par défaut

        var defauts = {

            "month": "Sep",
            "day": "01",
            "hour": "00:00:00",
            "year": "2020"

        };
        
        //On fusionne nos deux objets ! =D

        var parameters = $.extend({}, defauts, options);
        
        console.log(parameters.month + ' ' + parameters.day + ' ' + parameters.hour + ' ' + parameters.year);

        return this.each(function() {
            
            var count = function() { 

                var currentDate = new Date(),
                    EventDate = new Date(parameters.month + ' ' + parameters.day + ' ' + parameters.hour + ' ' + parameters.year),    
                    total_secondes = (EventDate - currentDate) / 1000; // Calcul différence entre dates

                formateNumber = function(n)
                {
                    return (n < 10 ? '0' : '') + n;
                };
                
                if (total_secondes > 0) {
            
                    var days = Math.floor(total_secondes / (60 * 60 * 24)),   
                        hours = Math.floor((total_secondes - (days * 60 * 60 * 24)) / (60 * 60)),    
                        minutes = Math.floor((total_secondes - ((days * 60 * 60 * 24 + hours * 60 * 60))) / 60),    
                        secondes = Math.floor(total_secondes - ((days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60)));
                
                } else if (total_secondes == 0 || total_secondes < 0) {

                    var days = '0',   
                        hours = '0',    
                        minutes = '0',    
                        secondes = '0',
                        msg = 'Offre terminé !!';            
                }

                $('#countdown').find('#days').html(formateNumber(days));
                $('#countdown').find('#hours').html(formateNumber(hours));
                $('#countdown').find('#minutes').html(formateNumber(minutes));
                $('#countdown').find('#secondes').html(formateNumber(secondes));
                $('#countdown').find('#count-msg').html(msg);
            }

            setInterval(count, 1000);

        });

    };

}(jQuery));
    
   