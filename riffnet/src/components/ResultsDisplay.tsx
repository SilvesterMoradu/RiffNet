import { FileText } from 'lucide-react';

export default function ResultsDisplay() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Results
            </h2>
          </div>
          
          <div className="text-center py-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-gray-400 dark:text-gray-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  No results yet
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Upload an audio file to see analysis results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}