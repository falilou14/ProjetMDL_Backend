const dal = require("../data/datalayer");

 
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
        if( clientJSON.fisrt === undefined || 
            clientJSON.last === undefined ||
            clientJSON.company === undefined||
            clientJSON.country === undefined ||
            clientJSON.email === undefined ||

            clientJSON.fisrt === " " ||
            clientJSON.last === " " ||
            clientJSON.company === " "||
            clientJSON.country === " "||
            clientJSON.email === " "
            ){
                // on envoie une erreur 
                console.log("champs vides ");
                //  Retour Code d'erreur 
                return {status : 400 , message :" les champs n'ont pas été remplis"};
            }

            const nouveauClient = dal.addCustomer(clientJSON);
            
            return nouveauClient;

    }

    

};

module.exports = business;