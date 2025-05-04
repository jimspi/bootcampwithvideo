import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Your Gumroad payment URL
const paymentLink = "https://theeaiguy.gumroad.com/l/xzcidi";

export default function AIGenieLanding() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      controls.start({ opacity: 1, y: 0 });
    };
n    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100 p-6">
      {/* Enroll Now fixed header */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md py-3 z-50 text-center">
        <a href={paymentLink} target="_blank" rel="noopener noreferrer">
          <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full">
            Enroll Now – $49
          </Button>
        </a>
      </div>

      <div className="flex flex-col items-center justify-center text-center pt-20 space-y-6">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold bg-[linear-gradient(270deg,_#34d399,_#60a5fa,_#a78bfa)] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradientShift"
        >
          The AI Genie is Out of the Bottle
        </motion.h1>

        {/* Gradient animation keyframes */}
        <style>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradientShift {
            animation: gradientShift 6s ease-in-out infinite;
          }
        `}</style>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl max-w-2xl text-gray-700"
        >
          Learn how to use AI to supercharge your critical thinking, productivity, and creativity, like this site that was entirely generated with AI in just minutes.
        </motion.p>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="w-full max-w-3xl"
        >
          <video controls className="rounded-lg shadow-lg w-full max-h-96 object-contain">
            <source src="/MyVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* What You'll Learn Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 max-w-3xl bg-white rounded-2xl p-6 shadow-md border hover:border-green-300"
        >
          <h3 className="text-2xl font-semibold text-green-700">What You'll Learn</h3>
          <p className="text-md text-gray-600 mt-3">
            You'll learn how to confidently use AI to enhance the way you work and think. Whether you're a total beginner or just looking to sharpen your edge, this bootcamp shows you how to interact with AI so it works efficiently for you and create your own practical tools to gain a real advantage.
          </p>
        </motion.div>

        {/* Module Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-14 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg border hover:border-green-300"
          >
            <div className="text-4xl mb-3">🧠</div>
            <h4 className="text-xl font-bold text-green-700 mb-2">Think Smarter</h4>
            <p className="text-gray-600 text-sm">Learn how to structure your thinking through better AI prompting.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg border hover:border-green-300"
          >
            <div className="text-4xl mb-3">⚡</div>
            <h4 className="text-xl font-bold text-green-700 mb-2">Do More, Faster</h4>
            <p className="text-gray-600 text-sm">Automate time-sucking tasks with tools you build yourself.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg border hover:border-green-300"
          >
            <div className="text-4xl mb-3">🛠️</div>
            <h4 className="text-xl font-bold text-green-700 mb-2">Build Real Tools</h4>
            <p className="text-gray-600 text-sm">
              Learn to create custom GPTs without coding. <a href="https://chatgpt.com/g/g-6758791406448191815fa88d799dd577-trend-threader" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">
                Try a real one here
              </a>
            </p>
          </motion.div>
        </div>

        {/* Final CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16"
        >
          <Card className="max-w-xl mx-auto shadow-xl bg-white p-8 border border-green-100">
            <CardContent className="flex flex-col items-center">
              <h2 className="text-2xl font-bold text-green-700 text-center">Join the AI Genie Bootcamp</h2>
              <p className="mt-2 text-gray-600 text-center">Now only $49 for a limited time!</p>
              <a href={paymentLink} target="_blank" rel="noopener noreferrer">
                <Button className="mt-6 bg-green-500 hover:bg-green-600 text-white rounded-xl px-6 py-3 text-lg">
                  Enroll Now
                </Button>
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
