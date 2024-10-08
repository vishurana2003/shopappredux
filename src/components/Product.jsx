import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../redux/Slices/CartSlice";

const Product = ({post}) => {

 
  const {cart}=useSelector((state)=>state);
  const dispatch=useDispatch();

  const addtocart=()=>{
    dispatch(add(post));
    toast.success("Item Added Succesfully");
  }

  const removefromcart=()=>{
    dispatch(remove(post.id));
    toast.success("Item Removed Succesfully");
  }

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 p-6 bg-white rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl gap-3  mt-10 ml-5 rounded-xl ">
      
     <div>
      <p className="text-gray-700 font-semibold text-lg tetx-left  truncate w-40 mt-1">{post.title}</p>
     </div>

     <div>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
        {post.description.split(" ").slice(0,10).join(" ")+"..."}
      </p>
     </div>

     <div className="h-[180px]">
      <img src={`${post.image}`} className="w-full h-full"/>
     </div>

     <div className="flex  gap-12  mt-5 ">

     <div>
     <p className="text-green-600 font-semibold">${post.price}</p>
     </div>

   {

    cart.some((p)=>p.id==post.id)?
    (<button
    className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white"
    onClick={removefromcart}>
      Remove item
    </button>):(
      <button
       className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white"
      onClick={addtocart}>
        Add to Cart
      </button>
    )
   }

     </div>
    </div>
  );
};

export default Product;
