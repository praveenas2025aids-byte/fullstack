import { useState } from 'react';

import { useNavigate,useLocation } from 'react-router-dom';
function Login() {
  
  // const[email, setEmail] = useState('');
  // const[password, setPassword] = useState('');
  const location=useLocation()
  const navigate=useNavigate()
  const[logindata,setLogindata]=useState({
    username:"",
    password:""
  })

  function handlechange(e) {
    setLogindata({
        ...logindata,
        [e.target.name] : e.target.value
    });
}

  
  const handleSubmit = (e) => {
    
    e.preventDefault();
    const registerdata=location.state
    if(logindata.username===registerdata.name && logindata.password===registerdata.password){
      console.log("registerdata",registerdata)
      console.log("logindata",logindata)
      console.log("login success")
      navigate("/dashboard",{
        state:logindata
      })
    }else{
      console.log("invalid credentials")
    }
    

  }
 return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xs border border-black">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <label htmlFor="username" className="block mb-2 font-semibold">Username</label>
            <input type="text" id="username" name="username" required placeholder="Enter your username" onChange={handlechange} className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <label htmlFor="password" className="block mb-2 font-semibold">Password</label>
            <input type="password" id="password" name="password" required placeholder="Enter your password" onChange={handlechange} className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Submit</button>
        

        </form>

    </div>
);
}
export default Login;