import { twMerge } from "tailwind-merge";
import { Components } from "@/components/index";
import { ComponentPropsWithoutRef } from "react";

const defaultMagicComponentClasses = "w-full";

type LiteralKeys = keyof JSX.IntrinsicElements;

type ComponentKeys = keyof typeof Components;

type MyComponentsProps<T extends ComponentKeys> = ComponentPropsWithoutRef<typeof Components[T]>;

type MagicComponentProps<T extends LiteralKeys, Y extends ComponentKeys> = (ComponentPropsWithoutRef<T> | MyComponentsProps<Y>) & {
  component: ComponentKeys;
  className?: string;
};

export default function MagicComponent<T extends LiteralKeys, Y extends ComponentKeys>(props: MagicComponentProps<T, Y>) {
  const { className, component, ...rest } = props;
  const classes = twMerge(defaultMagicComponentClasses, className);
  const Component = Components[component];
  return <Component {...rest} className={classes}/>;
}
