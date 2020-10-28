const Materials = require('../models/Model');

//GET request
//route :  GET /api/v1/:chapter
exports.getTopicsAndMaterials = async (req,res,next) => {
    var chapter = req.params.chapter;
    try{
        // console.log(email);
        const materials = await Materials.find({name : chapter});
        
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

