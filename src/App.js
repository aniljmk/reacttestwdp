import React, { useState, useEffect } from "react";
import './App.css';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data'

function App() {

  const [user, setUser] = useState(null)


  useEffect(() => {

    setInterval(() => {
      setTimeout(() => {
        setUser((Data.Notice_Period).sort((a, b) => (a.score > b.score) ? -1 : 1))
      }, 1000)
      setTimeout(() => {
        setUser((Data.Notice_Period_1).sort((a, b) => (a.score > b.score) ? -1 : 1))
      }, 2000)
      setTimeout(() => {
        setUser((Data.Notice_Period_2).sort((a, b) => (a.score > b.score) ? -1 : 1))
      }, 3000)
      setTimeout(() => {
        setUser((Data.Notice_Period_3).sort((a, b) => (a.score > b.score) ? -1 : 1))
      }, 4000)
    }, 5000)
  }, []);

  return (

    <div className="App">
      <div className="datashorting-table">
        <Table striped bordered hover>
          <tbody>
            {user?.map((item, i) => {
              return (
                <tr key={i}>
                  <td style={{ width: "100px", textAlign: "center" }}>{i + 1}</td>
                  <td align="left"><img src={item.picture} /> {item.displayName}</td>
                  <td align="right">{item.score}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default App;
