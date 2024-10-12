"use client";
import { useState } from "react";

function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const increment = () => {
        setQuantity(prevQuantity => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity));
    };

    const decrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            name,
            quantity,
            category,
        };
        console.log(item);
        alert(`Item added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    return (
        <div style={{ 
            backgroundColor: 'lightblue', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh' 
        }}>
            <div style={{ 
                backgroundColor: 'white', 
                padding: '50px', 
                borderRadius: '30px', 
                textAlign: 'center' 
            }}>
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                   
                    <div style={{ marginBottom: '20px' }}>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Item name"
                            style={{ padding: '10px', borderRadius: '5px', border: '1px solid gray' }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ color: 'black' }}>Quantity: {quantity}</p>
                        <button 
                            type="button" 
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
                            type="button" 
                            onClick={decrement} 
                            disabled={quantity <= 1}
                            style={{ 
                                margin: '5px', 
                                padding: '10px', 
                                backgroundColor: quantity <= 1 ? 'gray' : 'orange', 
                                color: 'white', 
                                border: 'none', 
                                borderRadius: '5px', 
                                cursor: quantity <= 1 ? 'not-allowed' : 'pointer' 
                            }}
                        >
                            -
                        </button>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            style={{ padding: '10px', borderRadius: '5px', border: '1px solid gray' }}
                        >
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <button 
                        type="submit" 
                        style={{ 
                            backgroundColor: 'blue', 
                            color: 'white', 
                            padding: '10px 20px', 
                            borderRadius: '5px', 
                            border: 'none', 
                            cursor: 'pointer' 
                        }}
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
}

export default NewItem;
