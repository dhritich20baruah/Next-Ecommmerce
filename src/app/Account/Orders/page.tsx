import React from 'react'

const Orders = () => {
  return (
    <div>
      <h4>My Orders</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Order No.</th>
                    <th scope="col">Item</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">#3456</th>
                    <td>
                      <img
                        src="assets/images/product1.webp"
                        alt="img-dash-order"
                        className="img-dash-order-table"
                      />
                    </td>
                    <td>White Dress</td>
                    <td>18/12/2023</td>
                    <td>Processing</td>
                    <td>
                      <button className="btn btn-danger rounded-0">VIEW</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">#3450</th>
                    <td>
                      <img
                        src="assets/images/product11.webp"
                        alt="img-dash-order"
                        className="img-dash-order-table"
                      />
                    </td>
                    <td>Blue Skirt</td>
                    <td>18/12/2023</td>
                    <td>Processing</td>
                    <td>
                      <button className="btn btn-danger rounded-0">VIEW</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">#3326</th>
                    <td>
                      <img
                        src="assets/images/product7.webp"
                        alt="img-dash-order"
                        className="img-dash-order-table"
                      />
                    </td>
                    <td>White Jacket</td>
                    <td>10/12/2023</td>
                    <td>Delivered</td>
                    <td>
                      <button className="btn btn-danger rounded-0">VIEW</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">#3304</th>
                    <td>
                      <img
                        src="assets/images/product6.webp"
                        alt="img-dash-order"
                        className="img-dash-order-table"
                      />
                    </td>
                    <td>Pink Dress</td>
                    <td>15/11/2023</td>
                    <td>Delivered</td>
                    <td>
                      <button className="btn btn-danger rounded-0">VIEW</button>
                    </td>
                  </tr>
                </tbody>
              </table>
    </div>
  )
}

export default Orders