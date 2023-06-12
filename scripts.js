const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDE1NzU4ZjdhNDZjY2I1MWE5OTZiNjdhYTNmOGNmNCIsInN1YiI6IjY0ODc2OWExYzAzNDhiMDExZmJlMjQ3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._4GrVG28tLWC3VO2SgyCYRCQw4xLKlaj57_JeyjTVQg'
    }
  };

  const main=document.querySelector('main');
  const IMGPATH='https://image.tmdb.org/t/p/w1280/';
  const APIURL=('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
  async function getmovies(){
    const response=await fetch(APIURL,options);
    const respdata=await response.json();
    // console.log(respdata);
    respdata.results.forEach(movie => {
        const div = document.createElement('div');
        div.classList.add('container');
        div.innerHTML = ` 
        <img class="imges" src="${IMGPATH+ movie.poster_path} " >
        
         `;
        main.appendChild(div);
       
    });
  
  }
  getmovies();