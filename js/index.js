$(document).ready(function() {

    $('select').change(function() {
            
        //Clear populated data

        $('.news li').remove();
        
        //Move the footer to the bottom
        
        if($('footer').hasClass('footer-photos')){
            $('footer').removeClass('footer-photos');
        }

        //Change the header
            
        if(!$('header').hasClass('header-photos')){
            $('header').addClass('header-photos');
            $('.logo').addClass('logo-photos');
        }
        
        //Display loading gif

        $('.loader').css('display', 'block'); 

        //Get URL
        
        let url = 'https://api.nytimes.com/svc/topstories/v2/';
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
            
            let results = data.results;

            //Get news
            
            let count = 0;
            
            for(let index = 0; index < results.length; index++) {
                let value = results[index];    

                //Check images in the articles and append the news

                if(value.multimedia.length > 0) {
                    let news = '';
                    news += '<li>';
                    news += '<a href="' + value.url + '" target="_blank">'
                    news += '<div class="news-cell" id="cell'+index+'">'
                    news += '<p class="news-text">' + value.abstract + '</p>'
                    news += '</div>'
                    news += '</a>'
                    news += '</li>';

                    $('.news').append(news);

                    //Move footer to the bottom when data is populated

                    if(!$('footer').hasClass('footer-photos')){
                        $('footer').addClass('footer-photos');
                    }
                    
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
            $('.news').append(`<li>Sorry! There was a problem, please try again.</li>`);
        })

        //Hide loading gif

        .always(function() {
            $('.loader').hide('fast');
        });
        
    })



});