

import { useState } from "react"

import {Link } from 'react-router-dom'
import { Eye, Heart, ShoppingBag } from "lucide-react"
import { addToCart } from "../features/cart/cartSlice"
import { useDispatch } from "react-redux"




export function ProductCard({
  imageUrls,
  name,
  price,
  product,
  category,
  isNew = false,
  isSale = false,
  salePrice,
}) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)
  const [isWishlist, setIsWishlist] = useState(false)
  const dispatch  = useDispatch()

  // const formattedPrice = new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "USD",
  // }).format(price)

  // const formattedSalePrice = salePrice
  //   ? new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "USD",
  //     }).format(salePrice)
  //   : null

  return (
    <>
      <div   className="group relative overflow-hidden rounded-md border bg-background transition-all hover:shadow-md">
        <div className="relative aspect-square overflow-hidden">
        

{imageUrls.length > 0 && (
      <img 
        src={imageUrls[0]} 
        alt={product.name} 
        className="object-cover transition-transform duration-300 group-hover:scale-105 h-64 w-full"
      
        
         
      />
    )}
          <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              variant="secondary"
              size="icon"
              className="h-9 w-9 rounded-full"
              onClick={() => setIsQuickViewOpen(true)}
            >
              <Eye className="h-4 w-4" />
              <span className="sr-only">Quick view</span>
            </button>
            <button
              variant="secondary"
              size="icon"
              className="h-9 w-9 rounded-full"
              onClick={() => setIsWishlist(!isWishlist)}
            >
              <Heart className={`h-4 w-4 ${isWishlist ? "fill-primary text-primary" : ""}`} />
              <span className="sr-only">Add to wishlist</span>
            </button>
          </div>
          {isNew && (
            <div className="absolute left-2 top-2" variant="secondary">
              New
            </div>
          )}
          {isSale && (
            <div className="absolute right-2 top-2" variant="destructive">
              Sale
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="mb-1 text-xs text-muted-foreground">{category}</div>
          <Link to='/' className="group-hover:underline">
            <h3 className="font-medium">{name}</h3>
          </Link>
          {/* <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{description}</p> */}
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isSale && salePrice ? (
                <>
                  <span className="font-medium">kshs {price}</span>
                  <span className="text-sm text-muted-foreground line-through">kshs {price}</span>
                </>
              ) : (
                <span className="font-medium">kshs {price}</span>
              )}
            </div>
            <button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <ShoppingBag className="h-4 w-4" 
              onClick={
                ()=>dispatch(addToCart(product))
              }
          
              
              />
              {/* <span className="sr-only">Add to cart</span> */}
            </button>
          </div>
        </div>
      </div>

      {/* <div open={isQuickViewOpen} onOpenChange={setIsQuickViewOpen}>
        <div className="sm:max-w-[900px]">
          <div>
            <div>Quick View</div>
            <div>Take a closer look at this beautiful piece</div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-md">
              <img src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <div className="mb-1 text-sm text-muted-foreground">{category}</div>
              <h2 className="text-2xl font-medium">{name}</h2>
              <p className="mt-2 text-muted-foreground">{description}</p>
              <div className="mt-4 flex items-center gap-2">
                {isSale && salePrice ? (
                  <>
                    <span className="text-xl font-medium">{formattedSalePrice}</span>
                    <span className="text-muted-foreground line-through">{formattedPrice}</span>
                  </>
                ) : (
                  <span className="text-xl font-medium">{formattedPrice}</span>
                )}
              </div>
              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <div className="font-medium">Description</div>
                  <p className="text-sm text-muted-foreground">
                    This exquisite piece is handcrafted with attention to detail, making it a perfect addition to your
                    collection or a thoughtful gift for someone special.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Details</div>
                  <ul className="list-inside list-disc text-sm text-muted-foreground">
                    <li>Premium materials</li>
                    <li>Ethically sourced gemstones</li>
                    <li>Handcrafted by skilled artisans</li>
                    <li>Comes with a luxury gift box</li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto flex gap-4 pt-6">
                <button className="flex-1">Add to Cart</button>
                <button variant="outline" size="icon" onClick={() => setIsWishlist(!isWishlist)}>
                  <Heart className={`h-4 w-4 ${isWishlist ? "fill-primary text-primary" : ""}`} />
                  <span className="sr-only">Add to wishlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

