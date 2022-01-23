import React from 'react'
import './card.css'

const Users = ({loading,users}) => {
    return loading ? (
          <div id="main">
            <img src="https://cdn.dribbble.com/users/1731080/screenshots/6702268/circle_colors.gif" alt="Loading..." className="loader"/>
          </div>
        ) :
        (
          <div className='row' id="main">  
          {users.map(user =>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="profile">
                        <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                        <p className='id'>ID: {user.id}</p>
                        <h1 className="name">{user.first_name} {user.last_name}</h1>
                        <p className="email">{user.email}</p>
                    </div>
                </div>
            )
          }
          </div>
        )
}

export default Users