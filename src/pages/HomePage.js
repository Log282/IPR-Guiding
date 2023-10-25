import './HomePage';
import { Link } from "react-router-dom";

function HomePage()
{
    return(
        <div className='Top'>
            <button> <Link to="/">HomePage </Link></button>   
            <button><Link to="/liveweb">Webinar </Link></button>
            <button><Link to="/mentor">Mentor </Link></button>
        </div>
    );
}


export default HomePage;