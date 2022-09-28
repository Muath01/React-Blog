import { useState, useEffect } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import BlogList from "./bloglist";

const Home = () => {

    const [blogs, setBlogs] = useState(null);


    const [isPending, setIsPending] = useState(true)


    
    useEffect(() =>{
        setTimeout(() => {
        
            fetch("http://localhost:8000/blogs")
            .then(res =>{ 
                return res.json()
            })
            .then((data)=>{
                console.log(data)
                setBlogs(data);
                setIsPending(false);
            })
        }, 2000);
    }, [])


    return (
      
      <div className="home">
        {isPending && <div>Loading...</div>}
        {blogs &&<BlogList blogs={blogs} title="All blogs" />}
      </div>
    );
  }
   
  export default Home;