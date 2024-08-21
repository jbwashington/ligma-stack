import * as React from "react"
import { cn } from "@/lib/utils"
import { Icons } from "./icons"
import { ModeToggle } from "./mode-toggle"
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { siteConfig } from "@/config/site";
import { marketingConfig } from "@/config/marketing";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("max-w-screen-xl mx-auto", className)}>
      <div className="container flex flex-col py-10 md:h-24">
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-start">
            <Link
              href={siteConfig.links.twitter}
              className={buttonVariants({
                variant: "link",
                className: "text-sm",
              })}
            >
              Twitter
            </Link>
            <Link
              href={siteConfig.links.instagram}
              className={buttonVariants({
                variant: "link",
                className: "text-center text-sm md:text-left",
              })}
            >
              Instagram
            </Link>
          </div>
          <div className="flex flex-col items-end">
            {marketingConfig.footerNav.map((item) => (
              <Link
                key={item.title}
                href={item.href ?? "#"}
                className={buttonVariants({
                  variant: "link",
                  className: "text-center text-sm md:text-left",
                })}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="inline-flex">
          <Link
            className={buttonVariants({
              variant: "link",
              className: "text-xs text-muted-foreground leading-loose",
            })}
            href="/terms"
          >
            Terms
          </Link>
          <Link
            className={buttonVariants({
              variant: "link",
              className: "text-xs text-muted-foreground leading-loose",
            })}
            href="/privacy"
          >
            Privacy Policy
          </Link>
          <Link
            className={buttonVariants({
              variant: "link",
              className: "text-xs text-muted-foreground leading-loose mx-auto",
            })}
            href="/"
          >
            Copyright Full Stack Tech NYC 2024.
          </Link>
        </div>
        <div className="mx-auto">
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}