import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 
import BootstrapCarouselComponent from './components/carousel'
import AccordionBootstrapComponent from './components/accordion';
import './App.css';

function App() {
  
  return (
    
      <div className="container-fluid container-custom spaceman-bg ">

        <div className="container text-center">
          <h1 className="text-white">
            Renan Rocha Ramalho
          </h1>
        
        <div className="container " >
        <AccordionBootstrapComponent />
        </div>
        <div className="container">
        
            
          <BootstrapCarouselComponent/>
         
        </div>

      </div>
      
    </div>
  );
}

export default App;
