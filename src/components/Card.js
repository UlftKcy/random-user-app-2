import React, { useState } from "react";
import man from "../assets/man.svg";
import woman from "../assets/woman.svg";
import mail from "../assets/mail.svg";
import padlock from "../assets/padlock.svg";
import map from "../assets/map.svg";
import phone from "../assets/phone.svg";
import growingupman from "../assets/growing-up-man.svg";
import growingupwoman from "../assets/growing-up-woman.svg";

export default function Card({ user }) {
  const [content, setContent] = useState(true);

  return (
    <div className="card-user-body">
      <div className="card-header-body">
        <img className="card-header-img" src={user.picture.large}></img>
      </div>

      <div className="card-content">{content}</div>

      <div className="card-icons">
        <div className="icons-left-up">
          <img
            onMouseEnter={() => setContent(`My name is : ${user.name.first}`)}
            onMouseLeave={() => setContent("")}
            src={user.gender == "male" ? man : woman}
          ></img>
          <img
            onMouseEnter={() => setContent(`My email is : ${user.email}`)}
            onMouseLeave={() => setContent("")}
            src={mail}
          ></img>
          <img
            onMouseEnter={() => setContent(`My age is : ${user.dob.age}`)}
            onMouseLeave={() => setContent("")}
            src={user.gender == "male" ? growingupman : growingupwoman}
          ></img>
        </div>

        <div className="icons-right-bottom">
          <img
            onMouseEnter={() =>
              setContent(
                `My street is : ${user.location.street.number} ${user.location.street.name}`
              )
            }
            onMouseLeave={() => setContent("")}
            src={map}
          ></img>
          <img
            onMouseEnter={() => setContent(`My phone is : ${user.phone}`)}
            onMouseLeave={() => setContent("")}
            src={phone}
          ></img>
          <img
            onMouseEnter={() =>
              setContent(`My password is : ${user.login.password}`)
            }
            onMouseLeave={() => setContent("")}
            src={padlock}
          ></img>
        </div>
      </div>
    </div>
  );
}
