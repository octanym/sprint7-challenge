import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>Bloomtech</h1>
      <div>
        <Link>
          <button>Home</button>
        </Link>
        <Link>
          <button>Help</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
