import Demo from "@/components/demo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-white">
      <div className="w-full max-w-6xl mt-12 mb-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-[#E6007E] mb-2" style={{ fontFamily: "'Quicksand', sans-serif" }}>True Girl Interactive Prototypes</h1>
          <p className="text-gray-500">React + Framer Motion Proof of Concept</p>
        </div>
        <Demo />
      </div>
    </main>
  );
}
