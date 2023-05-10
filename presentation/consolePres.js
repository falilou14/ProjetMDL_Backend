
const readlineSync = require('readline-sync');
const business = require("../business/business");

const consolePres = {
    start: function () {
        console.log("Welcome to the custome manager");
        console.log("1. List customers");
        console.log("2. Add a customer");
        console.log("3. Modify a customer");
        console.log("4. Delete a customer");
        console.log("5. Exit and utilize the web interface");

        var choice = readlineSync.questionInt("What do you want to do ? ");
        switch (choice) {
            case 1:
                console.log("List customers");
                //affichage des clients
                business.getAllCustomers();
                break;
            case 2:
                console.log("Add a customer");
                //recuperation des données
                var a = readlineSync.question("What is the first name of the customer ? ");
                var b = readlineSync.question("What is the last name of the customer ? ");
                var c = readlineSync.question("What is the company of the customer ? ");
                var d = readlineSync.question("What is the email of the customer ? ");
                var e = readlineSync.question("What is the phone number of the customer ? ");
                var f = readlineSync.question("what is the country of the customer ?");
                //creation du client
                var data = {        
                    id: null,
                    first: a,
                    last: b,
                    company: c,
                    email: d,
                    number: e,
                    country: f,
                    created_at: null,

                }
                business.addCustomer(data);


                break;
            case 3:
                //recuperation des données
                console.lstartog("Modify a customer");
                var id = readlineSync.questionInt("What is the id of the customer you want to modify ? ");
                var a = readlineSync.question("voulez vous modifier le nom ? (y/n) ");
                if (a == "y") {
                    var first = readlineSync.question("What is the new first name ? ");
                }
                else {
                    var first = null;
                }
                var b = readlineSync.question("voulez vous modifier le prenom ? (y/n) ");
                if (b == "y") {
                    var last = readlineSync.question("What is the new last name ? ");
                }
                else {
                    var last = null;
                }
                var c = readlineSync.question("voulez vous modifier le pays ? (y/n) ");
                if (c == "y") {
                    var country = readlineSync.question("What is the new country ? ");
                }
                else {
                    var country = null;
                }
                var d = readlineSync.question("voulez vous modifier l'email ? (y/n) ");
                if (d == "y") {
                    var email = readlineSync.question("What is the new email ? ");
                }

                else {
                    var email = null;
                }
                var e = readlineSync.question("voulez vous modifier la societe ? (y/n) ");
                if (e == "y") {
                    var company = readlineSync.question("What is the new company ? ");
                }
                else {
                    var company = null;
                }
                var f = readlineSync.question("voulez vous modifier le numero de telephone ? (y/n) ");
                if (f == "y") {
                    var number = readlineSync.question("What is the new number ? ");
                }
                else {
                    var number = null;start
                }
                //modification du client
                var data = { id, first, last, country, email, company, number, created_at: null };
                business.modifCustomer(data);
                break;
            case 4:
                console.log("Delete a customer");
                //id du client a supprimer
                var id = readlineSync.questionInt("What is the id of the customer you want to delete ? ");
                business.delCustomer(id);
                break;
            case 5:
                console.log("Exit");
                break;
            default:start
                console.log("Error");



        }
    }
}
