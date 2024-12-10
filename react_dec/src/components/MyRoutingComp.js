import axios from 'axios';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import App from '../App';
import './MyRoutingComp.css';
import NewsComp from './NewsComp';

export default function MyRoutingComp() {
  // state vairable
  const [news, setNews] = React.useState([]);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=tesla&from=2024-11-10&sortBy=publishedAt&apiKey=365e90f5c397436cbea4ddeeede630bd'
      )
      .then(function (response) {
        
        setNews(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <BrowserRouter>
      <div id="parent">
        <div id="content">
          <header>
            <nav>
              <ul>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/api'}>API</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>

        <div id="child">
          <Routes>
            <Route path={'/'} element={<App />}></Route>
            <Route path={'/api'} element={<NewsComp news={news} />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
