'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import UploadArea from '@/components/UploadArea';
import ResultsDisplay from '@/components/ResultsDisplay';

interface CompatibleStem {
  id: number;
  name: string;
  type: string;
  key: string;
  bpm: number;
  url: string;
  genre: string;
  energy: string;
}

interface AnalysisResult {
  status: string;
  analysis: {
    key: string;
    bpm: number;
    groove: string;
    chordProgression: string[];
    rhythmicPattern: string;
    energy: string;
    genre: string;
  };
  stems: {
    drums_url: string;
    bass_url: string;
    other_url: string;
    vocals_url: string;
  };
  compatibleStems: CompatibleStem[];
}

export default function Home() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalysis = async (file: File) => {
    setIsAnalyzing(true);
    setError(null);
    setAnalysisResult(null);

    try {
      console.log('Processing file:', file.name);
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Mock analysis data
      const mockResult: AnalysisResult = {
        status: "success",
        analysis: {
          key: "C Minor",
          bpm: 128,
          groove: "Four-on-the-floor",
          chordProgression: ["Cm", "Fm", "Bb", "Eb"],
          rhythmicPattern: "Syncopated",
          energy: "High",
          genre: "Electronic"
        },
        stems: {
          drums_url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
          bass_url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
          other_url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
          vocals_url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
        },
        compatibleStems: [
          {
            id: 1,
            name: "Deep House Bass",
            type: "bass",
            key: "C Minor",
            bpm: 128,
            url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
            genre: "House",
            energy: "High"
          },
          {
            id: 2,
            name: "Synth Pad Progression",
            type: "pad",
            key: "C Minor",
            bpm: 128,
            url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
            genre: "Electronic",
            energy: "Medium"
          },
          {
            id: 3,
            name: "Percussion Loop",
            type: "percussion",
            key: "C Minor",
            bpm: 128,
            url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
            genre: "House",
            energy: "High"
          },
          {
            id: 4,
            name: "Melodic Lead",
            type: "lead",
            key: "C Minor",
            bpm: 128,
            url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
            genre: "Electronic",
            energy: "Medium"
          },
          {
            id: 5,
            name: "Atmospheric Pad",
            type: "pad",
            key: "C Minor",
            bpm: 128,
            url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
            genre: "Ambient",
            energy: "Low"
          },
          {
            id: 6,
            name: "Rhythm Guitar",
            type: "guitar",
            key: "C Minor",
            bpm: 128,
            url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
            genre: "Rock",
            energy: "High"
          }
        ]
      };

      setAnalysisResult(mockResult);
      console.log('Analysis completed:', mockResult);
      
    } catch (err) {
      console.error('Analysis failed:', err);
      setError('Failed to analyze audio file');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Welcome to RiffNet
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Upload your musical idea and let AI find the perfect compatible stems. 
              Get instant analysis of key, tempo, and groove, then discover harmonically 
              and rhythmically matched sounds from our curated library.
            </p>
          </div>

          {/* Upload Area */}
          <UploadArea onFileUpload={handleAnalysis} />

          {/* Loading State */}
          {isAnalyzing && (
            <div className="text-center py-8">
              <div className="inline-flex items-center space-x-2">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                <span className="text-gray-600 dark:text-gray-400">
                  Analyzing your musical idea...
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                Detecting key, tempo, and finding compatible stems
              </p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                      Analysis Failed
                    </h3>
                    <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                      {error}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results Display */}
          {analysisResult && (
            <ResultsDisplay result={analysisResult} />
          )}
        </div>
      </main>
    </div>
  );
}
