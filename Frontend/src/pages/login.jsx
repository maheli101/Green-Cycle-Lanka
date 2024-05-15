import "./Styles/login.css"
import Pwdicon from "../assets/login/icons8-password-48.png"
import Phoneicon from "../assets/login/icons8-phone-48.png"
//import Signinbck from "../assets/login/logback.jpg"


export default function login() {
    
  return (

    <form action="" className="all">
            <div className="signin-full">
      <div className="sign-in-upper">
        <div className="sign-in-upper2">
          
            <h3>Welcome To Green Cycle Lanka</h3>
          
        </div>
      </div>
      <div className="all-letters">
        <div className="letters">
          <img src={Phoneicon} alt="Phone icon" />
          <input type="tel" required="required" placeholder="Phone-number" />
        </div>
        <div className="letters">
          <img src={Pwdicon} alt="Password icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="sign-in-legs">
        <div className="lbutton">
          <button type="submit" className="sign-in-legs1">Log in</button>
        </div>
        <div className="reg">
          <p>You Don &#39;t have an account..? <a href="#">Register</a></p>
        </div>
      </div>
    </div>
      </form>

   
  
  )
}
