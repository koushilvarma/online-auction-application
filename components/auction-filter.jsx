import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AuctionFilter() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Price Range</h3>
          <div className="space-y-2">
            <Slider defaultValue={[0, 1000]} max={1000} step={10} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$0</span>
              <span>$1000+</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Categories</h3>
          <div className="space-y-2">
            {["Electronics", "Collectibles", "Fashion", "Home & Garden", "Art", "Sports", "Toys & Hobbies"].map(
              (category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={category.toLowerCase()} />
                  <Label htmlFor={category.toLowerCase()} className="text-sm font-normal">
                    {category}
                  </Label>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Auction Status</h3>
          <div className="space-y-2">
            {["Ending soon", "New listings", "Completed"].map((status) => (
              <div key={status} className="flex items-center space-x-2">
                <Checkbox id={status.toLowerCase().replace(" ", "-")} />
                <Label htmlFor={status.toLowerCase().replace(" ", "-")} className="text-sm font-normal">
                  {status}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full">Apply Filters</Button>
      </CardContent>
    </Card>
  )
}
