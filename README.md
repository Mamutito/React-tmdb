# The Movie Database

This is a REACT project carried out as a technical test for a job interview with the company 2coders.

The task required implementing a list of popular movies, a login functionality, a detailed view of the selected movie where users can add the movie to favorites and rate it from 1 to 10, and a page to display the list of favorite movies, all while fetching data from the TMDB API.

A first approach has been made within the requested time frame, covering the above requirements. However, there are several tasks that could enhance the project in the long run. Due to time constraints and various challenges, this is what I was able to achieve with my current knowledge.

## GETTING STARTED AND DISCLAIMERS

To start the project just:

- npm install
- npm run dev

Due to its complexity, time constraints, and various challenges, a workaround has been implemented for the login feature. In the login request, it verifies if the account data is correct (it's a pre-fixed account currently), and if successful, it makes a request to the API to obtain a guest session ID. With this session ID, you can make rating requests for a movie, but it's not possible to add favorites. Therefore, a React context has been used to store favorites locally and in the local storage.

Access credentials for testing:

- Username: admin
- Password: 2coders

## To-Do (Possible future implementations to the project):

- Migration to TypeScript
- Implementation of login with a personal TMDB account
- Improved UI design (with libraries like Tailwind)
- Implementation and configuration of unit tests (Jest or React Testing Library)

This has been an intense exercise in which I have had to invest many hours not only coding but also researching and even adapting to changes in many libraries due to their new versions, such as React Router. I'd like to thank 2coders for giving me the opportunity to demonstrate my knowledge and my eagerness to learn Front-End, and hopefully, to join their team soon.
