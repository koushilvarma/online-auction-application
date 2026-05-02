"use client"

import { useState } from "react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { User, Tag, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { AuctionTimer } from "@/components/auction-timer"
import { BidHistory } from "@/components/bid-history"
import { auctions } from "@/lib/data"
import { useToast } from "@/hooks/use-toast"

export default function AuctionDetailPage() {
  const { id } = useParams()
  const { toast } = useToast()
  const [bidAmount, setBidAmount] = useState("")

  // Find the auction with the matching ID
  const auction = auctions.find((a) => a.id === id) || auctions[0]

  const handleBid = (e) => {
    e.preventDefault()

    const amount = Number.parseFloat(bidAmount)

    if (isNaN(amount) || amount <= auction.currentBid) {
      toast({
        title: "Invalid bid amount",
        description: `Your bid must be higher than the current bid of $${auction.currentBid.toFixed(2)}`,
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Bid placed successfully!",
      description: `You've placed a bid of $${amount.toFixed(2)} on ${auction.title}`,
    })

    // In a real app, you would update the auction data here
    setBidAmount("")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="relative aspect-square overflow-hidden rounded-lg border mb-4">
            <Image src={auction.image || "/placeholder.svg"} alt={auction.title} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg border">
                <Image
                  src={auction.image || "/placeholder.svg"}
                  alt={`${auction.title} thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{auction.title}</h1>
          <div className="flex items-center text-muted-foreground mb-4">
            <User className="h-4 w-4 mr-1" />
            <span>Seller: {auction.seller}</span>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Current Bid</p>
                  <p className="text-3xl font-bold">${auction.currentBid.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Bids</p>
                  <p className="text-xl font-semibold">{auction.bids.length}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-1">Time Remaining</p>
                <AuctionTimer endTime={auction.endTime} />
              </div>

              <form onSubmit={handleBid} className="space-y-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <span className="text-muted-foreground">$</span>
                    </div>
                    <Input
                      type="number"
                      placeholder={`${(auction.currentBid + 1).toFixed(2)}`}
                      className="pl-7"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      step="0.01"
                      min={auction.currentBid + 0.01}
                    />
                  </div>
                  <Button type="submit">Place Bid</Button>
                </div>
                <p className="text-xs text-muted-foreground">Enter ${(auction.currentBid + 1).toFixed(2)} or more</p>
              </form>
            </CardContent>
          </Card>

          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="bids">Bid History</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="p-4">
              <div className="flex items-start gap-2 mb-4">
                <Tag className="h-5 w-5 mt-0.5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Category</h3>
                  <p className="text-muted-foreground">{auction.category}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 mt-0.5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Description</h3>
                  <p className="text-muted-foreground">{auction.description}</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="p-4">
              <p className="mb-2">Shipping information:</p>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>Free shipping within the United States</li>
                <li>International shipping available at additional cost</li>
                <li>Item will be shipped within 2 business days of payment</li>
                <li>Estimated delivery: 3-5 business days</li>
              </ul>
            </TabsContent>
            <TabsContent value="bids" className="p-4">
              <BidHistory bids={auction.bids} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
