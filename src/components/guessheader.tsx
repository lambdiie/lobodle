export default function GuessHeader() {
  const headers = [
    "Abnormality",
    "Risk Level",
    "Attack Type",
    "E-Boxes",
    "Qliphoth Counter",
  ];

  return (
    <div className="flex gap-4">
      {headers.map((item) => (
        <GuessHeaderObject key={item}>{item}</GuessHeaderObject>
      ))}
    </div>
  );
}

function GuessHeaderObject({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="border border-border bg-background flex items-center justify-center text-center w-24 font-gill-sans-mt">
      {children}
    </div>
  );
}
