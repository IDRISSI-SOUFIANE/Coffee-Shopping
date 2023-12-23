import "./tem.css";

import TeamData from "../../Data-Api/TeamData";

import { useState } from "react";

const Team = () => {
  const [items, setItems] = useState(TeamData);

  // const [change, setChange] = useState(false);
  const [change, setChange] = useState([]);
  // console.log(change);

  const clickICon = (id) => {
    const newChange = items.map((t) => {
      if (t._id == id) {
        t.active = !t.active;
      }

      if (t.active == true) {
        setChange(false);
      } else {
        setChange(false);
      }

      return t;
    });
    // console.log(newChange);

    // setChange(newChange);
    // https://chat.openai.com/share/dbc47fa6-de38-409d-8470-126daaa26aec
    // this link explain what happen it's simple but very important
    setChange(newChange.filter((t) => t.active));
  };

  // =============================================\\
  // =============================================\\
  // =============================================\\

  // const clickICon = (id) => {
  //   const newItem = items.map((t) => {
  //     if (t._id == id) {
  //       t.active = !t.active;
  //     }

  //     // console.log(t);

  //     if (t.active == true) {
  //       setchange(true);
  //     } else {
  //       setchange(false);
  //     }

  //     return newItem;
  //   });

  //   console.log(newItem);
  //   setchange(newItem);
  // };

  //  ================================\\

  // const clickICon = (id) => {
  //   const newItem = items.map((t) => {
  //     if (t._id === id) {
  //       t.active = !t.active;
  //     }

  //     return t;
  //   });

  //   const anyActive = newItem.some((t) => t.active);

  //   setchange(anyActive);
  //   setItems(newItem);
  // };

  // =============================================\\
  // =============================================\\
  // =============================================\\
  //  flex-wrap
  return (
    <div className="mainTeam p-relative d-flex justif-content-center align-items-center flex-column">
      <h2 className="intro">Meet Our Expert</h2>
      <p className="brief-intro">
        Meet our exceptional team at Coffee-Time: I craft delicious brews, the
        manager orchestrates, and the waiter serves with warmth. Welcome!
      </p>

      <div className="boxex container d-flex justif-content-between align-items-center flex-wrap p-4">
        {items &&
          items.length > 0 &&
          items.map((item) => (
            <div className="box p-2 p-relative" key={item._id}>
              <div
                onClick={() => clickICon(item._id)}
                // onClick={clickICon}
                className={`infoIcon ${
                  change.find((it) => it._id == item._id && it.active == true)
                    ? "active"
                    : ""
                }`}

                // className={`infoIcon ${change.find((it) =>
                //   it._id == item._id && it.active == true ? "active" : ""
                // )}`}

                // className={`infoIcon`}
              >
                <i className="bi bi-info-lg"></i>
              </div>

              <div className="image p-relative">
                <div className="layer"></div>
                <img src={item.image} alt="" />
              </div>

              <div
                className={`information ${
                  change.find((it) => it._id == item._id && it.active == true)
                    ? "active"
                    : ""
                }`}
              >
                <h4>{item.name}</h4>
                <p className="position">{item.position}</p>
                <p className="desc">{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Team;

{
  /* <div className="box p-2 p-relative">
          <div className="infoIcon">
            <i className="bi bi-info-lg"></i>
          </div>

          <div className="image">
            <img src={coffeeImg} alt="" />
          </div>

          <div className="information">
            <h4>Sara Zones</h4>
            <p>Co-Leas Chef</p>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div> */
}
