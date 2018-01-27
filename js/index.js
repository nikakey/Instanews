$(document).ready(function() {
    
    
    
    $('select').change(function() {
        $('select option:selected').each(function() {
            var url = 'https://api.nytimes.com/svc/topstories/v2/';
            url += $('option:selected').val() + '.json';
            url += '?' + $.param({
                'api-key': 'fea6cad9ad654cff86b0dee6974b6832'
            });

            console.log(url);


            $.ajax({
                url: url,
                method: 'GET',
            })
            
            .done(function(data) {
                var results = data.results;
                console.log(results);

                $.each(results, function(key, value) { 
                    if(value.multimedia.length === 0) {
                        console.log('There is no image')
                        return true;
                    }
                    else {
                        console.log('There is an image');
                    }
                })
            //         var news = '';
            //         news += '<li>';
            //         news += '<img src="' + value. + '"/>';
            //         news += '<p>' + value. + '</p>';
            //         news += '</li>';
            
            //         $('.news').append(news);
            //     })
            })
            
            // .fail(function() {
            //     $('.news').append('<li>' + 'Sorry! There was a problem, please try again.' + '</li>');
            // });
        });
        
    })
    // .trigger( 'change' );



});