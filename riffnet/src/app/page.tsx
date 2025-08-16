import Header from '@/components/Header';
import UploadArea from '@/components/UploadArea';
import ResultsDisplay from '@/components/ResultsDisplay';

export default function Home() {
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
          <UploadArea />

          {/* Results Display */}
          <ResultsDisplay />
        </div>
      </main>
    </div>
  );
}
