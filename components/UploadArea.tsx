'use client'

import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, Music2 } from 'lucide-react'

const UploadArea: React.FC = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload logic here
    console.log('Files uploaded:', acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'audio/*': ['.mp3', '.wav', '.flac', '.aac', '.ogg', '.m4a']
    },
    maxFiles: 1
  })

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        {...getRootProps()}
        className={`
          relative border-2 border-dashed rounded-lg p-12 text-center cursor-pointer
          transition-all duration-200 ease-in-out
          ${
            isDragActive
              ? 'border-purple-500 bg-purple-500/10'
              : 'border-slate-600 hover:border-purple-400 bg-slate-800/50 hover:bg-slate-800'
          }
        `}
      >
        <input {...getInputProps()} />
        
        <div className="flex flex-col items-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            {isDragActive ? (
              <Music2 className="w-10 h-10 text-white animate-pulse" />
            ) : (
              <Upload className="w-10 h-10 text-white" />
            )}
          </div>
          
          <div>
            <p className="text-xl font-semibold text-slate-200 mb-2">
              {isDragActive
                ? 'Drop your audio file here'
                : 'Drop your audio file here, or click to browse'}
            </p>
            <p className="text-sm text-slate-400">
              Supported formats: MP3, WAV, FLAC, AAC, OGG, M4A
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadArea