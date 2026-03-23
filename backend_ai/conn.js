const mongoose =require('mongoose');


mongoose.connect('mongo Atlas link').then((res)=>{
  console.log("Database connected Successfully");
}).catch((err)=>{
  console.log("Something error",err);
})



