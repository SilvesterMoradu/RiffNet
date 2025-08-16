import { NextRequest, NextResponse } from 'next/server';
import Replicate from 'replicate';

// Initialize Replicate client
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(request: NextRequest) {
  try {
    // Check if API token is configured
    if (!process.env.REPLICATE_API_TOKEN) {
      return NextResponse.json(
        { error: 'Replicate API token not configured' },
        { status: 500 }
      );
    }

    // Parse the request body
    const body = await request.json();
    const { audioUrl } = body;

    if (!audioUrl) {
      return NextResponse.json(
        { error: 'Audio URL is required' },
        { status: 400 }
      );
    }

    // Call the Demucs model for stem separation
    console.log('Starting stem separation with Demucs...');
    const demucsOutput = await replicate.run(
      "facebook/demucs:4a37f0456c53e4e01e80c6ab3d3557ae4fdd0d3c2d42c6f3d5f595b4783871f9",
      {
        input: {
          audio: audioUrl,
          model: "htdemucs",
          shifts: 1,
          split: true,
          overlap: 0.25,
          stem: "all"
        }
      }
    );

    console.log('Demucs output:', demucsOutput);

    // Process the stems output
    // The Demucs model returns an array of URLs for different stems
    let stems = {
      drums_url: '',
      bass_url: '',
      other_url: '',
      vocals_url: ''
    };

    if (Array.isArray(demucsOutput)) {
      // Demucs typically returns files in this order: [drums, bass, other, vocals]
      // We need to check the actual output structure and map accordingly
      stems = {
        drums_url: demucsOutput[0] || '',
        bass_url: demucsOutput[1] || '',
        other_url: demucsOutput[2] || '',
        vocals_url: demucsOutput[3] || ''
      };
    }

    // For now, simulate key/tempo analysis (placeholder data)
    const analysis = {
      key: "C Minor",
      bpm: 124,
      groove: "Swing"
    };

    // Return the complete analysis
    return NextResponse.json({
      status: "success",
      analysis,
      stems
    });

  } catch (error) {
    console.error('Error processing audio:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process audio file',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}