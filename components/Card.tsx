import React from "react";
import clsx from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingMap: Record<NonNullable<CardProps["padding"]>, string> = {
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

export function Card({
  interactive = false,
  padding = "md",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-lg border border-neutral-200 bg-white shadow-sm",
        paddingMap[padding],
        interactive &&
          "cursor-pointer transition-shadow hover:shadow-md focus-within:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
