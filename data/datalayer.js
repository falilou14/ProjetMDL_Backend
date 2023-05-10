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


        let rawdata =fs.readFileSync(filename);
        let customers=JSON.parse(rawdata);
        let c=customers.length;

        // const getNewId = ObjectClient => Math.max(...ObjectClient.map(customer => customer.id))+1;


        // numCustomer = getNewId(ObjectClient);

        clientJSON.id = c+1;

        customers.push(clientJSON);
        // date de l'ajout du client 

        clientJSON.created_at = new Date();

        //ajouter clientJSON dans objetClient 

        customers.push(clientJSON);

        fs.writeFileSync(filename ,JSON.stringify(customers));

        return clientJSON;


        
    },


    removeCustomer : function (){




    },

    

modifCustomer: function (custom) {

    let rawdata = fs.readFileSync(filename);
    
    //parse to object
    
    let customers = JSON.parse(rawdata);
    
    let c = customers.length;
    
    id = JSON.parse(custom.id);
    
    
    
    
    customers[id - 1].first = custom.first;
    
    customers[id - 1].last = custom.last;
    
    customers[id - 1].country = custom.country;
    
    customers[id - 1].email = custom.email;
    
    customers[id - 1].company = custom.company;
    
    customers[id - 1].created_at = new Date();
    
    
    
    
    fs.writeFile(filename, JSON.stringify(customers), (error) => {
    
    if (error) throw error;
    
    });
    
    
    return customers;
    
    },
    


    
};

module.exports = datalayer;