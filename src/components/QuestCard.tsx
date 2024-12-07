import React from 'react'

const QuestCard = () => {
  return (
<div className="bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 p-8 rounded-lg shadow-lg">
      <div className="bg-white p-4 rounded-md shadow-md">
        <img
          src="/nft.png"
          alt="Quest"
          className="w-full rounded-md mb-4"
        />
        <div className="text-center">
          <p className="text-gray-700 font-medium">Total Cost</p>
          <p className="text-gray-900 font-semibold text-lg">0.000111 SUPRA</p>
          <button className="mt-4 bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800">
            Mint
          </button>
        </div>
      </div>
    </div>

  )
}

export default QuestCard
