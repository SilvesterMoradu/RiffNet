import { Music } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
              <Music className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold">RiffNet</h1>
          </div>
          
          {/* Demo Mode Badge */}
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 bg-yellow-600 text-yellow-100 text-xs font-medium rounded-full">
              Demo Mode
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}