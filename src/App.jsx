import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Inventory from './pages/Inventory';
    import Transactions from './pages/Transactions';
    import AccountingJournal from './pages/AccountingJournal';

    function App() {
      return (
        <Router>
          <div>
            <Routes>
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/accounting-journal" element={<AccountingJournal />} />
            </Routes>
          </div>
        </Router>
      );
    }

    export default App;
