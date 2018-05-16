import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      loading: false,
      exchange_rate_usd: 67.00, //Default value
      koinex: {},
      gdax: {},
      cex:{},
      error: null,  
    };
  }

  componentDidMount() {

    this.setState({loading: true});

    // Get USD exchange rate from currency layer API
    fetch('http://apilayer.net/api/live?access_key=1432ec4470ee0ae422e62d819ca26dbd&source=USD&currencies=INR')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      this.setState({exchange_rate_usd: data.quotes.USDINR});
    })
    .catch((error) => {
      console.log('Error', error);
    });    

    // GDAX-BTC
    fetch('https://api.gdax.com/products/BTC-USD/ticker')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      this.setState(prevState => ({gdax: {...prevState.gdax, BTC: data.price}}));
      // this.setState({loading: false});
    })
    .catch((error) => {
      console.log('Error', error);
    });

    // GDAX-ETH
    fetch('https://api.gdax.com/products/ETH-USD/ticker')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      this.setState(prevState => ({gdax: {...prevState.gdax, ETH: data.price}}));
      // this.setState({loading: false});
    })
    .catch((error) => {
      console.log('Error', error);
    });

    // GDAX-LTC
    fetch('https://api.gdax.com/products/LTC-USD/ticker')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      this.setState(prevState => ({gdax: {...prevState.gdax, LTC: data.price}}));
      // this.setState({loading: false});
    })
    .catch((error) => {
      console.log('Error', error);
    });

    // GDAX-BCH
    fetch('https://api.gdax.com/products/BCH-USD/ticker')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      this.setState(prevState => ({gdax: {...prevState.gdax, BCH: data.price}}));
      // this.setState({loading: false});
    })
    .catch((error) => {
      console.log('Error', error);
    });

    // CEX-BTC
    fetch('https://cex.io/api/ticker/BTC/USD')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      this.setState(prevState => ({cex: {...prevState.cex, BTC: data.last}}));
      // this.setState({loading: false});
    })
    .catch((error) => {
      console.log('Error', error);
    });

    // CEX-ETH
    fetch('https://cex.io/api/ticker/ETH/USD')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      this.setState(prevState => ({cex: {...prevState.cex, ETH: data.last}}));
      // this.setState({loading: false});
    })
    .catch((error) => {
      console.log('Error', error);
    });

    // CEX-BCH
    fetch('https://cex.io/api/ticker/BCH/USD')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      this.setState(prevState => ({cex: {...prevState.cex, BCH: data.last}}));
      // this.setState({loading: false});
    })
    .catch((error) => {
      console.log('Error', error);
    });

    // CEX-XRP
    fetch('https://cex.io/api/ticker/XRP/USD')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      this.setState(prevState => ({cex: {...prevState.cex, XRP: data.last}}));
      // this.setState({loading: false});
    })
    .catch((error) => {
      console.log('Error', error);
    });

    // CEX-XLM
    fetch('https://cex.io/api/ticker/XLM/USD')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      this.setState(prevState => ({cex: {...prevState.cex, XLM: data.last}}));
      // this.setState({loading: false});
    })
    .catch((error) => {
      console.log('Error', error);
    });
    
    // Koinex
    fetch('https://koinex.in/api/ticker')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      this.setState({koinex: data.prices.inr, loading: false});
    })
    .catch((error) => {
      console.log('Error', error);
    });
  }
  
  // Calculate Arbitrage diff
  calculate(price1, price2) {
    price1 = parseFloat(price1); // Foreign price in USD
    price2 = parseFloat(price2) / this.state.exchange_rate_usd; // India price in USD
    let diff = price2 - price1;
    let diff_percent = diff / price1 * 100;
    return diff_percent.toFixed(2);      
  }

  // Render function
  render() {
    // Console.log
    // console.log(this.state.cex);

    //Destructuring
    const {loading, exchange_rate_usd, koinex, gdax, cex} = this.state;

    if(loading) {
      return <div>Loading...</div>
    }  

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img src={logo} alt="logo"/>
          <h3>Crypto Arbitrage Tracker</h3>
        </nav>

        <h5>Exchange Rate: {exchange_rate_usd} INR/USD</h5>
        <h6>* Enable CORS chrome extension if some values are missing.</h6>

        <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Exchange</th>
              <th scope="col">Coin</th>
              <th scope="col">Price $</th>
              <th scope="col">India Exchange</th>
              <th scope="col">Price ₹</th>
              <th scope="col">Diff %</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-active">
              <td>GDAX</td>
              <td>BTC</td>
              <td>{gdax.BTC}</td>
              <td>Koinex</td>
              <td>{koinex.BTC}</td>
              <td>{gdax.BTC && koinex.BTC? this.calculate(gdax.BTC, koinex.BTC) : ""}</td>
            </tr>
            <tr className="table-active">
              <td>GDAX</td>
              <td>ETH</td>
              <td>{gdax.ETH}</td>
              <td>Koinex</td>
              <td>{koinex.ETH}</td>
              <td>{gdax.ETH && koinex.ETH? this.calculate(gdax.ETH, koinex.ETH) : ""}</td>
            </tr>
            <tr className="table-active">
              <td>GDAX</td>
              <td>LTC</td>
              <td>{gdax.LTC}</td>
              <td>Koinex</td>
              <td>{koinex.LTC}</td>
              <td>{gdax.LTC && koinex.LTC? this.calculate(gdax.LTC, koinex.LTC) : ""}</td>
            </tr>
            <tr className="table-active">
              <td>GDAX</td>
              <td>BCH</td>
              <td>{gdax.BCH}</td>
              <td>Koinex</td>
              <td>{koinex.BCH}</td>
              <td>{gdax.BCH && koinex.BCH? this.calculate(gdax.BCH, koinex.BCH) : ""}</td>
            </tr>
            <tr className="table-active">
              <td>CEX</td>
              <td>BTC</td>
              <td>{cex.BTC}</td>
              <td>Koinex</td>
              <td>{koinex.BTC}</td>
              <td>{cex.BTC && koinex.BTC? this.calculate(cex.BTC, koinex.BTC) : ""}</td>
            </tr>
            <tr className="table-active">
              <td>CEX</td>
              <td>ETH</td>
              <td>{cex.ETH}</td>
              <td>Koinex</td>
              <td>{koinex.ETH}</td>
              <td>{cex.ETH && koinex.ETH? this.calculate(cex.ETH, koinex.ETH) : ""}</td>
            </tr>
            <tr className="table-active">
              <td>CEX</td>
              <td>BCH</td>
              <td>{cex.BCH}</td>
              <td>Koinex</td>
              <td>{koinex.BCH}</td>
              <td>{cex.BCH && koinex.BCH? this.calculate(cex.BCH, koinex.BCH) : ""}</td>
            </tr>
            <tr className="table-active">
              <td>CEX</td>
              <td>XRP</td>
              <td>{cex.XRP}</td>
              <td>Koinex</td>
              <td>{koinex.XRP}</td>
              <td>{cex.XRP && koinex.XRP? this.calculate(cex.XRP, koinex.XRP) : ""}</td>
            </tr>
            <tr className="table-active">
              <td>CEX</td>
              <td>XLM</td>
              <td>{cex.XLM}</td>
              <td>Koinex</td>
              <td>{koinex.XLM}</td>
              <td>{cex.XLM && koinex.XLM? this.calculate(cex.XLM, koinex.XLM) : ""}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default App;
