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

### Javascript

    - The Javascript was used to manipulate and visualize the API data.
    - Another key feature was calling on this data using JS to add event listeners.
        - Event listeners were used throughout this project for button clicks, pulling data, etc.
    - I was also able to create a data table dynamically through JS - which housed my activites data.
    - I was able to render a heatmap to the page by creating an object and parsing the data I wanted.
    - Paired with CSS I was able to create the function for my sticky nav.