import reactLogo from '../public/vite.svg';
import viteLogo from '/vite.svg';
import './App.css';

export function App() {
  return (
    <>
      <div>
        <h1>Nakolkin tattoo</h1>
        <button className="logo">Bounce</button>
      </div>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
    </>
  );
}
