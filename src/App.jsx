// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



// assignment 2



import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [showSecondCard, setShowSecondCard] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleAddToCart = () => {
    setCount(count + 1);
  };

  const handleRemoveFromCart = () => {
    setCount(count - 1);
  };

  const handleEmptyCart = () => {
    setCount(0);
  };

  const handleToggleSecondCard = () => {
    setShowSecondCard(!showSecondCard);
  };

  const handleBuyNow = () => {
    setBackgroundColor("green");
  };

  return (
    <div>
      {showSecondCard ? (
        <SecondCard handleBuyNow={handleBuyNow} backgroundColor={backgroundColor} />
      ) : (
        <FirstCard
          count={count}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleEmptyCart={handleEmptyCart}
          handleToggleSecondCard={handleToggleSecondCard}
        />
      )}
    </div>
  );
}

const FirstCard = ({
  count,
  handleAddToCart,
  handleRemoveFromCart,
  handleEmptyCart,
  handleToggleSecondCard,
}) => {
  return (
    <div className="card">

      <img src="public/books.jpg" height={200} witg={300}></img>
      <p>Count: {count}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
      <button onClick={handleRemoveFromCart}>Remove from cart</button>
       <button onClick={handleEmptyCart}>Empty cart</button>
      <button onClick={handleToggleSecondCard}>Toggle second card</button>
    </div>
  );
};

const SecondCard = ({ handleBuyNow, backgroundColor }) => {
  return (
    <div className="card" style={{ backgroundColor: backgroundColor }}>
      <p>Buy now!</p>
      <button onClick={handleBuyNow}>Buy now</button>
    </div>
  );
};

export default App;
