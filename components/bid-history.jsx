import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function BidHistory({ bids }) {
  // Sort bids by timestamp in descending order (newest first)
  const sortedBids = [...bids].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

  if (sortedBids.length === 0) {
    return <p className="text-muted-foreground">No bids yet. Be the first to bid!</p>
  }

  return (
    <div className="space-y-4">
      {sortedBids.map((bid, index) => (
        <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback>{bid.bidder.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{bid.bidder}</p>
              <p className="text-xs text-muted-foreground">{new Date(bid.timestamp).toLocaleString()}</p>
            </div>
          </div>
          <p className="font-bold">${bid.amount.toFixed(2)}</p>
        </div>
      ))}
    </div>
  )
}
