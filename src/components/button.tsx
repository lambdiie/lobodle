export default function Button({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background border border-border w-xl p-8 m-8 text-4xl text-center hover:bg-foreground hover:text-background">
      {children}
    </div>
  );
}
