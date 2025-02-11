

export default function HomeComponent() {
  return (
    <div style={{ 
      backgroundImage: `imgs/bogart.jpeg`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh' // Or height: '100%' if you're within a positioned parent
    }}>
      hello
    </div>
  );
}