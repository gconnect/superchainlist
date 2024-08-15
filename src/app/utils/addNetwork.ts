
const { ethereum } = window;


 export const addNetwork = async (provider: any) => {
    if (provider) {
      try {
        provider.request({
          method: "wallet_addEthereumChain",
          params: [{
            chainId: "0x61",
            rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
            chainName: "Smart Chain - Testnet",
            nativeCurrency: {
              name: "BNB",
              symbol: "BNB",
              decimals: 18
            },
            blockExplorerUrls: ["https://testnet.bscscan.com"]
          }]
        });
        // setIsNetworkAdded(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('MetaMask is not installed');
    }
  };

