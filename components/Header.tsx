import React from 'react'
import { Music } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="w-full bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Music className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">RiffNet</h1>
        </div>
      </div>
    </header>
  )
}

export default Header