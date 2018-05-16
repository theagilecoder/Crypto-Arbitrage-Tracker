import React, { Component } from 'react';
import github from './github-icon.png';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      loading: false,
      exchange_rate_usd: 67.50, //Default value
      koinex: {},
      gdax: {},
      cex:{},
      zebpay:{},
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

    // Zebpay-BTC
    fetch('https://www.zebapi.com/api/v1/market/ticker-new/btc/inr')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      this.setState(prevState => ({zebpay: {...prevState.zebpay, BTC: data.buy}}));
      // this.setState({loading: false});
    })
    .catch((error) => {
      console.log('Error', error);
    });

    // Zebpay-ETH
    fetch('https://www.zebapi.com/api/v1/market/ticker-new/eth/inr')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      this.setState(prevState => ({zebpay: {...prevState.zebpay, ETH: data.buy}}));
      // this.setState({loading: false});
    })
    .catch((error) => {
      console.log('Error', error);
    });

    // Zebpay-BCH
    fetch('https://www.zebapi.com/api/v1/market/ticker-new/bch/inr')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      this.setState(prevState => ({zebpay: {...prevState.zebpay, BCH: data.buy}}));
      // this.setState({loading: false});
    })
    .catch((error) => {
      console.log('Error', error);
    });

    // Zebpay-LTC
    fetch('https://www.zebapi.com/api/v1/market/ticker-new/ltc/inr')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      this.setState(prevState => ({zebpay: {...prevState.zebpay, LTC: data.buy}}));
      // this.setState({loading: false});
    })
    .catch((error) => {
      console.log('Error', error);
    });

    // Zebpay-XRP
    fetch('https://www.zebapi.com/api/v1/market/ticker-new/xrp/inr')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      this.setState(prevState => ({zebpay: {...prevState.zebpay, XRP: data.buy}}));
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
    
    //Destructuring
    const {loading, exchange_rate_usd, koinex, gdax, cex, zebpay} = this.state;
    
    // Console.log
    // console.log(zebpay);

    if(loading) {
      return <div>Loading...</div>
    }  

    return (
      <div>

        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand abs" href="">Crypto Arbitrage Tracker</a>
          <div className="navbar-collapse collapse" id="collapsingNavbar">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/theagilecoder/Crypto-Arbitrage-Tracker " rel="noopener noreferrer" target="_blank" data-target="#myModal" data-toggle="modal">
                    <img id="github" src={github} alt="Source Code"/>
                  </a>
                </li>
            </ul>
          </div>
        </nav>  

        <h5>Exchange Rate: {exchange_rate_usd} INR/USD</h5>
        <h6>Enable <a href="https://chrome.google.com/webstore/detail/cors-toggle/jioikioepegflmdnbocfhgmpmopmjkim">CORS chrome extension</a> if some values are missing.</h6>

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
            <tr className="table-info">
              <td>GDAX</td>
              <td>BTC</td>
              <td>{gdax.BTC}</td>
              <td>Zebpay</td>
              <td>{zebpay.BTC}</td>
              <td>{gdax.BTC && zebpay.BTC? this.calculate(gdax.BTC, zebpay.BTC) : ""}</td>
            </tr>
            <tr className="table-info">
              <td>GDAX</td>
              <td>ETH</td>
              <td>{gdax.ETH}</td>
              <td>Zebpay</td>
              <td>{zebpay.ETH}</td>
              <td>{gdax.ETH && zebpay.ETH? this.calculate(gdax.ETH, zebpay.ETH) : ""}</td>
            </tr>
            <tr className="table-info">
              <td>GDAX</td>
              <td>LTC</td>
              <td>{gdax.LTC}</td>
              <td>Zebpay</td>
              <td>{zebpay.LTC}</td>
              <td>{gdax.LTC && zebpay.LTC? this.calculate(gdax.LTC, zebpay.LTC) : ""}</td>
            </tr>
            <tr className="table-info">
              <td>GDAX</td>
              <td>BCH</td>
              <td>{gdax.BCH}</td>
              <td>Zebpay</td>
              <td>{zebpay.BCH}</td>
              <td>{gdax.BCH && zebpay.BCH? this.calculate(gdax.BCH, zebpay.BCH) : ""}</td>
            </tr>
            <tr className="table-warning">
              <td>CEX</td>
              <td>BTC</td>
              <td>{cex.BTC}</td>
              <td>Koinex</td>
              <td>{koinex.BTC}</td>
              <td>{cex.BTC && koinex.BTC? this.calculate(cex.BTC, koinex.BTC) : ""}</td>
            </tr>
            <tr className="table-warning">
              <td>CEX</td>
              <td>ETH</td>
              <td>{cex.ETH}</td>
              <td>Koinex</td>
              <td>{koinex.ETH}</td>
              <td>{cex.ETH && koinex.ETH? this.calculate(cex.ETH, koinex.ETH) : ""}</td>
            </tr>
            <tr className="table-warning">
              <td>CEX</td>
              <td>BCH</td>
              <td>{cex.BCH}</td>
              <td>Koinex</td>
              <td>{koinex.BCH}</td>
              <td>{cex.BCH && koinex.BCH? this.calculate(cex.BCH, koinex.BCH) : ""}</td>
            </tr>
            <tr className="table-warning">
              <td>CEX</td>
              <td>XLM</td>
              <td>{cex.XLM}</td>
              <td>Koinex</td>
              <td>{koinex.XLM}</td>
              <td>{cex.XLM && koinex.XLM? this.calculate(cex.XLM, koinex.XLM) : ""}</td>
            </tr>
            <tr className="table-warning">
              <td>CEX</td>
              <td>XRP</td>
              <td>{cex.XRP}</td>
              <td>Koinex</td>
              <td>{koinex.XRP}</td>
              <td>{cex.XRP && koinex.XRP? this.calculate(cex.XRP, koinex.XRP) : ""}</td>
            </tr>
            <tr className="table-light">
              <td>CEX</td>
              <td>XRP</td>
              <td>{cex.XRP}</td>
              <td>Zebpay</td>
              <td>{zebpay.XRP}</td>
              <td>{cex.XRP && zebpay.XRP? this.calculate(cex.XRP, zebpay.XRP) : ""}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default App;