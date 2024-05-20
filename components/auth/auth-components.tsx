import { signIn, signOut } from "@/auth";
import { Button, buttonVariants } from "@/components/ui/button";

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <Button
        className={buttonVariants({
          variant: "ghost",
          className: "w-full p-0",
        })}
        {...props}
      >
        Sign In
      </Button>
    </form>
  );
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="w-full"
    >
      <Button
        className={buttonVariants({
          variant: "ghost",
          className: "w-full p-0",
        })}
        {...props}
      >
        Sign Out
      </Button>
    </form>
  );
}
