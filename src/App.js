import './App.css';
import react, {useState} from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import { Table } from './components/Table/Table';

function App() {
  const [text, setText] = useState("")
  const [character, setCharacter] = useState([])
  const [page, setPage] = useState(1);
  const [characterDetail, setCharacterDetail] = useState(false)
  const [id, setId] = useState(0)

  return (
    <>
      <Header />
      <Search 
        text={text} setText={setText}
      />
      <Table 
        character={character} setCharacter={setCharacter}
        page={page} setPage={setPage}
        characterDetail={characterDetail} setCharacterDetail={setCharacterDetail}
        id={id} setId={setId}
        text={text} setText={setText}
      />
    </>
  );
}

export default App;
