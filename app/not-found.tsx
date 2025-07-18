"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center p-8"
      >
        <motion.div
          initial={{ rotate: -60, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <AlertTriangle className="text-purple-500 w-24 h-24 mx-auto mb-4" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-6xl font-bold mb-4"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-3xl font-semibold mb-4"
        >
          Oops! Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg mb-8"
        >
          Sorry, but the page you're looking for doesn't exist.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="space-y-4"
        >
          <Link
            href="/"
            className="flex items-center justify-center hover:text-purple-500 transition-colors duration-200"
          >
            <Home className="mr-2" size={20} /> Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
