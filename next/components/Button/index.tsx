import { Button as ButtonType } from "@/context/page/domain/PageEntity";
import { twMerge } from "tailwind-merge";

export type ButtonProps = React.ComponentProps<"button"> & ButtonType;

// second background color is used to fill the button with a different color when hovered

const backgrounColor =
  "bg-linear-to-l";

const defaultClasses = twMerge(
  "px-8 py-2.5 border-2 border-white rounded-lg font-medium text-black",
  backgrounColor
);

const backgroundColorSecondary = "secondary text-white";

const defaultClassesSecondary = twMerge(defaultClasses, backgroundColorSecondary);

/**
 * Button component
 * @param props - ButtonProps
 * @returns Button component
 */
export function Button(props: ButtonProps) {
  const { title, className, content, primary, ...rest } = props;
  const classes = twMerge(primary ? defaultClasses : defaultClassesSecondary, className);

  return (
    <section className="relative">
      <button className={classes} {...rest} title={title}>
        {content}
      </button>
    </section>
  );
}

export default Button;
