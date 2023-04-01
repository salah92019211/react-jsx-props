import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Cards from './Cards';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Cards Title='hello' Text="Go My Code" img="https://www.ilboursa.com/handlers/image_news_get.ashx?id=8F671604-ED9C-41C4-9290-F79934070FF3"/> 
      <Cards Title='hi' Text="GoMy code" img= "https://media.licdn.com/dms/image/C4D0BAQGQiRGb69VRqA/company-logo_200_200/0/1601910148303?e=2147483647&v=beta&t=6R8Hkrb95l4yz1SPNbFkEQDcHluN8IIpL42BoKTQJzI" />
      <Cards Title='hey' Text="GoMyCode" img="https://www.espacemanager.com/sites/default/files/field/image/goom.jpg"/>
    </div>
  );
}

export default App;
