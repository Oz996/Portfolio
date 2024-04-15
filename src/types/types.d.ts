export interface Clone {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  extarlink?: string;
}
export interface Project {
  orderId: number;
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  isHidden?: boolean;
  stack: Stack[];
}
type Stack =
  | "Next.js"
  | "Vite"
  | "Pisma"
  | "MongoDB"
  | "Tailwind"
  | "Sass"
  | "Express"
  | "NextAuth"
  | "shadcn"
  | "NextUI";
