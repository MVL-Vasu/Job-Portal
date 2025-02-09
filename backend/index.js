require("dotenv").config();
const PORT = process.env.PORT || 3001;
const express = require("express");
const cors = require("cors");
const getConnection = require("./utils/getConnection");
const Jobs = require("./models/Job");
const { default: clerkWebhooks } = require("./controllers/webhooks");
const app = express();

app.use(cors());
app.use(express.json());

getConnection();

app.get("/", (req, res) => {
     res.send("Backend Working")
});

app.post("/add-job", async (req, res) => {


     try {

          const job = new Jobs(req.body)
          await job.save();

          res.status(200).json({ success: true, message: "Job Posted successfully" });

     } catch (e) {

          res.status(500).json({success: false, error : e, message : "Job Posting failed" });

     }

});

app.post("/get-all-jobs", async (req, res) => {

     try {
          
          const jobs =  await Jobs.find();
          res.status(200).json({ success: true, message: "Job Fetched Successfully", jobs : jobs });

     } catch (e) {

          res.status(404).json({success: false, error : e, message : "Failed to Fetch Jobs"});
          console.log(e);

     }

});

app.post("/webhooks", clerkWebhooks);

app.listen(PORT, () => {

     console.log("listening on port " + PORT);

})