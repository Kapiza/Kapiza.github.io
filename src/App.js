// import './App.css';
import './css/base.css';
import { BrowserRouter } from 'react-router';
import Footer from './components/Footer'
import Header from './components/Header';
import AppRouter from './components/AppRouter';

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <main>
          <AppRouter/>
        </main>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
