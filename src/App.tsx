import { AuthProvider } from './contexts';
import './App.css';
import { SignupPage } from './pages/auth';

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <SignupPage />
        {/* <FontChecker />
        <ImageSystemDemo />
        <HomePage /> */}
      </div>
    </AuthProvider>
  );
}

export default App;
