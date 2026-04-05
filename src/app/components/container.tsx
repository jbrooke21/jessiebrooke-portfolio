export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[1255px] px-12 mx-auto">
      {children}
    </div>
  );
}