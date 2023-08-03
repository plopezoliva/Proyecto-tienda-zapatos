// import Footer from "../components/Footer";
import {Fragment} from 'react';
import Navigation from "../components/Navigation";
import Routes from "../routes/Routes";

const Layout = () => {
  return (
    <Fragment>
         <Navigation />
      <div>
        <Routes />
      </div>
  
    </Fragment>
  );
};
export default Layout;
