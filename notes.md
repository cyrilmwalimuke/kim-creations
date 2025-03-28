const {username,password} = req.body
const validUser  = await User.findOne({username})
if(!validUser ) return res.json("no such user found")
const validpassword = validUser.password  === password
if (!validPassword) return res.json("invalid password")



<div className='fixed top-0 left-0 z-10 bg-gray-50 h-screen w-full p-5'>
    <div>
      <div className='flex justify-between items-center'>
        <p className='text-2xl font-bold'>Menu</p>
        <button><IoIosClose onClick={()=>setSideBar(false)} size={30} /></button>

      </div>
      <hr className='mb-5'/>
      <ul className='flex gap-7 flex-col text-2xl font'>
        <li>Home</li>
        <hr />
        <li>Wishlist</li>
        <hr />
        <li>Necklaces</li>
        <hr />
        <li>Bracelets</li>
        <hr />
        <li>Rings</li>
        <hr />
        <li>Earrings</li>
      </ul>


      <hr className='my-12' />
      {/* <p className='text-center w-full text-lg text-gray-500'>log out</p> */}
      <div className='flex justify-center'>
        <button onClick={()=>{
           dispatch(signOutUser())
           navigate('/')
           setSideBar(false)

        }
         
          
        } className='text-gray-500'>log out</button>

      </div>
      <p className='text-center w-full '>@2025 Brasscraft.com || Allr rights received</p>
    </div>


</div>


<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {
                data.map((product)=>{
                  return <ProductCard
                  key={product.name} 
                  image={product.img}
                  name={product.name}
                  product = {product}
                  price={product.price}
                  category={product.category}
                  onClick={
                    ()=>dispatch(addToCart(product))
                  }
                  />
                })
              }



              
            </div>