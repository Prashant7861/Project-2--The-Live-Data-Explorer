# CINEMATIC - Movie Explorer and Finnish Cinema Finder

This is my Project 2 for the Live Data Explorer assignment. The idea was to build a small movie web app that uses asynchronous JavaScript, fetch requests, and dynamic DOM updates.

The app has two main parts:

* Movie search using the OMDb API
* Finnish cinema showtimes using Finnkino-style data

Users can search for movies or series, filter the results, open a movie card, and see more details in a modal. There is also a Finnish cinema mode where users can choose a theatre area and load showtimes for movies playing today.

## Features

* Search movies and series by title
* Filter results by all, movies, or series
* Fetch movie data from the OMDb API
* Show movie posters, ratings, year, runtime, plot, cast, director, and awards
* Finnish cinema mode with theatre area selection and showtimes
* Movie detail modal
* Loading spinner and empty state messages
* Responsive layout for desktop and mobile
* Animated background and card hover effects

## APIs and Data

The main live API used in this project is the OMDb API. It returns JSON data, which is fetched with `fetch()` and handled using `async/await`.

I also planned to use the Finnkino XML API for cinema schedules. During testing, the Finnkino API was blocked in the browser because of Cloudflare restrictions, so I used mock data that follows the same kind of structure. This allowed me to still build the cinema schedule feature and show how XML-style cinema data could be displayed in the app.

## How It Works

The JavaScript is written in `app.js`.

When the user searches for a movie, the app creates a request URL for the OMDb API and sends it using `fetch()`. The response is converted to JSON, then the results are displayed as movie cards using template literals and DOM manipulation.

For each movie result, the app also fetches extra details by IMDb ID. This gives more information for the modal, such as full plot, actors, director, runtime, and rating.

The Finnkino section works in a similar way, but with local structured data. The app loads theatre areas into a dropdown, then displays movie showtimes when the user clicks the button.

## Files

* `index.html` - page structure
* `styles.css` - layout, responsive design, and visual styling
* `app.js` - API calls, DOM rendering, events, and app logic
* `.gitignore` - keeps private config files and dependencies out of Git
* `README.md` - project description

## What I Learned

This project helped me practice working with asynchronous JavaScript in a real interface. I learned how to use `fetch()` with `async/await`, handle errors with `try/catch`, and update the page without refreshing it.

One problem I had to solve was the Finnkino API issue. Since it did not work directly in the browser, I created realistic mock data and kept the same app flow. That helped me understand how to structure data and render it dynamically even when an API has limitations.

I also got more practice with responsive CSS, modals, loading states, and keeping JavaScript functions organized.

## Running the Project

This is a static HTML, CSS, and JavaScript project.

Before running the movie search, create a local `config.js` file in the project root. You can copy `config.example.js` and replace the placeholder with your own OMDb API key:

```js
window.CINEMATIC\_CONFIG = {
    OMDB\_API\_KEY: 'your\_omdb\_api\_key\_here'
};
```

The `config.js` file is ignored by Git, so the API key is not pushed to the public repository.

After that, open `index.html` in a browser.

For deployment, it can be hosted on GitHub Pages, Netlify, or Render.

