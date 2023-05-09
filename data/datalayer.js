const fs = require("fs");



const filename = "./data/customers.json";

let datalayer = {
    getAllCustomers: function () {
        //read json file
        const data = fs.readFileSync(filename);

        //parse to object
        const customers = JSON.parse(data);

        //return customers
        return customers;
    },

    getCustomers: function (number, page) {
        
        {


            //read json file
            let rawdata = fs.readFileSync(filename);

            //parse to object
            let customers = JSON.parse(rawdata);

            const total = customers.length;

            //filter by number and page
            if (number && page) {
                customers = customers.slice((page - 1) * number, page * number);
            }

            const result = {
                total: total,
                result: customers
            };

            return result;

        }
    },



    
    addCustomer: function(clientJSON){

        const getNewId = ObjectClient => Math.max(...ObjectClient.map(customer => customer.id))+1;


        numCustomer = getNewId(ObjectClient);
        clientJSON.id = numCustomer;

        // date de l'ajout du client 

        clientJSON.created_at = currentDate;

        //ajouter clientJSON dans objetClient 

        ObjectClient.push(clientJSON);

        fs.writeFileSync(filename ,JSON.stringify(ObjectClient));

        return clientJSON;

    },


    removeCustomer : function (){

    }
};

module.exports = datalayer;