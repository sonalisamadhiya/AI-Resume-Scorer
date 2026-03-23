const mongoose =require('mongoose');


mongoose.connect('mongodb+srv://samadhiyasonali32_db_user:LxAFlB6Wg8gDWMHH@cluster0.0otbamq.mongodb.net/?appName=Cluster0').then((res)=>{
  console.log("Database connected Successfully");
}).catch((err)=>{
  console.log("Something error",err);
})





// LxAFlB6Wg8gDWMHH

// samadhiyasonali32_db_user

// mongodb+srv://samadhiyasonali32_db_user:LxAFlB6Wg8gDWMHH@cluster0.0otbamq.mongodb.net/?appName=Cluster0