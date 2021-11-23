import './App.css';
import img2 from "./img2.png"
function App() {
  return (
    <div className="App">
      <div className="noone">
        <h1 className="title red">it's JSX</h1>
        <br />
        <img className="img1" src="/img1.jpeg" alt=" theFirstPhotoPublic" />
        <br />
        <img className="img2" src={img2} alt='theSecondPhotoSrc' />
        <iframe width="640" height="360" src="https://www.youtube.com/embed/9GtB5G2xGTY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

    </div>
  );
}

export default App;
