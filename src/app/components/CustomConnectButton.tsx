import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';
import { useAccount } from 'wagmi';
import { addNetwork } from '@/utils/addNetwork';
import { useEthersSigner } from '@/utils/useEtherSigner';

interface Istyle{
  style: string
  isHeader: boolean
}
export const CustomConnectButton = ( { style, isHeader }: Istyle) => {
  const theme = useAppSelector((state) =>  state.theme.themeState)
  const { isConnected } = useAccount()
  const signer = useEthersSigner()
  const {chainId} = useAccount()
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button className={`${ style }  p-2`} onClick={openConnectModal} type="button">
                  Connect Wallet
                  </button>
                );
              }
              if(!isHeader){
                if (connected) {
                  return (
                    <button className={`md:text-md text-sm  ${ style }  md:p-2 p-1.5`} onClick={() => addNetwork(chainId!)} type="button">
                    Add Network to Wallet
                    </button>
                  );
                }
              }
              return (
                <div 
                className="bg-transparent border text-red-500 border-red-500 font-bold py-2 px-4 rounded-full"
                style={{ display: 'flex', gap: 12 }}>
                  <button className=''
                  onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};