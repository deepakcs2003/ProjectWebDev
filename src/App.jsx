import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import { useContext, useEffect } from 'react';
import { AppContext } from './AppContext';

function App() {
  const{fetchPostData}=useContext(AppContext);
  useEffect(()=>{
    fetchPostData();
  },[])
  return (
    <div>
      <Header></Header>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
}

export default App;
