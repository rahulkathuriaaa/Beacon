import React from 'react'
import {
  HexString,
  SupraAccount,
  SupraClient,
  BCS,
  TxnBuilderTypes,
} from "../../node_modules/supra-l1-sdk/dist/node/index";

const QuestDetails = () => {

  let txn = async() => { 
    let senderAccount = new SupraAccount();
    const moduleName = "moon_coin";
    const moduleAddr = "0xaabea11dd43a745458af9d9976380ab6af754e02e81b33eadbe0d94056cd90d1";
    

    let supraClient =  await SupraClient.init(
        "http://localhost:3000/"
        //"https://rpc-testnet.supra.com/"
    );
    
    if ((await supraClient.isAccountExists(senderAccount.address())) == false) {
        console.log(
        "Funding Sender With Faucet: ",
        // To Fund Account With Test Supra Tokens
        await supraClient.fundAccountWithFaucet(senderAccount.address())
        );
    }

    let supraCoinTransferRawTransaction = await supraClient.createRawTxObject(
        senderAccount.address(),
        (
        await supraClient.getAccountInfo(senderAccount.address())
        ).sequence_number,
        moduleAddr,
        moduleName,
        "create",
        [],
        []
    );

    let supraCoinTransferSignedTransaction = SupraClient.createSignedTransaction(
        senderAccount,
        supraCoinTransferRawTransaction
    );
  }

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Road to</h1>
        <div className="flex items-center text-gray-600 text-sm space-x-2">
          <span>0x9ac...bc9d</span>
          <span>&bull;</span>
          <a href="#" className="text-blue-600 hover:underline">Zora</a>
        </div>
      </div>

      {/* Boost Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-800">25 BONSAI</span>
          <span className="text-sm text-gray-600">81% back</span>
        </div>
        <div className="bg-gray-200 h-2 rounded-full overflow-hidden mt-2">
          <div className="bg-green-500 h-full w-4/5"></div>
        </div>
      </div>

      {/* Activity Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Quest</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <p>Follow us on Twitter</p>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">10 IBW</span>
              <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                <img src="/twt.png" alt="" />
              </button>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between items-center">
            <p>Join our Telegram Channel</p>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">10 IBW</span>
              <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                <img src="/telegram.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default QuestDetails
