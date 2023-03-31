import './App.css';
import './Api/GetApi';
import {useEffect} from 'react';
import { useState } from 'react';
import axios from 'axios';



function App() {
  const [dataCurrency, setdataCurrency] = useState([]);

  useEffect(()=> {
    
  const fetchUsers = async () => {
    try {
        const result = await axios.get('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=731b6cb1cac443128d35b7e11ce7bf41');
        setdataCurrency(result.data.rates);
        console.log(result.data.rates)
    } catch (error) {
        console.log(error);
    }
  };
   fetchUsers()
  },[])

  

  return (
    <div className="App">

      {/* <p>{JSON.stringify(dataCurrency.rates)}</p> */}

      <h2 className="title">Exchange Rates Currency</h2>
      <table border= "1">
          <thead>
            <tr>
            <th>Currency</th>
              <th>We Buy</th>
              <th>Exchange Rate</th>
              <th>We Shell</th>
            </tr> 
          </thead>
        <tbody>
          <tr>
          <td>CAD</td>
            <td>{Number.parseFloat(Number(dataCurrency.CAD) + (5 /100) * Number(dataCurrency.CAD)).toFixed(6)} </td>
            <td>{Number.parseFloat(dataCurrency.CAD).toFixed(4)}</td>
            <td>{Number.parseFloat(Number(dataCurrency.CAD) - (5 /100) * Number(dataCurrency.CAD)).toFixed(6)} </td>
          </tr>
        <tr>
          <td>IDR</td>
          <td>{Number.parseFloat(Number(dataCurrency.IDR) + (5 /100) * Number(dataCurrency.IDR)).toFixed(6)} </td>
          <td>{Number.parseFloat(dataCurrency.IDR).toFixed(4)}</td>
          <td>{Number.parseFloat(Number(dataCurrency.IDR) - (5 /100) * Number(dataCurrency.IDR)).toFixed(6)} </td>
        </tr>
        <tr>
          <td>JPY</td>
          <td>{Number.parseFloat(Number(dataCurrency.JPY) + (5 /100) * Number(dataCurrency.JPY)).toFixed(6)} </td>
          <td>{Number.parseFloat(dataCurrency.JPY).toFixed(4)}</td>
          <td>{Number.parseFloat(Number(dataCurrency.JPY) - (5 /100) * Number(dataCurrency.JPY)).toFixed(6)} </td>
        </tr>
        <tr>
          <td>CHF</td>
          <td>{Number.parseFloat(Number(dataCurrency.CHF) + (5 /100) * Number(dataCurrency.CHF)).toFixed(6)} </td>
          <td>{Number.parseFloat(dataCurrency.CHF).toFixed(4)}</td>
          <td>{Number.parseFloat(Number(dataCurrency.CHF) - (5 /100) * Number(dataCurrency.CHF)).toFixed(6)} </td>
        </tr>
        <tr>
          <td>EUR</td>
          <td>{Number.parseFloat(Number(dataCurrency.EUR) + (5 /100) * Number(dataCurrency.EUR)).toFixed(6)} </td>
          <td>{Number.parseFloat(dataCurrency.EUR).toFixed(4)}</td>
          <td>{Number.parseFloat(Number(dataCurrency.EUR) - (5 /100) * Number(dataCurrency.EUR)).toFixed(6)} </td>
        </tr>
        <tr>
          <td>GBP</td>
          <td>{Number.parseFloat(Number(dataCurrency.GBP) + (5 /100) * Number(dataCurrency.GBP)).toFixed(6)} </td>
          <td>{Number.parseFloat(dataCurrency.GBP).toFixed(4)}</td>
          <td>{Number.parseFloat(Number(dataCurrency.GBP) - (5 /100) * Number(dataCurrency.GBP)).toFixed(6)} </td>
        </tr>
        </tbody>
      </table>
      <p className="tagline">
                Rates are based from 1 USD <br /> This application uses API from{" "}
                <a href="https://currencyfreaks.com/">currencyfreaks.com</a>
            </p>
    </div>
  );
}

export default App;
