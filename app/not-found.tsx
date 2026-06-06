"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full"
      >
        {/* Terminal Card */}
        <div className="rounded-3xl bg-card/40 backdrop-blur-md border border-border/50 overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-6 py-4 border-b border-border/50 bg-secondary/30">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-amber-500/50" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
            </div>
            <div className="ml-4 flex items-center gap-2">
              <Terminal className="w-3 h-3 text-foreground/40" />
              <span className="text-[10px] font-mono text-foreground/40 tracking-wider">error.log</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                404
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl font-bold text-foreground mb-3"
            >
              Page Not Found
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-foreground/50 mb-8 max-w-sm mx-auto"
            >
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </motion.p>

            {/* Error Code Style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8 p-4 rounded-xl bg-secondary/50 border border-border/30"
            >
              <code className="text-sm font-mono text-foreground/40">
                <span className="text-red-400">error</span>
                <span className="text-foreground/20">:</span>{" "}
                <span className="text-amber-400">&quot;route not found&quot;</span>
              </code>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Button
                variant="default"
                className="rounded-xl h-12 px-6 font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <Link href="/" className="flex items-center">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-xl h-12 px-6 font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}