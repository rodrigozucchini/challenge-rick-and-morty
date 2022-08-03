import React, {useState} from 'react';
import { BACKEND } from './backend';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import { Table } from './components/Table/Table';

function App() {
  const [text, setText] = useState("")
  const [character, setCharacter] = useState([])
  const [page, setPage] = useState(1);
  const [characterDetail, setCharacterDetail] = useState(false)
  const [id, setId] = useState(0)

  const searchAditional= `name=${text}`;
  const pageAditional= `page=${page}`;

  const initialUrl = `${BACKEND}${pageAditional}&${searchAditional}`;

  const fetchCharacters = (initialUrl) => {
    fetch(initialUrl)
    .then((response) => response.json())
    .then((data) => {
      setCharacter(data.results)
    }) 
    .catch((err) => console.log(err))
  }

const detailsInput = (e) => {
    setCharacterDetail(true)
    const id = e.target.getAttribute("id")
    setId(id)
  }

const detailsButton = (e) => {
  setCharacterDetail(!characterDetail)
}

const itemsFilter = character.filter(item => item.name.toLowerCase().includes(text.toLowerCase().trim()))

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
        initialUrl={initialUrl}
        fetchCharacters={fetchCharacters}
        detailsInput={detailsInput}
        detailsButton={detailsButton}
        itemsFilter={itemsFilter}
      />
    </>
  );
}

export default App;
