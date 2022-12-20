JSCRIPT310B Final Assignment
Name: Yuriy Grinchenko

Title: Food App with Yelp API data

Description: Food site that utilizes the Yelp API to pull relevant restaurants based on City/Zip, type of food (ie sushi), and sort by a selected token (ie nearest)

This project meets the following requirements:

- One or more Classes (must use static methods and/or prototype methods)
-- A Class is utilized to create new users 

- One or more timing functions
-- A timer waits 10 min of no activity, will log user out

- One or more fetch requests to a 3rd party API
-- Yelp API. L̶o̶c̶a̶t̶i̶o̶n̶ A̶P̶I̶ (̶T̶B̶D̶)

̶ S̶e̶t̶s̶, u̶p̶d̶a̶t̶e̶s̶, o̶r̶ c̶h̶a̶n̶g̶e̶s̶ l̶o̶c̶a̶l̶ s̶t̶o̶r̶a̶g̶e̶
-- P̶u̶l̶l̶s̶ u̶s̶e̶r̶ l̶o̶c̶a̶t̶i̶o̶n̶ i̶f̶ u̶s̶e̶r̶ a̶l̶l̶o̶w̶s̶ t̶o̶ b̶e̶ l̶o̶c̶a̶t̶e̶d̶ (̶T̶B̶D̶)

- Contains form fields, validates those fields
-- Sign in / Sign up form validation


Usage: 
Start with 'signup.html'. This page will have a 'username' & 'password' field for the user to input their credentials. (note: admin user with 'username:' 'admin', and 'password:' 'admin' already exists)

Also there is a sign up link that allows a user to create a profile. The input fields have constraint validation with feedback if < 3 characters. The passwords must match, and a check if an existing username already exists in the Users array is conducted before the combo is accepted and pushed into the Users stack.

After the user successfully creates an account, they will be redirected to sign in. The form checks if username/password combo exists in the 'Users' array of objects, if so it will send the user to 'best-foods.html'.

Within the 'best-foods.html' page, the user must input a city or zip, the other fields are optional. After pressing submit, a fetch is made to the YELP API, which would then return the top 10 places depending on the area, type of food, and sort_by (ie: ratings, distance)

If the YELP API does not return any objects, but rather console log a an error (I think it was 403), its a CORS issue where the server doesn't return the headers required. According to Google it has to do with me requesting the data from local, but I'm not really sure. What I do know is if you request temp access to demo server (https://cors-anywhere.herokuapp.com/corsdemo), it works and you should get data from the API.

The 'best-foods.html' also has a 'no activity' timing function where it will sign the user out if there is no activity (mouse move or keystroke press) for 10 min.