
import './App.css';
import React from 'react';
import useTheme from './useTheme';
import useWindowSize from 'react-use-window-size-hook';
import './styles.css';

function App() {
  const [theme, toggleTheme] = useTheme();
  const { width } = useWindowSize();

  return (
   
    <div className="app">
      <header>
        <h1>Dark Mode App</h1>
        {width >= 768 && <button onClick={toggleTheme}>Toggle Theme</button>}
      </header>
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisi a ex
          efficitur fringilla. Vivamus feugiat nulla eu iaculis feugiat. Vestibulum
          eget velit ut orci pellentesque viverra in quis elit. Fusce sollicitudin
          urna at odio maximus, id blandit sapien bibendum. Nullam nec nulla sed
          mauris consectetur luctus vitae ut libero. Nullam convallis ipsum et quam
          pellentesque, quis tincidunt dui dapibus. Vivamus laoreet in sapien a
          cursus.
        </p>
      </main>
    </div>
  



  );
}

export default App;
