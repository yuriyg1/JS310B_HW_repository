const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('sortBy');
// If you get a 403 error, request temp access to demo server from the link below
//https://cors-anywhere.herokuapp.com/corsdemo

formEl.addEventListener('submit', function(e) {
  e.preventDefault();
let sortBy = dateEl.value // sortBy = best_match // sortBy = review_count // sortBy = distance
let place = yearEl.value
let searchTerm = monthEl.value
let radius = 1000
let preiceLevel = 3

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer API_KEY'
  }
};

// locationTracker=false
//   if (locationTracker){

//     fetchLink = `https://api.yelp.com/v3/businesses/search?latitude=${latCoord}&longitude=${longCoord}&term=${searchTerm}&radius=${radius}&price=${preiceLevel}&open_now=true&sort_by=${sortBy}&limit=10`
//   }else{

//     fetchLink = `https://api.yelp.com/v3/businesses/search?location=${place}&term=${searchTerm}&radius=${radius}&price=${preiceLevel}&open_now=true&sort_by=${sortBy}&limit=10`
//   }

let yelpURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${place}&term=${searchTerm}&sort_by=${sortBy}&limit=20`
fetch(yelpURL, options)
  .then(response => response.json())
  // .then(response => console.log(response))
  .then(response => {

    if(document.getElementById("list").hasChildNodes()){
      document.getElementById("list").innerHTML = "";
    }

    console.log(response.businesses[0].name,
      response.businesses[0].display_phone,
      response.businesses[0].distance,
      address = response.businesses[0].location.display_address.toString(),
      rating = response.businesses[0].rating
      )

    for(let i=0;i<10;i++){
      let name = response.businesses[i].name;
      let rating = response.businesses[i].rating;
      let display_phone = response.businesses[i].display_phone;
      let distance = response.businesses[i].distance;
      let address = response.businesses[i].location.display_address.toString()
      let image_url = response.businesses[i].image_url;
      let lib = `"${name}"   Rating: ${rating}/5 , Phone: ${display_phone},  Distance: ${Math.round(distance)} meters, Address: ${address}`
      console.log(lib);

        // Create an "li" node:
        const node = document.createElement("li");

        // Display title, author & description in order list
        const textnode = document.createTextNode(`${lib}`);
        node.appendChild(textnode);
        document.getElementById("list").appendChild(node);

        // Create an "img" node:
        const pic = document.createElement("img");
        pic.src = image_url;
        node.appendChild(pic);
    }
  
  })
  .catch(err => console.error(err));

});
