import React, {useEffect} from 'react'

import  Pagination from '../Pagination/Pagination';
import './Table.css'

export const Table = ({character, setCharacter, page, setPage, id ,setId, characterDetail, setCharacterDetail, text, setText}) => {

  const initialUrl = `https://rickandmortyapi.com/api/character?page=${page}`;

  const fetchCharacters = (initialUrl) => {
    fetch(initialUrl)
    .then((response) => response.json())
    .then((data) => {
      setCharacter(data.results)
    }) 
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchCharacters(initialUrl)
  }, [page])

  const detailsInput = (e) => {
      setCharacterDetail(true)
      const id = e.target.getAttribute("id")
      setId(id)
  }

  const detailsButton = (e) => {
    setCharacterDetail(!characterDetail)
}

  const itemsFilter = character.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))

  return (
  <div className="container-generals">
    <div className="table-container">
          <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Species</th>
                    <th>Gender</th>
                    <th>Episodes</th>
                    <th>Detail</th>
                </tr>
                {itemsFilter.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                  <td>{item.species}</td>
                  <td>{item.gender}</td>
                  {
                    item.episode.length === 1 ? 
                    <td>Participate in {item.episode.length} episode</td>
                    :
                    <td>Participate in {item.episode.length} episodes</td>
                  }
                  <td><button className="eyes" id={index} onClick={detailsInput}>👁</button></td>
                </tr>
                ))}
            </thead>
        </table>
    </div>
    <Pagination page={page} setPage={setPage} itemsFilter={itemsFilter}  />
      {
      characterDetail === true
      ? 
      <div className="character-detail">
      <img src={itemsFilter[id].image}  />
      <h4>Name</h4>
          <p className='detail-description'>{itemsFilter[id].name}</p>
      <h4>Code</h4>
          <p className='detail-description'>{itemsFilter[id].status}</p>
      <h4>Air Date</h4>
        <p className='detail-description'>{itemsFilter[id].species}</p>
        {itemsFilter[id].type === "" ? null : (<h4>Type</h4>)}
        {itemsFilter[id].type === "" ? null : (<p className='detail-description'>{itemsFilter[id].type}</p>)}
      <h4>Gender</h4>
        <p className='detail-description'>{itemsFilter[id].gender}</p>
      <h4>Origin</h4>
        <p className='detail-description'>{itemsFilter[id].origin.name}</p>
      <h4>Location</h4>
          <p className='detail-description'>{itemsFilter[id].location.name}</p>
      <button onClick={detailsButton}>Close</button>
      </div>
      : 
      null
      }
  </div>
  )
}
