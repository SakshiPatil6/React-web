import "./App.css";
import logo from './logo.avif';
import food from './food.jpg';
import back from './back.png';
import { Link } from "react-router-dom";
function home() {
  return (
    <div>
      <div className="row ">
        <div className="col col1 ">
          <img src={logo} alt="Logo" className="logo"></img>
          <Link to="/login" className="btn  btn-warning btn1">Login</Link>
          <button className="btn" type="submit">Login</button>
          <div className="writeup">

            <h2 className="heading">Hungry?</h2>
            <p>Order your favorite food and enjoy.</p>
            <p className="para">A recipe has no soul. You, as the cook, must bring soul to the recipe.</p>
          </div>
        </div>
        <div className="col col2">
          <img src={food} alt="Food" style={{ height: "60vh", width: "50vw" }}></img>
        </div>
      </div>



      <img src={back} alt="a" className="image"></img>




      <div className="container bg-warning text-dark footer" id="foot" >
        <footer className="py-5" >
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                  <button className="btn btn-dark text-white" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2022 Company, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>

    </div>
  );
}

export default home;