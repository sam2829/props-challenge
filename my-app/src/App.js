import css from './App.module.css';
import Sidebar from "./components/Sidebar"
//import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import ContentHooks from './components/ContentHooks';
import ContentAPI from './components/ContentAPI';
import ContentAPIHooks from './components/ContentAPIHooks';

function App() {
  return (
    <div className={css.App}>
      {/*Add your components here*/}
      <NavBarForm />
      <Sidebar />
      {/*<ContentHooks />*/}
      <ContentAPIHooks />

      
    </div>
  );
}

export default App;