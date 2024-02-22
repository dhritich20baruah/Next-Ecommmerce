// import dbConnect from "../utils/dbConnect";
// import ProductData from "../model/Product";
import Link from "next/link";
import { pool } from "../../../utils/dbConnect";

export default async function page() {
  // dbConnect();
  // const products = await ProductData.find({});
  const result = await pool.query("SELECT * FROM product");
  const products = result.rows;

  return (
    <main className="container m-2 mx-auto">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {products.map((element) => {
          return (
            <div
              className="col"
              key={element.id}
            >
              <Link
                href={"/ProductDetails/" + element.id}
                style={{ textDecorationLine: "none" }}
              >
                <div className="card h-75 shadow-lg">
                <img
                  src={element.image}
                  className="card-img-top"
                  alt="..."
                  />
                <div className="text-center card-body">
                  <p className="card-title">{element.name}</p>
                  <p className="card-text text-danger">{element.price}</p>
                </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
