import HeadLine from './Components/headline'
import './app.scss'
import Header from './Components/Header'
function App() {
  return (
    <div className="App">
           <Header/>
           <section className="main">
               <HeadLine header="Posts" desc="click the button to render"/>
           </section>
    </div>
  );
}

export default App;
