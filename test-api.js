// Test API functionality
require('dotenv').config();

const apiKey = process.env.REACT_APP_RAPID_API_KEY;

console.log('=== API TEST ===');
console.log('API Key:', apiKey ? `${apiKey.substring(0, 10)}...` : 'NOT FOUND');
console.log('');

// Test ExerciseDB API
async function testExerciseDB() {
  console.log('Testing ExerciseDB API...');
  try {
    const response = await fetch('https://exercisedb.p.rapidapi.com/exercises?limit=10', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': apiKey,
      },
    });
    
    console.log('ExerciseDB Status:', response.status);
    if (response.ok) {
      const data = await response.json();
      console.log('✅ ExerciseDB Working!');
      console.log('Total exercises returned:', data.length);
      console.log('Sample exercise:', JSON.stringify(data[0], null, 2));
      console.log('\n--- Checking critical fields ---');
      console.log('Has name?', !!data[0]?.name);
      console.log('Has bodyPart?', !!data[0]?.bodyPart);
      console.log('Has target?', !!data[0]?.target);
      console.log('Has equipment?', !!data[0]?.equipment);
      console.log('Has id?', !!data[0]?.id);
      console.log('Has gifUrl?', !!data[0]?.gifUrl);
    } else {
      console.log('❌ ExerciseDB Error:', await response.text());
    }
  } catch (error) {
    console.log('❌ ExerciseDB Failed:', error.message);
  }
  console.log('');
}

// Test YouTube API
async function testYouTube() {
  console.log('Testing YouTube Search API...');
  try {
    const response = await fetch('https://youtube-search-and-download.p.rapidapi.com/search?query=push up exercise', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': apiKey,
      },
    });
    
    console.log('YouTube Status:', response.status);
    if (response.ok) {
      const data = await response.json();
      console.log('✅ YouTube API Working!');
      console.log('Response structure:', Object.keys(data));
      console.log('Contents:', data.contents ? `${data.contents.length} videos` : 'No contents property');
      console.log('Items:', data.items ? `${data.items.length} videos` : 'No items property');
      
      // Show first video if available
      const firstVideo = data.contents?.[0] || data.items?.[0] || data[0];
      if (firstVideo) {
        console.log('First video:', firstVideo?.video?.title || firstVideo?.title || 'Unknown structure');
      }
    } else {
      console.log('❌ YouTube Error:', await response.text());
    }
  } catch (error) {
    console.log('❌ YouTube Failed:', error.message);
  }
}

// Run tests
(async () => {
  if (!apiKey) {
    console.log('❌ ERROR: REACT_APP_RAPID_API_KEY not found in .env file');
    console.log('Make sure your .env file exists in the project root with:');
    console.log('REACT_APP_RAPID_API_KEY=your_api_key_here');
    return;
  }
  
  await testExerciseDB();
  await testYouTube();
})();
