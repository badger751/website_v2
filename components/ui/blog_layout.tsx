import React from 'react';

interface BlogPost {
  id: string;
  title: string;
  description: string;
   // Add more fields as needed
  href: string;
}

const BlogLayout = ({ post }: { post: BlogPost }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg mb-6">{post.description}</p>
      {/* Add more elements based on your specific layout and post properties */}
      <a href={post.href} className="text-blue-500 hover:underline">Read More</a>
    </div>
  );
};

export default BlogLayout;