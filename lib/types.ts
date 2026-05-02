export interface Bid {
  bidder: string
  amount: number
  timestamp: string
}

export interface Auction {
  id: string
  title: string
  description: string
  image: string
  category: string
  seller: string
  startingBid: number
  currentBid: number
  bids: Bid[]
  endTime: string
}
