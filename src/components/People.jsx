import React from 'react';

const People = ({ peopleData }) => {

  return (
    <>
      <section className='profile'>
        {
          peopleData.map((curElm) => {
            const { id, username, name, email, phone, website, address, company } = curElm
            return (
              <>
                <div className='main-profile' key={id}>
                  <div className='profile-data'>
                    <span className='card-circle' >{id}</span>
                    <p>Username : {username}</p>
                    <h2>Name : {name}</h2>
                    <p>Email : {email}</p>
                    <p>Phone : {phone}</p>
                    <p>Website : <a href={`https://${website}`} target="_blank" >{website}</a></p>
                    <p>City : {address.city}</p>
                    <p>Company Name : {company.name}</p>
                  </div>
                </div>
              </>
            )
          })
        }
      </section>
    </>
  )
}

export default People;
