import mongoose, {Document, Model, Schema} from 'mongoose'

//Defining the interface for product document
interface Cart extends  Document {
    customerId: string;
    productId: string;
    price: string;
    quantity: string;
    addedOn: Date
}

//Define the schema for your product
const cartSchema: Schema<Cart> = new mongoose.Schema({
    customerId: String, 
    productId: String,
    price: String,
    quantity: String,
    addedOn: {
        type: Date,
        default: Date.now
    }
})

mongoose.models = {}

// Get a reference to the default connection and its models
const connection = mongoose.connection;
const models = connection.models;

// // Reset the models registry by removing all properties
// Object.keys(models).forEach((modelName) => {
//   delete models[modelName];
// });


//Define the model using the schema
const cartData: Model<Cart> = mongoose.model<Cart>('productData', cartSchema)
export default cartData