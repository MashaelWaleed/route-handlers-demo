import { type NextRequest } from "next/server";
import {headers,cookies} from "next/headers"
export async function GET(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers); method-1
//   console.log(requestHeaders.get("Authorization"));


//method-2 
// headers() is a helper function provided by Next.js that allows you to access the headers of the incoming 
// request in a more convenient way. It returns a Headers object that you can use to get specific header values.
const headerList= await headers();
console.log(headerList.get("Authorization"));
// const theme = request.cookies.get("theme") //first method to read cookie
// console.log(theme);

const cookieStore = await cookies()
cookieStore.set("resultPerPage","20")

  return new Response("<h1>Hello, Next.js API Route!</h1>",{
    headers:{
      "Content-Type":"text/html",
      // "Set-Cookie":"theme=dark"
    }
  });
}
