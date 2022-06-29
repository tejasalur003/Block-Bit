
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/G2ouv0YJkWl2bTiynvBGrIO2KD68h59N',
      accounts: ['4d51187c42ecc7a8e9486392e15ae4e368248293e721c42d87e15067571e6155'],
    },
  },
};