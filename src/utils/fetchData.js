export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  try {
    console.log('Fetching from:', url);
    console.log('API Key present:', !!options.headers['X-RapidAPI-Key']);
    
    const res = await fetch(url, options);
    
    console.log('Response status:', res.status);
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error('API Error Response:', errorText);
      throw new Error(`HTTP error! status: ${res.status}, message: ${errorText}`);
    }
    
    const data = await res.json();
    console.log('Data received, type:', Array.isArray(data) ? `Array[${data.length}]` : typeof data);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
