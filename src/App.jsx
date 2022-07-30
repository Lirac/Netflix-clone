import Banner from './components/Banner'
import Nav from './components/nav/Nav'
import Row from './components/Row'
import Footer from './components/Footer'
import requests from './services/request'
import Modal from './components/Modal'

function App() {
  return (
    <div className="bg-black relative">
      <Nav />
      <Banner className="" />
      <div className="ml-4 lg:ml-8 bg-transparent xl:mt-[-3vw] pt-2">
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      </div>
      <Footer></Footer>
      <Modal />
    </div>
  )
}

export default App
