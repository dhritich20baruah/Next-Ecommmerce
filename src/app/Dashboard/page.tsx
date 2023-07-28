import Link from "next/link"

export default function page(){
    return(
        <div className="m-4">
            <Link href="/Dashboard/AddProduct">
            <button className="btn btn-primary">Add Product</button>
            </Link>
        </div>
    )
}