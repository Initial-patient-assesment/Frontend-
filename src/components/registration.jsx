import '../App.css';
import photo1 from  '../photos/1.svg';
import photo2 from  '../photos/3.svg';
import React, { useState } from 'react';

 const Registration = () =>{

    const [state , setSate] = useState(false);
    const change = () =>{
      setSate(!state);
    }


    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      console.log(formData); 
      console.log(`${e.target.name}: ${e.target.value}`);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
      //  const response = await axios.post('', formData);
       // console.log('Registration successful', response.data);
      //  localStorage.setItem('token', response.data.token);
      } catch (error) {
      //  console.error('Registration failed', error.response.data);
  
      }
    };
 console.log(formData.name, formData.email, formData.password);
    return(
        <>
        <div className={`container ${state ? 'sign-up-mode' : ''}`}>
         <div className="forms-container">
           <div className="signin-signup">
             <form action="#" className="sign-in-form" >
               <h2 className="title">Sign in</h2>
               <div className="input-field">
                 <i className="fas fa-user"></i>
                 <input type="text" placeholder="Username" />
               </div>
               <div className="input-field">
                 <i className="fas fa-lock"></i>
                 <input type="password" placeholder="Password" />
               </div>
               <input type="submit"  className="btn solid"/>
             </form>
             <form action="#" class="sign-up-form" onSubmit={handleSubmit}>
               <h2 className="title">Sign up</h2>
               <div className="input-field">
                 <i className="fas fa-user"></i>
                 <input type="text"
            placeholder="Full name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required/>
               </div>
               <div className="input-field">
                 <i className="fas fa-envelope"></i>
                 <input             type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required/>
               </div>
               <div className="input-field">
                 <i className="fas fa-lock"></i>
                 <input  type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required/>
               </div>
               <button  type="submit" className="btn" >   Sign up    </button>
             </form>
           </div>
         </div>
   
         <div className="panels-container">
           <div className="panel left-panel">
             <div className="content">
               <h3>You have never registtrete here?</h3>
               <p>
   So just registrate here to use our application!
               </p>
               <button onClick = {change} className="btn transparent" id="sign-up-btn">
                 Sign up
               </button>
             </div>
             <img src={photo1}  class="image" alt="" />
           </div>
           <div className="panel right-panel">
             <div className="content">
               <h3>If you have accaunt?</h3>
               <p>
   So just write your password and email!
               </p>
               <button onClick = {change} className="btn transparent" id="sign-in-btn">
                 Sign in
               </button>
             </div>
             <img src={photo2} className="image" alt="" />
           </div>
         </div>
       </div>
       </>
    )
}

export default Registration;