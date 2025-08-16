import Header from '@/components/Header'
import UploadArea from '@/components/UploadArea'
import ResultsDisplay from '@/components/ResultsDisplay'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Analyze Your Audio Files
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Upload your audio files to RiffNet and discover insights about your music. 
              Our advanced analysis tools help you understand the structure and characteristics of your audio.
            </p>
          </div>
          
          {/* Upload Area */}
          <UploadArea />
          
          {/* Results Display */}
          <ResultsDisplay />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="mt-auto py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-500">
            © 2024 RiffNet. Ready to analyze your audio files.
          </p>
        </div>
      </footer>
    </div>
  )
}