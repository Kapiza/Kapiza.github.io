import './App.css';
import { BrowserRouter } from 'react-router';
import Footer from './components/Footer'
import Header from './components/Header';
import AppRouter from './components/AppRouter';

function App() {
  return (
      <BrowserRouter>
        <Header></Header>
        <AppRouter>
        </AppRouter>
        <Footer></Footer>
      </BrowserRouter>
  );
}

export default App;
