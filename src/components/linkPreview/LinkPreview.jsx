import React, { useState } from "react";
import "./LinkPreview.scss";
import axios from "axios";
import { useEffect } from "react";

function LinkPreview(props) {
  const [valueLink, setValueLink] = useState("");
  const [storageValueLinks, setStorageValueLinks] = useState(
    JSON.parse(localStorage.getItem("valueLink"))
  );
  const localStorageValueLink = (values, value) => {
    if (values) {
      setStorageValueLinks([...values, value]);
      localStorage.setItem("valueLink", JSON.stringify([...values, value]));
    } else {
      setStorageValueLinks([value]);
      localStorage.setItem("valueLink", JSON.stringify([value]));
    }
  };

  const getApiLink = () => {
    var ApiLink = {
      method: "get",
      url: `https://jsonlink.io/api/extract?url=${props.url}`,
    };
    axios(ApiLink)
      .then(function (response) {
        setValueLink(response.data);
        localStorageValueLink(storageValueLinks, response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const ifGetApiLink = (storageValueLinks, url) => {
    if (storageValueLinks) {
      const findValueLinkInStoryLink = storageValueLinks.find(
        (storageValueLink) => storageValueLink.url === url
      );
      return findValueLinkInStoryLink;
    }
  };
  useEffect(() => {
    setValueLink("");
    if (ifGetApiLink(storageValueLinks, props.url)) {
      setValueLink(ifGetApiLink(storageValueLinks, props.url));
    } else {
      getApiLink();
    }
  }, [props.url]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      {props.size === "one" && (
        <div className="style-1">
          <div className="box-link-preview">
            <div className="text-link">
              <a href={valueLink?.url} target="blank">
                {valueLink?.url}
              </a>
            </div>
            <div className="card-link-img">
              <a href={valueLink?.url} target="blank">
                <img src={valueLink?.images} alt="" />
              </a>
            </div>
            <div className="card-content">
              <a href={valueLink?.url} target="blank">
                <div className="title">{valueLink?.title}</div>
              </a>
              <a href={valueLink?.url} target="blank">
                <div className="description">{valueLink?.description}</div>
              </a>
              <a href={valueLink?.url} target="blank">
                <div className="domain">{valueLink?.domain}</div>
              </a>
            </div>
          </div>
        </div>
      )}
      {props.size === "two" && (
        <div className="style-2">
          <div className="box-link-preview">
            <div className="text-link">
              <a href={valueLink?.url} target="blank">
                {valueLink?.url}
              </a>
            </div>
            <div style={{ display: "flex" }}>
              <div className="card-link-img">
                <a href={valueLink?.url} target="blank">
                  <img src={valueLink?.images} alt="" />
                </a>
              </div>
              <div className="card-content">
                <a href={valueLink?.url} target="blank">
                  <div className="title">{valueLink?.title}</div>
                </a>
                <a href={valueLink?.url} target="blank">
                  <div className="description">{valueLink?.description}</div>
                </a>
                <a href={valueLink?.url} target="blank">
                  <div className="domain">{valueLink?.domain}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.size === "three" && (
        <div className="style-3">
          <a href={valueLink?.url} target="blank">
            <div className="box-link-preview">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="card-link-img">
                  <img src={valueLink?.images} alt="" />
                </div>
                <div className="card-content">
                  <div className="title">{valueLink?.title}</div>
                  <div className="domain">{valueLink?.domain}</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      )}
      {props.size === "four" && (
        <div className="style-4">
          <div className="box-link-preview">
            <div className="text-link">
              <a href={valueLink?.url} target="blank">
                {valueLink?.url}
              </a>
            </div>
            <div style={{ display: "flex" }}>
              <div className="card-link-img">
                <a href={valueLink?.url} target="blank">
                  <img src={valueLink?.images} alt="" />
                </a>
              </div>
              <div className="card-content">
                <a href={valueLink?.url} target="blank">
                  <div className="title">{valueLink?.title}</div>
                </a>
                <a href={valueLink?.url} target="blank">
                  <div className="description">{valueLink?.description}</div>
                </a>
                <a href={valueLink?.url} target="blank">
                  <div className="domain">{valueLink?.domain}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LinkPreview;
