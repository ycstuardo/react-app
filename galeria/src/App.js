import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header title="Galería de imagenes" />
        <div className="boxes">
          <Card
            src="https://media.istockphoto.com/photos/world-war-one-trench-picture-id1179045878?b=1&k=20&m=1179045878&s=612x612&w=0&h=hKM0VVcNZdzXS4d9d14febbtLQvpLtX5aekGz6oNzsw="
            alt="trinchera francesa de la primera guerra mundial en verdun"
            name="trincera de verdun"
            category="trinchera francesa de 1916 ,lugar donde se libro la batalla mas larga de la primera guerra mundial"
          />
          <Card
            src="https://media.istockphoto.com/id/503596953/es/foto/monumento-conmemorativo-wwi-del-ej%C3%A9rcito-brit%C3%A1nico-soldados-dispuesta-a-gas-t%C3%B3xico-ataque.webp?s=612x612&w=is&k=20&c=2ElOmaznOyrQJrH5XzW5QbHuZBhQjyDWPTcwqFmua8k="
            alt="recreacion de seldados escoceses recibiendo una ataque de gas "
            name="trincera de ypress"
            category="soldados escoceses usando mascaras de gas "
          />
          <Card
            src="https://media.istockphoto.com/id/106414311/es/foto/british-mark-v-tanque.webp?s=612x612&w=is&k=20&c=T2Az37RtGY0lNTjhI2S0zD4PEu8FtNzpfjTDCMkGg2I="
            alt="tanque ingles"
            name="tanque mark IV"
            category="tanque britanico usado en la batalla somme"
          />
        </div>
        <Footer/>
      </div>
    </>
  );
} //https://media.istockphoto.com/id/503596953/es/foto/monumento-conmemorativo-wwi-del-ej%C3%A9rcito-brit%C3%A1nico-soldados-dispuesta-a-gas-t%C3%B3xico-ataque.webp?s=612x612&w=is&k=20&c=2ElOmaznOyrQJrH5XzW5QbHuZBhQjyDWPTcwqFmua8k=

export default App;
