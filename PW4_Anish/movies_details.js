// CS 6314.003 
// PRACTICE WORK - 4
// Author: Anish Joshi (AXJ200101) 
document.addEventListener("DOMContentLoaded",function()
{
    const url='movies.xml';
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const parser=new DOMParser();
            const xml=parser.parseFromString(data,'text/xml');
            var table="<tr><th>Title</th><th>Genre</th><th>Year</th><th>Cast</th><th>Short Description</th></tr>";
            var movies_data=xml.getElementsByTagName("movie");
            for(let i=0;i<movies_data.length;i++)
            {
                var movie_title=movies_data[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                var movie_year=movies_data[i].getElementsByTagName("year")[0].childNodes[0].nodeValue;
                var movie_genre=movies_data[i].getElementsByTagName("genre")[0].childNodes[0].nodeValue;
                var movie_desp="";
                if(movies_data[i].getElementsByTagName("summary")[0])
                {
                    movie_desp=movies_data[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                }
                var movie_cast=Array.from(movies_data[i].getElementsByTagName("actor"),actor=>{
                    var movie_fname=actor.getElementsByTagName("first_name")[0].childNodes[0].nodeValue;
                    var movie_lname=actor.getElementsByTagName("last_name")[0].childNodes[0].nodeValue;
                    return movie_fname+" "+movie_lname;
                }).join(", ")
                table=table + 
                "<tr><td>" +
                movie_title +
                "</td><td>" +
                movie_genre +
                "</td><td>" +
                movie_year +
                "</td><td>" +
                movie_cast +
                "</td><td>" +
                movie_desp +
                "</td></tr>"; 
            }
            document.getElementById("tbl").innerHTML=table;
        })
        .catch(error=>console.log(error))
});