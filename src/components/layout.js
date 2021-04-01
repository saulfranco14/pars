import React, { Fragment } from 'react';
import Header from './header';
import Helmet from 'react-helmet';

const Layout = ( props ) => {
  return ( 
    <Fragment>
      <Helmet>
        <title> Pars </title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@700&display=swap" rel="stylesheet" />
      </Helmet>
      <Header />
      {props.children}
    </Fragment>
   );
}
 
export default Layout;