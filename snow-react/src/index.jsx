import React from 'react'
import ReactDOM from 'react-dom'
import {Button, Headline} from './components'
import style from './styles/app.module.css'

const App = () => {
  return (
    <>
      hEEELO sweety
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic facere quasi. Nesciunt dolor commodi dignissimos explicabo voluptas, magni laudantium accusantium iusto laborum consequuntur a, et vel! Quos, assumenda. Eaque!</p>
      <h1 className={style.main}>amazing</h1>
      <Headline>h1</Headline>
      <Button />
      </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))