require('dotenv').config()
const express = require('express');
const mongoose = require("mongoose"); 
const Product = require('./models/productModels')
const productRoute = require('./routes/productRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const cors = require('cors')


const app = express();

const PORT = process.env.PORT || 3000
const uri = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
   

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

// routes

app.use('/api/products', productRoute);

app.get("/", (req, res) => {
    
    // res.send('Hello MODE API')
})

app.get('/blog', (req, res) => {
    res.send("Hello Blog");
})

app.use(errorMiddleware);

// app.get('/products', async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// app.get("/products/:id", async(req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// app.post('/products', async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: error.message })
//     }
// })

// // delete a product
// app.delete("/products/:id", async(req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if(!product) {
//             return res.status(404).json({ message: `cannot find any product ith ID ${id}`})
//         }
//         res.status(200).json(product); 
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })





// // update the product
// app.put("/products/:id", async(req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         // we cannot find any product in database
//         if(!product){
//             return res.status(404).json({ message: `cannot find any product with ID ${id}`})
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
        
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// });


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() => {
    console.log("connected to Mongo Db");
    app.listen(PORT, () => {
        console.log(`Node API app is running in port ${PORT}`)
    });
}).catch((error) => {
    console.log(error);
})



