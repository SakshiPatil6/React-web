import './login.css'
// Get the modal
var modal = document.getElementById('id01');
var log = document.getElementById('log');
var cancel = document.getElementById('cancel');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event)
{
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
function logOnclick(event)
{
    if (event.target === log)
    {
        modal.style.display = "block";
    }
}
function cancelOnclick(event)
{
    if (event.target === cancel)
    {
        modal.style.display = "none";
        }
}

function login() {
    return (
        <>
            <h2>Modal Login Form</h2>

            
            <button style={{ width: "auto" }} className="log" id="log" onclick={logOnclick}>Login
            </button>
            
            <div id="id01" class="modal">

                <form class="modal-content animate">
                    {/* <div class="imgcontainer">
                        <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
                        <img src="img_avatar2.png" alt="Avatar" class="avatar" />
                    </div> */}

                    <div class="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label>
                    </div>

                    <div class="container" style={{ backgroundcolor: "#f1f1f1" }}>
                        <button type="button"  class="cancel" id='cancel' onclick={cancelOnclick}>Cancel</button>
                        <span class="psw">Forgot <a href="/">password?</a></span>
                    </div>
                </form>
            </div>
        </>
    );
}

export default login;