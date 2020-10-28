const Materials = require('../models/Model');

//GET request
//route :  GET /api/v1/:semester/:chapter
exports.getTopicsAndMaterials = async (req,res,next) => {
    var chapter = req.params.chapter;
    var semester = req.params.semester;
    try{
        const materials = await Materials.find({name : chapter, semester : semester});
        
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

