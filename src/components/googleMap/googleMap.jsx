import React from "react";
import "./googleMap.scss";

function GoogleMapTest() {
  return (
    <>
      <a
        href="https://www.google.com/maps/place/10%C2%B048'13.3%22N+106%C2%B038'33.4%22E/@10.8036924,106.6404279,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x24e40f5963c8cf63!8m2!3d10.8036924!4d106.6426166"
        target="blank"
        style={{
          cursor: "pointer",
          position: "relative",
        }}
      >
        <div
          style={{ height: "150px", width: "300px", position: "absolute" }}
        ></div>
        <iframe
          src="https://www.google.com/maps/place/10%C2%B048'13.3%22N+106%C2%B038'33.4%22E/@10.8036924,106.6404279,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x24e40f5963c8cf63!8m2!3d10.8036924!4d106.6426166"
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
