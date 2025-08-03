// src/App.jsx
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ConvertToExcel from "./components/ConvertToExcel";
import Expectations from "./components/Expectations";
import FreshAccountsChatBot from "./components/FreshAccountsIncentiveBot";
import HeroEmailScanTool from "./components/GmailToos";
import HeroTrustedCustomers from "./components/HeroTrustedCustomers";
import Navbar from "./components/Navbar";

// Import your custom auth pages
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Footer from './components/Footer';

// Load publishable key from .env
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  console.error("Missing VITE_CLERK_PUBLISHABLE_KEY. Check your .env file.");
}

function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <Routes>
          {/* Public Auth Routes */}
          
          <Route path="/sign-in/*" element={<SignInPage />} />
          <Route path="/sign-up/*" element={<SignUpPage />} />

          {/* Protected App Route */}
          <Route
            path="/*"
            element={
              <>
                <SignedIn>
                  {/* Show full app when signed in */}
                  <Navbar />
                  <HeroTrustedCustomers />
                  <Expectations />
                  <HeroEmailScanTool />
                  <ConvertToExcel />
                  <FreshAccountsChatBot />
                  <Footer/>
                </SignedIn>
                <SignedOut>
                  {/* Redirect to sign-in if not authenticated */}
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;