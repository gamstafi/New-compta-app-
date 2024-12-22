import React, { useState } from 'react';

    function Transactions() {
      const [sales, setSales] = useState([]);
      const [purchases, setPurchases] = useState([]);

      const addSale = (sale) => {
        setSales([...sales, sale]);
      };

      const addPurchase = (purchase) => {
        setPurchases([...purchases, purchase]);
      };

      return (
        <div>
          <h1>Transactions</h1>
          {/* Implement sale and purchase functionalities */}
        </div>
      );
    }

    export default Transactions;
