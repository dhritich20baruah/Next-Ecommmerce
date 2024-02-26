import { pool } from "../../../../utils/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  if(req.method !== "POST"){
    return NextResponse.json({status: 405})
  }
  const { userName, userEmail, userImage } = await req.json();
  
  console.log(userName, userEmail, userImage);
  try {
    const customer = await pool.query("SELECT * FROM customer where userEmail = $1", [userEmail])

    if (customer.rows.length>0){
      return NextResponse.json(customer.rows)
    }
    else{
      const newCustomer = await pool.query(`INSERT INTO customer (userName, userEmail, userImage) VALUES ($1, $2, $3) RETURNING *`, [userName, userEmail, userImage])
      console.log('MEMBER ADDED')
      return NextResponse.json({ message: "OK"}, { status: 200 });
    }
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
