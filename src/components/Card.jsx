import React, { useState } from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

const Card = ({$id, title,content, featuredImage}) => {
  return (
    <div class="relative h-[350px] w-[300px] rounded-md p-4 border-spacing-3">
    <img
        src={appwriteService.getFilePreview(featuredImage)} 
        alt={title}
        class="z-0 h-full w-full rounded-md object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div class="absolute bottom-4 left-4 text-left px-2">
        <h1 class="text-lg font-semibold text-white ">{title}</h1>
        <Link to={`/post/${$id}`}>
        <button class="mt-2 p-2 bg-lime-300 rounded-md inline-flex cursor-pointer text-center items-center text-md font-semibold text-white">
            View Post
        </button>
        </Link>
    </div>
    </div>

  )
}

export default Card