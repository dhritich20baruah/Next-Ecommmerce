import mongoose, {Document, Model, Schema} from 'mongoose'

//Defining the interface for product document
interface Product extends  Document {
    name: string;
    image: string;
    description: string;
    details: string;
    price: string;
}

//Define the schema for your product
const productSchema: Schema<Product> = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    details: String,
    price: String,
})

mongoose.models = {}

// Get a reference to the default connection and its models
const connection = mongoose.connection;
const models = connection.models;
console.log(models)
// // Reset the models registry by removing all properties
// Object.keys(models).forEach((modelName) => {
//   delete models[modelName];
// });


//Define the model using the schema
const ProductData: Model<Product> = mongoose.model<Product>('productData', productSchema)
export default ProductData