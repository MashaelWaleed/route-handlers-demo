import { comments } from "./data";
export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  // return Response.json(newComment); this return 200 status code
  return new Response(JSON.stringify(newComment), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
//Status Code	    Meaning	When to Use
//200 OK	        The request succeeded.
//201 Created       The request succeeded and a new resource was created.
