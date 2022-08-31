import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const LinkList = links.map((link) => {
    return <a key = {link} href={`#${link}`}>{link}</a>
  })

  return <nav>{LinkList}</nav>;
}

export default NavBar;
