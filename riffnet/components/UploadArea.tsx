'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileAudio, X } from 'lucide-react';

export default function UploadArea() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setUploadedFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'audio/*': ['.mp3', '.wav', '.flac', '.m4a', '.ogg', '.aac']
    },
    multiple: false,
    maxSize: 50 * 1024 * 1024, // 50MB limit
  });

  const removeFile = () => {
    setUploadedFile(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">
          Upload Your Audio
        </h2>
        <p className="text-gray-400">
          Drop your audio file here to start the analysis. Supported formats: MP3, WAV, FLAC, M4A, OGG, AAC
        </p>
      </div>

      {!uploadedFile ? (
        <div
          {...getRootProps()}
          className={`
            relative border-2 border-dashed rounded-xl p-12 text-center cursor-pointer
            transition-all duration-300 ease-in-out
            ${isDragActive 
              ? 'border-blue-400 bg-blue-500/10 scale-105' 
              : 'border-gray-600 hover:border-gray-500 hover:bg-gray-800/30'
            }
          `}
        >
          <input {...getInputProps()} />
          
          <div className="flex flex-col items-center space-y-4">
            <div className={`
              p-4 rounded-full transition-all duration-300
              ${isDragActive 
                ? 'bg-blue-500/20 text-blue-400' 
                : 'bg-gray-800 text-gray-400'
              }
            `}>
              <Upload className="w-12 h-12" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">
                {isDragActive 
                  ? 'Drop your audio file here...' 
                  : 'Drop your audio file here, or click to browse'
                }
              </h3>
              <p className="text-gray-500">
                Maximum file size: 50MB
              </p>
            </div>

            <button
              type="button"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 
                       text-white font-medium rounded-lg hover:from-purple-600 
                       hover:to-blue-700 transition-all duration-200 
                       transform hover:scale-105 focus:outline-none 
                       focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                       focus:ring-offset-gray-900"
            >
              Select Audio File
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 
                            bg-green-500/20 rounded-lg">
                <FileAudio className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">
                  {uploadedFile.name}
                </h4>
                <p className="text-sm text-gray-400">
                  {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            
            <button
              onClick={removeFile}
              className="p-2 text-gray-400 hover:text-red-400 
                       hover:bg-red-500/10 rounded-lg transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700">
            <button
              type="button"
              className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 
                       text-white font-medium rounded-lg hover:from-green-600 
                       hover:to-emerald-700 transition-all duration-200 
                       transform hover:scale-105 focus:outline-none 
                       focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
                       focus:ring-offset-gray-900"
            >
              Analyze Audio
            </button>
          </div>
        </div>
      )}
    </div>
  );
}