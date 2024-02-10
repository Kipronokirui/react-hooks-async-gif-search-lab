import React from 'react'

function GifList({gifs}) {
  return (
    <div>
        <ul>
            {gifs?.map((gif, index) => (
                <li key={index}>
                    {gif.title}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default GifList