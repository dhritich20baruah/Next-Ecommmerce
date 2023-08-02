import dbConnect from "@/app/utils/dbConnect";
import ProductData from "@/app/model/Product";

export default async function Page({params}: {params: {id: string}}){
    dbConnect()
    const productId = params.id
    const product = await ProductData.findOne({ _id: productId})
 
    return(
        <div className="container">
            <h1>{product?.name}</h1>
            <div className="row">
            <img src={product?.image} alt="" className="col col-md-6" style={{ width:'50%', height:'25em', objectFit:'contain'}}/>
            <div className="col col-md-6">
            <p>{product?.details}</p>
            <p>{product?.description}</p>
            </div>
            </div>
        </div>
    )
}