// Cart.tsx
import { Button } from '@material-ui/core';
import React from 'react';

interface CartProps {
    totalProducts: number;
    onResetCart: () => void;
}

const Cart: React.FC<CartProps> = ({ totalProducts, onResetCart }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <p>Total Products: {totalProducts}</p>
            <Button variant="contained" onClick={onResetCart}>Reset Cart</Button>
        </div>
    );
};

export default Cart;
