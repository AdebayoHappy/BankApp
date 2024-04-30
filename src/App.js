import './App.css';






const Header =()=>{
  const styles={
    header:{
    backgroundColor: 'red',
      textAlign:'center',
      padding: '.5rem'
    }
    }
  return (
    <header className='header' style={styles['header']}>
      <h1>Header 😁😎</h1>
    </header>
  )
}

const Main =() =>{
  const main={
        display:'flex',
        float:'left',
        border: '0',
        width: '50%',
        padding: '1rem',
        flexDirection: 'column',
        marginTop:'1rem',
        height: '20rem',
        textAlign: 'center',
        alignItems:'center',
        backgroundColor: 'blue'
  }
  return (
    <main style={main}>
      <h2>Main Area</h2>
      <p>This is the main contant of the page</p>
    </main>
  )
}

const Sidebar =()=>{

     const sidebar={
      sidebar:{
          display:'flex',
          flexDirection: 'column',
          width: '50%',
          marginTop:'1rem',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '20rem',   
      },
      sidebarCont:{
        backgroundColor:'gray',
        width:'22rem',
        height:'8rem',
        textAlign: 'center'
      }   
     }
  return(
    <aside className='sidebar' style={sidebar.sidebar}>
        <div style={sidebar.sidebarCont}>
          <h2>Top Sidebar🤣😉✌</h2>
        </div>
        <div style={sidebar.sidebarCont}>
          <h2>Bottom Sidebar 😃🤔😆</h2>
        </div>
    </aside>
  )
}


const Footer =()=>{
   const styles={
   width: '100%',
   backgroundColor:'red',
   textAlign:'center',
   padding: '.5rem',
   marginTop: '1rem'
   }
  return(
    <footer className='footer' style={styles}>
      <h1>Footer😆😊</h1>
    </footer>
  )
}

function List(){
 const styles={
  listStyle:'none',
  display:'flex',
  justifyContent: 'space-around'
 } 
 

  return(
    <ul style={styles}>
      <li>Option 1</li>
      <li>Option 2</li>
      <li>Option 3</li>
      <li>Option 4</li>
    </ul>
  )
}
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Sidebar />
      <Footer />
      <List />
    </div>
  );
}

export default App;
