import { BarChart3, Waveform, Clock } from 'lucide-react';

export default function ResultsDisplay() {
  const hasResults = false; // This will be dynamic in the future

  if (!hasResults) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            Analysis Results
          </h2>
          <p className="text-gray-400">
            Upload an audio file to see detailed analysis results here.
          </p>
        </div>

        <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700/50">
          <div className="flex flex-col items-center justify-center space-y-6 py-12">
            <div className="flex space-x-4">
              <div className="p-3 bg-gray-700/50 rounded-lg">
                <Waveform className="w-8 h-8 text-gray-500" />
              </div>
              <div className="p-3 bg-gray-700/50 rounded-lg">
                <BarChart3 className="w-8 h-8 text-gray-500" />
              </div>
              <div className="p-3 bg-gray-700/50 rounded-lg">
                <Clock className="w-8 h-8 text-gray-500" />
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-300 mb-2">
                No Results Yet
              </h3>
              <p className="text-gray-500 max-w-md">
                Once you upload and analyze an audio file, you'll see detailed insights including 
                waveform visualization, frequency analysis, and timing information.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Future: This section will display actual results
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          Analysis Results
        </h2>
      </div>
      
      {/* Future results will be displayed here */}
      <div className="space-y-6">
        {/* Placeholder for actual results components */}
      </div>
    </div>
  );
}