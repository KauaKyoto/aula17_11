import React, { useState } from 'react'

function CalculadoraDeSoma() {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [soma, setSoma] = useState(null);

    const calcularSoma = () => {
        // Converter os valores para números e calcular a soma
        const resultado = Number(numero1) + Number(numero2);
        setSoma(resultado);
    }
    return (
        <div>
            <input
                type="number"
                value={numero1}
                onChange={(e) => setNumero1(e.target.value)}
                placeholder="Digite o primeiro número"
            />
            <input
                type="number"
                value={numero2}
                onChange={(e) => setNumero2(e.target.value)}
                placeholder="Digite o segundo número"
            />
            <button onClick={calcularSoma}> Calcular Soma </button>
            {soma !== null && <p> Resultado: {soma}</p>}
        </div>
    );
}

export default CalculadoraDeSoma;