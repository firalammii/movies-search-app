import React from 'react'

const Card = ({data}) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';
  return (
    <div className='card'>

      <img className='img' src={imgUrl + data.poster_path} />
      <div className='movie-details' >
        <h3>{data.title}</h3>
        <p>{data.overview}</p>
      </div>
    </div>
  )
}

export default Card