import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([50, 3, -5, 0])
// const sorter = new Sorter(numbersCollection)

const charactersCollection = new CharactersCollection('Xaayz');
const sorter = new Sorter(charactersCollection);

sorter.sort();
// console.log(numbersCollection.data);

console.log(charactersCollection.data);