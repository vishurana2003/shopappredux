import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const[loading,setloading]=useState(false);
  const[post,setpost]=useState([]);
  

  async function fetchproductdata() {
    
    setloading(true);

    try{
  const res=await fetch(API_URL);
  const data=await res.json();

  setpost(data);
    }
   

    catch(error) {

    }

    setloading(false);
  }

  useEffect(()=>{

    fetchproductdata();
  },[])
  return (
    <div>
     
     {
      loading? <Spinner></Spinner>:
      post.length>0?
      (<div className="grid grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5  min-h-[80vh]">
        {
          post.map((post)=> (
            <Product key={post.id} post={post}></Product>
          ))
        }
        </div>
      ):<div className="flex justify-center items-center">
         No data Found
      </div>

     }
    </div>
  );
};

export default Home;
