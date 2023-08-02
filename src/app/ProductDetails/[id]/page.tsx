import dbConnect from "@/app/utils/dbConnect";
import ProductData from "@/app/model/Product";

export default async function Page({params}: {params: {id: string}}){
    dbConnect()
    const productId = params.id
    const product = await ProductData.findOne({ _id: productId})

    return(
        <div className="container">
            <h1>{product.name}</h1>
            <img src={product.image} alt="" />
        </div>
    )
}