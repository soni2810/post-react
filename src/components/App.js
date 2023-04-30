import {useEffect,useState} from "react";
import {getPosts} from '../api';
import {Home} from '../pages';
import {Loader,Navbar} from './';
// const app=express();
// const cors = require("cors")
// app.use
// (cors({
//   origin:"http://codeial.codingninjas.com:8000/api/v2//posts?page=1&limit=5",
// })
// )
// app.listen(3000)
function App() {
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    const fetchPosts =async()=>{
      const response=await getPosts();
      if(response.success){
        setPosts(response.data.posts)
      }
      setLoading(false);
      // console.log('response',response);
    };
    fetchPosts();
  },[]);
  if(loading){
   return <Loader/>
  }
  return (
    <div className="App">
    <Navbar/>
     <Home posts={posts}/>
    </div>
  );
}

export default App;
