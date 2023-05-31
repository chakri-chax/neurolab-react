
import './App.css';
import { ethers } from 'ethers';
import React, { useState } from 'react'
import Web3Modal from 'web3modal';

const providerOptions = {
  // coinbasewallet:{
  //   package:CoinbaseWalletSDK,
  //   options:{
  //               appName:"Wallet demo",
  //               infuraId:{3:"https://polygon-mumbai.infura.io/v3/4cf6fddedfd54da5bde77099cbfc6c41"}
  //           }
  // }
  
  }
function App() {

  const [web3Provider,setweb3Provider] = useState(null);

  async function connectWallet()
    {
      try {
        let web3Modal = new Web3Modal({cacheProvider:false,providerOptions,});
  
        const web3ModalInstance = await web3Modal.connect();
        const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance);
        if(web3ModalProvider)
          {
            setweb3Provider(web3ModalProvider);
          }
        
      } catch (error) {
        console.log(error);
        
      }
    }
  return (
    
    <div className="App">
      <header className="App-header">
    <p>Wallet Connect site</p>

      {
        web3Provider == null 
        ?(
          <button onClick={connectWallet}>
            CONNECT METAMASK
              </button>
        ) 
        :
        (
          <><p> connected</p>
          <p>Address:{web3Provider.provider.selectedAddress}</p></>
        )
      }


      </header>
    </div>
  );
}

export default App;


