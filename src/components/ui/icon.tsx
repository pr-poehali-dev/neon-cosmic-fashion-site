
import React from "react";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof Icons;
  color?: string;
  size?: number;
  className?: string;
  fallback?: keyof typeof Icons;
}

const Icon = ({ 
  name, 
  color = "currentColor", 
  size = 24, 
  className, 
  fallback = "CircleAlert",
  ...props 
}: IconProps) => {
  const LucideIcon = Icons[name] || Icons[fallback];

  return (
    <LucideIcon
      color={color}
      size={size}
      className={cn("", className)}
      {...props}
    />
  );
};

export default Icon;
