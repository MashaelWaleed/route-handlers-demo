export const dynamic = "force-static"//force caching
export const evalidate =10;// this make cache update after 10 sec
//route handlers are not cached by default but you can opt into catching 
//when using the GET method ...other http methods ex. post never cashed
//if we used dynamic functions like headers() and cookies(), or woking with the
// request object in GET method, cacing won't applied
export async function GET() {
  //This data would typically come from database

  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Books" },
    { id: 3, name: "Clothing" },
    { id: 4, name: "Home & Garden" },
  ];

  return Response.json(categories);
}
