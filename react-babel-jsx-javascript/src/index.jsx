import ReactDOM from 'react-dom';
import React from 'react';
import Test from './components/Test.jsx';

const customerInfoEle = document.getElementById('customer-info');


const Breadcrumb = () => {

}

const CustomerInfo = () => {
  return (
    <>
      <Test />
    </>
  )
}

customerInfoEle && ReactDOM.render(<CustomerInfo />, customerInfoEle);
