import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(private  hc:HttpClient) { }
  getTrendMovies():Observable<any>{
    return this.hc.get<any>('/product/getproducts')
  }
  getMovieRatingById(id):Observable<any>{
    return this.hc.get<any>('product/getproducts/'+id)
 }
 getHotstarMovies():Observable<any>{
  return this.hc.get<any>('/product/getproducts')
}
getHotstarMovieRatingById(id:any):Observable<any>{
  return this.hc.get<any>('product/getproducts/'+id)
}
getNetflixMovies():Observable<any>{
  return this.hc.get<any>('/product/getproducts')
}
getAhaMovieRatingById(id):Observable<any>{
  return this.hc.get<any>('product/getproducts/'+id)
}
getPrimeMovieRatingById(id):Observable<any>{
  return this.hc.get<any>('product/getproducts/'+id)
}
getNetflixMovieRatingById(id):Observable<any>{
  return this.hc.get<any>('product/getproducts/'+id)
}
getPrimeMovies():Observable<any>{
  return this.hc.get<any>('/product/getproducts')
}
getAhaMovies():Observable<any>{
  return this.hc.get<any>('/product/getproducts')
}
getTopShows():Observable<any>{
  return this.hc.get<any>('/product/getproducts')
}
getShowsMovieRatingById(id):Observable<any>{
  return this.hc.get<any>('product/getproducts/'+id)
}
getTopMovies():Observable<any>{
  return this.hc.get<any>('/product/getproducts')
}
getTopMovieRatingById(id):Observable<any>{
  return this.hc.get<any>('product/getproducts/'+id)
}
//  //to check login status
//  userLoginStatus():boolean{
//   if(localStorage.getItem("username")==null){
//     return false;
//   }
//   else{
//     return true;
//   }
// }

// //logout
// userLogout(){
//   localStorage.clear();
// }
 }
