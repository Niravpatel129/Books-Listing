import './App.css';
import BooksProvider from './contexts/Books/BooksProvider';

function App() {
  return (
    <BooksProvider>
      <div className="App">Testing</div>
    </BooksProvider>
  );
}

export default App;
