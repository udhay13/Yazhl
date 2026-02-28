import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  withContainer?: boolean;
  containerClassName?: string;
}

export const SectionWrapper = ({
  id,
  className,
  children,
  withContainer = true,
  containerClassName,
  ...props
}: SectionWrapperProps) => {
  return (
    <section id={id} className={cn("relative py-20 md:py-28", className)} {...props}>
      {withContainer ? (
        <div className={cn("container relative z-10", containerClassName)}>{children}</div>
      ) : (
        children
      )}
    </section>
  );
};



