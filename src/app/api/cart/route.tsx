import cartData from "@/app/model/Cart";
import dbConnect from "@/app/utils/dbConnect";
import { NextResponse } from "next/server";
dbConnect()

export const POST = async (req: Request, res: Response) => {
    const {customerId, productId, price, quantity} = await req.json()
    try{
        let addItem = new cartData({
            customerId, productId, price, quantity
        })
        console.log(addItem)
        await addItem.save()
        return NextResponse.json({ message: "OK", addItem }, {status: 200})
    }
    catch (err){
        return NextResponse.json({
            message: "Error", err
        },
        {
            status: 500
        })
    }
}