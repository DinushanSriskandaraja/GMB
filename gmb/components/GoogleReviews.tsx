'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Types for the Google Places API response
interface GoogleReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface PlaceResult {
  name: string;
  rating: number;
  reviews: GoogleReview[];
  user_ratings_total: number;
}

export function GoogleReviews() {
  const [data, setData] = useState<PlaceResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/reviews');
        const json = await res.json();
        
        if (json.error) {
          throw new Error(json.error);
        }
        
        setData(json);
      } catch (err: any) {
        setError(err.message || 'Failed to load reviews');
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-5xl mx-auto p-8 animate-pulse">
        <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded-lg w-64 mb-12 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !data || !data.reviews) {
    return (
      <div className="w-full max-w-5xl mx-auto p-8 text-center text-red-500">
        <p>Could not load reviews. Please configure the API Key.</p>
      </div>
    );
  }

  // Google Star SVG
  const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg
      className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-700'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          Client Feedback
        </h2>
        <div className="flex items-center justify-center gap-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} filled={star <= Math.round(data.rating)} />
            ))}
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
            {data.rating} out of 5 based on {data.user_ratings_total} reviews
          </p>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
            alt="Google Logo" 
            className="w-6 h-6 ml-2"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.reviews.map((review, index) => (
          <motion.div
            key={review.time}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <img
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className="w-12 h-12 rounded-full object-cover border border-gray-100 dark:border-gray-800"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white leading-tight">
                    {review.author_name}
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {review.relative_time_description}
                  </span>
                </div>
              </div>
              <a 
                href={review.author_url} 
                target="_blank" 
                rel="noreferrer"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                  alt="Google" 
                  className="w-5 h-5 grayscale hover:grayscale-0 transition-all"
                />
              </a>
            </div>

            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} filled={star <= review.rating} />
              ))}
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm line-clamp-5">
              {review.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
