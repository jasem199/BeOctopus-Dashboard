import { WidgetGrid } from "@/components/dashboard/WidgetGrid";
import { Leaderboard } from "@/components/dashboard/Leaderboard";
import { SignupGraph } from "@/components/dashboard/SignupGraph";

export default function Home() {
  return (
    <div className="max-w-[1280px] mx-auto px-[32px] py-[24px] flex flex-col gap-[24px]">
      {/* Section 1: Widgets */}
      <section>
        <WidgetGrid />
      </section>

      {/* Section 2: Leaderboard and Graph */}
      <section className="flex gap-[24px]">
        {/* Left Column: 40% */}
        <div className="w-[40%]">
          <Leaderboard />
        </div>
        
        {/* Right Column: 60% */}
        <div className="w-[60%]">
          <SignupGraph />
        </div>
      </section>
    </div>
  );
}
