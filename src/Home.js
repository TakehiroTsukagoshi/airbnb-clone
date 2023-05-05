import React from 'react'
import Banner from './Banner'
import Card from './Card'
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card src="https://cdn.pixabay.com/photo/2015/06/08/15/20/rec-room-802017__480.jpg" title="Online Experiences" description="Unique activities we can do together, led by a world of hosts." />
        <Card src="https://cdn.pixabay.com/photo/2017/02/07/18/16/living-room-2046668__480.jpg" title="Unique stays" description="Spaces that are more than just a place to sleep." />
        <Card src="https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401__480.jpg" title="Entire homes" description="Comfortable private places, with room for friends or family." />
      </div>
      <div className="home__section">
        <Card src="https://cdn.pixabay.com/photo/2015/06/08/15/20/rec-room-802017__480.jpg" title="Online Experiences" description="Unique activities we can do together, led by a world of hosts." price="$150/night" />
        <Card src="https://cdn.pixabay.com/photo/2017/02/07/18/16/living-room-2046668__480.jpg" title="Unique stays" description="Spaces that are more than just a place to sleep." price="$200/night" />
        <Card src="https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401__480.jpg" title="Entire homes" description="Comfortable private places, with room for friends or family." price="$100/night" />
      </div>
    </div>
  )
}

export default Home
