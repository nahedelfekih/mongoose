const express = require("express");
const connectDB = require("./db/connectDB");
const queries = require("./Queries/queries");

/*----------------------------QUERIES----------------------------*/
// queries.createAndSavePerson();
// queries.createManyPeople();
//  queries.search("khawla");
// queries.searchByFood("couscous");
// queries.searchById("63ce4a74cabcd6cb5d4c705a");
// queries.updatePerson("63cffff69b275f8ac328e636");
// queries.newUpdatePerson("marwa");
// queries.removePerson("63d000fcec86134a7de6315c");
// queries.removeManyPeople("marwa");
// queries.chainSearch();
/*---------------------------------------------------------------*/

connectDB();

const app = express();

const PORT = 4000;

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server is running at ${PORT}`);
});