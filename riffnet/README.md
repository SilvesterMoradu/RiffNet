# RiffNet

A modern web application for AI-powered audio analysis built with Next.js 14 and the App Router.

## Features

- 🎵 **Audio File Upload**: Drag and drop interface for audio files (MP3, WAV, FLAC, M4A, AAC)
- 🎨 **Modern UI**: Clean, responsive design with dark theme
- ⚡ **Next.js 14**: Built with the latest Next.js App Router
- 🎨 **Tailwind CSS**: Styled with Tailwind CSS for consistent design
- 📱 **Responsive**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **File Upload**: React Dropzone

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

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

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with Tailwind directives
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
└── components/
    ├── Header.tsx           # Header component with logo and app name
    ├── UploadArea.tsx       # File upload component with drag & drop
    └── ResultsDisplay.tsx   # Results display component
```

## Components

### Header
- Displays the RiffNet logo and app name
- Styled with a dark theme and professional appearance

### UploadArea
- Drag and drop file upload interface
- Supports multiple audio file formats
- Visual feedback for drag states
- Professional styling with hover effects

### ResultsDisplay
- Placeholder for displaying analysis results
- Clean, empty state design
- Ready for future implementation

## Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Styling

The project uses Tailwind CSS with a custom configuration that includes:
- Dark mode support
- Custom color variables
- Responsive design utilities

## Future Enhancements

- Audio file processing and analysis
- Real-time upload progress
- Results visualization
- User authentication
- File management system

## License

This project is licensed under the MIT License.
