import { User } from "../models/User";
import { supabase } from "./supbaseClient";

export async function createUser_Supbase(newUser:User) {
    const { error,data } = await supabase.auth.signUp(newUser);
  
    if (error) {
      console.error('Error creating user:', error.message);
    } else {
      console.log('User created successfully:', data.user);
    }
    return data.user;
  
  }
  export  const  deleteAllUsers =async ()=>{
    const resp = await supabase.from("auth.users").delete();
    console.log(resp);
  }