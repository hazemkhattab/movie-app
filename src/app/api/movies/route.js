import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    
    const apiUrl = process.env.NEXT_PUBLIC_MAIN_API_URL;
    const apiKey = process.env.NEXT_PUBLIC_MAIN_API_KEY;
    
    if (!apiUrl || !apiKey) {
      return NextResponse.json(
        { error: 'API configuration missing' },
        { status: 500 }
      );
    }
    
    const response = await fetch(
      `${apiUrl}/3/movie/popular?api_key=${apiKey}&page=${page}`,
      { 
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`TMDB API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in /api/movies:', error);
    return NextResponse.json(
      { error: 'Failed to fetch movies', results: [], total_pages: 0 },
      { status: 500 }
    );
  }
}
