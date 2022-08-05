import React from 'react'

const NFTCard = (props) => {
  return (
    <div className="nfts">
        <div className="rounded-md">
            <img className="img" src={props.nft.media[0].gateway} ></img>
        </div>
        <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
            <div className="">
                <h2 className="text-xl text-gray-800">{props.nft.title}</h2>
                <p className="text-gray-600">Id: {props.nft.id.tokenId}</p>
                <p className="text-gray-600" >{props.nft.contract.address}</p>
            </div>

            
        </div>

    </div>
  )
}

export default NFTCard