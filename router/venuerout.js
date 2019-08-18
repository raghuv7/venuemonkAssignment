const express = require('express');
const router = express.Router();
var model = require('../model/venuemodel');
router.get('/sinkdata',(req,res)=>{


    model.sinkData((data,err)=>{
        // console.log('data',data,err)
        if(data){
            res.send({success:true,msg:'data sinked',data:data});
        }else{
            res.send({success:false,msg:'error'})
        }
    })


})

module.exports = router;
