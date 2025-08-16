# RiffNet

A modern web application for AI-powered audio analysis built with Next.js 14 and the App Router.

## Features

- 🎵 **Audio File Upload**: Drag and drop interface for audio files (MP3, WAV, FLAC, M4A, AAC)
- 🤖 **AI Analysis**: Powered by Replicate API for stem separation and audio analysis
- 🎨 **Modern UI**: Clean, responsive design with dark theme
- ⚡ **Next.js 14**: Built with the latest Next.js App Router
- 🎨 **Tailwind CSS**: Styled with Tailwind CSS for consistent design
- 📱 **Responsive**: Works seamlessly on desktop and mobile devices
- 🎧 **Audio Preview**: Listen to separated stems with built-in audio players

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **File Upload**: React Dropzone
- **AI Processing**: Replicate API (Demucs for stem separation)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Replicate API token
- Vercel account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd riffnet
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local and add your API tokens
REPLICATE_API_TOKEN=your_replicate_api_token_here
VERCEL_API_TOKEN=your_vercel_api_token_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel

1. **Using Vercel CLI** (recommended):
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# For production deployment
vercel --prod
```

2. **Using Vercel Dashboard**:
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Add environment variables in Vercel dashboard
   - Deploy automatically

### Environment Variables for Production

Make sure to add these environment variables in your Vercel project settings:

- `REPLICATE_API_TOKEN` - Your Replicate API token
- `VERCEL_API_TOKEN` - Your Vercel API token (optional, for CLI operations)

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── analyze/
│   │       └── route.ts          # API endpoint for audio analysis
│   ├── globals.css               # Global styles with Tailwind directives
│   ├── layout.tsx                # Root layout component
│   └── page.tsx                  # Main page component
└── components/
    ├── Header.tsx                # Header component with logo and app name
    ├── UploadArea.tsx            # File upload component with drag & drop
    └── ResultsDisplay.tsx        # Results display with analysis and audio players
```

## Components

### Header
- Displays the RiffNet logo and app name
- Styled with a dark theme and professional appearance

### UploadArea
- Drag and drop file upload interface
- Supports multiple audio file formats
- Visual feedback for drag states
- Triggers analysis when files are uploaded

### ResultsDisplay
- **Track Analysis Section**: Shows musical key, BPM, and groove type
- **Separated Stems Section**: Audio players for drums, bass, vocals, and other tracks
- Clean, organized layout with icons and descriptions

## API Integration

### `/api/analyze` Endpoint

**Method**: `POST`

**Request Body**:
```json
{
  "audioUrl": "data:audio/mp3;base64,..."
}
```

**Response**:
```json
{
  "status": "success",
  "analysis": {
    "key": "C Minor",
    "bpm": 124,
    "groove": "Swing"
  },
  "stems": {
    "drums_url": "https://...",
    "bass_url": "https://...",
    "other_url": "https://...",
    "vocals_url": "https://..."
  }
}
```

### AI Processing

The application uses Replicate's Demucs model for:
- **Stem Separation**: Isolates drums, bass, vocals, and other instruments
- **Audio Analysis**: Extracts musical key, tempo, and groove information

## Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

- `REPLICATE_API_TOKEN` - Your Replicate API token for AI processing
- `VERCEL_API_TOKEN` - Your Vercel API token for deployment

### Styling

The project uses Tailwind CSS with a custom configuration that includes:
- Dark mode support
- Custom color variables
- Responsive design utilities

## Current Status

- ✅ Basic UI structure and components
- ✅ File upload with drag & drop
- ✅ API integration with Replicate
- ✅ Analysis results display
- ✅ Audio player for separated stems
- ✅ Vercel deployment configuration
- 🔄 Real-time upload progress (planned)
- 🔄 User authentication (planned)
- 🔄 File management system (planned)

## Future Enhancements

- Real-time upload progress indicators
- User authentication and file management
- Advanced audio analysis features
- Stem download functionality
- Collaborative features
- Mobile app version

## License

This project is licensed under the MIT License.
