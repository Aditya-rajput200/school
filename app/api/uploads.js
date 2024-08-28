const express = require("express");
const app = express();
const cors = require("cors");
const cloudinary = require("cloudinary");

app.use(express.json());
app.use(cors());

cloudinary.config({
  cloud_name: "djp96kud7",
  api_key: "573683193438374",
  api_secret: "I8x0rlcF3Wdu1sCX6KKMatkVuaE",
  secure: true,
});

app.get("/uploads", async (req, res) => { 
  cloudinary.v2.api.resources(
    {
      type: "upload",
      prefix: "samples/food",
    },
    function (error, result) {
      if (result) {
        console.log(result);
        res.status(200).json({
          message: "success",
          images: result.resources,
        });
      }
      console.log(result)
    }
  );
});



const PORT = 5000;
app.listen(PORT, () => {
  console.log(` You are listening on ${PORT}`);
});




// import cloudinary from 'cloudinary';
// import nc from 'next-connect';

// // Initialize Cloudinary
// cloudinary.config({
//   cloud_name: 'djp96kud7',
//   api_key: '573683193438374',
//   api_secret: 'I8x0rlcF3Wdu1sCX6KKMatkVuaE',
//   secure: true,
// });

// // Create a Next.js API route
// const handler = nc().get(async (req, res) => {
//   try {
//     // Fetch images from Cloudinary
//     const result = await cloudinary.v2.api.resources({
//       type: 'upload',
//       prefix: 'samples/food',
//     });

//     // Send the images as a response 
//     res.status(200).json({
//       message: 'success',
//       images: result.resources,
//     });
//   } catch (error) {
//     console.error('Error fetching images from Cloudinary:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// export default handler;