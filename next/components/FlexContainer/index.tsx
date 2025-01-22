import { twMerge } from "tailwind-merge";

export type FlexContainerProps = {
  className?: string;
  children?: React.ReactNode;
  tag?: string;
  withShadow?: boolean
};

const defaultContainerClass = "flex items-center justify-center w-full";

export function FlexContainer(props: FlexContainerProps) {
  const { className, children, tag = "div", withShadow } = props;

  const classes = twMerge(defaultContainerClass, className);

  if(tag == 'main' ) {
    return <main className={classes}>{children}</main>;
  }

  
  return <div className={classes}>{children}</div>;
}

export default FlexContainer;