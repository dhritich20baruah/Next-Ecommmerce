import userData from "../model/User"; // Import UserModel type
import dbConnect from "./dbConnect";

async function getUserByEmail(Email: string) {
  try {
    await dbConnect(); // Assuming this returns a Promise
    const getUser = await userData.findOne({ userEmail: Email });

    if (getUser) {
      return getUser;
    } else {
      console.log('User not found');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}

export default getUserByEmail;
