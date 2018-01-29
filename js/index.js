$(document).ready(function() {
    
    
    //Get URL

    $('select').change(function() {
        $('select option:selected').each(function() {
            $(".news li").remove();
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
                
                //Change the header
                
                if(!$('header').hasClass("header-photos")){
                    $('header').addClass('header-photos');
                    $('.logo').addClass('logo-photos');
                 }
                
                var results = data.results;

                //Get news
                
                var count = 0;
                
                for(var index = 0; index < results.length; index++) {
                    var value = results[index];    

                    //Check images in the articles and append the news

                    if(value.multimedia.length > 0) {
                        var news = '';
                        news += '<li>';
                        news += '<a href="' + value.url + '" target="_blank">'
                        news += '<div class="news-cell" id="cell'+index+'">'
                        news += '<p class="news-text">' + value.abstract + '</p>'
                        news += '</div>'
                        news += '</a>'
                        news += '</li>';

                        $('.news').append(news);
                        
                        //Put a news image into the background of a news cell
                        
                        $('#cell'+index).css('background-image', 'url(' + value.multimedia[4].url + ')');
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