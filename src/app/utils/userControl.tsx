import userData from "../model/User";
import dbConnect from "./dbConnect";

export default async function userControl(name, Email, image){
    dbConnect()
    const getUser = await userData.findOne({ userEmail: Email})   
    if (getUser){
        return getUser
    } else {
        
    }
}