const express = require("express");
const cors = require("cors");

const PORT = 5000;
const app = express();
const { v4: uuidv4 } = require('uuid');
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000",
};



const menusList ={
  categories: [
    {
      "id": 80877,
      "name": "Appetizers",
      "items": [
        {
          "id": 132548,
          "name": "French Fries",
          "description": "Custom premium cut by farm frites. Add melted cheese for 7LE - chili con carne for 9LE",
          "price": 54.834
        },
        {
          "id": 655881,
          "name": "Nacho Chips & Salsa",
          "description": "Homemade crispy nacho chips served with fresh salsa dip",
          "price": 54.834
        },
        {
          "id": 655882,
          "name": "Sweet Potato Fries",
          "description": "Served with hot mayo dip",
          "price": 54.834
        },
        {
          "id": 655883,
          "name": "Seasoned Wedges",
          "description": "Served with garlic mayo dip",
          "price": 54.834
        },
        {
          "id": 132565,
          "name": "Chili Cheese Fries",
          "description": "French fries, topped with chili con carne & melted cheddar cheese, served with sour cream and pickled jalapenos",
          "price": 54.834
        },
        {
          "id": 655884,
          "name": "Potato Skins",
          "description": "Loaded with cheese & chili beef ( served with sour cream)",
          "price": 54.834
        },
        {
          "id": 132549,
          "name": "Onion Rings",
          "description": "",
          "price": 54.834
        }
      ]
    },
    {
      "id": 21281,
      "name": "Salads",
      "items": [
        {
          "id": 655880,
          "name": "BLT Salad",
          "description": "Grilled bacon , lettuce , tomatoes with ranch sauce",
          "price": 34.834
        },
        {
          "id": 132570,
          "name": "Caesar Salad",
          "description": "Lettuce, Parmesan cheese, Croutons & Caesar dressing",
          "price": 34.834
        },
        {
          "id": 132574,
          "name": "Garden Salad",
          "description": "Mixed greens and fresh garden selections tossed in vinaigrette dressing",
          "price": 34.834
        },
        {
          "id": 164438,
          "name": "Rocket Mushroom Salad",
          "description": "Rocket leaves, fresh mushrooms, Parmesan cheese, Balsamic dressing",
          "price": 34.834
        }
      ]
    }
  ]
}

// This function runs if the http://localhost:5000/getData endpoint
// is requested with a GET request
app.get("/getData", cors(corsOptions),  (req, res) => {
    res.json(menusList);
});


const Validatecatgeory = (catgeory) => {
	let message = "";
	if (!catgeory.name) {
		message = "Category name not found";
	}

	if (!catgeory.description) {
		message = "Category description not found";
	}

	return message;
};

app.post("/category", (req, res) => {
	let catgeory = {...req.body,items:[],id:uuidv4()};
	let isValid = Validatecatgeory(catgeory);
	if (isValid == "") {
		menusList.categories.push(catgeory);
		res.status(201).send(catgeory);
	} else {
		res.statusMessage = isValid;
		res.sendStatus(404);
	}
});

app.delete("/category/:Id", (req, res) => {
  console.log(req.params.Id)
	let catgeoryId = req.params.Id;
  console.log(menusList)

	let currentcatgeory = menusList.categories.filter((x) => x.id == catgeoryId);
  console.log(currentcatgeory)
	if (currentcatgeory) {
		menusList.categories= menusList.categories.filter((x) => x.id != catgeoryId);
		res.status(200).send('catgeory deleted sucessfully.');
	} else {
		res.statusMessage = "catgeory does not exist";
		res.sendStatus(404);
	}
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
