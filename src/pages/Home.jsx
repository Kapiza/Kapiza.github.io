import React from 'react'
import '../css/home_styles.css'

const Home = () => {
  return (
    <div className="home_content">
      <img className="headshot" src="img/headshot.png" alt="Дмитрий Сергеев"/>
      <div className="greetings">Привет, я Дмитрий Сергеев</div>
      <div className="who_am_i">Web-разработчик</div>
    </div>
  )
}

export default Home

