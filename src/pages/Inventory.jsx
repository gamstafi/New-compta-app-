import React, { useState } from 'react';

    function Inventory() {
      const [products, setProducts] = useState([]);

      const addProduct = (product) => {
        setProducts([...products, product]);
      };

      const removeProduct = (index) => {
        setProducts(products.filter((_, i) => i !== index));
      };

      return (
        <div>
          <h1>Inventory Management</h1>
          {/* Implement product list, add, edit, delete functionalities */}
        </div>
      );
    }

    export default Inventory;
