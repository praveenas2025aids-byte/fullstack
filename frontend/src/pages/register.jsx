import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/FormSchema/registerschema";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

function Register(){
    const navigate=useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver: zodResolver(registerschema)
    })

    function onSubmit1(data){
        console.log(data)
        alert("register sucess")
        navigate("/",{
            state:data
        })
    }
    return(
    <div className="min-h-screen flex justify-center items-center bg gray-100">
    <form onSubmit={handleSubmit(onSubmit1)} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xs border border-black">
    <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
    <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
    <input type="text" id="name" required placeholder="Enter your name" {...register("name")} className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    <p>{errors.name?.message}</p>

    <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
    <input type="email" id="email" required placeholder="Enter your email" {...register("email")} className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    <p>{errors.email?.message}</p>

    <label htmlFor="password" className="block mb-2 font-semibold">Password</label>
    <input type="password" id="password" required placeholder="Enter your password" {...register("password")} className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    <p>{errors.password?.message}</p>

    <label htmlFor="age" className="block mb-2 font-semibold">Age</label>
    <input type="number" id="age" required placeholder="Enter your age" {...register("age")} className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    <p>{errors.age?.message}</p>

    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Submit</button>

</form>
   </div>
    )
}
export default Register;