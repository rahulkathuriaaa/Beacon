import Link from "next/link";
import { FeatureSection } from "./Feature-Section";
import { Trending } from "./Trending";
import { Footer } from "./Footer";
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
     
          <main className="min-h-screen bg-white">
      <header className="flex justify-center items-center pt-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium">Beacon Protocol</span>
        </div>
      </header>

      <section className="text-center max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold tracking-tight mb-8">
          Earn tokens for doing onchain actions
        </h1>
        <div className="flex justify-center gap-4">
            <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2">
            <Link href = "/Deploy">

            Deploy Beacon
            </Link>

            <PlusIcon className="w-5 h-5" />
          </button>
         
          <button className="border border-gray-300 px-4 py-2 rounded-full flex items-center gap-2">
            Discover Beacon
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Trending />

      <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 py-16">
        <FeatureSection
          title="Create flexible onchain incentive campaigns fit for any audience"
          type="campaign"
        />
        <FeatureSection
          title="Bring boosts to your own app with the Boost SDK"
          type="sdk"
        />
      </section>

    </main>
    <Footer/>

  
     
    </div>
  );
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
  