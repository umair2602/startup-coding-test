import React, {useState, useEffect} from 'react'
import  './App.css'
interface ArrayData{
  financialInstrumentId:number;
  holdingPercentage:number;
  name: string
  score: number
  ticker:string
}
const App = () => {
  const [financialInstrument, setFinancialInstrument] = useState([])
  const getFinancialInstrument = async ()=>{
     await fetch('https://api.inspireinsight.com/api/tickers/1784/constituents?size=100').then((res) => res.json())
     .then((json) => {
         setFinancialInstrument(json.holdings)
     })
  }
  useEffect(()=>{
    getFinancialInstrument();
  }, [])

  return (
    <div>
      <h2 className='heading'>FinancialInstrument List</h2>
      <table>
        <thead>
           <tr> 
                <th>Id</th>
                <th>Percentage</th>
                <th>Name</th>
                <th>Score</th>
                <th>Ticket</th>
            </tr>
        </thead>
        <tbody>
        {financialInstrument.map((data:ArrayData)=>{
                return(
                  <tr>
                    <td>{data.financialInstrumentId}</td>
                    <td>{data.holdingPercentage}</td>
                    <td>{data.name}</td>
                    <td>{data.score}</td>
                    <td>{data.ticker}</td>
                  </tr>
                )
            })}
        </tbody>
    </table>
    </div>
  )
}

export default App
