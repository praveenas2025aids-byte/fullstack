import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  
  // const[email, setEmail] = useState('');
  // const[password, setPassword] = useState('');
  const navigate=useNavigate()
  const[formdata,setFormdata]=useState({
    username:"",
    password:""
  })

  function handlechange(e) {
    setFormdata({
        ...formdata,
        [e.target.name] : e.target.value
    });
}

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    alert("login sucessful")
    navigate('/dashboard',{
      state:formdata
    })

  }
  return(
    <>
    <div className="text-cyan-500">HI</div>
    {/*
    <input type="email" id="email" required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
    <input type="password" id="password" required placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <button type="submit" onClick={console.log(email,password)}>Submit</button>
    <button type="submit" onClick={() =>print()}>Submit</button>
    */}
   <form onSubmit={handleSubmit}> 
    <input type="text" name="username" required placeholder="Enter your username"  onChange={handlechange} />
    <input type="password" name="password" required placeholder="Enter your password"  onChange={handlechange} />
    <button type="submit">Submit</button>
   </form>
    </>
  );
}
export default Login;