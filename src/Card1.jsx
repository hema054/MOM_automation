import profile from './assets/document.jpeg';

function Card1() {
    return (  
        <div className="card">
            <center>
           <img className="card-image" src={profile} alt="profile"></img>
           <h2 className="card-title">Staff using dashboard </h2>
           <p className="card-text">Get into documents for reference and <br/>create new Minutes!</p>
           </center></div>
    );
}

export default Card1;