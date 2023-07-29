import dbConnect from "@/app/utils/dbConnect";
import ProductData from "@/app/model/Product";
import {redirect} from "next/navigation"

type ProductFormData = {
  name: string;
  image: string;
  description: string;
  details: string;
  price: string;
};

export default function Page() {
    
    async function addProduct(data: FormData) {
    "use server";
    dbConnect();
    const name = data.get("productName")?.valueOf();
    const image = data.get("imageUrl")?.valueOf();
    const description = data.get("description")?.valueOf();
    const details = data.get("details")?.valueOf();
    const price = data.get("price")?.valueOf();

    try{
        const newProduct = new ProductData({ name, image, description, details, price })
        await newProduct.save()
        console.log(newProduct)
    }
    catch(error){
        console.log(error)
    }
    redirect('/Dashboard/AddProduct')
  }
  
  return (
    <div className="container mt-5">
      <form action={addProduct}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Product Name"
            name="productName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Product Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Product Image URL"
            name="imageUrl"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Product Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Product Description"
            name="description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Product Details
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Product Details"
            name="details"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Price"
            name="price"
          />
        </div>
        <button className="btn btn-outline-warning" type="submit">Submit</button>
      </form>
    </div>
  );
}
