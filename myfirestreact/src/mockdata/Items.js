// import uuidv4 from 'uuid/v4';
import { v1 as uuidv1 } from 'uuid';
console.log(uuidv1()); //=> f68f7b70-9606-11ea-9ccc-fbd3ee221c8

const Items = [
    {
        id: uuidv1(),
        name: "Test1",
        level: 2 // high
    },

];

export default Items;