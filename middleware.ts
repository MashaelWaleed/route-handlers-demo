import { NextResponse } from "next/server"; //class represents the incoming request from the browser.
import { NextRequest } from "next/server"; //class represents the response we send back to the browser.

export function middleware(request: NextRequest) {
  //This function runs before the user reaches a page.
  console.log("Middleware executed");
  const response = NextResponse.next(); //Everything is okay, continue to the requested page.
  //NextResponse = class  next() is a static method. You don't need a User object first.
  //response = object (instance of NextResponse)
  // is roughly like:const response = new NextResponse();
  // except Next.js configures the response specially to mean:"Continue to the next page/route normally"
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-headers", "custom-value");
  return response;
}

//method2 using condition
// export function middleware(request: NextRequest) {
//   console.log("Middleware executed");
//   if (request.nextUrl.pathname==="/profile"){
//      return NextResponse.rewrite(new URL("/hello", request.nextUrl));
//   }
// }

// export function middleware(request: NextRequest) {
//   console.log("Middleware executed");
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/profile",
// }; m
//method1 using matcher

// | Feature                      | `request.url`                           | `request.nextUrl`  |
// | -----------------------------| --------------------------------------- | ------------------ |
// | Type                         | String                                  | Next.js URL object |
// | Example Value                | `"http://localhost:3000/profile?tab=1"` | URL object         |
// | Access pathname directly     | ❌ No                                   | ✅ Yes            |
// | Access search params directly| ❌ No                                   | ✅ Yes            |
// | Need `new URL()` first?      | ✅ Yes                                  | ❌ No             |
// | Recommended in Middleware    | ⚠️ Works, but less convenient           | ✅ Preferred      |

//but
// new URL("/hello", request.url)
//new URL("/hello", request.nextUrl)
//They generate the same URL.
