import Link from "next/link"
import Image from "next/image"
import { Clock } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AuctionTimer } from "@/components/auction-timer"

export function AuctionCard({ auction }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={auction.image || "/placeholder.svg"}
          alt={auction.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary">{auction.category}</Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <Link href={`/auctions/${auction.id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:underline line-clamp-1">{auction.title}</h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{auction.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Current Bid</p>
            <p className="font-bold">${auction.currentBid.toFixed(2)}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Bids</p>
            <p className="font-medium">{auction.bids.length}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col items-stretch gap-3">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <AuctionTimer endTime={auction.endTime} />
        </div>
        <Link href={`/auctions/${auction.id}`} className="w-full">
          <Button className="w-full">View Auction</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
