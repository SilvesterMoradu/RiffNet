import Header from '@/components/Header';
import UploadArea from '@/components/UploadArea';
import ResultsDisplay from '@/components/ResultsDisplay';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12 space-y-16">
          {/* Hero section with upload area */}
          <section className="text-center">
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  RiffNet
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Unlock the power of AI-driven audio analysis. Upload your audio files and discover 
                hidden insights, patterns, and characteristics with cutting-edge machine learning.
              </p>
            </div>
            
            <UploadArea />
          </section>

          {/* Results section */}
          <section>
            <ResultsDisplay />
          </section>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </main>
    </div>
  );
}
