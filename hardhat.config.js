/**
* @type import('hardhat/config').HardhatUserConfig
*/
require("@nomiclabs/hardhat-truffle5");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.1",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      shoutstone: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   networks : {
      goerli: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   }
};
