import imagen from '../assets/images/avatar-jessica.jpeg';
import './mainCard.css';

export const MainCard = () => {
    return (
        <div className="main-card">
            <img className='image' src={imagen} alt="user-image" />
            <h2>Jessica Randall</h2>
            <h3 className='residence'> London, United Kingdom</h3>
            <h4 className='profession'>"Front-end developer and avid reader."</h4>
        </div>
    );
}