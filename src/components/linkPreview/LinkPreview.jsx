import React, { useState } from "react";
import "./LinkPreview.scss";
import axios from "axios";
import { useEffect } from "react";
import { CloseOutlined, ExportOutlined } from "@ant-design/icons";

function LinkPreview(props) {
  const makeMinutes = (value) => {
    if (-1 < value && value < 10) {
      return `0${value}`;
    } else {
      return value;
    }
  };
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
        console.log(props.url);
        localStorageValueLink(storageValueLinks, response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const ifGetApiLink = (storageValueLinks, url) => {
    if (storageValueLinks) {
      const findValueLinkInStoryLink = storageValueLinks.find(
        (storageValueLink) => storageValueLink.url.trim() === url.trim()
      );
      return findValueLinkInStoryLink;
    }
  };

  const handleClickDeleteLink = () => {
    props?.setValueDeleteLink(false);
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
              <div
                dangerouslySetInnerHTML={{
                  __html: props.textMessage,
                }}
              />
            </div>
            <div className="card-link-img">
              <a href={valueLink?.url} target="blank">
                <img
                  src={
                    valueLink?.images && valueLink?.images[0]
                      ? valueLink?.images[0]
                      : valueLink?.images
                  }
                  alt=""
                />
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
              <div
                dangerouslySetInnerHTML={{
                  __html: props.textMessage,
                }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <div className="card-link-img">
                <a href={valueLink?.url} target="blank">
                  <img
                    src={
                      valueLink?.images && valueLink?.images[0]
                        ? valueLink?.images[0]
                        : valueLink?.images
                    }
                    alt=""
                  />
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
                  <img
                    src={
                      valueLink?.images && valueLink?.images[0]
                        ? valueLink?.images[0]
                        : valueLink?.images
                    }
                    alt=""
                  />
                </div>
                <div className="card-content">
                  <div className="title">{valueLink?.title}</div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="domain">{valueLink?.domain} </div>
                    <div className="date">
                      {`${props.date}/${props.month + 1}/${props.year} ${
                        props.hours
                      }:${makeMinutes(props.minutes)}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      )}
      {props.size === "four" && (
        <div className="style-4">
          <div className="box-link-preview">
            <div style={{ display: "flex" }}>
              <div className="card-link-img">
                <img
                  src={
                    valueLink?.images && valueLink?.images[0]
                      ? valueLink?.images[0]
                      : valueLink?.images
                  }
                  alt=""
                />
              </div>
              <div className="card-content">
                <div className="title">{valueLink?.title}</div>
                <div className="description">{valueLink?.description}</div>
                <div className="domain">{valueLink?.domain}</div>
              </div>
            </div>
            <div className="delete" onClick={handleClickDeleteLink}>
              <CloseOutlined />
            </div>
          </div>
        </div>
      )}
      {props.size === "five" && (
        <div className="style-5">
          <div className="box-link-preview">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="card-link-img">
                <img
                  src={
                    valueLink?.images && valueLink?.images[0]
                      ? valueLink?.images[0]
                      : valueLink?.images
                  }
                  alt=""
                />
              </div>
              <div className="card-content">
                {props.type === "one" && (
                  <div className="title">
                    <ExportOutlined /> Trả lời
                  </div>
                )}
                {props.type === "two" && (
                  <div className="title">{props.name}</div>
                )}
                <div className="domain">{`[Link] ${valueLink?.domain}`}</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.size === "six" && (
        <div className="style-6">
          <div className="box-link-preview">
            <div className="border-right" />
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="card-link-img">
                <img
                  src={
                    valueLink?.images && valueLink?.images[0]
                      ? valueLink?.images[0]
                      : valueLink?.images
                  }
                  alt=""
                />
              </div>
              <div className="card-content">
                <div className="title">{props.name}</div>
                <div className="domain">{`[Link] ${valueLink?.domain}`}</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.size === "seven" && (
        <div className="style-7">
          <div className="box-link-preview">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="card-link-img">
                <img
                  src={
                    valueLink?.images && valueLink?.images[0]
                      ? valueLink?.images[0]
                      : valueLink?.images
                  }
                  alt=""
                />
              </div>
              <div className="card-content">
                <div className="title">{valueLink?.title}</div>
                <div className="domain">{valueLink?.domain}</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.size === "tickMessage" && (
        <div className="style-2">
          <div className="box-link-preview">
            <div className="text-link">
              <div
                dangerouslySetInnerHTML={{
                  __html: props.textMessage,
                }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <div className="card-link-img">
                <img
                  src={
                    valueLink?.images && valueLink?.images[0]
                      ? valueLink?.images[0]
                      : valueLink?.images
                  }
                  alt=""
                />
              </div>
              <div className="card-content">
                <div target="blank">
                  <div className="title">{valueLink?.title}</div>
                </div>
                <div target="blank">
                  <div className="description">{valueLink?.description}</div>
                </div>
                <div target="blank">
                  <div className="domain">{valueLink?.domain}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LinkPreview;
