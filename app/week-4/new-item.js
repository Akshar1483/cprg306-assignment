"use client";
import { useState } from "react";

function CounterExample() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity < 20) {
                return prevQuantity + 1;
            } else {
                return prevQuantity;
            }
        });
    };

    const decrement = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity > 0) {
                return prevQuantity - 1;
            } else {
                return prevQuantity;
            }
        });
    };

    return (
        <div style={{ 
            backgroundColor: 'lightblue', 
            color: 'white', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh' 
        }}>
            <div style={{ 
                backgroundColor: 'white', 
                color: 'black', 
                padding: '50px', 
                borderRadius: '30px', 
                textAlign: 'center' 
            }}>
                <p>Quantity: {quantity}</p>
                <div>
                    <button 
                        onClick={increment} 
                        disabled={quantity >= 20}
                        style={{ 
                            margin: '5px', 
                            padding: '10px', 
                            backgroundColor: quantity >= 20 ? 'gray' : 'purple', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '5px', 
                            cursor: quantity >= 20 ? 'not-allowed' : 'pointer' 
                        }}
                    >
                        +
                    </button>
                    <button 
                        onClick={decrement} 
                        disabled={quantity <= 0}
                        style={{ 
                            margin: '5px', 
                            padding: '10px', 
                            backgroundColor: quantity <= 0 ? 'gray' : 'orange', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '5px', 
                            cursor: quantity <= 0 ? 'not-allowed' : 'pointer' 
                        }}
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CounterExample;
