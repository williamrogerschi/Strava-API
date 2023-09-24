# Strava-API - Rider Profile

An API using data from Strava to pull rider profile stats/data

## Description

This API will be a rider profile that is taking data from Strava. Strava is an app that lets you upload workout activities. In this case, I'm specifically interested in parsing my ride (bicycle) data. Once uploaded you can keep track of all your ride data including: time, location, route, speed, distance, etc. This social media platform is sort of like the 'facebook' for cyclists.

In this project, I will be pulling my ride data in order to make my own rider profile page. I will show cumumaltive ride data as well as stats on recent rides.

### Getting Started

1. First, I will get the API connections configured - Stravas API requires an access code that changes every 6 hours. In order to avoid re-configuring the connection everytime it expires, I have set up a refresh token in order to automatically fetch the updated access token.√ 
 
 - note, I have the acitivities dataset configured, but will have to still add athlete stats. Find information on the available datasets here: https://developers.strava.com/playground/#/

 - Here is the setup for the Strava API: https://developers.strava.com/docs/getting-started/#curl 
2. Second, I will begin to visualize my wireframe to get a sense of what I want my profile page to look like, and what CSS elements I will need to make this happen.
3. Third, I will work on my JS logic to start pulling the data necessary from the API(s).
4. Lastly, I will begin to work with my CSS to make my wireframe vision complete.

#### PseudoCode

First I need to gather all the necessary APIs (w/ links) and define them as variables - in order to fetch all the necessary data.
I then need to write the logic for each data pull and link them to the correct HTML ids/classes.

Once I get some kind of rythym for pulling some data, I can go back into my HTML and really try to think (based off my wireframe) about the HTML structure and what possible divs, classes, etc. I will need to make my CSS cleaner.

Once I have my HTML in order, along with some key data points - I will then have to consider placement that will make the most sense for someone visiting my profile page (this is where some slight CSS will come into play).

With the page starting to come together, I can look at my JS and try to refine the code to my liking (arrow functions/ternary operators, etc.)

With most of the page data all together, I will then focus lastly on my CSS. Possibly play around with responsive CSS, while making sure my webpage is mobile first.