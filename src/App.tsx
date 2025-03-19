import React from 'react';
import { auth } from './firebase';
import './App.css';

function App() {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Bridge Building Competition</h1>
        {auth.currentUser ? (
          <div>
            <p>Welcome, {auth.currentUser.displayName}!</p>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <div className="auth-buttons">
            <button>Log In</button>
            <button>Sign Up</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App; 