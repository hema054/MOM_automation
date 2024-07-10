import profile from './assets/document.jpeg';

function Card() {
    return (  
        <div className="card">
            <center>
           <img className="card-image" src={profile} alt="profile"></img>
           <h2 className="card-title">MoM automation portal</h2>
           <p className="card-text">Welcome  back , User!</p>
           </center>
        </div>
    );
}

export default Card;