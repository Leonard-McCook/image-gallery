import Image from 'next/image'
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);



function cn(...classes: string[]) {
   return classes.filter(Boolean).join(' ');
}


export default function Gallery() {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7x1 lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <BlurImage />
      </div>
    </div>
  );
}

function BlurImage() {
  const [isLoading, setLoading] = useState(true)
  
  return (
    <a href="#" className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img alt="" 
             src="https://bit.ly/placeholder-img"
             layout="fill"
             objectFit="cover"
             className={cn(
              "group-hover:opacity-75 duration-700 ease-in-out",
              isLoading
                 ? 'grayscale blur-2x1 scale-110' 
                 : 'grayscale-0 blur-0 scale-100'
             )}
             onLoadingComplete={() => setLoading(false)} 
             />   
      </div>
      <h3 className="mt-4 text-sm text-gray-700">Lee Robinson</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">@leeerob</p>
    </a>
  );
}