// Sample auction data
export const auctions = [
  {
    id: "1",
    title: "Vintage Polaroid Camera",
    description:
      "A classic Polaroid camera from the 1970s in excellent working condition. Includes original case and manual.",
    image: "/placeholder.svg?height=400&width=400",
    category: "Electronics",
    seller: "VintageCollector",
    startingBid: 50,
    currentBid: 125,
    bids: [
      { bidder: "CameraFan", amount: 75, timestamp: "2025-05-08T14:30:00Z" },
      { bidder: "RetroLover", amount: 100, timestamp: "2025-05-09T10:15:00Z" },
      { bidder: "PhotoBuff", amount: 125, timestamp: "2025-05-09T18:45:00Z" },
    ],
    endTime: "2025-05-15T23:59:59Z",
  },
  {
    id: "2",
    title: "Handcrafted Leather Messenger Bag",
    description:
      "Genuine full-grain leather messenger bag, handmade by artisans. Features multiple compartments and adjustable strap.",
    image: "/placeholder.svg?height=400&width=400",
    category: "Fashion",
    seller: "LeatherCrafts",
    startingBid: 80,
    currentBid: 110,
    bids: [
      { bidder: "FashionForward", amount: 85, timestamp: "2025-05-07T09:20:00Z" },
      { bidder: "StyleSeeker", amount: 110, timestamp: "2025-05-08T16:10:00Z" },
    ],
    endTime: "2025-05-14T23:59:59Z",
  },
  {
    id: "3",
    title: "Limited Edition Vinyl Record Collection",
    description:
      "Collection of 10 limited edition vinyl records from classic rock bands of the 60s and 70s. All in near-mint condition.",
    image: "/placeholder.svg?height=400&width=400",
    category: "Collectibles",
    seller: "MusicVault",
    startingBid: 200,
    currentBid: 350,
    bids: [
      { bidder: "VinylJunkie", amount: 225, timestamp: "2025-05-06T11:45:00Z" },
      { bidder: "MusicCollector", amount: 275, timestamp: "2025-05-07T20:30:00Z" },
      { bidder: "ClassicRocker", amount: 325, timestamp: "2025-05-08T14:15:00Z" },
      { bidder: "RecordFan", amount: 350, timestamp: "2025-05-09T19:00:00Z" },
    ],
    endTime: "2025-05-16T23:59:59Z",
  },
  {
    id: "4",
    title: "Antique Wooden Writing Desk",
    description:
      "Beautiful oak writing desk from the early 1900s. Features original brass hardware and multiple drawers for storage.",
    image: "/placeholder.svg?height=400&width=400",
    category: "Home & Garden",
    seller: "AntiqueFinds",
    startingBid: 300,
    currentBid: 425,
    bids: [
      { bidder: "HomeDecor", amount: 325, timestamp: "2025-05-05T15:20:00Z" },
      { bidder: "AntiqueLover", amount: 375, timestamp: "2025-05-07T12:10:00Z" },
      { bidder: "VintageHome", amount: 425, timestamp: "2025-05-09T09:45:00Z" },
    ],
    endTime: "2025-05-17T23:59:59Z",
  },
  {
    id: "5",
    title: "Professional DSLR Camera Kit",
    description:
      "Complete DSLR camera kit including camera body, 3 lenses, tripod, and carrying case. Perfect for photography enthusiasts.",
    image: "/placeholder.svg?height=400&width=400",
    category: "Electronics",
    seller: "PhotoPro",
    startingBid: 500,
    currentBid: 750,
    bids: [
      { bidder: "ShutterBug", amount: 550, timestamp: "2025-05-06T10:30:00Z" },
      { bidder: "LensLover", amount: 650, timestamp: "2025-05-08T14:20:00Z" },
      { bidder: "PhotographyFan", amount: 750, timestamp: "2025-05-09T16:15:00Z" },
    ],
    endTime: "2025-05-18T23:59:59Z",
  },
  {
    id: "6",
    title: "Handmade Ceramic Dinner Set",
    description:
      "Beautiful 12-piece ceramic dinner set, handcrafted and hand-painted by local artisans. Microwave and dishwasher safe.",
    image: "/placeholder.svg?height=400&width=400",
    category: "Home & Garden",
    seller: "CeramicArtist",
    startingBid: 120,
    currentBid: 180,
    bids: [
      { bidder: "HomeChef", amount: 130, timestamp: "2025-05-07T11:25:00Z" },
      { bidder: "DiningStyle", amount: 155, timestamp: "2025-05-08T19:10:00Z" },
      { bidder: "KitchenCollector", amount: 180, timestamp: "2025-05-09T20:45:00Z" },
    ],
    endTime: "2025-05-16T23:59:59Z",
  },
]
