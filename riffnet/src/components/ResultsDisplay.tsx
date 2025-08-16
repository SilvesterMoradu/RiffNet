import { FileText, Music, Drum, Guitar, Mic, Volume2 } from 'lucide-react';

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

interface ResultsDisplayProps {
  result: AnalysisResult;
}

export default function ResultsDisplay({ result }: ResultsDisplayProps) {
  const stems = [
    { name: 'Drums', url: result.stems.drums_url, icon: Drum },
    { name: 'Bass', url: result.stems.bass_url, icon: Guitar },
    { name: 'Vocals', url: result.stems.vocals_url, icon: Mic },
    { name: 'Other', url: result.stems.other_url, icon: Music },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 space-y-6">
      {/* Track Analysis Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Track Analysis
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {result.analysis.key}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Musical Key
              </div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {result.analysis.bpm}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                BPM
              </div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {result.analysis.groove}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Groove Type
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separated Stems Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Volume2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Separated Stems
            </h2>
          </div>
          
          <div className="space-y-4">
            {stems.map((stem, index) => {
              const IconComponent = stem.icon;
              return (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <IconComponent className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {stem.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Isolated {stem.name.toLowerCase()} track
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {stem.url ? (
                        <audio 
                          controls 
                          className="h-10"
                          controlsList="nodownload"
                        >
                          <source src={stem.url} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      ) : (
                        <div className="text-sm text-gray-500 dark:text-gray-500 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded">
                          Not available
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}