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
  import Link from "next/link";

function SigninForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isTrueAuth, setIsTrueAuth] = useState(false)
    const [user, setUser] = useState([])

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
    
        /*supabase
            .from('profiles')
            .select("fullname, username, password")
            .eq('username', username)
            .eq("password", password)
            .then(({ data, error }) => {
                if (error) {
                    console.error("Error fetching user:", error);
                    return;
                }
    
                if (data.length > 0) {
                    setIsTrueAuth(true);
                    setUser(data[0]);
                    console.log("User authenticated:", data[0].fullname);
                } else {
                    console.log("No user found with the provided credentials.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });*/

        const { data, error } = await supabase.auth.signInWithPassword({
            email: username,
            password: password,
            })
        
        
        if(data){
            alert('check your email')
            console.log('error ', error)
            console.log('data ', data)
        }else{
            console.log(error)
        }
    };

    return (
        <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign in
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to sign in!
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSignupSubmit}>
        <div className="mb-1 flex flex-col gap-6">
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
          sign in
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Dont have an account?{" "}
          <Link href="/signup" className="font-medium text-gray-900">
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>
    )
}

export default SigninForm;
