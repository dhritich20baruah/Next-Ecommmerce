import { pool } from "../../../../utils/dbConnect";
import ActionBtns from "./ActionBtns";

export default async function Page({ params }: { params: { id: string } }) {
  const productId = params.id;
  const result = await pool.query('SELECT * FROM product WHERE id = $1', [productId])
  const product = result.rows[0]
  
 

  return (
    <div className="container">
      <div className="row my-3">     
        <div className="col-12 col-md-6">
            <div className="d-flex align-items-start">
              <div
                className="nav flex-column me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <div
                  className="nav-link active btn"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <img
                    src={product?.image}
                    alt="product -image"
                    className="img-tab"
                  />
                </div>
                <div
                  className="nav-link btn"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  <img
                    src={product?.more_images[0]}
                    alt="product -image"
                    className="img-tab"
                  />
                </div>
                <div
                  className="nav-link btn"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  <img
                    src={product?.more_images[1]}
                    alt="product -image"
                    className="img-tab"
                  />
                </div>
                <div
                  className="nav-link btn"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  <img
                    src={product?.more_images[2]}
                    alt="product -image"
                    className="img-tab"
                  />
                </div>
                <div
                  className="nav-link btn"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings2"
                  role="tab"
                  aria-controls="v-pills-settings2"
                  aria-selected="false"
                >
                  <img
                    src={product?.more_images[3]}
                    alt="product -image"
                    className="img-tab"
                  />
                </div>
              </div>
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <img
                    src={product?.image}
                    alt="product -image"
                    className="img-tab-main"
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <img
                    src={product?.more_images[0]}
                    alt="product -image"
                    className="img-tab-main"
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <img
                    src={product?.more_images[1]}
                    alt="product -image"
                    className="img-tab-main"
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <img
                    src={product?.more_images[2]}
                    alt="product -image"
                    className="img-tab-main"
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings2"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <img
                    src={product?.more_images[3]}
                    alt="product -image"
                    className="img-tab-main"
                  />
                </div>
              </div>
            </div>
         
          <div className="d-flex justify-content-center my-5">
            <ActionBtns productId={productId}/>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h3>{product?.name}</h3>
          <p className="fs-3 text-danger">Rs.{product?.price}/-</p>
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
