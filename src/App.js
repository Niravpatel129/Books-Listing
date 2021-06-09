import './App.css';
import BookList from './components/BookList/BookList';
import BooksProvider from './contexts/Books/BooksProvider';

function App() {
  return (
    <BooksProvider>
      <div className="App">
        <BookList />
      </div>
    </BooksProvider>
  );
}

export default App;
