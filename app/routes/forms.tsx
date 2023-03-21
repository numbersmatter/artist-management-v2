import { BriefcaseIcon, ClipboardDocumentIcon, HomeIcon, InboxIcon, MegaphoneIcon, UserIcon } from "@heroicons/react/24/outline";
import type { ActionArgs, LoaderArgs} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import SideColumnLayout from "~/server/ui/Layout/SideColumnLayout";


const navigation = [
  { name: 'Home', to: '/', icon: HomeIcon },
  { name: 'Make Forms', to: '/forms', icon: ClipboardDocumentIcon },
  { name: 'Open Forms', to: '/open-forms', icon: MegaphoneIcon },
  { name: 'Responses', to: '/opportunities', icon: InboxIcon },
  { name: 'Workboard', to: '/Workboard', icon: BriefcaseIcon },
  { name: 'Profile', to: '#', icon: UserIcon },
]

const user1 = {
  name: 'Milachu92',
  email: 'emily.selman@example.com',
  imageUrl:
    'https://firebasestorage.googleapis.com/v0/b/component-sites.appspot.com/o/user%2Fpq1caOfoOYMMljX8AXEmPQZEDij2%2FpublicImages%2FGHS2%20icon.png?alt=media&token=975746e2-c823-46bf-b735-ad770d447b45',
  settingsUrl:"/site/profile"
}


export async function action({params, request}:ActionArgs) {
  

  return redirect('/');
}

export async function loader({params, request}:LoaderArgs) {
  

  return json({});
}



export default function FormSections() {
  const { } = useLoaderData<typeof loader>();
  return (
    <SideColumnLayout nav={navigation} navBarUser={user1}>
      <Outlet />
    </SideColumnLayout>
  );
}