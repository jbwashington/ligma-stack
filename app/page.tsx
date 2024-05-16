import { Button, buttonVariants } from "@/components/ui/button";

const homeConfig = {
  heading: "Make your next move your best move.",
  subHeading: "Choose up today with the full stack for the players and macks.",
  btnText: "Sock it to my pocket",
};

export default function Home() {
  return (
    <main className="min-h-screen items-center p-24 space-y-4">
      <p className="text-4xl font-extrabold">{homeConfig.heading}</p>
      <p className="text-2xl font-light">{homeConfig.subHeading}</p>
      <Button
        className={buttonVariants({
          variant: "default",
          className: "capitalize",
        })}
      >
        {homeConfig.btnText}
      </Button>
    </main>
  );
}
