/ * Software Required to run the below JavaScript Implementation of RealEstateTransactionBlock Chain:
 * Download Node.js  https://nodejs.org/en/
 * Download Crypto-js Library (SHA256 hash function developed by the NSA and is irreversible hash function
 * To install run : npm install -- save crypto-js
 * Time taken to write this code - 30 mins.  
 *  The SHA256 hash function was developed by the NSA and is an irreversible hash function.
 */
const SHA256 = require('crypto-js/sha256')
class RealEstateTransactionBlock {
    constructor(ind, time, realestatetransaction, previousHash) {
        this.RealeStateTransactionForHouse1 = realestatetransaction;  
        this.time = time;
        this.previousHash = previousHash;
        this.hash = this.getHashKey();
        this.staticconst = 0;
   this.ind = ind;
    }
/**
* Generate HashKey by invoking SHA256 method.  Since the SHA inputs are contatination of index, previoushash,transactiondata and stasticconstant, the hash key generated would be unique.
* How this combination helps to identify the Forged Transaction data?
  *  Since transaction data is one of the input the hash function, if the transaction data changes the generated key will be different and the BlockChain validations will fail lookup the key.
*/
    getHashKey() {
        return SHA256(this.ind + this.previousHash + this.time + this.realestatetransaction + this.staticconst).toString();
    }
  
/** 
* Template block for mining.
*/
    mineRealEstateTransactionBlock(difficulty) {
    }
}
/**
*
* TransactionBlockChain.  Code to add blocks.
*/
class RealEstateTransactionBlockchain{
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }
    createGenesisBlock() {
        return new RealEstateTransactionBlock(0, "01/01/2016", "Mr X sold House1 to Mr Y; amount: $800000", "0")
    }
    latestRealEstateTransactionBlock() {
        return this.chain[this.chain.length - 1]
    }
    addRealEstateTransactionBlock(newRealEstateTransactionBlock){
        newRealEstateTransactionBlock.previousHash = this.latestRealEstateTransactionBlock().hash;
        newRealEstateTransactionBlock.hash = newRealEstateTransactionBlock.getHashKey();
        this.chain.push(newRealEstateTransactionBlock);
    }
    validateNewTransaction() {
        for(let i = 1; i < this.chain.length; i++) {
            const currentRealEstateTransactionBlock = this.chain[i];
            const previousRealEstateTransactionBlock = this.chain[i - 1];
            if (currentRealEstateTransactionBlock.hash !== currentRealEstateTransactionBlock.getHashKey()) {
                return false;
            }
            if (currentRealEstateTransactionBlock.previousHash !== previousRealEstateTransactionBlock.hash) {
                return false;
            }
        }
        return true;
    }
}
