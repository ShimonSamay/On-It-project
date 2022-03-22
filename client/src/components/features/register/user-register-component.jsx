import React  from "react";
import { useState } from "react";
import {userRegister} from '../../../services/users/users.service';
import defultUser from './defultPicUser.jpg';

const UserRegister = () => {
   let [user , setUser] = useState({isAdmin : false, role: "Student"});

  const getValues = (e) => {
    user[e.target.name] = e.target.value ;
  }
  const addUser = (e) => {
    e.preventDefault();
    if(user.img == undefined) user.img ="https://www.kpu.ca/sites/default/files/Career%20Services/thumbpreview-grey-avatar-designer.jpg";
    setUser({...user});
    userRegister(user);
    // console.log(user);
  }
  
  return (  
    <div className="container">  
  <form id="contact" action="" method="post">
    <h3>User Register</h3>
    <fieldset>
      <input  name="firstName" placeholder="Your name" type="text" tabIndex="1" required autoFocus  onChange={getValues} />
    </fieldset>
    <fieldset>
      <input  name="id" placeholder="Your id" type="text" tabIndex="1" required autoFocus  onChange={getValues} />
    </fieldset>
    <fieldset>
      <input name="email" placeholder="Your Email Address" type="email" tabIndex="2" required  onChange={getValues}/>
    </fieldset>
    <fieldset>
      <input name="phone" placeholder="Your Phone Number (optional)" type="text" tabIndex="3" required  onChange={getValues}/>
    </fieldset>
    <fieldset>
      <input name="password" placeholder="Your password" type="text" tabIndex="4" required  onChange={getValues}/>
    </fieldset>
    <fieldset>
      <input name="course" placeholder="Your course" type="text" tabIndex="4" required  onChange={getValues}/>
    </fieldset>
    <fieldset>
      <input  name="school"  placeholder="Your school" type="text" tabIndex="4" required  onChange={getValues}/>
    </fieldset>
    <fieldset>
      <input  name="img" placeholder="Your img" type="text" tabIndex="4" onChange={getValues}/>
    </fieldset>
    <fieldset>
      <button onClick = {addUser}  type="submit" id="contact-submit" data-submit="...Sending">Register</button>
    </fieldset>
  </form>
</div>
  )
};

export default UserRegister;
