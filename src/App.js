import main_image from './img/main-window-img-v3.jpg';
import './styles/App.css'

function App() {
    return (
        <div className="App">
            <div className='Main-window'>
                <img src={main_image} className="Main-image" alt="logo" />
                <div className='Main-window-statement'>...and I will help become part of it</div>
            </div>
            <div className='Skills-window'>
            </div>
        </div>
    );
}

export default App;
