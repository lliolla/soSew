import React from 'react'

const admin = () => {
  return (
   <div>
    <div>Administrattion</div>
   
  <table className="table flex justify-start">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Avatar</th>
        <th>Utilisateur</th>
        <th>Mail</th>
        <th>Mot de passe </th>
        <th>Rôle</th>
        <th>Gestion</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
        <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
         
        </td>
        <td>llioola@fhdfbh.com</td>
        <th>
       *********
        </th>
        <th>
       Admin
        </th>
      
        <th>
       Admin
        </th>
      </tr>
    </tbody>
  </table>
</div>
    
  )
}

export default admin