// Product.tsx
import { Button } from '@material-ui/core';
import React from 'react';

interface ProductProps {
    id: number;
    name: string;
    price: number;
    onAddToCart: (id: number) => void;
    onRemoveFromCart: (id: number) => void;
}

const Product: React.FC<ProductProps> = ({ id, name, price, onAddToCart, onRemoveFromCart }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <Button variant="contained" onClick={() => onAddToCart(id)}>Add to Cart</Button>
            <Button variant="contained" onClick={() => onRemoveFromCart(id)}>Remove from Cart</Button>
        </div>
    );
};

export default Product;
