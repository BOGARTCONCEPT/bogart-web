

export default function Home() {
  return (
    <div style={{ 
      backgroundImage: `url('/path/to/your/image.jpg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh' // Or height: '100%' if you're within a positioned parent
    }}>
      {/* Your content */}
    </div>
  );
}