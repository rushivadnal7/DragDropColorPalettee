import './App.css'
import '../src/components/util.css'
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Main from './components/Main';
import Apicontent from './components/Apicontent';


function App() {

  const api = "https://restcountries.com/v3.1/all"

  const [countryData, setcountryData] = useState([]);

  const fetchApiData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json()

      const countryArray = data.map((obj) => {
        const capital = Array.isArray(obj.capital) ? obj.capital[0] : "capital not found";

        const languages = obj.languages ? Object.values(obj.languages) : "languages not found";
        // console.log(obj)
        return {
          name: obj.name.common,
          flagdata: obj.flags.png,
          population: obj.population,
          languageVal: languages,
          capitalCity: capital
        }
      })

      // console.log("Country Array" + countryArray)
      // console.log(countryData[0].languageVal)
      setcountryData(countryArray)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchApiData(api)
  }, [])


  return (
    <>
      <section className='app__section'>
        <Main />
        {
          countryData.length > 0 && <Apicontent>
            {countryData.map((data) => {
              return <div className='card '>
                <Card name={data.name} imgUrl={data.flagdata} LangVal={data.languageVal} capital={data.capitalCity} population={data.population} ></Card>
              </div>
            })}
          </Apicontent>
        }

      </section>

    </>
  );
}


export default App;
