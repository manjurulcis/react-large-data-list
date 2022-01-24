var faker = require("faker");
var path = require("path");
var express = require("express");
var app = express(); // create express app
var router = express.Router();


// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use('/', router);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


router.get("/list", function (req, res) {
  const data = [];
  for (var i = 0; i < 10000; i++) {
    var user = {
      id: i + 1, 
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      bio: faker.lorem.sentence(),
      image: faker.image.avatar()
    };
    data.push(user);
  }
  res.send(data);
});


// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});
