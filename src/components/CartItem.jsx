
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";


const CartItem=({item,index})=>{

  const dispatch=useDispatch();

  const removefromcart=()=>{
    dispatch(remove(item.id));
  }

  return (

    <div className="flex flex-col gap-9">
<div className="flex gap-9 mt-12 ml-[150px]">
    
    <div className="h-[320px] w-[240px]">
      <img src={item.image} className="h-full w-full"></img>
    </div>
    

    <div className="flex flex-col gap-20">

    <div className="flex flex-col gap-7">
      <h1 className="text-gray-700 font-semibold text-lg tetx-left  truncate w-40 mt-1">
        {item.title}
      </h1>
      <h1 className="w-96 text-gray-400 font-normal text-[15px] text-left">
        {item.description.split(" ").slice(0,20).join(" ")+"..."}
      </h1>
    </div>
    <div className="text-green-600 font-semibold flex justify-between">
      ${item.price}
      <div
      onClick={removefromcart} className="text-red-800 w-8 h-8 rounded-full bg-red-400 text-xl flex items-center justify-center">
    <MdDeleteOutline />
    </div>
    </div>
  

  </div>

</div>

<div className="w-[700px] h-1 bg-black ml-[120px]"></div>
    </div>
    
    
  );
}
  

{}
export default CartItem;
