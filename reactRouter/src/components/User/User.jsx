import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-500 text-white text-3xl p-4 border-8 border-neutral-950'>User: {userid}</div>
  )
}

export default User