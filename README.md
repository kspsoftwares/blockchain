# blockchain
Block Chain Implementation using Node JS.

Sample Implementation of Real Estate Transactions using Block Chain.

 /*   
 * Software Required to run the JavaScript Implementation of RealEstateTransactionBlock Chain:
 * Download Node.js  https://nodejs.org/en/
 * Download Crypto-js Library (SHA256 hash function developed by the NSA and is irreversible hash function
 * To install run : npm install -- save crypto-js
 * The SHA256 hash function was developed by the NSA and is an irreversible hash function.
 */

/**
*  The below code is to test the newly added transactions.   
*  Goto Command line:  node/bin> node filename.js
*/

let transactionChain = new RealEstateTransactionBlockchain();
transactionChain.addRealEstateTransactionBlock(new RealEstateTransactionBlock(1, "01/01/2017", "Mr Y sold House1 to Mr Z; amount: $800000", "0"));
transactionChain.addRealEstateTransactionBlock(new RealEstateTransactionBlock(2, "10/01/2017", "Mr Z sold House1 to Mr A; amount: $870000", "0"));
transactionChain.addRealEstateTransactionBlock(new RealEstateTransactionBlock(3, "02/01/2018", "Mr A sold House1 to Mr B; amount: $880000", "0"));
console.log(JSON.stringify(transactionChain, null, 4));
console.log("Is RealEstateTransaction valid? " + transactionChain.validateNewTransaction());
Output:
{
    "chain": [
        {
            "RealeStateTransactionForHouse1": "Mr X sold House1 to Mr Y; amount: $800000",
            "time": "01/01/2016",
            "previousHash": "0",
            "hash": "7bfd8b5d292d1d1f84ce087c4e0d61ae809b72cc274d54b3601e8b75cf73605b",
            "staticconst": 0,
            "ind": 0
        },
        {
            "RealeStateTransactionForHouse1": "Mr Y sold House1 to Mr Z; amount: $800000",
            "time": "01/01/2017",
            "previousHash": "7bfd8b5d292d1d1f84ce087c4e0d61ae809b72cc274d54b3601e8b75cf73605b",
            "hash": "4fd8077d6a0bdfac9f84625e3994d4c8c1de000b3ec23e966df8d634dc129289",
            "staticconst": 0,
            "ind": 1
        },
        {
            "RealeStateTransactionForHouse1": "Mr Z sold House1 to Mr A; amount: $870000",
            "time": "10/01/2017",
            "previousHash": "4fd8077d6a0bdfac9f84625e3994d4c8c1de000b3ec23e966df8d634dc129289",
            "hash": "b2a674f5cfdae3b8810cb02bc884d49583b18e5536dd4a7409fdc0eb68a66fe9",
            "staticconst": 0,
            "ind": 2
        },
        {
            "RealeStateTransactionForHouse1": "Mr A sold House1 to Mr B; amount: $880000",
            "time": "02/01/2018",
            "previousHash": "b2a674f5cfdae3b8810cb02bc884d49583b18e5536dd4a7409fdc0eb68a66fe9",
            "hash": "1b1e032d141d03863f07d1d678ba283ab7665b9a4bfbc1538a0e2bc1fc2a6d53",
            "staticconst": 0,
            "ind": 3
        }
    ]
