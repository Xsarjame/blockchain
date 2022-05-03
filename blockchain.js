class Blockchain{

   constructor() {

       this.chain = [this.buildGenesisBlock()];

       this.complexity = 5;

   }

   buildGenesisBlock() {

       return new Block(0, “17/07/2018”, “genesis block”, “0”);

   }

   obtainLatestBlock() {

       return this.chain[this.chain.length – 1];

   }

   addBlock(newBlock) {

       newBlock.previousHash = this.obtainLatestBlock().hash;

       newBlock.mineBlock(this.complexity);

       this.chain.push(newBlock);

   }

   }