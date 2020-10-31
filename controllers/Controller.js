//const Materials = require('../models/Model');
const model_info = require('./../models/Model');
//GET request
//route :  GET /api/v1/:semester/:chapter
exports.getTopicsAndMaterials = async (req,res,next) => {
    var chapter = req.params.chapter;
    var semester = req.params.semester;
    console.log('received get req');
    console.log(semester + ' is name ');
    console.log(chapter + ' is chap ');
    try{
        const materials = await model_info.find({name : chapter, semester : semester});
        return res.status(200).json({
            success : true,
            data : materials
        })

    }
    catch{
        return res.status(500).json({
            success:false,
            error : 'Server Error'
        })
    }  
}

exports.pushFiles = async (req,res,next) => {
    var chapter = req.params.chapter;
    var semester = req.params.semester;
    var topic = req.body.topic;
    var paper = req.body.paper || {

    }
    console.log(req.body);
    console.log(topic);
    console.log(chapter);
    console.log(semester);
    try{
        var result = await model_info.find({name : chapter, semester : semester, topic : topic});
        // model_info.update(
        //     { _id: item._id }, 
        //     { $push: { name: value } },
        //     done
        // );
        return res.status(200).json({
            success : true,
            data : result
        })
    }
    catch{
        return res.status(500).json({
            success:false,
            error : 'Server Error'
        })
    }  
}