import { Hero } from "@/components/hero";
import 'react-tooltip/dist/react-tooltip.css'
export default function Home() {
  return (
    <main className="flex flex-col bg min-h-screen">
      <div className='mx-auto px-12  py-4 container '>
        <Hero />
      </div>
    </main>
  );
}
