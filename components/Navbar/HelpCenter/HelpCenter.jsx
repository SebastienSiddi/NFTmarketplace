import React from "react";
import Link from "next/link";

import Style from "./HelpCenter.module.css";

const HelpCenter = () => {
  //-----HELPCENTER NAVIGATION MENU
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contactUs",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  return (
    <div>
      {helpCenter.map((el, i) => (
        <div key={i + 1} className={Style.helpCenter}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
