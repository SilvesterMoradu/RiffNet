'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Music } from 'lucide-react';

export default function UploadArea() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log('Files dropped:', acceptedFiles);
    // TODO: Handle file upload logic
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'audio/*': ['.mp3', '.wav', '.flac', '.m4a', '.aac']
    },
    multiple: false
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200
          ${isDragActive 
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
            : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
          }
          bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700
        `}
      >
        <input {...getInputProps()} />
        
        <div className="flex flex-col items-center space-y-4">
          <div className={`
            p-4 rounded-full transition-colors duration-200
            ${isDragActive 
              ? 'bg-blue-100 dark:bg-blue-900' 
              : 'bg-gray-100 dark:bg-gray-700'
            }
          `}>
            {isDragActive ? (
              <Upload className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            ) : (
              <Music className="w-8 h-8 text-gray-600 dark:text-gray-400" />
            )}
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {isDragActive ? 'Drop your audio file here' : 'Upload Audio File'}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isDragActive 
                ? 'Release to upload' 
                : 'Drop your audio file here, or click to browse'
              }
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Supports MP3, WAV, FLAC, M4A, AAC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}