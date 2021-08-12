import {useState} from 'react'
import styles from '../styles/Home.module.css'

export default function Filters({data, setData, isSortByopen, setIsSortByopen}) {

  function NumDynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return (a[property]) - (b[property]);
        }else{
            return (b[property])- (a[property]);
        }        
    }
  }

  function dynamicSort(property) {
      var sortOrder = 1;

      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }

      return function (a,b) {
          if(sortOrder == -1){
              return b[property].localeCompare(a[property]);
          }else{
              return a[property].localeCompare(b[property]);
          }        
      }
  }

  function sortByRating() {
    data.sort(NumDynamicSort("vote_average"));
    setData(data);
  }

  function sortByRatingDes() {
    data.sort(NumDynamicSort("-vote_average"));
    setData(data);
  }

  function sortByAlpha() {
    data.sort(dynamicSort("title"));
    setData(data);
  }

  function sortByAlphaDes() {
    data.sort(dynamicSort("-title"));
    setData(data);
  }

  const dropdown = <ul 
      className= {styles.dropdown}
       >
        <li>
          <p onClick= {() => sortByRating()}>By rating</p>
        </li>
        <li>
          <p onClick= {() => sortByRatingDes()}>By rating (desen)</p>
        </li>
        <li>
          <p onClick= {() => sortByAlpha()}>By alphabets (asen)</p>
        </li>
        <li>
          <p onClick= {() => sortByAlphaDes()} >By alphabets (desen)</p>
        </li>
      </ul>

  return (
    <div>
    <ul 
    className= {styles.sortBy}
    onClick= {() => setIsSortByopen(!isSortByopen)}
    >
      <li>
        <button className={styles.sortBy.button} >Filter</button>
      <svg
      className= {styles.caretSvg} 
      width="15" 
      height="15" 
      fill="#f5f5f5" 
      viewBox="0 0 16 16"
      onClick= {() => setIsSortByopen(!isSortByopen)} >
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
      </svg>
      {isSortByopen ? dropdown : undefined}
      </li>
    </ul>
    </div>
  )
}