function movies(arr)
{ let movies = []
    for( let elements of arr)
    {

        if(elements.includes('addMovie'))
        {
            let [uselessSpace, movieName] = elements.split('addMovie ')
            
            let movie = {
                name : movieName

            }
            movies.push(movie)
        }
        if(elements.includes('directedBy'))
        {
           let [movieName, director] = elements.split(' directedBy ')
           let foundMovie = movies.find(movie => movie.name === movieName)
           if(foundMovie)
           {
            foundMovie.director = director
           }
           
        }
        if(elements.includes('onDate'))
        {
            let [movieName, date] = elements.split(' onDate ')
           let foundMovie = movies.find(movie => movie.name === movieName)
           if(foundMovie)
           {
            foundMovie.date = date
           }
        }
    }
    for(let movie of movies)
    {

        if(movie.name && movie.director && movie.date)
        {
            console.log(JSON.stringify(movie))
        }
    }


}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]	 )