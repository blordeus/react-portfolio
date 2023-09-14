import styles from './App.module.css'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <div className={styles.App}>
        <NavBar></NavBar>
        <Hero></Hero>
      </div>
    </>
  )
}

export default App
