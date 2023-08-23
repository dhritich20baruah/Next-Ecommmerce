import dbConnect from "../utils/dbConnect";
import ProductData from "../model/Product";
import Link from "next/link";

export default async function page() {
  dbConnect();
  const products = await ProductData.find({});

  return (
    <main className="container">
        <div className="d-flex">
      {products.map((element) => {
        return (
          <div className="m-3" style={{ width: "18rem", height: '50vh' }} key={element._id}>
            <Link href={"/ProductDetails/"+element._id} style={{textDecorationLine: 'none'}}>
            <img src={element.image} className="card-img-top" alt="..." style={{width:'100%', height:'50%', objectFit:'cover'}}/>
            <div className="text-center">
              <p className="fw-bold text-dark">{element.name}</p>
              <button className="btn btn-warning text-secondary">
                Add to Cart
              </button>
            </div>
          </Link>
          </div>
        );
      })}
      </div>
    </main>
  );
}
