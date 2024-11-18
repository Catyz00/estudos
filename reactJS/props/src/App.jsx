import posterImg2 from '../public/Img/poster2.png';
import camaraPosterImg from '../public/Img/camarasecreta.png';
import prisioneiroPosterImg from '../public/Img/prisioneirodeaskaban.png';
import calicePosterImg from '../public/Img/calicedofogo.png';
import ordemPosterImg from '../public/Img/ordemdafenix.png';
import enigmaPosterImg from '../public/Img/enigmadoprincipe.png';
import reliquiasPosterImg from '../public/Img/reliquiasdamorte.png';
import pt2PosterImg from '../public/Img/reliquiasdamortept2.png';
import Card from '../src/Card/index3.jsx';

export default function App() {
return(
  <>
    <Card title= "Pôster: Harry Potter (2001)" posterImg={posterImg2}/>
    <Card title= "Harry Potter e a Câmara Secreta (2002)" posterImg={camaraPosterImg}/>
    <Card title= "Harry Potter e o Prisioneiro de Azkaban (2004)" posterImg={prisioneiroPosterImg}/>
    <Card title= "Harry Potter e o Cálice de Fogo (2005)" posterImg={calicePosterImg}/> 
    <Card title="Harry Potter e a Ordem da Fênix (2007)" posterImg={ordemPosterImg}/>
    <Card title="Harry Potter e o Enigma do Príncipe (2009)" posterImg={enigmaPosterImg}/>
    <Card title="Harry Potter and the Deathly Hallows: Part 1 (2010)" posterImg={reliquiasPosterImg}/>
    <Card title="Harry Potter and the Deathly Hallows: Part 2 (2011)" posterImg={pt2PosterImg}/>
  </>
)

}

