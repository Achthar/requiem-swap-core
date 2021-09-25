module.exports = {
    networks: {
        'bsc-testnet': {
            url: 'https://data-seed-prebsc-2-s3.binance.org:8545',
            //accounts,
            chainId: 97,
            live: true,
            saveDeployments: true,
            tags: ['staging'],
            gasMultiplier: 2,
            accounts: [pk],
            gas: 4100000,
            gasPrice: 10000000000,
          },
    },
    etherscan: {
      // Your API key for Etherscan
      // Obtain one at https://etherscan.io/
      apiKey: "YOUR_ETHERSCAN_API_KEY"
    }
  };
  
  