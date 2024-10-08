import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
 
  const{cart}=useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    const total = cart.reduce((acc, curr) => acc + curr.price, 0);
    setTotalAmount(total);
  },[cart])

  return (
    <div  >
      {

        cart.length>0 ? (<div>

        <div className="flex gap-16">

        <div>
         {
            cart.map((item,index)=>{
              return <CartItem key={item.id} item={item} itemindex={index}></CartItem>
            })
          }
          </div>

          <div className="flex flex-col justify-between  min-h-screen mt-24 mb-14
          ">
              <div className="flex flex-col gap-4">
             <div>
             <div className="text-lg font-bold uppercase text-green-500"> 
                Your Cart
              </div>

              <div className="text-3xl font-bold uppercase text-green-700">
                Summary
                </div>
             </div>

                <div className="text-lg">
                  Total items :{cart.length}
                  </div> 
              </div>


                  <div className=" flex flex-col gap-5">
                    <div>
                    Total Amount:<span className="font-bold">${totalAmount}</span>
                      </div>

                    <button className="flex justify-center items-center w-96 h-10 bg-green-700 rounded-lg text-lg font-semibold text-white">
                      CheckOut Now
                    </button>
                    </div>

            </div>
        </div>

        </div>): 
        (<div className="flex flex-col gap-5 items-center justify-center w-full h-full min-h-screen">
          <h1 className="text-4xl font-bold"> Cart is Empty</h1>

          <Link to={"/"}>
          
          <button className="w-40 h-16 border-2 bg-green-700 text-xl font-semibold hover:scale-110 rounded-xl transition-all ease-in-out">
          Shop Now
          </button>
          </Link>

          </div>

        )
      }
     </div>

     


        
      )

    }


export default Cart;
