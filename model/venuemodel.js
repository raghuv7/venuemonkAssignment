const mongoose = require('mongoose');
const mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'venuemonk'
})
connection.connect(function(err){
    if(err){
        console.log('errrr',err)
    }else{
        console.log('connected on 4000')
    }
})
var schema = mongoose.Schema({
    id:String,
    name:String,
    city:String,
    address:String,	
    isLiquorAvailable:Boolean,
    isNonVegAvailable:Boolean
})

var AllMongoData =[];
var VenueModel = mongoose.model('venues',schema);


module.exports.sinkData = function(callback){
    VenueModel.find({})
    // .limit(3)
    .then((res,err)=>{
        
            // console.log(res,err);
            AllMongoData = res;
            getTableData((ret)=>{
               // console.log('ffffff')
                InSertINTOTable();
                callback(res,false);
            }) 
    })    
}
var AllNewData=[]
function getTableData(callback){
    connection.query("SELECT * FROM venues",function(err,rows,fields){
        // console.log('rows',err,rows,fields)
        var AllTableData = rows;
        AllNewData = [];
        //console.log('AllTableData',AllTableData)
        if(AllTableData.length>0){

            for(var i=0;i<AllMongoData.length;i++){
              //  console.log('AllMongoData',AllMongoData)
                var exists = false;

                for(var k=0;k<AllTableData.length;k++){
                    if(AllTableData[k].id ==AllMongoData[i]._id){
                        exists = true;                        
                        break;
                    }                    
                }
                if( exists == false){
                    AllNewData.push(AllMongoData[i]);
                }
                if(i==AllMongoData.length-1){
                    callback(true);
                }               
            }
        }else{
            AllNewData = AllMongoData;
            callback(true);
        }
    })
}
function InSertINTOTable(){
   // console.log('length0',AllNewData.length)
    if(AllNewData.length>0){
      //  console.log('length',AllNewData.length)
        


        var loop = function(x){
            
            if(x<AllNewData.length){
                var values = [
                    [AllNewData[x]._id, AllNewData[x].name, AllNewData[x].address,AllNewData[x].city,AllNewData[x].isLiquorAvailable,AllNewData[x].isNonVegAvailable               
                    ],              
                  ];
                connection.query("INSERT INTO venues (id, name, address, city,isLiquorAvailable,isNonVegAvailable) VALUES ?" ,[values],function(err,rows,fields){
                    console.log('successsssss',err);
                    if(!err){
                        console.log('successsssss');
                    }
                    loop(++x);
                })  
            }else{
            }
        }
        loop(0)
    }else{

    }
}