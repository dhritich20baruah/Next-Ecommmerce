"use server"
import { pool } from "../../../../utils/dbConnect"

export default async function addToCart(productId: string, userId: any, quantity: number){
    const product_id = productId
    const user_id = userId
    const qtty = quantity
    const date = Date.now()

    try {
        await pool.query(`INSERT INTO cart (product_id, user_id, quantity, addedOn) VALUES ($1, $2, $3, $4) RETURNING *`, [product_id, user_id, qtty, date])
        console.log("added")
    } catch (error) {
        console.log(error)
    }
}