import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import CardList from './components/CardList'
import Navs from './components/Navs'
import axios from 'axios'
import CardDetails from './components/CardDetails'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import { MovieActions } from './Redux/Actions/MovieActions'
const App = () => {
  const data = useSelector((state)=>{return state.movie})
const dispatch = useDispatch()
  //get all movies
const [movies, setMovies] = useState([]);
const[pagecount,setPagecount] = useState(0)
// const myMovies = async()=>{
//   const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar");
//   setMovies(res.data.results)
//   setPagecount(res.data.total_pages)
// }
useEffect(()=>{
  myMovies()
  dispatch(MovieActions())
} , [])
//search
const getSearch = async (word)=>{
  if(word===""){
    myMovies()
   
    
  }
else{
  const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&query=${word}`)
  setMovies(res.data.results)
  setPagecount(res.data.total_pages)
}
}
//pagination
const getPagination = async(page)=>{
  const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page} `)
  setMovies(res.data.results)
  setPagecount(res.data.total_pages)
}
  return (
    <div className='font'>
<Navs getSearch={getSearch}/>
<Container>
<BrowserRouter>
<Routes>
  <Route path='/' element={  <CardList movies={movies} getPagination={getPagination} pagecount={pagecount}/>}/>
  <Route path='/movie/:id' element={  <CardDetails/>}/>


</Routes>
</BrowserRouter>
</Container>
    </div>
  )
}

export default App
