import "./styles.css";
import { useState } from "react";
import {
  BrowserRouter,
  useNavigate,
  Routes,
  Route,
  Link
} from "react-router-dom";

let c = false;

const users = [];

function Nav() {
  let about = useNavigate();
  let A = () => {
    about("/about");
  };
  let F = () => {
    about("/features");
  };
  let T = () => {
    about("/things");
  };
  let H = () => {
    about("/enter");
  };

  let h = () => {
    about("/");
  };

  if (c) {
    return (
      <>
        <nav>
          <ul>
            <li>
              <button onClick={H}>Home</button>
            </li>
            <li>
              <button onClick={A}>About</button>
            </li>
            <li>
              <button onClick={F}>Features</button>
            </li>
            <li>
              <button onClick={T}>Things</button>
            </li>
            <li>
              <button onClick={h}>Log-Out</button>
            </li>
          </ul>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <nav>
          <ul>
            <li>
              <button onClick={h}>Home</button>
            </li>
            <li>
              <button onClick={A}>About</button>
            </li>
            <li>
              <button onClick={F}>Features</button>
            </li>
            <li>
              <button onClick={T}>Things</button>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

function Features() {
  return (
    <>
      <Nav />
      <h1>Working on this ..</h1>
    </>
  );
}

function Things() {
  return (
    <>
      <Nav />
      <h1>Working on this ..</h1>
    </>
  );
}

function About() {
  return (
    <>
      <Nav />
      <h1>Working on this ..</h1>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer>
        <div className="AboutUs">
          <span className="ContactUs">Contact-Us</span>
          <a href="https://www.instagram.com/ramprasad_shinde_2025/">
            <img src="https://www.informatique-mania.com/wp-content/uploads/2021/06/instagram.png?ezimgfmt=rs:300x300/rscb1/ng:webp/ngcb1" />
          </a>
          <a href="https://www.facebook.com/ramprasad.shinde.129/">
            <img src="https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-600w-593204357.jpg" />
          </a>
          <a href="https://github.com/ram2025">
            <img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png" />
          </a>
        </div>
        <br />
        <h1 className="SkyTeam">SKY-TEAM</h1>
        <p>
          "We don't want to push our ideas on to customers, we simply want to
          make what they want."
        </p>
      </footer>
    </>
  );
}

function Home() {
  return (
    <>
      <Nav />
      <br />
      <h1 className="logo">WELL-COME TO SKY TEAM</h1>
      <h2>Watch Most Papular Movies </h2>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <br />
      <br />
      <Link to="/Signin">
        <button>Create Account</button>
      </Link>
      <br />
      <br />
      <p>
        If you have already account please click on login otherwise create new
        account
      </p>
      <br />
      <br />
      <Footer />
    </>
  );
}

function Signin() {
  const [name, newname] = useState("");
  const [pass, newpass] = useState("");

  let navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  return (
    <div className="signin">
      <h1>Sign-in</h1>
      <form
        onSubmit={function (event) {
          event.preventDefault();
          users.push({ username: name, password: pass });
          login();
        }}
      >
        <div>
          username :{" "}
          <input
            onChange={function (text) {
              newname(text.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          Password :{" "}
          <input
            onChange={function (text) {
              newpass(text.target.value);
            }}
            type="password"
          />
        </div>
        <button type="submit">Create account</button>
        <p>If you have already account please log in</p>
        <Link to="/login">
          <button>Log in</button>{" "}
        </Link>
      </form>
    </div>
  );
}

function Enter() {
  return (
    <div class="enter">
      <Nav />
      <h1 className="logo">WELL-COME TO SKY TEAM</h1>
      <h2>Watch Your Favourite Movies </h2>
      <div className="movies">
        <div className="block">
          <video
            src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
            controls
          />
          <h1>MACHINE</h1>
        </div>
        <div className="block">
          <video
            src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
            controls
          />

          <h1>MACHINE</h1>
        </div>
        <div className="block">
          <video
            src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
            controls
          />

          <h1>MACHINE</h1>
        </div>
        <div className="block">
          <video
            src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
            controls
          />

          <h1>MACHINE</h1>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Login() {
  const [name, newname] = useState("");
  const [pass, newpass] = useState("");
  let f = true;
  let navigate = useNavigate();
  const goBack = () => {
    navigate("/enter");
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <form
        onSubmit={function (event) {
          event.preventDefault();
        }}
      >
        <div>
          username :{" "}
          <input
            onChange={function (text) {
              newname(text.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          Password :{" "}
          <input
            onChange={function (text) {
              newpass(text.target.value);
            }}
            type="password"
          />
        </div>
        <button
          onClick={function () {
            users.forEach(function (el) {
              if (el.username === name && el.password === pass) {
                goBack();
                f = false;
                c = true;
              }
            });

            if (f) {
              alert("enter correct username and password");
            }
          }}
          type="submit"
        >
          Login
        </button>
        <p>If you dont have account please create new account</p>
        <Link to="/signin">
          <button>Create account</button>
        </Link>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/enter" element={<Enter />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/things" element={<Things />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
