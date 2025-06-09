import { useState } from 'react';
let App = () => {
  let [a, seta] = useState('');
  let [b, setb] = useState('');
  let [res, setResult] = useState('');
  let add = () => setResult(+a + +b);
  let sub = () => setResult(+a - +b);
  let mul = () => setResult(+a * +b);
  let div = () => setResult(+b === 0 ? 'Error,cannot divide by zero' : +a/+b);
  return (
    <div style={{ textAlign: 'center', marginTop: '100px', backgroundColor:'gray',fontFamily:'sans-serif',fontStyle:'italic'}}>
      <h2>Simple React Calculator</h2>
      <input type="number" value={a} onChange={(e) => seta(e.target.value)} />
      <input type="number" value={b} onChange={(e) => setb(e.target.value)} />
      <br /><br />
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={mul}>*</button>
      <button onClick={div}>/</button>
      <br /><br />
      <h3>Result is : {res}</h3>
    </div>
  );
};
export default App;

