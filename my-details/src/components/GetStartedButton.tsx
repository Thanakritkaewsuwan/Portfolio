type GetStartedButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function GetStartedButton({
  onClick,
  children = "Get started",
  variant = "primary",
}: GetStartedButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-white text-slate-900 hover:bg-slate-100"
      : "border border-white/30 bg-white/10 text-white hover:bg-white/15";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-lg shadow-cyan-950/10 transition duration-200 ease-out hover:-translate-y-0.5 ${styles}`}
    >
      {children}
    </button>
  );
}
