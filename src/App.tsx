import React, { useState } from 'react';
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
import { OnboardingPage } from './pages/OnboardingPage';

export const App: React.FC = () => {
  const [name, setName] = useState('');
  const [isLoadingStore, setIsLoadingStore] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isErrorDisconnected, setIsErrorDisconnected] = useState(false);
  const [storeName, setStoreName] = useState('');
  const [selectedUser, setSelectedUser] = useState('');

  const getShopifyStore = async(name: string) => {
    setIsLoadingStore(true);
    <LoadingPage />

    try {
      const gettingStore = name && await getShopify(name);
      if (gettingStore) {
        setStoreName(gettingStore.shop_name);
        localStorage.setItem('shop_token', gettingStore.token);
      } 
    } catch {
      setIsError(true);
    } finally {
      setIsLoadingStore(false);
    }
  };

  const getGoogleToken = async() => {
    try {
      const gettingToken = await getGoogle();
      if (gettingToken) {
        localStorage.setItem('google_token', gettingToken.token);
      } 
    } catch {
      throw new Error('There is a problem with getting token.');
    } 
  };

  console.log(localStorage);

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
            <Route path=":success-connection">
              <Route index element={<SuccessfullShopifyConnectPage storeName={storeName} />} />
              <Route path=":google">
              <Route index element={<GooglePage />} />
              <Route path=":connect-gmail">
                <Route index element={<ConnectedGooglePage setSelectedUser={setSelectedUser} getGoogleToken={getGoogleToken} />} />
                <Route path=":connection-gmail">
                  <Route index element={<GoogleConnectionPage selectedUser={selectedUser} />} />
                  <Route path=":loadingGoogle">
                    <Route index element={<LoadingGoogle />} />
                    <Route path=":done" element={<OnboardingPage />} />
                  </Route>
                </Route>
              </Route> 
              </Route> 
            </Route>
          </Route>
        </Route>

        <Route path="/not-shopify" element={<NotUseShopifyPage />} />

        <Route path="/end" element={<EndPageWithoutShopify />}/>

        <Route path="/" element={<HomePage name={name} setName={setName} />} />
        <Route path="home" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
