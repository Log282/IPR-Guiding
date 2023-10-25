import './BecomeMentor';


function BecomeMentor() {
  return (
    <div className='Home'>
      <div >
        <button className='btn'>Back</button>
        <button className='helpbtn'>help</button>
      </div>
      <div>
        <h1 className='h11'>Become a Mentor</h1>
        <div className='boxes'>
        <div className='firstbox'>
            <h2>Eligibility Progress</h2>
            <progress value = "65" max = "100"/>

          </div><br></br>
          <div className='secondbox'>
            <h2>Test to analyze your expertise</h2>
            <form>
              
              <select name='select'>
                <option>select</option>
                <option>patent</option>
                <option>copyrights</option>
                <option>trademark</option>
                <option>trade secret</option>
                <option>geographical location</option>

              </select>
              <button>Take Test</button>
              
            </form>
          



          </div><br></br>
          
          <div className='thirdbox'>
            <h2>Attend Webinars to get more knowledge on how to answer</h2>
            <input type="date" name="schedule"></input>
            <button>Schedule</button>
          </div>
        </div>
      </div>
        
    </div>
        

  );
}

export default BecomeMentor;
