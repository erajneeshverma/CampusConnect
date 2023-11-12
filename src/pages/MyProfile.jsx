import React, {useState, useEffect} from 'react'
import authService from '../appwrite/auth';

const MyProfile = () => {

    const [user, setUser] = useState([])
    
    const getUser= async()=>{
        const userData = await authService.getCurrentUser();
        //console.log(userData);
        if(userData){
            setUser(userData);
        }
    }

    useEffect(()=>{
        getUser();
    },[])

    return (
        <div className="bg-gray-100 p-6 rounded-md shadow-md m-4">
          <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
          <div className="space-y-2">
            <p><span className="font-semibold">Name:</span> {user.name}</p>
            <p><span className="font-semibold">Email:</span> {user.email}</p>
          </div>
        </div>
      );
}

export default MyProfile