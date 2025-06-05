import { AuthProvider } from './contexts';
import { HomePage } from './pages';
import { FontChecker } from './components/common/FontChecker';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <FontChecker />
        <HomePage />
      </div>
    </AuthProvider>
  );
}

export default App;
