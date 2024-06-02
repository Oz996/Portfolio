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
  tests?: boolean;
}

export interface LoginForm {
  userName: string;
  email: string;
  password: string;
}

export interface RegisterForm extends LoginForm {
  Cpassword: string;
}

type Stack =
  | "Next.js"
  | "Vite"
  | "Prisma"
  | "MongoDB"
  | "Tailwind"
  | "Sass"
  | "Express"
  | "NextAuth"
  | "shadcn"
  | "NextUI";
