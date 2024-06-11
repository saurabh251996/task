
const user=require('../models/userModel')

const bcrypt=require('bcrypt')

let signUp=async function(req,res)
  {
   try
   {

    let { name,password,email}=req.body
    console.log(name,password,email)
    let user2=await user.findOne({email})
    // console.log(user,"user")
    if (user2) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
 
    user1= new user({
        name,
        email,
        password:hashedPassword
    });
    console.log(user1)
    await user1.save();

    res.status(201).json({ message: 'User created successfully' });
    // res.status(201).json({ user });
    
   }
   
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
   

}

let createApi=async function(req,res){


    try{
      let  {
            name,
            value,
            source_type,
            dataType,
            source_id
          }=req.body
          let data=req.body
        // console.log(data)
        let userData= await user.insertMany(data)

        res.status(201).json({ message: 'User created successfully' });

    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server error');

    }
}

module.exports={
    signUp,
    createApi
}
