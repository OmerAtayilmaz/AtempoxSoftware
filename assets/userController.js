const fs=require('fs');
console.log(__dirname);
const users=JSON.parse(
    fs.readFileSync(`${__dirname}\\assets\\data\\users-simple.json`,'UTF-8'));

exports.checkBody=(req,res,next)=>{
    if(!req.body.name||!req.body.price){
        return res.status(400).json({
            status:'fail',
            message:'Missing name or price'
        })
    }
    next();
}

exports.checkID=(req,res,next,val)=>{
    console.log(`Tour id is ${val}`);
    if(req.params.id*1>users.length){
        return res.status(404).json({
            "status":"fail",
            "message":"Invalid ID"
        });
    }
    next();
}
exports.getAllUsers=(req,res)=>{
    console.log(req.requestTime);
    res.status(200).json({
        status:"success",
        requestedAt:req.requestTime,
        results:users.length,
        data:{
            users:users
        }
    });
}

exports.getUser=(req,res)=>{
    const newId=users[users.length-1].id+1;
    const newTour=Object.assign({id:newId},req.body);
    users.push(newTour);
    fs.writeFile(`${__dirname}\\assets\\data\\users-simple.json`,JSON.stringify(users),err=>{
        res.status(201).json({
            status:'success',
            data:{
                tour:newTour
            }
        }); 
    });
};

exports.updateUser=(req,res)=>{
    console.log(req.body);
    res.status(204).json({
        status:"success",
        data:null
    })
}

exports.deleteUser=(req,res)=>{
    console.log(req.params,req.body);
    res.status(204).json({
        status:"success",
        data:null
    })
}