// Simple in-memory rate limiter for development/small scale
// For production serverless, use Redis (e.g., Upstash)

type RateLimitStore = {
  [key: string]: {
    count: number;
    lastReset: number;
  };
};

const store: RateLimitStore = {};

const WINDOW_MS = 60 * 60 * 1000; // 1 hour window
const MAX_REQUESTS = 5; // 5 requests per hour

export function rateLimit(ip: string): boolean {
  const now = Date.now();
  if (!store[ip]) {
    store[ip] = { count: 1, lastReset: now };
    return true;
  }

  const { count, lastReset } = store[ip];

  if (now - lastReset > WINDOW_MS) {
    store[ip] = { count: 1, lastReset: now };
    return true;
  }

  if (count >= MAX_REQUESTS) {
    return false;
  }

  store[ip].count++;
  return true;
}
