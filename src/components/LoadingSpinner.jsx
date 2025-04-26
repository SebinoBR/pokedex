function LoadingSpinner() {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div className="spinner" style={{
          width: '40px',
          height: '40px',
          border: '4px solid #ccc',
          borderTop: '4px solid #333',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: 'auto'
        }}></div>
  
        {/* Add simple CSS animation */}
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }
  
  export default LoadingSpinner;
  