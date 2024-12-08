interface FeatureSectionProps {
    title: string
    type: 'campaign' | 'sdk'
  }
  
  export function FeatureSection({ title, type }: FeatureSectionProps) {
    return (
      <div className="bg-purple-100 rounded-3xl p-8">
        <h3 className="text-2xl font-semibold mb-6">{title}</h3>
        {type === 'campaign' ? (
          <>
            <div className="flex gap-4 mb-8">
              <button className="px-4 py-2 bg-white rounded-lg">Swap</button>
              <button className="px-4 py-2 bg-white rounded-lg">Mint</button>
              <button className="px-4 py-2 bg-white rounded-lg">Bridge</button>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-1">Budget</h4>
              <p className="text-sm text-gray-600 mb-4">Select how you want to fund your Boost</p>
              <div className="bg-gray-900 text-white rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-500 rounded-full p-1">
                    <PlusIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium">150 HIGHER</div>
                    <div className="text-sm text-gray-400">Reward</div>
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  38% of 5k HIGHER claimed
                  <span className="ml-4">Ends 6h</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-gray-900 text-gray-300 rounded-lg p-4 font-mono text-sm mb-8">
            <pre>{`const boost = await sdk.createBoost({
    allowList:   sdk.SimpleAllowList(),
    action:      sdk.MintAction(),
    budget:      sdk.SimpleBudget(),
    incentives:  sdk.ERC20Incentive(),
  });`}</pre>
          </div>
        )}
        <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2">
          {type === 'campaign' ? 'Deploy Beacon' : 'Coming Soon'}
          {type === 'campaign' ? (
            <PlusIcon className="w-5 h-5" />
          ) : (
            <ChevronRightIcon className="w-5 h-5" />
          )}
        </button>
      </div>
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
  
  function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="m9 18 6-6-6-6" />
      </svg>
    )
  }
  
  