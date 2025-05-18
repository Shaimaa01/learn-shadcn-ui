import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ChartLine, BarChart3, CreditCard } from "lucide-react";

import { Bar, BarChart } from "recharts";

import { Area, AreaChart } from "recharts";
import {  Pie, PieChart } from "recharts";

import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const PiechartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 starry-bg z-0" />

      {/* Random stars with different animations */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="star animate-twinkle absolute rounded-full bg-white"
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            opacity: Math.random() * 0.9 + 0.1,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-8 nebula-pill">
            <CreditCard className="w-4 h-4 mr-2" />
            <span>Smart financial tracking for students</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 glow-text text-white">
            Track Expenses. Build Habits. <br />
            <span className="text-white">Reach for the Stars.</span>
          </h1>

          <p className="text-xl text-white/80 mb-8 max-w-2xl">
            The student-friendly finance tracker that makes expense tracking and
            budget projection easy, intuitive, and visually engaging with a
            cosmic twist.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button className="bg-white text-black px-8 py-6 text-lg hover:bg-gray-200 transition-colors">
              Start Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
            <div className="cosmic-card rounded-2xl overflow-hidden p-4 animate-float bg-opacity-70">
              <ChartLine className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Expense Tracking
              </h3>
              <div className="h-32 bg-gradient-to-br from-white/10 to-white/5  rounded-lg flex items-center justify-center">
                <ChartContainer
                  config={chartConfig}
                  className=" w-[90%] h-[90%] "
                >
                  <AreaChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <Area
                      dataKey="desktop"
                      type="natural"
                      fill="var(--color-desktop)"
                      fillOpacity={0.4}
                      stroke="var(--color-desktop)"
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
            </div>

            <div className="cosmic-card rounded-2xl overflow-hidden p-4 animate-float bg-opacity-70 animation-delay-200">
              <BarChart3 className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Budget Analysis
              </h3>
              <div className="h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-lg flex items-center justify-center">
                <ChartContainer config={chartConfig} className=" w-[90%] ">
                  <BarChart accessibilityLayer data={chartData}>
                    <Bar
                      dataKey="desktop"
                      fill="var(--color-desktop)"
                      radius={4}
                    />
                    <Bar
                      dataKey="mobile"
                      fill="var(--color-mobile)"
                      radius={4}
                    />
                  </BarChart>
                </ChartContainer>
              </div>
            </div>

            <div className="cosmic-card rounded-2xl overflow-hidden p-4 animate-float bg-opacity-70 animation-delay-400">
              <CreditCard className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Smart Insights
              </h3>
              <div className="h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-lg flex items-center justify-center">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square h-[90%] w-[90%]"
                >
                  <PieChart>
                    <Pie
                   data={PiechartData}
              dataKey="visitors"
              nameKey="browser"
                      innerRadius={60}
                      strokeWidth={5}
                    >
                    
                    </Pie>
                  </PieChart>
                </ChartContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
