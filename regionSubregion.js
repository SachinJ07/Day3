        
        let XMLHttpRequest = require('xhr2');
        let xhr = new XMLHttpRequest();
        
        
        xhr.open('GET','https://restcountries.com/v3.1/all');
        
        xhr.send();
        
        xhr.onload =function() {
           let countries = JSON.parse(xhr.responseText);
           for(let i = 0 ; i< countries.length ; i++){
            console.log(countries[i].name);
            console.log(countries[i].region);
            console.log(countries[i].subregion); 
            console.log(countries[i].population);
        }
        }
         