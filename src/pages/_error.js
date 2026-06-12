function ErrorPage({ statusCode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: "'Proxima N W01 Reg', 'Inter', sans-serif",
        backgroundColor: '#FFFFFF',
        color: '#000000',
      }}
    >
      <p
        style={{
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          fontFamily: "'Futura LT W01 Light', Futura, sans-serif",
          fontWeight: 300,
          color: '#6E6E6D',
          margin: 0,
          lineHeight: 1,
        }}
      >
        {statusCode || 'Error'}
      </p>
      <p
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontFamily: "'Futura LT W01 Light', Futura, sans-serif",
          fontWeight: 300,
          marginTop: '1rem',
          marginBottom: '2rem',
        }}
      >
        {statusCode
          ? `A ${statusCode} error occurred on the server`
          : 'An error occurred on the client'}
      </p>
      <p style={{ color: '#6E6E6D', marginBottom: '2rem', maxWidth: '400px' }}>
        We apologize for the inconvenience. Please try refreshing the page or
        return to the homepage.
      </p>
      <a
        href="/"
        style={{
          display: 'inline-block',
          padding: '12px 32px',
          backgroundColor: '#384AD3',
          color: '#FFFFFF',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontSize: '0.875rem',
        }}
      >
        Return Home
      </a>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;