const API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=e0760a5f";
export const searchMovies = async (query) => {
  if (!query) return [];

  const response = await fetch(
    `http://www.omdbapi.com/apikey.aspx?VERIFYKEY=2dc6d4b2-1c71-41a7-bb22-d38ef1b9c93e${query}&apikey=${API_KEY}`
  );

  const data = await response.json();
  return data.Search || [];
};
