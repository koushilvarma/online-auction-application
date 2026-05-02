import Link from "next/link"
import { AuctionCard } from "@/components/auction-card"
import { Button } from "@/components/ui/button"
import { auctions } from "@/lib/data"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12 md:py-24 lg:py-32 bg-muted/40 rounded-lg mb-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                BidWave: Online Auction Platform
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Discover unique items and place your bids in real-time. Find treasures or sell your valuables to the
                highest bidder.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/auctions">
                <Button size="lg">Browse Auctions</Button>
              </Link>
              <Link href="/auctions/create">
                <Button size="lg" variant="outline">
                  Create Auction
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Auctions</h2>
          <Link href="/auctions" className="text-primary hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctions.slice(0, 3).map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-muted/30 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">How It Works</h2>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Browse Auctions</h3>
                    <p className="text-muted-foreground">Explore our wide range of items up for auction</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Place Your Bid</h3>
                    <p className="text-muted-foreground">Enter your maximum bid amount</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Win & Pay</h3>
                    <p className="text-muted-foreground">
                      If you're the highest bidder when the auction ends, you win!
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-bold mb-2">Ready to sell?</h3>
              <p className="mb-4">List your items and reach thousands of potential buyers.</p>
              <Link href="/auctions/create">
                <Button>Create an Auction</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
