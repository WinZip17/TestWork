import React from 'react';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const API_KEY = '66d98d63c9bf8b4f9e8839d4e1b0a932';



//вывод после компановки
class App extends React.Component {

    state = {
        temp: null,
        city: null,
        error: null
    };


  gettingWeather = async (e)  => {
      e.preventDefault();
      var city = e.target.elements.city.value;
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      console.log(api_url);
      const data = await api_url.json();
      console.log(data);

      this.setState({
            temp: data.main.temp,
            city: data.name
          });
  }



  render() {
    return (
        <div>
          <Header />
          <Article />
          <Footer />
        </div>
    );
  }
}
console.log('App');

export default App;
