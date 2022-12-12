import React, { useEffect, useState } from 'react';
import './styles/customStyles.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { HomePage } from './pages/HomePage';
import { GooglePage } from './pages/GooglePage';
import { ShopifyPage } from './pages/ShopifyPage';
import { NotUseShopifyPage } from './pages/NotUseShopifyPage';
import { ConnectedShopifyPage } from './pages/ConnectedShopifyPage';
import { getShopify } from './api/shopify';
import { ErrorDisconnectedPage } from './pages/ErrorDisconnectedPage';
import { SuccessfullShopifyConnectPage } from './pages/SuccessfullShopifyConnectPage';
import { LoadingPage } from './components/LoadingPage';
import { EndPageWithoutShopify } from './pages/EndPageWithoutShopify';
import { ConnectedGooglePage } from './pages/ConnectedGooglePage';
import { GoogleConnectionPage } from './pages/GoogleConnectionPage';
import { LoadingGoogle } from './components/LoadingGoogle';
import { getGoogle } from './api/google';
import { shopifyPage } from './texts/textsForMainTitles';

export const App: React.FC = () => {
  const [shop_token, setShopToken] = useState('');
  const [google_token, setGoogleToken] = useState('');
  const [name, setName] = useState('');
  const [isLoadingStore, setIsLoadingStore] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isErrorDisconnected, setIsErrorDisconnected] = useState(false);
  const [storeName, setStoreName] = useState('');

  const getShopifyStore = async(name: string) => {
    setIsLoadingStore(true);
    <LoadingPage />

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

  const getGoogleToken = async() => {
    try {
    <LoadingGoogle />
      const gettingToken = await getGoogle();
      if (gettingToken) {
        setGoogleToken(gettingToken.token);
        localStorage.setItem('google_token', google_token);
      } 
    } catch {
      throw new Error('There is a problem with getting token.');
    } 
  };

  console.log(localStorage);

  useEffect(() => {
    if (shop_token.length > 0) {
      localStorage.setItem('shop_token', shop_token);
    }

    if (google_token.length > 0) {
      localStorage.setItem('google_token', google_token);
    }
  }, [google_token, shop_token])

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chad</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

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
                setIsErrorDisconnected = {setIsErrorDisconnected}
            />} />
            <Route path=":disconnectPage" element={<ErrorDisconnectedPage />} />
            <Route path=":success-connection" element={<SuccessfullShopifyConnectPage storeName={storeName} />} />
          </Route>
        </Route>

        <Route path="/not-shopify" element={<NotUseShopifyPage />} />

        <Route path="google">
          <Route index element={<GooglePage />} />
          <Route path=":connect-gmail">
            <Route index element={<ConnectedGooglePage getGoogleToken={getGoogleToken} />} />
            <Route path=":connection-gmail" element={<GoogleConnectionPage />}/>
          </Route> 
        </Route> 

        <Route path="/end" element={<EndPageWithoutShopify />}/>

        <Route path="/" element={<HomePage name={name} setName={setName} />} />
        <Route path="home" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
