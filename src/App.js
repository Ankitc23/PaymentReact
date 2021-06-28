import './App.css';
import StripeCheckout from 'react-stripe-checkout'
import Banner from './banner'
import Footer from './footer'
import Backgroundimage from './backgroundimage'

function App() {
  const onToken = (token)=> {
    console.log(token);
  };


  return (
    <div className="App">
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51Izlj5HyVTo8swfcXivaIvbSLdtefo7f5y8VphYvRucUUJ6MBg18AvmhSTUiHocITwEeYkulAcnKsDAA6R3LC46K00AflR13O5"
        name= "Ankit Braces"
        currency="usd"
        amount="500000"

        />
        <Banner/>
        <Footer/>
        <Backgroundimage/>
    </div>
  );
}

export default App;
