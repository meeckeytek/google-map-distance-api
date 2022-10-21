const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json())

var axios = require('axios');

const frick1 = {lat: 40.771209, lng: -73.9673991};

const frick2 = {lat: 40.771209, lng: -73.9673991};

var config = {
  method: 'get',
  url: `https://maps.googleapis.com/maps/api/distancematrix/json?origins=Ikorodu-Ososun Rd, Ojota 105102, Lagos, Nigeria&destinations=San%20Francisco&key=${process.env.API_KEY}`,
  // url: `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${frick1}&origins=${frick2.lat.frick2.lng}&key=AIzaSyBBQzQPEwaBK03fROk87JhGKihSIld3j7g`,
  headers: { }
};

// 36.9848° S, 143.3906° E

axios(config)
.then(function (response) {
  console.log(response.data);
  console.log(response.data?.rows);
})
.catch(function (error) {
  console.log(error);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`))