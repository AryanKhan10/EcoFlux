import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Products from "../components/Products";

function Home() {
  const URL = "https://fakestoreapi.com/products";

  const [loading, setloading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchProducts = async () => {
    setloading(true);
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setPosts(data);
      console.log(data)
    } catch (error) {
      console.error("Error while Fetching..");
    }
    setloading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
   
    {
      loading ? (
        <Spinner />
      ) : posts.length > 0 ? (<div className="grid grid-cols-4  max-w-6xl gap-4  mt-5 w-9/12 mx-auto ">
                               {posts.map((post) => (  
                              <Products key={post.id} post={post} />
        ))}
                              </div>
      ) : (<p className="text-center font-medium text-lg h-screen flex items-center justify-center">No posts found!</p> )
        }
    </>
  );
}

export default Home;
