const mongoose = require('mongoose');


const mongoURI = 'mongodb+srv://Edureka001:Mongodb%40123456@cluster0.y9g57yt.mongodb.net/FooDies?retryWrites=true&w=majority'
const mongoDB = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, res) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
            const fetchedData = await mongoose.connection.db.collection("foodItems");
            fetchedData.find({}).toArray( async function (err, data) {

                const foodCategory =   await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function(err,catData){

                    if (err) console.log(err);
                    else {
                    global.foodItem =data;
                    global.foodCategory =catData;

                
                 }

                })
                // if (err) console.log(err);
                // else {
                //     global.foodItem =data;
                
                // }
            })
        }




    });
}
module.exports = mongoDB;
