require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privatekey = fs.readFileSync(".secret").toString()
const projectId = "YOUR_PROJECT_ID"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privatekey]
    },
    mainnet: {
     
       url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      
      accounts: [privatekey]
    }
    
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};