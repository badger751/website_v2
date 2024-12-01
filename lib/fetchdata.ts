import supabase from './supabaseclient';

const fetchData = async () => {
  const { data, error } = await supabase.from('up').select('*');

  if (error) {
    console.error('Error fetching data:', error);
    // Handle error, e.g., display an error message
  }

  return data;
};

export default fetchData;

export const fetchPostById = async (postId: string) => {
    const { data, error } = await supabase
      .from('up')
      .select('*')
      .eq('id', postId)
      .single();
  
    if (error) {
      console.error('Error fetching post:', error);
      throw new Error('Failed to fetch post');
    }
  
    return data;
};