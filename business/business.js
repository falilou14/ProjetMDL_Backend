const dal = require("../data/datalayer");
const fs = require("fs");
const filename = "./data/customers.json";

 
const defaultNumber = 10;
const defaultPage = 1;
const maxNumber = 100;

const business = {
    getAllCustomers : function() {
        return dal.getAllCustomers();
    },

    
    getCustomers : function(number, page) {
        //checks param
        if(number === undefined || page === undefined){
            number = defaultNumber;
            page = defaultPage;
        }
        if(number > maxNumber){
            number = maxNumber;
        }

        //recupérer données de la DAL
        const resCustomers = dal.getCustomers(number, page);

        resCustomers.page = page;
        resCustomers.numberByPage = number;
        resCustomers.totalPages = Math.ceil(resCustomers.total / number);

        //return customers
        return resCustomers;
    },

    addCustomers: function(clientJSON){

        console.log("clientJSON", clientJSON);

        if( clientJSON.first === undefined || 
            clientJSON.last === undefined ||
            clientJSON.company === undefined||
            clientJSON.country === undefined ||
            clientJSON.email === undefined ||

            clientJSON.first === " " ||
            clientJSON.last === " " ||
            clientJSON.company === " "||
            clientJSON.country === " "||
            clientJSON.email === " "
            ){
                //,clientJSON.last,clientJSON.company,clientJSON.country,clientJSON.email);
                // on envoie une erreur 
                console.log("champs vides ");
                //  Retour Code d'erreur 
                return {status : 400 , message :" les champs n'ont pas été remplis"};
            }
            console.log(clientJSON.last);
            console.log("BUSINESS");
            const nouveauClient = dal.addCustomer(clientJSON);

            console.log(nouveauClient);
            
            return nouveauClient;

    },
  






modifCustomer: function (data) {

    //on parse l'id en int
    
    id = JSON.parse(data.id);
    
    
    let rawdata = fs.readFileSync(filename);
    
    //parse to object
    
    let customers = JSON.parse(rawdata);
    
    let c = customers.length;
    
    if (id > c || id < 0) {
    
    throw error;
    
    }
    
    if (data.created_at != null) {
    
    data.created_at = null;
    
    }
    
    if (data.first == "") {
    
    
    data.first = customers[id - 1].first;
    
    }
    
    if (data.last == "") {
    
    
    data.last = customers[id - 1].last;
    
    }
    
    if (data.company == "") {
    
    
    data.company = customers[id - 1].company;
    
    }
    
    if (data.email == "") {
    
    
    data.email = customers[id - 1].email;
    
    }
    
    if (data.country == "") {
    
    
    data.country = customers[id - 1].country;
    
    }
    
    
    
    
    dal.modifCustomer(data);
    
    },

delCustomer: function (data) {



    console.log("in delCustomerBusinness");
    
    let rawdata = fs.readFileSync(filename);
    
    //parse to object
    
    let customers = JSON.parse(rawdata);
    
    let c = customers.length;
    
    //on parse l'id en int
    
    idParsed=JSON.parse(data.id);
    
    console.log(idParsed);
    
    if (idParsed > c || idParsed < 0) {
    
    throw error;
    
    }
    
    dal.delCustomer(idParsed);
    
    }

    

};

module.exports = business;