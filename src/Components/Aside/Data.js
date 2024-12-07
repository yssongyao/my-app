import React from 'react';
import './Data.css';
import { useState } from 'react';

function FilterableTable({ Rankings }) {

    const [filterText, setFilterText] = useState('');
    
    return (
      <div id="Data" className="Data">
        <h2>Data</h2>
        <h3 style={{textAlign: 'center'}}>Club standing after Matchday 33</h3>
        <SearchBar
        filterText={filterText}         
        onFilterTextChange={setFilterText} />
        <RankingTable
        Rankings={Rankings}
        filterText={filterText} />
      </div>
    );

  }


function RankingRow({ Ranking }) {
      
    return (
      <tr>
        <td>{Ranking.Position}</td>
        <td>{Ranking.ClubName}</td>
        <td>{Ranking.MatchDay}</td>
        <td>{Ranking.Points}</td>
      </tr>
    );

  }

function RankingTable({ Rankings, filterText }) {
    const rows = [];    
  
    Rankings.forEach((Ranking) => {
        if (
            Ranking.ClubName.toLowerCase().indexOf(
              filterText.toLowerCase()
            ) === -1
          ) {
            return;
          }      
        rows.push(
          <RankingRow
          Ranking={Ranking}
          key={Ranking.ClubName} />        
      );
      
    });
  
    return (
      <div className='RankingTable'>
      <table width="100%">
        <thead>
          <tr>
            <th>Position</th>
            <th>Club</th>
            <th>Match Day</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      </div>
    );
  }
  

function SearchBar({
  filterText,  
  onFilterTextChange  
}) {
    return (
      <div className='SearchBar'>
      <form>           
        <label>Search club name:</label>                       
        <input type="text" placeholder="Search..." aria-label="searchbar"
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)} />
        <br /><br />        
      </form>
      </div>
    );
  }


const Rankings = [
    {Position: "1", ClubName: "Inter (Champion)", MatchDay: "33", Points: "86"},
    {Position: "2", ClubName: "AC Milan", MatchDay: "33", Points: "69"},
    {Position: "3", ClubName: "Juventus", MatchDay: "33", Points: "64"},
    {Position: "4", ClubName: "Bologna", MatchDay: "33", Points: "62"},
    {Position: "5", ClubName: "AS Roma", MatchDay: "33", Points: "55"},
    {Position: "6", ClubName: "Atalanta", MatchDay: "33", Points: "54"},
    {Position: "7", ClubName: "Lazio", MatchDay: "33", Points: "52"},
    {Position: "8", ClubName: "Napoli", MatchDay: "33", Points: "49"},
    {Position: "9", ClubName: "Fiorentina", MatchDay: "33", Points: "47"},
    {Position: "10", ClubName: "Torino", MatchDay: "33", Points: "46"},
    {Position: "11", ClubName: "Monza", MatchDay: "33", Points: "43"},
    {Position: "12", ClubName: "Genoa", MatchDay: "33", Points: "39"},
    {Position: "13", ClubName: "Lecce", MatchDay: "33", Points: "35"},
    {Position: "14", ClubName: "Cagliari", MatchDay: "33", Points: "32"},
    {Position: "15", ClubName: "Hellas Verona", MatchDay: "33", Points: "31"},
    {Position: "16", ClubName: "Empoli", MatchDay: "33", Points: "31"},
    {Position: "17", ClubName: "Udinese", MatchDay: "33", Points: "28"},
    {Position: "18", ClubName: "Frosinone", MatchDay: "33", Points: "28"},
    {Position: "19", ClubName: "Sassuolo", MatchDay: "33", Points: "26"},
    {Position: "20", ClubName: "Salernitana", MatchDay: "33", Points: "15"},
  ];

    
  export default function Data() {
    return <FilterableTable Rankings={Rankings} />;
  }

