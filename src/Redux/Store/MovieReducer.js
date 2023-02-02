import { ALLMOVIES } from "../Types/Types";

export const MovieReducer = (state={movie:[] , pageCount:0} , action)=>{
switch(action.type){
    case ALLMOVIES:
        return{movie:action.data , pageCount:action.pages}
}
}