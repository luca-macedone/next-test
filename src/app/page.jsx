import Image from "next/image";

export default function Home() {
  return (
    <main className="container py-10 flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-8">
        <Image
          src="/logo.svg"
          height="120"
          width="120"
          alt="logo"
          className="w-50 aspect-square"
        />
        <h1 className="text-3xl uppercase">Homepage</h1>
      </div>
    </main>
  );
}
