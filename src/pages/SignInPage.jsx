// src/pages/SignInPage.jsx
import { SignIn } from '@clerk/clerk-react';

export default function SignInPage() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Sign in to continue to your dashboard</p>

        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          appearance={{
            variables: {
              colorPrimary: '#007BFF',
              colorText: '#1a1f36',
              fontSize: '14px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              borderRadius: '8px',
            },
            elements: {
              formButtonPrimary:
                'bg-blue-600 hover:bg-blue-700 transition-colors duration-200',
              card: 'shadow-lg border border-gray-200',
              headerTitle: 'text-2xl font-semibold',
              headerSubtitle: 'text-sm text-gray-600',
              formFieldInput: 'border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200',
              footerActionLink: 'text-blue-600 hover:underline',
            },
          }}
        />
      </div>

      <footer style={styles.footer}>
        <p>© 2025 YourApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Clean, reusable inline styles
const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8f9fc 0%, #e9ecef 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: '#1a1f36',
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    padding: '2rem',
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: '600',
    margin: '0 0 0.5rem 0',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '0.875rem',
    color: '#6c757d',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  footer: {
    marginTop: 'auto',
    paddingTop: '2rem',
    fontSize: '0.875rem',
    color: '#6c757d',
    textAlign: 'center',
  },
};