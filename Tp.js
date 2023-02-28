const fs = require("fs"); 
let rawdata = fs.readFileSync("users.json");

let user = JSON.parse(rawdata);

console.log(user); // 1er test d'affichage du fichier Users


/**
 * Fonction qui affiche les pays et leur compteur en ordre decroissant
 */
function printCountry(){ 
    
    let res = {};
    let tab = [];
    
    for (let i=0; i<user.length ;i++){
        var CountryName = user[i].country;
        //console.log(CountryName);
        if (!res[CountryName]) { 
            res[CountryName] = 1;
        }
        else
            res[CountryName]++ ;
    }

    // console.log(res)
    for (let i in res) {
        tab.push({ "country": i, "count": res[i] });
    }
    tab.sort((a, b) => b.count - a.count);
    console.log(tab);
}

printCountry();