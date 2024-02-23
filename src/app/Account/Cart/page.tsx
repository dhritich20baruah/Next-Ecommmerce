export default async function cart(){
    return(
        <section id="cart" className="container my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card bg-light mb-3 rounded-0 border-light">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img
                      src="assets/images/product7.webp"
                      className="w-100 object-fit-contain rounded-0 img-cart"
                      alt="cart items image"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <div className="card-detail d-flex justify-content-between">
                        <h5 className="card-title">White Jacket</h5>
                        <p className="text-pink fs-5">$40.99</p>
                      </div>
                      <p className="card-text">In stock</p>
                      <div>
                        <p className="fw-bold">
                          Quantity:
                          <button className="btn btn-outline-pink rounded-0">
                            +
                          </button>
                          <span className="mx-2">1</span>
                          <button className="btn btn-outline-pink rounded-0">
                            -
                          </button>
                        </p>
                      </div>
                      <div>
                        <button className="btn btn-danger my-3 rounded-0">
                          Delete
                        </button>
                        <button className="btn btn-primary my-3 rounded-0">
                          Save for later
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="card bg-light mb-3 rounded-0 border-light">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img
                      src="assets/images/product9.webp"
                      className="w-100 object-fit-contain rounded-0 img-cart"
                      alt="cart items image"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <div className="card-detail d-flex justify-content-between">
                        <h5 className="card-title">Denim Jacket</h5>
                        <p className="text-pink fs-5">$35.99</p>
                      </div>
                      <p className="card-text">In stock</p>
                      <div>
                        <p className="fw-bold">
                          Quantity:
                          <button className="btn btn-outline-pink rounded-0">
                            +
                          </button>
                          <span className="mx-2">1</span>
                          <button className="btn btn-outline-pink rounded-0">
                            -
                          </button>
                        </p>
                      </div>
                      <div>
                        <button className="btn btn-danger my-3 rounded-0">
                          Delete
                        </button>
                        <button className="btn btn-primary my-3 rounded-0">
                          Save for later
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="card bg-light mb-3 rounded-0 border-light">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img
                      src="assets/images/product11.webp"
                      className="w-100 object-fit-contain rounded-0 img-cart"
                      alt="cart items image"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <div className="card-detail d-flex justify-content-between">
                        <h5 className="card-title">Blue Skirt</h5>
                        <p className="text-pink fs-5">$25.99</p>
                      </div>
                      <p className="card-text">In stock</p>
                      <div>
                        <p className="fw-bold">
                          Quantity:
                          <button className="btn btn-outline-pink rounded-0">
                            +
                          </button>
                          <span className="mx-2">1</span>
                          <button className="btn btn-outline-pink rounded-0">
                            -
                          </button>
                        </p>
                      </div>
                      <div>
                        <button className="btn btn-danger my-3 rounded-0">
                          Delete
                        </button>
                        <button className="btn btn-primary my-3 rounded-0">
                          Save for later
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="card bg-light mb-3 rounded-0 border-light">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img
                      src="assets/images/product8.webp"
                      className="w-100 object-fit-contain rounded-0 img-cart"
                      alt="cart items image"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <div className="card-detail d-flex justify-content-between">
                        <h5 className="card-title">T-Shirt</h5>
                        <p className="text-pink fs-5">$19.99</p>
                      </div>
                      <p className="card-text">In stock</p>
                      <div>
                        <p className="fw-bold">
                          Quantity:
                          <button className="btn btn-outline-pink rounded-0">
                            +
                          </button>
                          <span className="mx-2">1</span>
                          <button className="btn btn-outline-pink rounded-0">
                            -
                          </button>
                        </p>
                      </div>
                      <div>
                        <button className="btn btn-danger my-3 rounded-0">
                          Delete
                        </button>
                        <button className="btn btn-primary my-3 rounded-0">
                          Save for later
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className="col col-md-4">
              <div id="cart-right" className="px-5">
                <div id="coupon">
                  <h5>Add coupon code</h5>
                  <p>Enter coupon code if available:</p>
                  <div id="coupon-form">
                    <input type="text" className="w-100" />
                    <button className="btn btn-outline-pink rounded-0 my-2">
                      APPLY COUPON
                    </button>
                  </div>
                </div>
                <div id="cart-amt" className="my-4">
                  <h5>Cart Total</h5>
                  <div className="d-flex justify-content-between">
                    <p>Total amount</p>
                    <h5 className="text-pink">$ 250</h5>
                  </div>
                  <a href="checkout.html">
                    <button className="btn btn-outline-pink rounded-0">
                      Proceed to checkout
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}