import "./tem.css";

import TeamData from "../../Data-Api/TeamData";

import { useState } from "react";

const Team = () => {
  const [items, setItems] = useState(TeamData);

  const [change, setChange] = useState(false);
  console.log(change);

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
    console.log(newChange);

    setChange(newChange);
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

  return (
    <div className="mainTeam p-relative d-flex justif-content-center align-items-center flex-column">
      <h2 className="intro">Meet Our Expert</h2>

      <div className="boxex container d-flex justif-content-between align-items-center p-4">
        {items &&
          items.length > 0 &&
          items.map((item) => (
            <div className="box p-2 p-relative container" key={item._id}>
              <div
                onClick={() => clickICon(item._id)}
                // onClick={clickICon}
                // className={`infoIcon ${change == true ? "active" : ""}`}

                className={`infoIcon ${change.find((it) =>
                  it._id == item._id && it.active ? "active" : ""
                )}`}
              >
                <i className="bi bi-info-lg"></i>
              </div>

              <div className="image">
                <img src={item.image} alt="" />
              </div>

              <div className="information">
                <h4>{item.name}</h4>
                <p>{item.position}</p>
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
