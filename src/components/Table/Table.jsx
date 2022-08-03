import React, {useEffect} from 'react'

import  Pagination from '../Pagination/Pagination';
import './Table.css'

export const Table = ({ page, setPage, id ,setId, characterDetail, setCharacterDetail, fetchCharacters, initialUrl, detailsButton, detailsInput, itemsFilter, text, setText, character, setCharacter}) => {

  useEffect(() => {
    fetchCharacters(initialUrl)
  }, [page,text])

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
                {itemsFilter.length !== 0 ? 
                null 
                :
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>}
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
                </tr>) 
                )}
            </thead>
        </table>
    </div>
    <Pagination page={page} setPage={setPage} itemsFilter={itemsFilter} />
      {
      characterDetail === true
      ? 
      <div className="background-detail">
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
      </div>
      : 
      null
      }
  </div>
  )
}
