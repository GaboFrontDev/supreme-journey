import { twMerge } from "tailwind-merge";

const defaultFormClasses = "w-full";

export type FormProps = React.ComponentProps<"form">;


export function Form(props: FormProps) {
  const { className, children, ...rest } = props;
  const classes = twMerge(defaultFormClasses, className);
  return (
    <form className={classes} {...rest}>
      {children}
    </form>
  );
}

export default Form;