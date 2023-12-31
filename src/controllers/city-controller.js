const { CityService}=require("../services/index");


const cityService= new CityService(); // creating CityService Object

//POST
const create=async(req, res)=>{
    try{
        const city=await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success:true,
            message:" successfully created a city",
            err:{}
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            messgae:"Not able to create a city",
            err: error
        })
    }
}


//DELETE ->/cit/:id
const destroy=async(req,res)=>{
    try{
        const response=await cityService.destroy(req.params.id);
        return res.status(200).json({
            data: city,
            success:true,
            message:" successfully deleted a city",
            err:{}
        });   
    }catch(error){
        console.log(error);
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            messgae:"Not able to delete a city",
            err: error
        })
    }
}

//GET --> /city/:id
const get= async(req, res)=>{
    try{
        const city=await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success:true,
            message:" successfully fetched a city",
            err:{}
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            messgae:"Not able to fetch a city",
            err: error
        })
    }
}

const update= async ( req, res)=>{
    try{
        const city=await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: city,
            success:true,
            message:" successfully updated a city",
            err:{}
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            messgae:"Not able to update a city",
            err: error
        })
    }
}