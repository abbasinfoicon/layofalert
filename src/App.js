import React, { useEffect, useState } from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import RouterMenu from "./routes/index";
import { Watch } from "react-loader-spinner";
import ScrollTopToBottom from "./components/ScrollTopToBottom";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(delay);
  }, []);

  if (isLoading) {
    return <div className="loading"><Watch
      height="80"
      width="80"
      radius="48"
      color="#4fa94d"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    /></div>;
  }

  return (
    <div id="app">
      <RouterMenu />
      <Footer />
      <ScrollTopToBottom />
    </div>
  );
}

export default App;
