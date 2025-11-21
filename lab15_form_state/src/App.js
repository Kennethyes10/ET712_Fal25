import './App.css';
import React, {useState} from 'react';

function App() {

  // set states for multiple inputs
  const [inputs, setInputs] = useState({ username: "", age: "", password: "" });

  // function to handle changes in all inputs
  const handle_changes = function (event) {
    const name = event.target.name;
    const value = event.target.value;

    // update the states
    setInputs(values => ({ ...values, [name]: value }));
  };

  
  // set states for select gender
const [myGender, setMygender] = useState("")
  
// function to collect the selected gender
const selectedGender = (event) =>{
setMygender(event.target.value)
}

// set state for comments
const [textcomment, setcomment] = useState("")
// function to collect the comments
const submitted_comments = function (event){
setcomment (event.target.value)
}

  // function submit form
  const submitform = function (event){
    event.preventDefault();
  };

  return (
    <div className="app">
      <form className='myform' onSubmit={submitform}>
        <fieldset>
          <legend>Forms in React JS</legend>

          <div className='formgroup'>
            <label For="name">Enter username: </label>
            <input 
              type='text' 
              id='name'
              className='inputstyle'
              name='username'
              placeholder='Type the username...'
              value={inputs.username}
              onChange={handle_changes}
            />
          </div>



          <div className='formgroup'>
            <label htmlFor='age'>Enter your age:</label>
            <input
              type='number'
              id='age'
              className='inputstyle'
              name='age'
              placeholder='type in your age...'
              value={inputs.age}
              onChange={handle_changes}  
            />
          </div>

<div className='formgroup'>
  <label For="password">Enter password:</label>
  <input
    type="password"
    id='password'
    name='password'
    className='inputstyle'
    placeholder='Type your password...'
    value={inputs.password}
    onChange={handle_changes}
  />
</div>





           {/** select a gender */}
           <div className='formgroup'>
            <label>Selec a gender:
         <select value={myGender} onChange={selectedGender}>
<option value="female">Female</option>
<option value="male" >Male</option>
<option value="other">other</option>
</select>
</label>
           </div>
  
           {/** comments using textarea */}
<div className='formgroup'>
  <label for="comments">Any suggestions? </label>
  <textarea
id='comments' 
value={textcomment} 
onChange={submitted_comments}
placeholder= 'Type your comments...'
/>

</ div>





          {/** submit form */}
          <input type='submit' className='btnsubmit' />  
        </fieldset>
      </form>

      {/** Display results */}
      <p className='printresult'>Username = {inputs.username}</p>
      <p className='printresult'>Age = {inputs.age}</p>
      <p className='printresult'>Gender = {myGender}</p>
      <p className='printresult'>comments = {textcomment}</p>
      <p className='printresult'>password = {inputs.password}</p>


    </div>
  );
}

export default App;

