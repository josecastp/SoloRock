/* var array = [
    {  fecha:"29-10-02",
       registros:52
    },
    {
       fecha:"31-10-04",
       registros:99
     },
    {
       fecha:"26-10-05",
       registros:8
    },
    {
       fecha:"25-10-15",
       registros:5
    }
]; */
var array = [
    {
      fecha: "2021-06-17",
      titulo: 'HALLOWEEN',
     
    },
    {
      fecha: "2020-07-09",
      titulo: 'SIMPSON',
     
    },
    {
      fecha: "2024-07-18",
      titulo: 'EDDIE',
    
    }
  ];
  
//console.log(array.sort((a, b) => a.fecha > b.fecha));
array.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.

    return new Date(b.fecha) - new Date(a.fecha);
  });
  console.log(array);
  /* 

  <li <% if (page_name === 'about') { %>class="current" <% } %> ><a href="/about">About</a></li>


 */