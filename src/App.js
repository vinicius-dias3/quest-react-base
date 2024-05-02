import Card from './components/card/card'
import Button from './components/button/button';
import './App.css';

function App() {
  return (
    <>
      <Card text= 'Texto personalizado para o primeiro card' />
      <Card text= 'Texto personalizado para o segundo card' />
      <Card text= 'Texto personalizado para o terceiro card'/>
      <Button />
    </>
    
  );
}

export default App;
