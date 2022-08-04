import './App.css';
import React, { useState } from 'react';


function App() {

  const [wallet, setWalletAddress] = useState('')

  const [collection, setCollectionAddress] = useState('')

  const [NFTs, setNFTs] = useState([])

  const fetchNFTs = async () => {

    let nfts

    console.log("fatching nfts")

    const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY

    const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${REACT_APP_API_KEY}/getNFTs/`

    let requestOptions = {

      method: 'GET'

    }

    if(!collection.length) {

      const fetchURL = `${baseURL}?owner=${wallet}`

      nfts = await fetch(fetchURL, requestOptions).then(data => data.json())

    } else {

      console.log("fetching nfts for collection owned by address")

      const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;

      nfts= await fetch(fetchURL, requestOptions).then(data => data.json())

    }

    if (nfts) {

      console.log("nfts:", nfts)

      setNFTs(nfts.ownedNfts)

    }

  }


  return (
    <div className="App flex flex-col items-center justify-center py-8 gap-y-3">
      <div className='box flex flex-col w-full justify-center items-center gap-y-2'>
        <input className='w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50' type="text" onChange={(e) => setWalletAddress(e.target.value)} value={wallet} placeholder='Add your wallet Address' />
        <input className='w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50' type="text" onChange={(e) => setCollectionAddress(e.target.value)} value={collection} placeholder='Add collection Address' />
        <label htmlFor="checkbox">
          <input type="checkbox" name="" id="" />
        </label>
        <button className={"disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"} onClick={fetchNFTs}>Let's Go</button>
      </div>
    </div>
  );
}

export default App;
