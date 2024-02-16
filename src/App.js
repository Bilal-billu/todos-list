import './App.css';
import Header from './components/Header/Header';
import Main from './components/Body/Main';
import Footer from './components/Footer/Footer';
import { UserProvider } from './context/UserContext';
import { ProviderMainContext } from './context/DisplayContentContext';
import { useState } from 'react';


function App() {
  var [listAndAdd, setListAndAdd] = useState({
    list: true,
    add: true,
    about: false
  })

  const listOnly = () =>{
    setListAndAdd({list:true,
    add:false,
    about: false
  })
  }
  const addOnly = () =>{
    setListAndAdd({list:false,
    add:true,
    about: false
  })
  }
  const bothListAdd=()=>{
    setListAndAdd({list:true,
      add:true
    })
  }
  const aboutOnly=()=>{
    setListAndAdd({list:false,
      add:false,
      about: true
    })
  }

  return (
    <div className="App">
      <ProviderMainContext value={{listAndAdd, listOnly, addOnly, bothListAdd, aboutOnly}}>
        <Header title={"Todo List"} />
        <Main />
      </ProviderMainContext>
      <UserProvider>
        <Footer />
      </UserProvider>

    </div>
  );
}

export default App;