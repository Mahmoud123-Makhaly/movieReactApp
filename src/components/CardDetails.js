import React , {useState , useEffect} from 'react'
import { Row,Button } from 'react-bootstrap'
import { Link  , useParams} from 'react-router-dom'
import axios from 'axios'
const CardDetails = () => {
    const param = useParams();
  const [film , setFilm] = useState([])
const FilmId = async()=>{
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`)
  setFilm(res.data)
}
useEffect(()=>{FilmId()} ,[])
  return (
    <div className='card-details'>
    <Row>
 <div className='film-details pt-5 text-center d-flex justify-content-around'>
 <img className='details-img' src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}></img>

<div className='details-info'>
<h4 className='mb-3'>اسم الفيلم:{film.title}</h4>
    <h4 className='mb-3'>تاريخ الفيلم:{film.release_date}</h4>
    <h4 className='mb-3'> عدد المقيمين:{film.vote_count}</h4>
    <h4 className='mb-3'>التقييم :{film.vote_average}</h4>
</div>
 </div>
  </Row>
  <Row>
    <div className='film-history py-5 pe-5'>
      <h3 className='mb-2'>قصة الفيلم</h3>
        <h5 className='mb-3'>القصة:  {film.overview}</h5>
  
    </div>
  </Row>
  <Row className='d-flex mt-3'>
<div className='btn-group'>
 <Link to="/">
 <Button  className='btn mx-2'>عودة للرئيسية</Button>
 </Link>

<a href={film.homepage}>
<Button className='btn' style={{width:"200px"}}>مشاهدة الفيلم </Button>
</a>

</div>
  </Row>
    </div>
  )
}

export default CardDetails
