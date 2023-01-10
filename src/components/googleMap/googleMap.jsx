import React from "react";
import "./googleMap.scss";

function GoogleMapTest(props) {
  return (
    <>
      {props.size === "one" && (
        <a
          href={`https://www.google.com/maps?q=${props.latitude},${props.longitude}&z=14&t=m&mapclient=embed`}
          target="blank"
          style={{
            cursor: "pointer",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "150px",
              width: "300px",
            }}
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
            src={`https://maps.google.com/maps?ll=${props.latitude},${props.longitude}&z=14&output=embed`}
            height="150"
            width="300"
            frameborder="0"
            title="Iframe Example"
          ></iframe>
        </a>
      )}
      {props.size === "tickMessage" && (
        <div
          style={{
            cursor: "pointer",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "125px",
              width: "250px",
            }}
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
            src={`https://maps.google.com/maps?ll=${props.latitude},${props.longitude}&z=14&output=embed`}
            height="125"
            width="250"
            frameborder="0"
            title="Iframe Example"
            style={{ borderRadius: "8px" }}
          ></iframe>
        </div>
      )}
    </>
  );
}

export default GoogleMapTest;
