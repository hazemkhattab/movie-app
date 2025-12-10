import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    
    const apiUrl = process.env.TMDB_API_URL || process.env.NEXT_PUBLIC_MAIN_API_URL;
    const apiKey = process.env.TMDB_API_KEY || process.env.NEXT_PUBLIC_MAIN_API_KEY;
    
    console.log('=== /api/movies DEBUG ===');
    console.log('Request URL:', request.url);
    console.log('Page:', page);
    console.log('TMDB_API_URL:', apiUrl || 'NOT SET');
    console.log('TMDB_API_KEY:', apiKey ? `${apiKey.substring(0, 10)}...` : 'NOT SET');
    console.log('All env vars:', Object.keys(process.env).filter(k => k.includes('TMDB') || k.includes('NEXT_PUBLIC')));
    
    if (!apiUrl || !apiKey) {
      console.error('ERROR: Missing API configuration');
      return NextResponse.json(
        { 
          error: 'API configuration missing',
          debug: {
            hasApiUrl: !!apiUrl,
            hasApiKey: !!apiKey,
            envVars: Object.keys(process.env).filter(k => k.includes('TMDB') || k.includes('NEXT_PUBLIC'))
          }
        },
        { status: 500 }
      );
    }
    
    const tmdbUrl = `${apiUrl}/3/movie/popular?api_key=${apiKey}&page=${page}`;
    console.log('Fetching from TMDB:', tmdbUrl.replace(apiKey, 'API_KEY_HIDDEN'));
    
    const response = await fetch(tmdbUrl, { 
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    console.log('TMDB Response Status:', response.status);
    console.log('TMDB Response Headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('TMDB API Error:', errorText);
      throw new Error(`TMDB API error: ${response.status} - ${errorText}`);
    }
    
    const data = await response.json();
    console.log('Success! Movies returned:', data.results?.length || 0);
    console.log('Total pages:', data.total_pages);
    console.log('=== END DEBUG ===');
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('=== ERROR in /api/movies ===');
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
    console.error('=== END ERROR ===');
    return NextResponse.json(
      { error: 'Failed to fetch movies', results: [], total_pages: 0, debug: error.message },
      { status: 500 }
    );
  }
}
