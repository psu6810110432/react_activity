import NoteForm from './components/NoteForm'; 
import NoteList from './components/NoteList'; 


function App() {
  return (
    <div className="app-container">
      <h1>Sticky Notes Wall</h1>
      {}
      <NoteForm /> 
      <NoteList />
    </div>
  );
}

export default App;