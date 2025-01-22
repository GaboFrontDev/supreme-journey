import { twMerge } from "tailwind-merge";

const defaultTitleClasses = 'drop-shadow';

export function Title(props: React.ComponentProps<"h1">) {
    const {className, ...rest} = props;
    const _classes = twMerge(defaultTitleClasses, className)
    const classes = twMerge(_classes, 'select-none')
    return <h1 className={classes} {...rest}></h1>;
}

export default Title;