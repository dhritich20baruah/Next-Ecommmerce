import userData from "@/app/model/User";
import dbConnect from "@/app/utils/dbConnect";
import { NextResponse } from "next/server";
dbConnect();

export const POST = async (req: Request, res: Response) => {
  const { userName, userEmail, userImage } = await req.json();
  
  console.log(userName, userEmail, userImage);
  try {
    const existingUser = await userData.findOne({ userEmail });
    if (existingUser) {
      return NextResponse.json({message: 'User already exist'});
    }
    let addUser = new userData({
      userName,
      userEmail,
      userImage,
    });
    console.log(addUser);
    await addUser.save();
    return NextResponse.json({ message: "OK", addUser }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error",
        err,
      },
      {
        status: 500,
      }
    );
  }
};
