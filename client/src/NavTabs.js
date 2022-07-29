import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div class="tabs is-medium is-centered">
      <ul>
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
            
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
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
            
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Login" ? "nav-link active" : "nav-link"
            }
          >
            Login
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
