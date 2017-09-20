# Müvie Haus 3: Last Action Homework

![](https://media1.giphy.com/media/zQrlFhfzWYrcc/giphy.gif)

Gerard was in San Francisco for the first US screening of the wildly successful French import "Les Adeptes de Tarf". After he successfully closed a deal to acquire the rights to the film (the success of your website helped him start his own production studio), he went out for a celebratory drink.

Gerard stumbled around and somehow ended up in the tech corridor of San Fran. Lost and confused, he made his way to the largest group of people he could find - this just happened to a meetup for React developers.

After a rough morning, Gerard cleared his head and thought back on all the positives he heard about React from the meetup. He picked up the phone and called you - your client has more work for you!

## Setup

Treat this like a mini-project - you have no provided files. For reference, here is the solution for the Create Your Own Adventure for some react references


## Completion

This is a 2 day homework with 6 parts:

* Wireframe of the Single Page App, with highlighting of React components and data flow
* Each feature (5 total)

In your homework folder, create a folder for hw media. Your wireframe should be in this folder. Because the apps are becoming more complex and partially based on SECRETS (e.g. environmental variables), it's difficult for us to fully test your app. Let's use quickTime Player to create a short screen cast of your app in action!

In quickTime Player, go to File -> New Screen Recording.
* Next to the record button is a small drop-down. In it, select show mouse-clicks in recording.
* Press the record button
* You can click to record the entire screen, or you can drag your mouse to create a view that will be recorded. This might be a better option as it'll make the file smaller. As a full-blown movie developer, you can decide what's best for a video of your app.
* There's a small button at the top of your screen that will stop the recording - press it when appropriate.
* Save your video with an appropriate name (e.g. LastName_TimeStamp.mov) and move it into your hw-media folder

## Assignment

#### Features
* A nav Bar with the name of the establishment / logo and a footer with nonsense about copyrights and contact
* There should be a section of movies currently playing (saved in the database) at Muvie Haus
* Each movie should have a delete button
* There should be a search form (text input for movie title, search button) that hits an **internal** route, which will **request** data from `http://omdbapi.com` (use t= instead of s= as the movie search parameter) and render the movie title and image to the page.
* There should be an "addToDB" button next to the form (independent of any search results) that adds the movie title and the poster image to the database and the currently playing section

#### Approach

This is based on the flow of exercises from the last two days! Work through those exercises as necessary!

* Build your server first! What's your server look like? What are you serving?
 * Initialize!
 * Install packages!
 * Listen!
 * Routes! There should be a homepage, but there should be a route for getting movies from a databse, adding a new movie to the databse, deleting a movie from the database, and searching the **omdbapi**!
 * We're gonna be working with JSON - Install / require / invoke anything that might help us if you haven't already
* Build your database second! What's your data look like? What are you storing? Draw an ERD if necessary.
 * Database!
 * Schema file!
 * Maybe seed some data just to test!
* Connect the two third! What's the connection look like? What are you connecting? Draw a connection if necessary.
 * Install / require / invoke anything that might help us if you haven't already
 * Models!
 * Environment!
 * Middleware functions to interact with the database!
* Create the React front-end fourth! What's the front-end look like? What are you fronting? Draw a front-end if necessary.
 * File structure!
 * PLAN!!!!
 * Create components based on your plan!
 * Webpack
 * Helpers! (e.g. ajax/axios)

### Remainder of the course

Once you've completed however far you get for tonight, you should start to think about what it is you want to focus on post course. Create an issue against this repo and describe your top 3 priorities for how you want to prepare for you job hunt

#### Morning ex's

Since we really only have 2 days worth of morning ex, let's take those times to fill up those loose ends we raised in our issues. Tomorrow and Wednesday's mornings are going to be used to work on portfolios, finish any uncompleted assignments, or tie up any outcomes materials owed to Anna
