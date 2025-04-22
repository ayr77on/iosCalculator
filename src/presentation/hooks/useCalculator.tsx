import React, { useState } from 'react'

export const useCalculator = () => {
    
    const [number, setNumber] = useState("0");

    // Cuando se apreta el boton "C"
    const clean = () => {
        setNumber('0')
    }

    // Borrar el ultimo numero
    // Borrar el último número
    const deleteOperation = () => {
        let currentSign = '';
        let temporalNumber = number;

        if (number.includes('-')) {
            currentSign = '-';
            temporalNumber = number.substring(1); // Remueve el signo para trabajar solo con los números
        }

        if (temporalNumber.length > 1) {
            return setNumber(currentSign + temporalNumber.slice(0, -1)); // Borra el último carácter
        }

        setNumber('0');
    }


    // Borrar el ultimo numero
    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''));
        }
        setNumber('-' + number);
    }


    const builderNumber = (numberString: string) => {
        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {

            // Punto decimal
            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            // Evaluar si es otro cero y no hay punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            // Evaluar si es diferente de cero, no hay punto, y es el primer número
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            // Evitar 000000.00
            if (numberString === '0' && !number.includes('.')) {
                return;
            }

            return setNumber(number + numberString);
        }

        setNumber(number + numberString);
    }


    return {
        // Properties
        number,
        // Methods
        clean,
        deleteOperation,
        builderNumber,
        toggleSign,
    }
}