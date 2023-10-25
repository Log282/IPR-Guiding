import './LiveWebinar';
import mentormale from "../imagesmentor/mentormale.png";
import mentorfemale from "../imagesmentor/mentorfemale.png";

function LiveWebinar(){
    return(
    <div className='Home1'>
      <div >
        <button className='btn'>Back</button>
        <button className='helpbtn'>help</button>
      </div>
      <div>
        <h1 className='h11'>Live Webinars</h1><br></br>
      </div >
      <div className='body'>
        <div className='leftside'>
            <button className='mentorbtn'>Mentors</button><br></br>
            <button className='eventbtn'>Events</button>
        </div>
        <div className='middle'>
          <img src={mentormale} alt='mentormale'></img><br></br>
          Name : abc <br></br>
          Domain : A <br></br>
          Email-Id : xyz@gmail.com <br></br>
          <button className='joinbtn'>Join</button><br></br><br></br><br></br>

          <img src={mentorfemale} alt='mentorfemale'></img><br></br>
          Name : def <br></br>
          Domain : B <br></br>
          Email-Id : xyz@gmail.com <br></br>    
           <button className='joinbtn'>Join</button>
        </div>
        <div className='rightside'>
        <img src={mentormale} alt='mentormale'></img><br></br>
          Name : abc <br></br>
          Domain : A <br></br>
          Email-Id : xyz@gmail.com <br></br>
          <button className='joinbtn'>Join</button><br></br><br></br><br></br>

          <img src={mentorfemale} alt='mentorfemale'></img><br></br>
          Name : def <br></br>
          Domain : B <br></br>
          Email-Id : xyz@gmail.com <br></br>    
           <button className='joinbtn'>Join</button>
        </div>
       </div > 
    </div>
    );
}

export default LiveWebinar;