const Person = require("../model/model");

const handleError= (err) =>{
    console.log(err)
}

// Create and Save a Record of a Model
let nahed = new Person({
  name: "nahed",
  age: 29,
  favoriteFoods: ["Pizza", "Tacos", "sandwich"],
});
const createAndSavePerson = async () => {
  try {
    await nahed.save();
  } catch (err) {
    handleError(err);
  }
};

// Create Many Records with model.create()
let arrayOfPeople = [
  {
    name: "marwa",
    age: 22,
    favoriteFoods: ["Burrito", "couscous"],
  },
  {
    name: "khawla",
    age: 36,
    favoriteFoods: ["lasagne", "Couscous", "Burrito"],
  },
  {
    name: "mouna",
    age: 28,
    favoriteFoods: ["Tacos", "pizza"],
  },
  {
    name: "Seif",
    age: 31,
    favoriteFoods: ["Pasta"],
  },
];
const createManyPeople = async () => {
  try {
    await Person.create(arrayOfPeople);
  } catch (err) {
    handleError(err);
  }
};

// Use model.find() to Search Your Database
const search = async (searchByName) => {
  try {
    const data = await Person.find({ name: `${searchByName}` });
    console.log(data);
  } catch (err) {
    handleError(err);
  }
};

// Use model.findOne() to Return a Single Matching Document from Your Database
const searchByFood = async (searchByFood) => {
  try {
    const data = await Person.findOne({
      favoriteFoods: { $all: [`${searchByFood}`] },
    });
    console.log(data);
  } catch (err) {
    handleError(err);
  }
};

// Use model.findById() to Search Your Database By _id
const searchById = async (searchById) => {
  try {
    const data = await Person.findById(`${searchById}`);
    console.log(data);
  } catch (err) {
    handleError(err);
  }
};

// Perform Classic Updates by Running Find, Edit, then Save
const updatePerson = async (personId) => {
  try {
    const data = await Person.findById(`${personId}`);
    data.favoriteFoods.push("hamburger");
    data.save();
    console.log(data);
  } catch (err) {
    handleError(err);
  }
};

// Perform New Updates on a Document Using model.findOneAndUpdate()
const newUpdatePerson = async (personName) => {
  try {
    const data = await Person.findOneAndUpdate({name: `${personName}`}, {age: 20}, {new: true});
    console.log(data);
  } catch (err) {
    handleError(err);
  }
};

// Delete One Document Using model.findByIdAndRemove
const removePerson = async (personId) => {
  try {
    const data = await Person.findByIdAndDelete(`${personId}`);
    console.log(data);
  } catch (err) {
    handleError(err);
  }
};

// MongoDB and Mongoose - Delete Many Documents with model.remove()
const removeManyPeople = async (personName) => {
  try {
    const data = await Person.deleteMany({name: `${personName}`});
    console.log(data);
  } catch (err) {
    handleError(err);
  }
};

// Chain Search Query Helpers to Narrow Search Results
const chainSearch = async () => {
  try {
    const data = await Person.find({ favoriteFoods: { $all: ["Burrito"] } })
    .sort({name: "asc"})
    .limit(2)
    .select("-age")
    .exec()
    console.log(data);
  } catch (err) {
    handleError(err);
  }
};

// Module exports
module.exports = {
  createAndSavePerson,
  createManyPeople,
  search,
  searchByFood,
  searchById,
  updatePerson,
  newUpdatePerson,
  removePerson,
  removeManyPeople,
  chainSearch,
};
