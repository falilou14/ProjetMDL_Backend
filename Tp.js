const fs = require("fs"); 
let rawdata = fs.readFileSync("users.json");

let user = JSON.parse(rawdata);

//console.log(user); // 1er test d'affichage du fichier Users


/**
 * Fonction qui affiche les pays et leur compteur en ordre decroissant
 */
function printCountry(){ 
    
    
    let resultat = {}; 
    let tab = [];
    
    for (let i=0; i<user.length ;i++){
        
        var CountryName = user[i].country;
        //console.log(CountryName);
        if (!resultat[CountryName]) { 
            resultat[CountryName] = 1;
        }
        else
            resultat[CountryName]++ ;
    }
  
    // console.log(resultat)
    for (let i in resultat) {
        tab.push({ "country": i, "count": resultat[i] });
    }
    tab.sort((a, b) => b.count - a.count); // on trie de façon décroissante 
    console.log(tab);
}

//printCountry();


/**
 * Fonction qui affiche les compagies et leur compteur en ordre decroissant
 */
function printCompany(){
    let sortie = {}; 
    let tableau = [];

    for (let i=0; i<user.length ;i++){
        var CompanyName = user[i].company;
        
        if (!sortie[CompanyName]) { 
            sortie[CompanyName] = 1;
        }
        else
            sortie[CompanyName]++ ;
    }
  
    // console.log(resultat)
    for (let i in sortie) {
        tableau.push({ "company": i, "count": sortie[i] });
    }
    tableau.sort((a, b) => b.count - a.count); // on trie de façon décroissante 
    console.log(tableau);

}

printCompany();