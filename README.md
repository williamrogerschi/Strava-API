# Strava-API - Rider Profile

An API using data from Strava to pull rider profile stats/data

## Description

This API will be a rider profile that is taking data from Strava. Strava is an app that lets you upload workout activities. In this case, I'm specifically interested in parsing my ride (bicycle) data. Once uploaded you can keep track of all your ride data including: time, location, route, speed, distance, etc. This social media platform is sort of like the 'facebook' for cyclists.


### HTML

    - The HTML was used to separate main blocks of content into divs to easily style them for the page layout.
    - The site is composed into three main parts:
        1. The first part is the header, where the image and nav bar live.
        2. Second, is the profile container - which houses the users profile image, about them, and their acheivements.
        3. Third is the main page content which houses the majority of the content on the site:
            - The main content was broken down into two main parts, the heatmap container and the activity container. This allowed me to style the divs accordingly and with ease. 

### CSS

    - Some CSS features that I was proud to showcase were the following:
        1. Figured out how to add a scroll within a div container (this is useful for mobile on the heatmap)
        2. Added a sticky nav
        3. Really tried to dial in my responsive CSS for mobile. The only thing I would add more to it, would be a hamburger navbar.

        Inspiration for my CSS was built by my Wireframe:  https://app.diagrams.net/#G1L6gSrPnMq0s-Jzv1d1L3Tz84bNaxb1aj

### Javascript

    - The Javascript was used to manipulate and visualize the API data.
    - Another key feature was calling on this data using JS to add event listeners.
        - Event listeners were used throughout this project for button clicks, pulling data, etc.
        - The main function used the 'on page load' even listener to load in all the data pulled from the API at the same time.
    - I was also able to create a data table dynamically through JS - which housed my activites data.
    - I was able to render a heatmap to the page by creating an object and parsing the data I wanted.
    - Paired with CSS I was able to create the function for my sticky nav.



#### PseudoCode
First I need to gather all the necessary APIs (w/ links) and define them as variables - in order to fetch all the necessary data. I then need to write the logic for each data pull and link them to the correct HTML ids/classes.

Once I get some kind of rythym for pulling some data, I can go back into my HTML and really try to think (based off my wireframe) about the HTML structure and what possible divs, classes, etc. I will need to make my CSS cleaner.

Once I have my HTML in order, along with some key data points - I will then have to consider placement that will make the most sense for someone visiting my profile page (this is where some slight CSS will come into play).

With the page starting to come together, I can look at my JS and try to refine the code to my liking (arrow functions/ternary operators, etc.)

With most of the page data all together, I will then focus lastly on my CSS. Possibly play around with responsive CSS, while making sure my webpage is mobile first.