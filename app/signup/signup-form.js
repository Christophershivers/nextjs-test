'use client'
import {React, useState} from "react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import supabase from "../supabaseConfig";
  import { v4 } from "uuid";
  import Link from "next/link";

  
  function SignupForm() {
    const [fullname, setFullName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSignupSubmit = async (e) =>{
        e.preventDefault()

        const id = v4()
        
        //const {data, error} = await supabase.from('profiles').insert([{id,fullname, username, password}])

        /*if(error){
            console.log(error)
        }
        if(data){
            console.log(data)
            alert("record has been inserted!")
            setName("")
            setUsername("")
            setPassword("")
        }*/


        try{
            
            const { data, error } = await supabase.auth.signUp({
                email: username,
                password: password,
                options: {
                    data: {
                        display_name: fullname,
                    }
                }
            })

            if(data){
                alert('check your email')
                console.log('error ', error)
                console.log('data ', data)
            }else{
                console.log(error)
            }
            

        }catch(error){
            alert(error)
        }
        
    }

    return (
        <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSignupSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Username
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth type="submit">
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link href="/signin" className="font-medium text-gray-900">
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
    );
  }
  
  export default SignupForm;
  