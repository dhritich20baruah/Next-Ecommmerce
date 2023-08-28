import dbConnect from "@/app/utils/dbConnect";
import ProductData from "@/app/model/Product";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  dbConnect();
  const productId = params.id;
  const product = await ProductData.findOne({ _id: productId });

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col col-md-6">
        <img
          src={product?.image}
          alt=""
          className=""
          style={{ width: "100%", height: "25em", objectFit: "contain" }}
          />
          <div className="d-flex justify-content-center my-5">
          <button className="btn btn-danger text-light fw-bold m-2">BUY</button>
          <Link href="/Cart">
          <button className="btn btn-warning text-secondary fw-bold m-2">ADD TO CART</button>
          </Link>
          </div>
        </div>
        <div className="col col-md-6">
          <h3>{product?.name}</h3>
          <p className="fs-3 text-danger"> {product?.price}</p>
          <div className="my-3">
            <span className="fw-bold mx-2">Quantity</span>
            <input type="number" name="quantity" id="quantity" className="border border-light-subtle mx-1" style={{width: '2em', height: '2.5em'}}/>
          </div>
          <p className="fw-bold">Product Description</p>
          <p className="">{product?.details}</p>
          <p>{product?.description}</p>
        </div>
      </div>
    </div>
  );
}
