import Link from "next/link"
import { PlusIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-purple-300 pt-20 pb-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-zinc-900">
            Powerful tools to distribute ownership.
          </h2>
          <h2 className="text-4xl md:text-5xl font-semibold text-zinc-900">
            Built for onchain brands.
          </h2>
        </div>



        
        
          <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="flex items-center gap-1 text-xl font-semibold">
                <PlusIcon className="h-5 w-5" />
                Beacon
              </Link>
            <p className="text-sm text-gray-500 mr-2">© 2024 Beacon Studios</p>
          </div>
        </div>
    </footer>
  )
}


