const LoadingScreen = () => {
  return (
    <div 
      className="loading-screen" 
      style={{
        backgroundColor: 'rgba(0, 0, 255, 1)',
        color: 'white', 
        height: '100vh', 
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000, // Ensure it’s on top of other elements
      }}
    >
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
