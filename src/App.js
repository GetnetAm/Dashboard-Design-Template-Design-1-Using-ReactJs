
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="grid-container">
    <Header />
    <Sidebar />
    <Home />

      
    </div>
  );
}

export default App;
