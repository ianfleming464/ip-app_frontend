import { supabase } from './utils/supabase';
require('dotenv').config();

const fetchInfo = async () => {
  // use the fetch API to fetch the info from our Supabase tables
  console.log('fetching info from Supabase');
  const { data: trademarks, error } = await supabase
    .from('trademark-info')
    .select('*')
    .order('id', { ascending: true });
  console.log('trademarks: ', trademarks);
  console.log('error: ', error);
  const { data: industrialDesigns, error2 } = await supabase
    .from('industrial-design-info')
    .select('*')
    .order('id', { ascending: true });
  // if there are errors, return them to the console
  console.log('industrial designs: ', industrialDesigns);
  console.log('error2: ', error2);
  if (error || error2) {
    console.log({ error, error2 });
    return;
  }
  // otherwise, return the data
  console.log('fetching info successful');
  return { trademarks, industrialDesigns };
};

export default fetchInfo;
