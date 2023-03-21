import type { ActionArgs, LoaderArgs} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function action({params, request}:ActionArgs) {
  

  return redirect('/');
}

export async function loader({params, request}:LoaderArgs) {
  

  return json({});
}



export default function FormSections() {
  const { } = useLoaderData<typeof loader>();
  return (
    <article className="prose prose-xl">
      <h1>Welcome to FormSections</h1>
      <p>This is the  FormSections</p>
    </article>
  );
}