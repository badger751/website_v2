"use client";
import React from "react";
import images from 'next/image';
import { HeroParallax } from "@/components/ui/hero-parallel";
import '@/public/images/image_1.jpg';
import '@/public/images/image_2.jpg';
import '@/public/images/image_3.jpg';
import '@/public/images/image_4.jpg';
import '@/public/images/image_5.jpg';
import '@/public/images/image_6.jpg';
export default function HeroParallaxDemo() {
  
  return(
    <div className="bg-customYellow" >
    <HeroParallax products={products} />
    </div>
  ) ;
}
export const products = [
  {
    title: "पुष्पा 2 ने तोड़ा रिकॉर्ड, 100 करोड़ की एडवांस बुकिंग!",
    link: "/blog/1",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Post%201.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvUG9zdCAxLmpwZyIsImlhdCI6MTczMzQwNzc4MSwiZXhwIjoxNzY0OTQzNzgxfQ.Ss0sqe4ofguJ0pq62SoRNuj6qFklPAFTwqCQZV0sCWg&t=2024-12-05T14%3A09%3A41.881Z",
  },
  {
    title: "भारत मोबिलिटी एक्सपो 2025: ऑटो उद्योग का महाकुंभ",
    link: "/blog/2",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Post%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvUG9zdCAyLmpwZyIsImlhdCI6MTczMzQwNzkxNCwiZXhwIjoxNzY0OTQzOTE0fQ.V_idFRPt_TZSe646UtXlw2NoA7c4RsFABBzJZiaCPzI&t=2024-12-05T14%3A11%3A54.456Z",
  },
  {
    title: "गोविंदा का चौंकाने वाला खुलासा: 'भागम भाग 2' के लिए नहीं किया गया संपर्क, लेकिन वापसी के लिए तैयार!",
    link: "/blog/3",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/post%203.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvcG9zdCAzLmpwZyIsImlhdCI6MTczMzQwNzk1NCwiZXhwIjoxNzY0OTQzOTU0fQ.JX7RBiKHoqBZXmkBP3mxVs1G8TfDk9Lzt7gn1mDTB4I&t=2024-12-05T14%3A12%3A34.789Z",
  },

  {
    title: "महाराष्ट्र में मुख्यमंत्री पद का सस्पेंस खत्म, फडणवीस बने नेता, शिंदे ने डिप्टी सीएम पद स्वीकार किया!",
    link: "/blog/4",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzQwNzk5MCwiZXhwIjoxNzY0OTQzOTkwfQ.CUjdyaonQlPf_tQ8AIwFxCdPn_1HAT5K6aH-p7gtbc0&t=2024-12-05T14%3A13%3A10.777Z",
  },
  {
    title: "पुष्पा 2 ने तोड़ा रिकॉर्ड, 100 करोड़ की एडवांस बुकिंग!",
    link: "/blog/1",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Post%201.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvUG9zdCAxLmpwZyIsImlhdCI6MTczMzQwNzc4MSwiZXhwIjoxNzY0OTQzNzgxfQ.Ss0sqe4ofguJ0pq62SoRNuj6qFklPAFTwqCQZV0sCWg&t=2024-12-05T14%3A09%3A41.881Z",
  },
  {
    title: "भारत मोबिलिटी एक्सपो 2025: ऑटो उद्योग का महाकुंभ",
    link: "/blog/2",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Post%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvUG9zdCAyLmpwZyIsImlhdCI6MTczMzQwNzkxNCwiZXhwIjoxNzY0OTQzOTE0fQ.V_idFRPt_TZSe646UtXlw2NoA7c4RsFABBzJZiaCPzI&t=2024-12-05T14%3A11%3A54.456Z",
  },
  {
    title: "गोविंदा का चौंकाने वाला खुलासा: 'भागम भाग 2' के लिए नहीं किया गया संपर्क, लेकिन वापसी के लिए तैयार!",
    link: "/blog/3",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/post%203.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvcG9zdCAzLmpwZyIsImlhdCI6MTczMzQwNzk1NCwiZXhwIjoxNzY0OTQzOTU0fQ.JX7RBiKHoqBZXmkBP3mxVs1G8TfDk9Lzt7gn1mDTB4I&t=2024-12-05T14%3A12%3A34.789Z",
  },

  {
    title: "महाराष्ट्र में मुख्यमंत्री पद का सस्पेंस खत्म, फडणवीस बने नेता, शिंदे ने डिप्टी सीएम पद स्वीकार किया!",
    link: "/blog/4",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzQwNzk5MCwiZXhwIjoxNzY0OTQzOTkwfQ.CUjdyaonQlPf_tQ8AIwFxCdPn_1HAT5K6aH-p7gtbc0&t=2024-12-05T14%3A13%3A10.777Z",
  },
  {
    title: "पुष्पा 2 ने तोड़ा रिकॉर्ड, 100 करोड़ की एडवांस बुकिंग!",
    link: "/blog/1",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Post%201.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvUG9zdCAxLmpwZyIsImlhdCI6MTczMzQwNzc4MSwiZXhwIjoxNzY0OTQzNzgxfQ.Ss0sqe4ofguJ0pq62SoRNuj6qFklPAFTwqCQZV0sCWg&t=2024-12-05T14%3A09%3A41.881Z",
  },
  {
    title: "भारत मोबिलिटी एक्सपो 2025: ऑटो उद्योग का महाकुंभ",
    link: "/blog/2",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Post%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvUG9zdCAyLmpwZyIsImlhdCI6MTczMzQwNzkxNCwiZXhwIjoxNzY0OTQzOTE0fQ.V_idFRPt_TZSe646UtXlw2NoA7c4RsFABBzJZiaCPzI&t=2024-12-05T14%3A11%3A54.456Z",
  },
  {
    title: "गोविंदा का चौंकाने वाला खुलासा: 'भागम भाग 2' के लिए नहीं किया गया संपर्क, लेकिन वापसी के लिए तैयार!",
    link: "/blog/3",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/post%203.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvcG9zdCAzLmpwZyIsImlhdCI6MTczMzQwNzk1NCwiZXhwIjoxNzY0OTQzOTU0fQ.JX7RBiKHoqBZXmkBP3mxVs1G8TfDk9Lzt7gn1mDTB4I&t=2024-12-05T14%3A12%3A34.789Z",
  },

  {
    title: "महाराष्ट्र में मुख्यमंत्री पद का सस्पेंस खत्म, फडणवीस बने नेता, शिंदे ने डिप्टी सीएम पद स्वीकार किया!",
    link: "/blog/4",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/cherry.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvY2hlcnJ5LmpwZWciLCJpYXQiOjE3MzM0MDgxMTIsImV4cCI6MTc2NDk0NDExMn0.c-eLgSTt5iJr6WF-hB368DS2O7kg0LXtG967nTz-ZAU&t=2024-12-05T14%3A15%3A12.712Z",
  },


  
];
