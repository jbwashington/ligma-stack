import { redirect } from "next/navigation";
// import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma";
import { auth } from "@/auth";
// import { getCurrentUser } from "@/lib/session"
// import { EmptyPlaceholder } from "@/components/empty-placeholder"
// import { DashboardHeader } from "@/components/header"
// import { PostCreateButton } from "@/components/post-create-button"
// import { PostItem } from "@/components/post-item"
// import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const session = await auth();

  console.log(session);

  const user = session?.user;

  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      <p>welcome {user.name}</p>
    </div>
  );
}
