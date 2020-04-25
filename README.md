### Countries test application

[![Countries test app](https://img.youtube.com/vi/nwvDRu2TxQ4/0.jpg)](https://www.youtube.com/watch?v=nwvDRu2TxQ4)

#### Installation
`$ npm install`
#### Run in development
`$ npm run dev`
Two web servers will be launched, one for the backend on port 8080, the second for the frontend on port 3000
#### Production build
`$ npm run build`
Static files will be created in the ./dist folder
#### Run in production
`$ npm run start`
One web server will be launched - for the backend on port 8080

### Task description

This test needs to be done using Node and the interface using React.
Pluses: . React with state management Redux, Flux or MobX. . Git version control with feature branches (GitHub, Bitbucket, GitLab). . Deploy the front-end and back-end using Heroku, Amazon AWS or any cloud service. . Tests using Jest and Enzyme.
#### Question 1:
Write a function that connects to https://restcountries.eu/ and gets a unique country from a specific name given using the Node back end and send it to the front end.
#### Question 2
Using the same API ( https://restcountries.eu/ ), and from an array of string, write a function that returns a list of countries where their name matches at least a part of one of these string use the Node back end and send it to the front end.
#### Question 3
Using the same API ( https://restcountries.eu/ ) in the React front end list all the countries and a field to filter the country by name.
#### Question 4
Considering a Slot machine defined like this:

- Reel1:["cherry","lemon","apple","lemon","banana","banana","lemon","lemon"]
- Reel2:["lemon","apple","lemon","lemon","cherry","apple","banana","lemon"]
- Reel3:["lemon","apple","lemon","apple","cherry","lemon","banana","lemon"]

Coins: The user start with 20 coins, when the user run the function the user will lose 1 coin, 1 spin = 1 coin

- 3 cherries in a row: won 50 coins
- 2 cherries in a row: won 40 coins
- 3 Apples in a row: won 20 coins
- 2 Apples in a row: won 10 coins
- 3 Bananas in a row: won 15 coins
- 2 Bananas in a row: won 5 coins
- 3 lemons in a row: won 3 coins

Using these data, create a function that, when it’s called by the front end, gives back the result of a spin and show the result.
#### Question 5 (SQL part)
Use these sentences to draw a schema of a database you would create to store these information

- You are working in a casino.
- A casino has games.
- Each game has a unique type.
- Each game has one or more countries where players are allowed to bet from.
- A player may or may not have a favorite game.

Write based on above, a SQL query to get all players that have games of type “SLOT” as their favorite games.
