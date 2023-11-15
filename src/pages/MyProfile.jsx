import React, {useState, useEffect} from 'react'
import authService from '../appwrite/auth';
import ProfileLogo from '../assets/profileimage.png'
const MyProfile = () => {

    const [user, setUser] = useState([])
    
    const getUser= async()=>{
        const userData = await authService.getCurrentUser();
        //console.log(userData);
        if(userData){
            setUser(userData);
        }
    }
    console.log(user);
    useEffect(()=>{
        getUser();
    },[])

    return (
     <div className='flex items-center justify-center p-5'>
       <div class="w-[300px] rounded-md border">
      <img
        src={ProfileLogo}
        alt={user.name}
        class="h-[200px] w-full rounded-t-md object-cover"
      />
      <div class="p-4">
        <h1 class="inline-flex items-center text-lg font-semibold">
          {user.name}  {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </h1>
        <p class="mt-3 text-sm text-black">
          {user.email}
        </p>
        <div class="mt-4">
          <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #campus
          </span>
          <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #experience
          </span>
          <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #posts
          </span>
        </div>
        <button
          type="button"
          class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read Experinces
        </button>
      </div>
    </div>
     </div>
    
      );
}

export default MyProfile