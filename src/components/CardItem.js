import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { Link} from 'react-router-dom'

const CardItem = ({item}) => {

  return (
  
      <Col sm="6" lg="3">
     <Link to={`/movie/${item.id}`}>

     <div className='card mb-3'>
        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img"/>
        <div className='card-info'>
        <div className='card-info-desc'>
        <p>اسم الفيلم:{item.title}</p>
        <p>تاريخ  الفيلم:{item.release_date}</p>
        <p>عدد المقيمين :{item.vote_count}</p>
        <p> التقييم :{item.vote_average}</p>
        </div>
        </div>
      </div>
     </Link>

      </Col>
      
   
  )
}

export default CardItem
