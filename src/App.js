import HeadLine from './Components/headline'
import './app.scss'
import Header from './Components/Header'

const tempArr=[{
  fName:'Joe',
  lName:'Blogs',
  email:'joebloggs@gmail.com',
  age:24,
  onlineStatus:true
}]
function App() {
  return (
    <div className="App">
           <Header/>
           <section className="main">
               <HeadLine header="Posts" desc="click the button to render" tempArr={tempArr}/>
           </section>
    </div>
  );
}

export default App;
