import React from "react";
import Auth from "./utils/auth";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage}) {
  return (
    <div className="tabs is-medium is-centered is-toggle is-toggle-rounded">
      <ul >
        <li>
          <a
            href="/"
            
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={ 
              currentPage === "Home" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="/profile"
            
      
            className={
              currentPage === "Profile" ? "nav-link active" : "nav-link"
            }
          >
            Profile
          </a>
        </li>

        <li>
          <a
            href="/login"
         
            className={
              currentPage === "Login" ? "nav-link active" : "nav-link"
            }
          >
            Login
          </a>
        </li>
        <li onClick={() => {Auth.logout()}}>
          <a
            href="/logout"
            className={
              currentPage === "Logout" ? "nav-link active" : "nav-link"
            }
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
