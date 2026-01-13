export default function GuessItem({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return <div className="relative w-24 h-24 bg-green-600 flex items-center justify-center border-2 border-foreground text-white">
        {children ?? "X"}
    </div>
}