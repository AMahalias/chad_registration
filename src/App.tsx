import React, { useState } from 'react';
import './styles/customStyles.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { HomePage } from './pages/HomePage';
import { GooglePage } from './pages/GooglePage';
import { ShopifyPage } from './pages/ShopifyPage';
import { NotUseShopifyPage } from './pages/NotUseShopifyPage';
import { Sidebar } from './components/Sidebar';
import { ConnectedShopifyPage } from './pages/ConnectedShopifyPage';
import { getShopify } from './api/shopify';
import { ErrorDisconnectedPage } from './pages/ErrorDisconnectedPage';
import { SuccessfullShopifyConnectPage } from './pages/SuccessfullShopifyConnectPage';

export const App: React.FC = () => {
  const [shop_token, setShopToken] = useState('');
  // const [google_token, setGoogleToken] = useState('');
  const [name, setName] = useState('');
  const [isLoadingStore, setIsLoadingStore] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isErrorDisconnected, setIsErrorDisconnected] = useState(false);
  const [storeName, setStoreName] = useState('');

  const getShopifyStore = async(name: string) => {
    setIsLoadingStore(true);

    try {
      const gettingStore = name && await getShopify(name);
      if (gettingStore) {
        setShopToken(gettingStore.token);
        setStoreName(gettingStore.shop_name);
        localStorage.setItem('shop_token', shop_token);
      } 
    } catch {
      setIsError(true);
    } finally {
      setIsLoadingStore(false);
    }
  };

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chad</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Sidebar />

      <Routes>
        <Route path="shopify">
          <Route index element={
            <ShopifyPage 
              name={name} 
              isLoading={isLoadingStore}
              isError={isError}
              getShopifyStore={getShopifyStore}
              isErrorDisconnected={isErrorDisconnected}
            />} 
          />
          <Route path=":connectShopify">
            <Route index element={
              <ConnectedShopifyPage 
                storeName={storeName} 
                setIsErrorDisconnected = {setIsErrorDisconnected}
            />} />
            <Route path=":disconnectPage" element={<ErrorDisconnectedPage />} />
            <Route path=":success-connection" element={<SuccessfullShopifyConnectPage storeName={storeName} />} />
          </Route>
        </Route>

        <Route path="/not-shopify" element={<NotUseShopifyPage />} />

        <Route path="google" element={<GooglePage />} />

        <Route path="/end" element={<NotUseShopifyPage />}/>

        <Route path="/" element={<HomePage name={name} setName={setName} />} />
        <Route path="home" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
