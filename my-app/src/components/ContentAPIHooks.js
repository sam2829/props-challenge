import React, {useState, useEffect} from 'react'
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import Loader from "./Loader"
import axios from 'axios'
import API_KEY from '../secrets.js'

function ContentAPIHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
    const fetchedPosts = response.data.hits;

    setIsLoaded(true);
    setPosts(fetchedPosts);
    setSavedPosts(fetchedPosts);
  }

  const handleSearchChange = (e) => {
    const name = e.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter(post => {
    return post.user.toLowerCase().includes(name)
    })
    setPosts(filteredPosts);
  }


  return (
    <div className={css.Content}>
        
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form>
                <label htmlFor="id-searchInput">Search</label>
                <input
                    id='id-searchInput'
                    name="searchInput"
                    placeholder='By Author'
                    type='search'
                    onChange={(e) => handleSearchChange(e)}
                />
                <h4>posts found {posts.length}</h4>
            </form>
        </div>

        <div className={css.SearchResults}>
            {
                isLoaded ?
                <PostItemAPI savedPosts={posts} />
                : <Loader />
            }
        </div>
    </div>
)
}

export default ContentAPIHooks