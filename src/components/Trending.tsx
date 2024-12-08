import Image from 'next/image'
import Link from 'next/link'
const trendingItems = [
  {
    rank: 1,
    name: 'Joshua Golden - the moon is a spaceship',
    boost: '140 DEGEN',
    boostAmount: '$2.07',
    percentage: 95,
    totalClaims: 204,
    claimedPercentage: 41,
    claims: 191,
  },
  {
    rank: 2,
    name: 'Duke Boara - Flicker',
    boost: '140 DEGEN',
    boostAmount: '$2.07',
    percentage: 95,
    totalClaims: 164,
    claimedPercentage: 33,
    claims: 158,
  },
  {
    rank: 3,
    name: 'jigitz - it\'s our time down here (with Elphi)',
    boost: '140 DEGEN',
    boostAmount: '$2.97',
    percentage: 95,
    totalClaims: 168,
    claimedPercentage: 33,
    claims: 154,
  },
  {
    rank: 4,
    name: 'enjoyment zone',
    boost: '2,000 ENJOY',
    boostAmount: '$0.06',
    percentage: 14,
    totalClaims: 392,
    claimedPercentage: 70,
    claims: 146,
  },
  {
    rank: 5,
    name: 'AM.Radio - Vandelux AM.RADIO 002',
    boost: '230 KEYCAT',
    boostAmount: '$2.67',
    percentage: 86,
    totalClaims: 565,
    claimedPercentage: 85,
    claims: 122,
  },
]

export function Trending() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Trending</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-full">1h</button>
          <button className="px-3 py-1 text-sm bg-gray-900 text-white rounded-full">24h</button>
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-full">7d</button>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-4 py-2 text-sm text-gray-500">
          <div className="col-span-1">RANK</div>
          <div className="col-span-7">BOOST (%)</div>
          <div className="col-span-2 text-right">CLAIMS</div>
          <div className="col-span-2"></div>
        </div>
        {trendingItems.map((item) => (
          <div key={item.rank} className="grid grid-cols-12 gap-4 px-4 py-3 border-t border-gray-200">
            <div className="col-span-1 flex items-center">{item.rank}</div>
            <div className="col-span-7">
              <div className="flex items-center gap-3">
                <Image
                  src="/ccc.png"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                    <Link href="/Quest">
                    <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">
                    <span>{item.boost}</span>
                    <span className="ml-2">{item.boostAmount}</span>
                  </div>
                    </Link>
                  
                </div>
              </div>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
            <div className="col-span-2 text-right">
              <div>{item.claims}</div>
              <div className="text-sm text-gray-500">
                {item.totalClaims} total claims
                <br />
                {item.claimedPercentage}% claimed
              </div>
            </div>
            <div className="col-span-2 flex items-center justify-end">
              <button className="px-3 py-1 text-sm border border-gray-300 rounded-full flex items-center gap-1">
                Mint
                <PlusIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

