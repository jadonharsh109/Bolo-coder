<header id="header">
      <div class="nav-wrapper">
        <div class="logo-container">
          <h2 class="logo" id="logo">
            <a href="index.html" class="logo-link">
              <span class="first">B</span>olo <span class="last">C</span>oders
            </a>
          </h2>
          <div class="icons" id="icons">
            <a href="templates/ask/ask.php" id="link1"
              ><i class="fa-solid fa-question"></i>
            </a>
            <a href="templates/ans/ans.php" id="link2"
              ><i class="fa-solid fa-comments"></i
            ></a>
            <a href="templates/login/login.php" id="link3"
              ><i class="fa-solid fa-circle-user"></i
            ></a>
          </div>
          <div id="bar">
            <i class="fa-solid fa-bars-staggered" id="responsiveBar"></i>
          </div>
        </div>
        <nav>
          <div class="nav-container">
            <ul class="nav-tabs">
              <li class="nav-tab"><a href="templates/ask/ask.php">Ask</a></li>
              <li class="nav-tab"><a href="templates/ans/ans.php">Answer</a></li>
              <li class="nav-tab"><a href="templates/FAQ/faq.html">FAQ</a></li>
              <li class="nav-tab">
                <a href="templates/contact/contact.php">Contact</a>
              </li>
              <li class="nav-tab"><a href="templates/login/login.php">Login</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

<style>
/* Global css Properties */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  width: 100vw;
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  overflow: hidden;
  scrollbar-color: rgb(98 84 243);
  scrollbar-width: thin;
  color: white;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
  background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
  background: #fff;
  border: 5px solid transparent;
  border-radius: 9px;
  background-clip: content-box;
}

body {
  background-color: #03001c;
  font-family: "Poppins", sans-serif;
}

/* Default Classes */

.center {
  text-align: center;
}

.white {
  color: white;
}

a {
  color: #eee;
  text-decoration: none;
}

.nav-wrapper {
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 95%;
  height: 80px;
  border-radius: 50px 50px;
  padding: 0 25px;
  z-index: 2;
  background: #301e67;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  color: white;
  margin-top: 1rem;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  transition: 0.5s;
  font-size: 2rem;
  cursor: pointer;
}

.logo-link {
  text-decoration: none;
  color: white;
}

.logo::after {
  content: "";
  height: 0.2rem;
  width: 0;
  background: white;
  position: absolute;
  bottom: 2rem;
  left: 2.8rem;
  transition: 0.5s;
}

.logo:hover::after {
  width: 13rem;
}

.logo .first {
  color: #764ba2;
  font-size: 2.8rem !important;
}

.logo .last {
  color: aquamarine;
  font-size: 2.8rem !important;
}

.nav-tabs {
  display: flex;
  font-weight: 600;
  font-size: 18px;
  list-style: none;
}

.nav-tab:not(:last-child) {
  padding: 10px 25px;
  margin: 0;
  border-right: 1px solid #eee;
}

.nav-tab:last-child {
  padding: 10px 0 0 25px;
}

.nav-tab,
.menu-btn {
  cursor: pointer;
}

.hidden {
  display: none;
}

@media screen and (max-width: 800px) {
  .nav-container {
    position: fixed;
    display: none;
    overflow-y: auto;
    z-index: -1;
    top: 0;
    right: 0;
    width: 280px;
    height: 100%;
    background: #fff;
    box-shadow: -1px 0 2px rgba(0, 0, 0, 0.2);
  }

  .nav-tabs {
    flex-direction: column;
    align-items: flex-end;
    margin-top: 80px;
    width: 100%;
  }

  .nav-tab:not(:last-child) {
    padding: 20px 25px;
    margin: 0;
    border-right: unset;
    border-bottom: 1px solid #f5f5f5;
  }

  .nav-tab:last-child {
    padding: 15px 25px;
  }
}

* {
  padding: 0;
  margin: 0;
}

svg {
  position: absolute;
  top: 8rem;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: block;
  background-color: #03001c;
  /* background-image: linear-gradient(to bottom, #03001c, #040f17); */
}



</style>