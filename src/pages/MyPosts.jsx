import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import authService from '../appwrite/auth';
import AddPost from './AddPost';

const MyPosts = ({post}) => {
    
    const [posts, setPosts] = useState([])
    
    const getUser= async()=>{
        const userData = await authService.getCurrentUser();
        console.log(userData);
        appwriteService.getUserPosts(userData.$id).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
        console.log(posts);
    }

    useEffect(()=>{
        getUser();
    },[])

  return (
    (posts.length === 0) ? (<AddPost />) : (<div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>)
  )
}

export default MyPosts;