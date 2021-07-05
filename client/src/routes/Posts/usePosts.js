import { useEffect, useState } from "react";

import Backend from "../../api/backend";

const usePosts = cb => {
    const [posts, setPosts] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const fetchPosts = () => {
        Backend.get("/posts")
            .then((res) => {
                setPosts(res.data);
                setSearchResults(res.data)
            })
            .catch(err => {
                console.log(err)
                setPosts([])
                setSearchResults([])
            });

    }
    
    useEffect(() => {
        fetchPosts(cb)
    }, [])
    
    const onSearch = value => {
        setSearchTerm(value)
        if(value == '') {
            return setSearchResults(posts)
        }
        setSearchResults(posts.filter(post => {
            if(post.title.toLowerCase().includes(value.toLowerCase()) 
            || post.body.toLowerCase().includes(value.toLowerCase())) {
                return post
            }
        }))
    }
    return { onSearch, searchTerm, searchResults, posts }
}

export default usePosts

