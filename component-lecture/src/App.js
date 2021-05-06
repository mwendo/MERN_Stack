import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostBlock from './components/PostBlock'

function App() {
  return (
    <div className="App text-center p-5">
      <PostBlock text="hey it's me pussy faggot!" poster="Mike" likes={0}/>

      <PostBlock text="whats up nigga!" poster="Batman" likes={-1}/>

      <PostBlock text="I love money!!!!!" poster="Uncle PennyBags" likes={5000}/>

      <PostBlock />
      {/* <div className="border m-3">
        <h3>posted by: Micah</h3>
        <h1>"hey its mee bitches!!!!"</h1>
        <p>Likes: 2000 RT: 54</p>
      </div>

      <div className="border m-3">
        <h3>posted by: Batman</h3>
        <h1>"It's Batman"</h1>
        <p>Likes: 1 RT: 1</p>
      </div>

      <div className="border m-3">
        <h3>posted by: Monopoly</h3>
        <h1>"I love moneyyyyy!!!!"</h1>
        <p>Likes: 5000000 RT: 789</p>
      </div> */}

    </div>
    
  );
}

export default App;
