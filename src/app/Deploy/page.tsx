export default function DeployBeacon() {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center">
    
  
        {/* Main Content */}
        <div className="container mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10">
          {/* Form Section */}
          <div className="bg-white shadow rounded-lg p-6 lg:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Deploy a Beacon</h2>
            <p className="text-sm text-gray-600 mb-6">
              Select an NFT to boost: Boost currently supports the following projects:
            </p>
  
            {/* Project Logos */}
            <div className="flex items-center gap-4 mb-6">
              <img src="/project1.png" alt="Project 1" className="w-10 h-10" />
              <img src="/project2.png" alt="Project 2" className="w-10 h-10" />
              <img src="/project3.png" alt="Project 3" className="w-10 h-10" />
              <span className="text-gray-500 text-sm">Don’t see a project you want? Let us know.</span>
            </div>
  
            {/* Form Inputs */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="beaconTicker"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter your Beacon Ticker
                </label>
                <input
                  type="text"
                  id="beaconTicker"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
  
              <div>
                <label
                  htmlFor="nftUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  NFT URL
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg mt-2">
                  <input
                    type="text"
                    id="nftUrl"
                    className="flex-grow p-2 focus:outline-none"
                    placeholder="Paste the URL of the NFT you want to boost"
                  />
                  <button className="bg-gray-200 px-4 py-2 text-gray-600 rounded-r-lg">
                    Upload your token
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Boost Section */}
          <div className="bg-gray-100 shadow rounded-lg p-6 lg:w-1/3">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Boost</h2>
  
            {/* Fee Details */}
            <div className="bg-white shadow p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Fee Details</h3>
              <p className="text-sm text-gray-600 mb-4">
                To help you price your boost, we track your estimated protocol revenues, fees, and other costs across networks.
                Costs are approximate in USD.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-700">
                  <span>Mint Revenue</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Reward Budget</span>
                  <span>~$0.00</span>
                </div>
                <div className="flex justify-between text-gray-700 font-semibold">
                  <span>Estimated Net</span>
                  <span>$0.00</span>
                </div>
              </div>
            </div>
  
            {/* Quest Links */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="twitterUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  Twitter URL
                </label>
                <input
                  type="text"
                  id="twitterUrl"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Give your Twitter URL"
                />
              </div>
  
              <div>
                <label
                  htmlFor="telegramUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telegram Channel Link
                </label>
                <input
                  type="text"
                  id="telegramUrl"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Give your Telegram Channel Link"
                />
              </div>
  
              <button className="text-blue-500 hover:underline text-sm">
                Add more quests
              </button>
            </div>
          </div>
        </div>
  
        {/* Deploy Button */}
        <div className="container mx-auto px-6 py-6 flex justify-end">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700">
            Deploy
          </button>
        </div>
      </div>
    );
  }
  