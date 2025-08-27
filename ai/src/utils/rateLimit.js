import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export async function rateLimit(request) {
  if (process.env.NODE_ENV !== 'production') {
    return { success: true };
  }

  const ip = request.headers.get('x-forwarded-for') || 'anonymous';
  const key = `ratelimit:${ip}`;
  
  const now = Date.now();
  const windowSize = 60 * 1000; // 1 minute
  const limit = 5; // 5 requests per minute

  try {
    const result = await redis.multi()
      .zremrangebyscore(key, 0, now - windowSize)
      .zadd(key, now, now.toString())
      .zcard(key)
      .expire(key, 60)
      .exec();

    const count = result[2];
    
    return {
      success: count <= limit,
      limit,
      remaining: Math.max(0, limit - count)
    };
  } catch (error) {
    console.error('Rate limit error:', error);
    return { success: true }; // Fail open
  }
}