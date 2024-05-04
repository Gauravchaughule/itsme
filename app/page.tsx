import Greetings from "@/components/Greeting";
export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen w-full bg-[#120d1b] text-white font-[700] text-2xl">
        <Greetings />
      </div>
    </main>
  );
}
