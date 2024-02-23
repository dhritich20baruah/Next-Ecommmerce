import React from 'react'

const Profile = () => {
  return (
    <div className='container m-5'>
         <h4>My Details</h4>
            <table className="table details-table">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td className="fw-semibold">John Doe</td>
                </tr>
                <tr>
                  <td>Mobile Number</td>
                  <td className="fw-semibold">+91-9999999999</td>
                </tr>
                <tr>
                  <td>Email ID</td>
                  <td className="fw-semibold">john.doe@email.com</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td className="fw-semibold">Male</td>
                </tr>
                <tr>
                  <td>DOB</td>
                  <td className="fw-semibold">01/03/1990</td>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-outline-primary rounded-0">
              Edit profile
            </button>
    </div>
  )
}

export default Profile