import mongoose, {Document, Model, Schema} from 'mongoose'

//Defining the interface for product document
interface User extends  Document {
    userName: string;
    userImage: string;
    userEmail: string;
    details: string;
    price: string;
    addedOn: Date
}

//Define the schema for your product
const userSchema: Schema<User> = new mongoose.Schema({
    userName: String,
    userImage: String,
    userEmail: String,
    details: String,
    price: String,
    addedOn: {
        type: Date,
        default: Date.now
    }
})

mongoose.models = {}

//Define the model using the schema
const userData: Model<User> = mongoose.model<User>('productData', userSchema)
export default userData