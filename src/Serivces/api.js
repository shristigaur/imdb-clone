const API_KEY=" http://www.omdbapi.com/?i=tt3896198&apikey=e0760a5f";
const BASE_URL="http://www.omdbapi.com/apikey.aspx?VERIFYKEY=2dc6d4b2-1c71-41a7-bb22-d38ef1b9c93e";
export const getPopularMovies = async()=>{
    const response =await fetch(
        `${BASE_URL}?apikey=$(API_KEY)&s=popular`
    );
    const data=await response.json();
    return data.results
};