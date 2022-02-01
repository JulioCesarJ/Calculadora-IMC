import { useState } from 'react';

import './app.css';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState(calcularIMC);

  function calcularIMC(){
    const alt = altura / 100
    const imc = peso / (alt * alt)

      if(imc < 18.6) {
        setIMC("Voce está abaixo do peso! Seu IMC: " + imc.toFixed(2))
      } else if (imc >= 18.6 && imc < 24.9){
        setIMC("Peso ideal! Seu IMC: " + imc.toFixed(2))
      } else if (imc >= 24.9 && imc < 34.9) {
        setIMC("Voce está levemente acima do peso! Seu IMC: " + imc.toFixed(2))
      } else if (imc > 34.9) {
        setIMC("Cuidado Obesidade! Seu IMC: " + imc.toFixed(2))
      }
      
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input type="number" placeholder="Peso em (kg) Ex: 90" value={peso} onChange={ (e) => setPeso(e.target.value)} />
        <input type="number" placeholder="Altura em (cm) Ex: 180" value={altura} onChange={ (e) => setAltura(e.target.value)} />
        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>

      <h2>{imc}</h2>

    </div>
  )
}