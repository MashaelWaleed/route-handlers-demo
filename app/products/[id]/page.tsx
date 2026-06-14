//true is the default
export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <h1>
      Product {id} details rendered at {new Date().toLocaleTimeString()}
    </h1>
  );
}

//dynamicParams
// Control what happens when a dynamic segment is visited that was
//  not generated with generateStaticParams()

// true - Next.js will statically render pages on demand for any dynamic
// segments not included in generateStaticParams()

// false - Next.js will return a 404 error for any dynamic segments not
//  included in our pre-rendered list
