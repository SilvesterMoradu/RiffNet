'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import UploadArea from '@/components/UploadArea';
import ResultsDisplay from '@/components/ResultsDisplay';

interface AnalysisResult {
  status: string;
  analysis: {
    key: string;
    bpm: number;
    groove: string;
  };
  stems: {
    drums_url: string;
    bass_url: string;
    other_url: string;
    vocals_url: string;
  };
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
      // Convert file to base64 data URL
      const base64Data = await fileToBase64(file);
      
      // For now, we'll use a placeholder URL since Replicate needs a public URL
      // In a real app, you'd upload to a service like AWS S3, Cloudinary, etc.
      const audioUrl = base64Data; // This is a placeholder - you'd need a real URL

      console.log('Sending audio for analysis...');
      
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ audioUrl }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.error) {
        throw new Error(result.error);
      }

      setAnalysisResult(result);
      console.log('Analysis completed:', result);
      
    } catch (err) {
      console.error('Analysis failed:', err);
      setError(err instanceof Error ? err.message : 'Failed to analyze audio file');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
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
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Upload your audio files and get instant analysis. Our AI-powered platform 
              helps you understand and enhance your music.
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
                  Analyzing your audio file...
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                This may take a few moments
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
