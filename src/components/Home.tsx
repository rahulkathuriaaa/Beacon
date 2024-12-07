import Link from "next/link";
const data = [
    {
      rank: 1,
      name: 'Joshua Golden - the moon is a spaceship',
      address: '0x512...a7ce',
      boost: 95,
      token: '140 DEGEN',
      value: '$2.97',
      claims: 191,
      claimedPercent: 41,
    },
    {
      rank: 2,
      name: 'Duke Boara - Flicker',
      address: '0x512...a7ce',
      boost: 95,
      token: '140 DEGEN',
      value: '$2.97',
      claims: 158,
      claimedPercent: 33,
    },
    // Add more data here...
  ];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="text-center px-4 py-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Earn tokens for doing onchain actions
        </h1>
        <div className="flex justify-center space-x-4 mt-6">
            <Link href="/Deploy">
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700">
            Deploy Beacon +
          </button>
            </Link>
          
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-300">
            Discover Beacon &rarr;
          </button>
        </div>
      </main>

      <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Trending</h2>
      <table className="w-full text-left border-collapse bg-white shadow rounded-md">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-4">RANK</th>
            <th className="p-4">NAME</th>
            <th className="p-4">BOOST (%)</th>
            <th className="p-4">CLAIMS</th>
            <th className="p-4">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
              
            >
              <td className="p-4 text-gray-700">{item.rank}</td>
              <td className="p-4">
                <Link href="/Quest">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-900 font-semibold">
                    {item.name}
                  </span>
                  <span className="text-sm text-gray-500">{item.address}</span>
                </div>
                </Link>

              </td>
              <td className="p-4 text-gray-700">
                {item.boost}% <span className="text-sm">({item.token})</span>
              </td>
              <td className="p-4 text-gray-700">
                {item.claims} total claims ({item.claimedPercent}% claimed)
              </td>
              <td className="p-4">
                <button className="bg-blue-600 text-white font-semibold py-1 px-3 rounded-md hover:bg-blue-700">
                  Mint +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
     
    </div>
  );
}
