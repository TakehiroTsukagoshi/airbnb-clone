import { Button } from '@material-ui/core'
import React from 'react'
import "./SearchPage.css"
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays・14 November to 18 November・2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined" >Cancellation Flexbility</Button>
        <Button variant="outlined" >Type of place</Button>
        <Button variant="outlined" >Price</Button>
        <Button variant="outlined" >Rooms and beds</Button>
        <Button variant="outlined" >More filters</Button>
      </div>
      <SearchResult 
        img="https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401__480.jpg" 
        title="Stay at this spacious Edwardian House"
        price="$30 / night"
        star={4.73}
        total="$110 / total"
        description="1 guest・1 bedroom・1bed・1.5 shared bthrooms・Wifi・Kitchen・Free parking・WashingMachine"
        location="Private room in center of London."
      />
    </div>
  )
}

export default SearchPage
