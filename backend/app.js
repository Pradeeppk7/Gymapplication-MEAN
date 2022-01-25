const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongodb = require("mongodb").MongoClient;

const app = express();

app.use(cors());

app.use(bodyparser.json());

var db;

mongodb.connect("mongodb+srv://hammer:ham@clusterp.rg4la.mongodb.net/gymusers?retryWrites=true&w=majority", (error, result) => {

    if (error) {
        console.log("DB Not Connected");
    }
    else {
        db = result.db("gymusers");
        console.log("DB Connected");
    }
});

app.use((req, res, next) => {             // middleware common for all the paths

    console.log("Middleware 1");
    next();
});

app.use("/home", (req, res, next) => {             // middleware only for the /home path

    console.log("Middleware 2");
    next();
});

function verifyUser(req, res, next) {
    console.log("User Verified");

    next();
}

app.get("/", (req, res) => {

    console.log("Index Page");

    res.send("<h1>Welcome to Express</h1>");
});

app.get("/home", verifyUser, (req, res) => {

    console.log("Home Page");

    var data = { a: "hi", b: "hello" };

    res.json(data);
});

app.post("/register", (req, res) => {

    req.body._id = new Date().getTime();

    console.log(req.body);

    db.collection("users").insertOne(req.body, (error, data) => {

        if (error) {
            res.status(403).json("Error in Inserting Doc");
        }
        else {
            res.json("User Registered Successfully!");
        }
    })

});


app.post("/login", (req, res) => {

    console.log(req.body);

    db.collection("users").find(req.body, { projection: { _id: 1, Fname: 1, lname: 1, userage: 1, gender: 1 } }).toArray((error, data) => {

        if (error) {
            res.status(403).json("Error");
        }
        else {
            res.json(data);
        }

    });


});







app.get("/allusers", (req, res) => {

    db.collection("users").find(null, { projection: { userpass: 0 } }).toArray((error, data) => {

        if (error) {
            res.status(403).json("Error in Finding the Doc");
        }
        else {
            res.json(data);
        }

    });
});
app.get("/uemailcheck/:uemail", (req, res) => {
    console.log(req.params.uemail);

    db.collection("users").find({ uemail: req.params.uemail }, { projection: { _id: 1 } }).toArray((error, data) => {

        if (error) {
            res.status(403).json("Error in Finding the Doc");
        }
        else {
            res.json(data);
        }
    });

});
app.get("/uuemailcheck/:uemail", (req, res) => {
    console.log(req.params.uemail);

    db.collection("users").find({ uemail: req.params.uemail }, { projection: { _id: 1 } }).toArray((error, data) => {

        if (error) {
            res.status(403).json("Error in Finding the Doc");
        }
        else {
            res.json(data);
        }
    });

});
app.get("/getuser/:userid", (req, res) => {
    console.log(req.params.userid);
    db.collection("users").find({ _id: Number(req.params.userid) }).toArray((error, data) => {

        if (error) {
            res.status(403).json("Error in Finding the Doc");
        }
        else {
            res.json(data);
        }
    });

});
app.get("/profile/:userid", (req, res) => {
    console.log(req.params.userid);
    db.collection("users").find({ _id: Number(req.params.userid) }, { projection: { userpass: 0 } }).toArray((error, data) => {

        if (error) {
            res.status(403).json("Error in Finding the Doc");
        }
        else {
            res.json(data);
        }
    });

});
app.put("/cart", (req, res) => {


    console.log(req.body);
   

    
    var condition = { _id: req.body._id };
    var newValues = { $set: { date:req.body.date, pack:req.body.pack, level: req.body.level, isdietplan: req.body.isdietplan, istrain: req.body.istrain, payment: req.body.payment, isbath: req.body.isbath , paid:req.body.paid, coupon:req.body.coupon } }

    db.collection("users").update(condition, newValues, (error, data) => {

        if (error) {
            res.status(403).json("Error in Finding the Doc");
        }
        else {
            res.json("User data updated successfully");
        }

    })

});
app.put("/updateuser", (req, res) => {
    console.log(req.body);
    var condition = { _id: req.body._id };
    var newValues = { $set: { Fname: req.body.Fname, lname: req.body.lname, userage: req.body.userage, uemail: req.body.uemail, level:req.body.level, gender:req.body.gender, pack:req.body.pack ,isbath:req.body.isbath, isdietplan:req.body.isdietplan, istrain:req.body.istrain, date:req.body.date} }

    db.collection("users").update(condition, newValues, (error, data) => {

        if (error) {
            res.status(403).json("Error in Finding the Doc");
        }
        else {
            res.json("User data updated successfully");
        }

    })


});

app.delete("/deleteuser/:userid", (req, res) => {

    console.log(req.params);

    db.collection("users").deleteOne({ _id: Number(req.params.userid) }, (error, data) => {

        res.json("Users deleted successfully");
    });
});

app.get("/searchuser/:searchtxt?", (req, res) => {
    console.log(req.params.searchtxt);
    if (req.params.searchtxt != undefined) {
        var search = new RegExp(req.params.searchtxt, "i");
        var searchCond = { Fname: search };

    }
    else {
        var searchCond = null;
    }

    db.collection("users").find(searchCond).toArray((error, data) => {
        res.json(data);
    });

});


module.exports = app;