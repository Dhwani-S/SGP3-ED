import React from "react";
import "./login.css";

const login = () => {





  return <>

    <header>

      <div id="id01" class="login-modal">

        <form class="login-modal-content animate" action="/action_page.php" method="post">
          <div class="login-imgcontainer">
            <span onclick="document.getElementById('id01').style.display='none'" class="login-close"
              title="Close">&times;</span>
            <img src="https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png" alt="Avatar" class="login-avatar"
              size="5">
          </div>

          <div class="login-container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required>

              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required>

                <button type="submit">Login</button>
                <label>
                  <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
              </div>

              <div class="login-container-2" style="background-color:#f1f1f1">
                <button type="button" onclick="document.getElementById('id01').style.display='none'"
                  class="login-cancelbtn">Cancel</button>
                <span class="login-psw">Forgot <a href="#">Password?</a></span>
              </div>
            </form>
          </div>



        </header>


      </>;
};