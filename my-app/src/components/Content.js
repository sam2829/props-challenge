import React, { Component } from "react";
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader"

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: []
         }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
                posts: savedPosts
            })
        }, 2000)
    }

    handleSearchChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter(post => {
        return post.name.toLowerCase().includes(name)
    })
        this.setState({
        posts: filteredPosts
    })
    }
    
    render() {
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
                            onChange={(e) => this.handleSearchChange(e)}
                        />
                        <h4>posts found {this.state.posts.length}</h4>
                    </form>
                </div>

                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                        <PostItem savedPosts={savedPosts} />
                        : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default Content