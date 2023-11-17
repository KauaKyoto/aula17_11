import React, { useState } from 'react'

function CalculadoraDeSubtracao() {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [subtracao, setSubtracao] = useState(null);

    const calcularSubtracao = () => {
        // Converter os valores para números e calcular a subtração
        const resultado = Number(numero1) - Number(numero2);
        setSubtracao(resultado);
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
            <button onClick={calcularSubtracao}> Calcular Subtração </button>
            {subtracao !== null && <p> Resultado: {subtracao}</p>}
        </div>
    );
}

export default CalculadoraDeSubtracao;