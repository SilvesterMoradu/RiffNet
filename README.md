# RiffNet

A modern web application for audio file analysis built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎵 Audio file upload with drag-and-drop support
- 🌙 Dark theme UI with modern design
- 📱 Responsive layout
- 🎨 Beautiful gradient accents
- 📤 Support for multiple audio formats (MP3, WAV, FLAC, AAC, OGG, M4A)

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: 
  - react-dropzone for file uploads
  - lucide-react for icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles with Tailwind
├── components/
│   ├── Header.tsx      # App header with logo
│   ├── UploadArea.tsx  # Audio file upload dropzone
│   └── ResultsDisplay.tsx # Results display area
├── public/             # Static assets
└── package.json        # Dependencies and scripts
```

## Development

The app is set up with:
- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling
- Dark mode by default

## Next Steps

- Implement audio file processing logic
- Add audio visualization components
- Connect to backend API for analysis
- Add user authentication
- Implement result export functionality