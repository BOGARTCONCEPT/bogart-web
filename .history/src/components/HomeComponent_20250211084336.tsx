export default function HomeComponent() {
  return (
    <div style={{ 
      backgroundImage: `url('/imgs/bogart.jpeg')`, // Correct path: /imgs/bogart.jpeg
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh' 
    }}>
      hello
    </div>
  );
}