// App.tsx
import { AppBar, Container, Toolbar } from '@material-ui/core';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';
import Cart from './Cart';
import Product from './Product';

const App: React.FC = () => {
  const [cart, setCart] = useState<number[]>([]);

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    // Add more products as needed
  ];

  const addToCart = (productId: number) => {
    setCart((prevCart) => [...prevCart, productId]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((id) => id !== productId));
  };

  const resetCart = () => {
    setCart([]);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <ShoppingCartIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <h1>Shopping Cart App</h1>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="md">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
          />
        ))}
        <Cart totalProducts={cart.length} onResetCart={resetCart} />

        <h4>(C) Marianna Fernandes</h4>
      </Container>
    </>
  );
};

export default App;
