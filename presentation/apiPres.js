var express = require("express");
var cors = require("cors");
const business = require("../business/business");

var app = express();


const apiServ = {
    start: function(port) {
        app.use(express.json());

        app.use(cors());

        app.get("/test", function(req, res){
            const testObj = {
                test: "test"
            };

            console.log("call done");
            res.json(testObj);
        });

        app.get("/api/customers", function(req, res){

            const number = req.query.number;
            const page = req.query.page;

            console.log("number", number);
            console.log("page", page);


            // get customers from business layer
            // const customers = business.getAllCustomers();
            const resCustomers = business.getCustomers(number, page);

            // res.json(customers);
            res.json(resCustomers);
        });

        app.listen(port, function(){
            console.log("Server running on port " + port);
        });
    }
}

module.exports = apiServ;