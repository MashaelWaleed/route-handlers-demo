import{cookies} from "next/headers"
export default async function About() {
  const cookieStore= await cookies()
  const theme= cookieStore.get("theme")
  console.log("theme");
  console.log("server");
  return <h1> About Page{new Date().toLocaleTimeString()}</h1>;
}
