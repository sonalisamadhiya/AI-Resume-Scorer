const dns = require("dns");
//change dns 
dns.setServers(["1.1.1.1","8.8.8.8"]);



const express = require('express');
const cors = require('cors');
const app = express();
const PORT=4000;

require('./conn'); // Import the database connection file
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors({
  credentials:true,
  origin:"https://localhost:5173"
}))


 const UserRoutes = require('./Routes/user');
 const ResumeRoutes = require('./Routes/resume');

 app.use('/api/user',UserRoutes);
  app.use('/api/resume',ResumeRoutes);

app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);
});