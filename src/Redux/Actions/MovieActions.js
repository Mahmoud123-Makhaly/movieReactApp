import { ALLMOVIES, MOVIEAPI } from "../Types/Types"
import axios from "axios";
export const MovieActions = ()=>{
return (dispatch)=>{
    const res =  axios.get(MOVIEAPI);
    dispatch ( {
        type:ALLMOVIES,
        data:res.data.results,
        pages:res.data.total_pages
    })

}


    
}