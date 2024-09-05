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
      ) : posts.length > 0 ? (<div className="grid justify-center xs:grid-cols-2 xs:w-[92%] xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 sm:max-w-7xl sm:w-10/12 md:w-8/12 md:max-w-6xl lg:w-9/12 gap-4  mt-5 xl:w-10/12 mx-auto ">
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
