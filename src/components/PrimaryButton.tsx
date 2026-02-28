import { primaryButtonClasses, type PrimaryButtonSize, type PrimaryButtonVariant } from "@/components/primaryButtonStyles";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: PrimaryButtonVariant;
  size?: PrimaryButtonSize;
  fullWidth?: boolean;
}

export const PrimaryButton = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      className={primaryButtonClasses({
        variant,
        size,
        fullWidth,
        className,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
