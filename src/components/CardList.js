import React from 'react'
import { Row } from 'react-bootstrap'
import CardItem from './CardItem'
import NotFound from './NotFound'
import PagintaeCompinent from './PagintaeCompinent'

const CardList = ({movies , getPagination , pagecount}) => {
  return (
  <Row>
{
    movies.length?(
        movies.map((item)=>{
            return(
<CardItem key={item.id} item={item}/>
            )
        })
    ):(<NotFound/>)
}
{
  movies.length?(<PagintaeCompinent getPagination={getPagination} pagecount={pagecount}/>):null
}
  </Row>
  )
}

export default CardList
