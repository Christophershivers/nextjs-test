'use client'
import { useState, useEffect } from "react";
import supabase from './supabaseConfig';
import { CarouselDemo } from "./Carousel";
import { Button } from "@/components/ui/button";
import { Button as TailButton } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { 
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
 } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"


async function fetchNames(){
  const res = await fetch('/api/')
  const data = await res.json()
  return data
}


export default function Home() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState()
  const [names, setNames] = useState([])

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user);
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session);
    });

    fetchNames().then(data =>{
      setNames(data)
    })
    
  }, []);
  

  return (
    <main className="">
      <h1>Users</h1>
      <ul>
        {names.map((user, index) => (
          <li key={index}>{user.name} · {user.age}</li>
        ))}
      </ul>
      {user ? <h4>welcome {user.user_metadata.display_name}</h4> : <h4>sign in</h4>}
      <div className="height-[100vh] flex justify-center"><CarouselDemo/></div>

      <Button className="card">Button</Button>
      <TailButton variant="filled" >Button1</TailButton>
      <div className="w-72">
        <Input label="Username" />
      </div>
      <div className="w-[100vw] flex flex-col items-center border-red-500 border-2 border-solid place-content-center">
          <Card className="w-[350px] h-[410px] mb-4">
            <div className="flex flex-col justify-evenly h-[100%] mx-4">
              <div className="min-h-[60px] flex flex-col justify-between 	">
                <CardTitle>Card</CardTitle>
                <CardDescription className="border-b pb-2">This is their sentence.</CardDescription>
              </div>
              <img className="rounded-md" src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="card-image"/>

              <div className="w-[100%] flex justify-between">
                <span><Button>Start</Button></span>
                <span><Button variant="secondary">Canel</Button></span>
              </div>
              
              
            </div>
            
              
          </Card>

          <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                <div className="w-72">
                  <Input label="Name" />
                </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Framework</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      
      </div>
      
    </main>
  );
}



