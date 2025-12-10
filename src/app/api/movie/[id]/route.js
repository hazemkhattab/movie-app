import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const movieId = params.id;
    
    const apiUrl = process.env.TMDB_API_URL || process.env.NEXT_PUBLIC_MAIN_API_URL;
    const apiKey = process.env.TMDB_API_KEY || process.env.NEXT_PUBLIC_MAIN_API_KEY;
    
    if (!apiUrl || !apiKey) {
      return NextResponse.json(
        { error: 'API configuration missing' },
        { status: 500 }
      );
    }
    
    const response = await fetch(
      `${apiUrl}/3/movie/${movieId}?api_key=${apiKey}`,
      {
        cache: 'force-cache',
        next: { revalidate: 3600 },
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
    console.error('Error in /api/movie/[id]:', error);
    return NextResponse.json(
      { error: 'Failed to fetch movie details' },
      { status: 500 }
    );
  }
}
