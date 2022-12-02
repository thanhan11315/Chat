import React from "react";
import "./googleMap.scss";

function GoogleMapTest(props) {
  return (
    <>
      <a
        href="https://maps.google.com/maps?ll=10.8037021,106.6426073&z=14&output=embed"
        target="blank"
        style={{
          cursor: "pointer",
          position: "relative",
        }}
      >
        <div
          style={{ height: "150px", width: "300px", position: "absolute" }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: "30px",
            height: "30px",
            left: "135px",
            bottom: "60px",
          }}
        >
          <img
            src={props.dataUserMe.avatar}
            alt="img not load"
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <iframe
          src="https://maps.google.com/maps?ll=10.8037021,106.6426073&z=14&output=embed"
          height="150"
          width="300"
          frameborder="0"
          title="Iframe Example"
        ></iframe>
      </a>
    </>
  );
}

export default GoogleMapTest;
