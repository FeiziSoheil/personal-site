import React from 'react'

export default function ({content,count}) {
  return (
    <div className="bg-gray-800 p-4 w-full rounded-lg text-center w-48">
    <p className="text-3xl font-bold text-white">{count}</p>
    <p className="text-sm text-gray-400 mt-2">{content}</p>
  </div>
  )
}
