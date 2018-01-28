$(document).ready(function() {
    
    
    //Get URL

    $('select').change(function() {
        $('select option:selected').each(function() {
            var url = 'https://api.nytimes.com/svc/topstories/v2/';
            url += $('option:selected').val() + '.json';
            url += '?' + $.param({
                'api-key': 'fea6cad9ad654cff86b0dee6974b6832'
            });
            
            //Add ajax 

            $.ajax({
                url: url,
                method: 'GET',
            })
            
            .done(function(data) {
                var results = data.results;

                //Get news
                
                var count = 0;
                
                for(var index = 0; index < results.length; index++) {
                    var value = results[index];    

                    //Check images in the articles

                    if(value.multimedia.length > 0) {
                        var news = '';
                        news += '<li>';
                        news += '<div class="news-cell">';
                        news += '<a href="' + value.url + '" target="_blank">';
                        news += '<img src="' + value.multimedia[0].url + '"/>';
                        news += '</a>'
                        news += '<p class="news-text">' + value.abstract + '</p>'
                        news += '</li>';

                        $('.news').append(news);
                        count = count + 1;

                        //Get only 12 news

                        if(count === 12) {
                            break;
                        }

                    }
                }
            })
            
            //Add error message

            .fail(function() {
                $('.news').append('<li>' + 'Sorry! There was a problem, please try again.' + '</li>');
            });
        });
        
    })



});