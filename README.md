# Project 2: Instanews App

This is a single-page website that allows a user to filter 6 top news story categories via the New York Times API. 

![alt text](/images/gif-for-readme/project-2-initial-gif.gif "Gif of the project")

I used a mobile-first approach and then optimized the website for 2 more screen sizes: 600px (a tablet version) and 1000px (a desktop version).

## Key points of HTML (things used and personal learnings):

* Used html mark-up to structure the webpage (e.g. tags section, div, nav, header, footer, etc.)
* Used a `<select>` field

## Key points of CSS:

* Used Sass as a preprocessor, minified CSS
* Used Gulp to compile Sass and check errors
* Used CSS3 transition while resizing the header area
* Used CSS3 transitions to slowly show and hide the article abstract on hover

![alt text](/images/gif-for-readme/project-2-gif-hover.gif "Gif of the project")

## Key points of JS:

* Used Ajax to get data from the NYT Top Stories
* Displayed only 12 news with photos in the grid
* Incorporated a loading gif to show up on the website while a user is transitioned between two states
