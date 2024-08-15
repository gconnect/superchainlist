import { toHex } from "viem";

 export const addNetwork = async (chainId: number) => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {

        if (window.ethereum !== chainId) {
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId:  toHex(chainId)}]
            });
          } catch (err: any) {
              // This error code indicates that the chain has not been added to MetaMask
            if (err.code === 4902) {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
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
            }
          }
        }
        // setIsNetworkAdded(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('MetaMask is not installed');
    }
  };

