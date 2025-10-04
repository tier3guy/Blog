/* eslint-disable @next/next/no-img-element */
import { type Author } from "@/lib/authors";
import { cn } from "@/lib/utils";

interface AuthorCardProps {
  author: Author;
  className?: string;
}

export function AuthorCard({ author, className }: AuthorCardProps) {
  return (
    <div className={cn("flex items-start gap-2", className)}>
      <img
        src={author.avatar}
        alt={author.name}
        className="rounded-full w-8 h-8 border border-border object-cover"
      />
      <div className="flex-1">
        <h3 className="text-sm tracking-tight text-balance font-semibold">
          {author.name}
        </h3>
        <p className="text-xs text-muted-foreground text-balance">
          {author.position}
        </p>
      </div>
    </div>
  );
}
