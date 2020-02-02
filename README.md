# Australian Business Lookup Service

Take home coding challenge

## Running the app

The project manages dependencies through `npm`. To install them, run the following command in the root of the project:

```
npm install
```

And finally, run the server with the following command:

```
npm run start
```

At this stage, the web app will be available at `https://localhost:3000`.


The single-page application can be built with the following command:

```
npm run build
```


To run the test suite (*However there are no tests yet*):

```
npm run test
```

## Premise

As part of the interviewing process i was given this take home coding challenge. I was given a document that highlighted what had to be done.

Though challenge had no time limits, I did set-up myself a time limit of 6 hours. As I did not wanted to spend more time on it than a weekend.


## Architecture / Tech Stack

The test had a preference for React, so i bootstrapped the project with official **create react app** project. Since there were not many UI components it did not made sense to use a Component library. However due to time constraints, I chose **Bulma** which is a CSS only framework. For state management, again any of the libraries would be an overkill and I chose to manage state using **React's Context API**

## Assumptions
I took liberty on the design and kep it simple to kee the test time boxed.

## Retrospective
It was a nice simple challenge, which could have been over complicated and over engineered but the decission to keep it time boxed helped me to keep it simple and straight forward. I did not exceed my self imposed time limit and am fairly happy with the functionality.

However, I was not able to unit test the solution and the challenge is visually not where I wanted it to be. In hindsight I could spend some more time writing some test and making it look a little better.
