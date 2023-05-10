var express = require("express");
var cors = require("cors");
const business = require("../business/business");

var app = express();




app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next();
    
    });


const apiServ = {
    start: function(port) {
        app.use(express.json());

        app.use(cors());

        app.get("/test", function(req, res){
            const testObj = {
                test: "test "
            };

            console.log("call done");
            res.json(testObj);
        });

        app.get("/api/customers", function(req, res){

            const number = req.query.number;
            const page = req.query.page;




            // get customers from business layer
            
            const resCustomers = business.getCustomers(number, page);

            // res.json(customers);
            res.json(resCustomers);
        });

        app.post("/api/addclient", function(req,res){
            
            var clientJSON = {
                "id ": null,
                "email": req.body.email,
                "first": req.body.first,
                "last" : req.body.last,                                       
                "company": req.body.company,
                "created_at": null,
                "country": req.body.country,

            };
console.log("API");
            jsonRes = business.addCustomers(clientJSON);

            if (jsonRes === 400){
                res.status(400).send(jsonRes.message);


            }
            else{
                res.json(jsonRes);

            }
        });
        app.post("/api/modclient", function (req, res) {

            const customer = req.body;
            
            
            const resCustomers = business.modifCustomer(customer);
            
            
            res.json(resCustomers);
        });



        
        

        app.listen(port, function(){
            console.log("Server running on port " + port);
        });
    }
}

module.exports = apiServ;