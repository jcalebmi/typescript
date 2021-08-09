"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([50, 3, -5, 0])
// const sorter = new Sorter(numbersCollection)
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayz');
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
// console.log(numbersCollection.data);
console.log(charactersCollection.data);
