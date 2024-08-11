const popular = document.getElementById('populares');
const todos = document.getElementById('todos');
const series = document.getElementById('series');
const input = document.getElementById('input');
const main = document.getElementById('janelaSinp');
const mainTag = document.getElementById('main');

fetch('https://api.themoviedb.org/3/movie/popular?api_key=1cad73bd4640e0e3301f082e9e81ef0d')
     .then(response =>{
        if(!response.ok){
            throw new Error('A solicitação não foi bem-sucedida.');
        }
        return response.json();
     })
     .then(data =>{
        const resultados = data.results;
        for(resultado of resultados){
            const divFilmes = document.createElement('div');
            const poster = resultado.poster_path;
            const backImg = resultado.backdrop_path;
            const titulo = resultado.title;
            const sinopse = resultado.overview;
            divFilmes.id = 'filme';
            divFilmes.innerHTML = `<img src="https://image.tmdb.org/t/p/original${poster}" alt="" id="imgs">`
            popular.appendChild(divFilmes);

            divFilmes.addEventListener('click',()=>{
               main.innerHTML = '';
               main.innerHTML = `<div id='imgDiv'><img src="https://image.tmdb.org/t/p/original${backImg}" alt="" id="imgs"></div><button id='closeBtn'>X</button><span id='titulo'>${titulo}</span><p id='overview'>${sinopse}</p><button id='assistirBtn'>Assistir<img src="Figura-Play-PNG.png" alt=""></button>`          
               main.style.display = 'flex';

               main.querySelector('#closeBtn').addEventListener('click',()=>{
                  main.style.display = 'none';
               })
            });
        }
        console.log(data)
     })
     .catch(error =>{
        console.error('Erro: ',error);
     })

fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=1cad73bd4640e0e3301f082e9e81ef0d')
     .then(response =>{
        if(!response.ok){
            throw new Error('A solicitação não foi bem-sucedida.');
        }
        return response.json();
     })
     .then(data =>{
        const resultados = data.results;
        for(resultado of resultados){
            const divFilmes = document.createElement('div');
            const poster = resultado.poster_path;
            const backImg = resultado.backdrop_path;
            const titulo = resultado.title;
            const sinopse = resultado.overview;
            divFilmes.id = 'filme';
            divFilmes.innerHTML = `<img src="https://image.tmdb.org/t/p/original${poster}" alt="" id="imgs">`
            todos.appendChild(divFilmes);

            divFilmes.addEventListener('click',()=>{
               main.innerHTML = '';
               main.innerHTML = `<div id='imgDiv'><img src="https://image.tmdb.org/t/p/original${backImg}" alt="" id="imgs"></div><button id='closeBtn'>X</button><span id='titulo'>${titulo}</span><p id='overview'>${sinopse}</p><button id='assistirBtn'>Assistir<img src="Figura-Play-PNG.png" alt=""></button>`          
               main.style.display = 'flex';

               main.querySelector('#closeBtn').addEventListener('click',()=>{
                  main.style.display = 'none';
               })
            });
        }
        console.log(data)
     })
     .catch(error =>{
        console.error('Erro: ',error);
     })

fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=1cad73bd4640e0e3301f082e9e81ef0d')
     .then(response =>{
        if(!response.ok){
            throw new Error('A solicitação não foi bem-sucedida.');
        }
        return response.json();
     })
     .then(data =>{
        const resultados = data.results;
        for(resultado of resultados){
            const divFilmes = document.createElement('div');
            const poster = resultado.poster_path;
            const backImg = resultado.backdrop_path;
            const titulo = resultado.name;
            const sinopse = resultado.overview;
            divFilmes.id = 'filme';
            divFilmes.innerHTML = `<img src="https://image.tmdb.org/t/p/original${poster}" alt="" id="imgs">`
            series.appendChild(divFilmes);

            divFilmes.addEventListener('click',()=>{
               main.innerHTML = '';
               main.innerHTML = `<div id='imgDiv'><img src="https://image.tmdb.org/t/p/original${backImg}" alt="" id="imgs"></div><button id='closeBtn'>X</button><span id='titulo'>${titulo}</span><p id='overview'>${sinopse}</p><button id='assistirBtn'>Assistir<img src="Figura-Play-PNG.png" alt=""></button>`          
               main.style.display = 'flex';

               main.querySelector('#closeBtn').addEventListener('click',()=>{
                  main.style.display = 'none';
               })
            });
        }
        console.log(data)
     })
     .catch(error =>{
        console.error('Erro: ',error);
     })



     function pesquisar(){
      if(input.value == ''){
         throw new Error('Preencha o campo de pesquisa!');
      }
        fetch(`https://api.themoviedb.org/3/search/movie?query=${input.value}&api_key=1cad73bd4640e0e3301f082e9e81ef0d`)
        .then(response =>{
         if(!response.ok){
             throw new Error('A solicitação não foi bem-sucedida.');
         }
         return response.json();
      })
        .then(data=>{
         mainTag.innerHTML = '';
         mainTag.appendChild(main)
         const resultados = data.results;
         const filmPesq = document.createElement('div');
         filmPesq.id = 'listaFilmPesq';
         const textResult = document.createElement('h2');
         textResult.textContent = 'Resultados'
         mainTag.appendChild(textResult);
         mainTag.appendChild(filmPesq);
         for(resultado of resultados){
             const divFilmes = document.createElement('div');
             const poster = resultado.poster_path;
             const backImg = resultado.backdrop_path;
             const titulo = resultado.title;
             const sinopse = resultado.overview;
             divFilmes.id = 'filme';
             divFilmes.innerHTML = `<img src="https://image.tmdb.org/t/p/original${poster}" alt="" id="imgs" >`
             filmPesq.appendChild(divFilmes);

             divFilmes.addEventListener('click',()=>{
               main.innerHTML = '';
               main.innerHTML = `<div id='imgDiv'><img src="https://image.tmdb.org/t/p/original${backImg}" alt="" id="imgs"></div><button id='closeBtn'>X</button><span id='titulo'>${titulo}</span><p id='overview'>${sinopse}</p><button id='assistirBtn'>Assistir<img src="Figura-Play-PNG.png" alt=""></button>`          
               main.style.display = 'flex';

               main.querySelector('#closeBtn').addEventListener('click',()=>{
                  main.style.display = 'none';
               })
            });
         }
        console.log(data);
      })
        .catch(error =>{
        console.error('Erro: ',error);
      })
     }

