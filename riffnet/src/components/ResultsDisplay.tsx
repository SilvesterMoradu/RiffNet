import { FileText, Music, Drum, Guitar, Mic, Volume2, Play, Download, Heart } from 'lucide-react';

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

  const getEnergyColor = (energy: string) => {
    switch (energy.toLowerCase()) {
      case 'high': return 'text-red-600 dark:text-red-400';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400';
      case 'low': return 'text-green-600 dark:text-green-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 space-y-8">
      {/* Track Analysis Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Track Analysis
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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

            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className={`text-2xl font-bold ${getEnergyColor(result.analysis.energy)}`}>
                {result.analysis.energy}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Energy Level
              </div>
            </div>
          </div>

          {/* Additional Analysis Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900 dark:text-white">Chord Progression</h3>
              <div className="flex flex-wrap gap-2">
                {result.analysis.chordProgression.map((chord, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    {chord}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900 dark:text-white">Rhythmic Pattern</h3>
              <div className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">{result.analysis.rhythmicPattern}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compatible Stems Library */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Music className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Compatible Stems Library
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {result.compatibleStems.map((stem) => (
              <div key={stem.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{stem.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">{stem.type}</p>
                  </div>
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                    <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Key:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{stem.key}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">BPM:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{stem.bpm}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Genre:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{stem.genre}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Energy:</span>
                    <span className={`font-medium ${getEnergyColor(stem.energy)}`}>{stem.energy}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <audio 
                    controls 
                    className="flex-1 h-8"
                    controlsList="nodownload"
                  >
                    <source src={stem.url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                    <Download className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>
            ))}
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