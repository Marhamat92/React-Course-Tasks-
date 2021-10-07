import React from 'react'
import PropTypes from "prop-types"

 function User({name,surname,age,isLoggedIn,friends,address}) {

    if(!isLoggedIn){

    return   <h1>Login Failed</h1>

    }
    return (
        <>
           <h1>{`${name} ${surname} (${age}) `} </h1> 
 
           {address.title}{address.postal_code}   
           

           <br>
           </br>

           {friends.map((friend)=>
           
           <div key={friend.id}>{friend.name}</div>

           )}

        </>
    )
      //props types kullanarak propların type larına gore required yapmak mumkun
    User.propTypes = {
      name:PropTypes.string.isRequired,
      surname:PropTypes.string.isRequired,
      age:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired, //prop type larını oneoftypes kullanarak ıstedıgımız type larda kullana bılırız.
      isLoggedIn:PropTypes.bool.isRequired,
      friends:PropTypes.array,
      address:PropTypes.shape({
          title:PropTypes.string,
          postal_code:PropTypes.number
      }),
    }
}


//default props da kullana biliriz asagıdakı gıbı,gercek props comment den cıktıgında bu calısmaz
User.defaultProps = {
 
    isLoggedIn:false,
}

export default User;