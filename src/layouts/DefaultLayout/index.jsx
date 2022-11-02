import { Col, Input, Row, Tooltip, Popover, Spin } from "antd";
import {
  EllipsisOutlined,
  SmileOutlined,
  RadiusUpleftOutlined,
  ContactsOutlined,
  PaperClipOutlined,
  ClockCircleOutlined,
  ScheduleOutlined,
  FontColorsOutlined,
  ExclamationOutlined,
  DingtalkOutlined,
  CommentOutlined,
  FileImageOutlined,
  FileOutlined,
  FolderOutlined,
  CaretUpOutlined,
  ShareAltOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import React from "react";
import "./index.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// compoment
import ResponsiveInput from "../../components/responsiveInput/ResponsiveInput.jsx";
import ModalInformation from "../../components/modal/Modal.jsx";
import Nav1 from "./nav1/Nav1";
import Nav2 from "./nav2/Nav2";
import NavChatHead from "../../components/navChatHead/NavChatHead";
import RenderFile from "../../components/file/RenderFile";
import ImageOrVideo from "../../components/imageOrVideo/ImageOrVideo";
import ListGhim from "../../components/listGhim/ListGhim";
import Ghim from "../../components/listGhim/Ghim";
import Nav4 from "./nav4/Nav4";
import ModalShare from "../../components/modalShare/ModalShare";
import RightmouseChooseBoxChat from "../../components/rightmouseChooseBoxChat/RightmouseChooseBoxChat";
import ModalCreateGroup from "../../components/modalCreateGroup/ModalCreateGroup";
import IframeFile from "../../components/iframe_file/IframeFile";
import RightmouseResponsive from "../../components/rightmousResponsive/RightmouseResponsive";
import LikeIcon from "../../components/likeIcon/LikeIcon";
import ButtonScrollBottom from "../../components/buttonScrollEndBottom/ButtonScrollEndBottom";
import ModalAddMembersToGroup from "../../components/modalAddMembersToGroup/ModalAddMemberToGroup";
import LinkPreview from "../../components/linkPreview/LinkPreview";
import ModalUpdateInformation from "../../components/modalUpdateInformation/ModalUpdateInformation";
import TabTitle from "../../pages/TapTitle";
import ModalChangeName from "../../components/modalChangeName/ModalChangeName";
import RightmouseMember from "../../components/rightmouseMember/RightmouseMember";
//
import AvatarAnLe from "../../assets/images/AvatarAnLe.jpg";
import AvatarTN from "../../assets/images/AvatarTN.jpg";
import AvatarAnhHoai from "../../assets/images/AvatarAnhHoai.jpg";
import AvatarCTO from "../../assets/images/AvatarCTO.jpg";
import SuperShipLogo from "../../assets/images/SuperShipLogo.png";
import AvatarAn from "../../assets/images/AvatarAn.jpg";
import MicrosoftWord from "../../assets/images/MicrosoftWord.png";
import MicrosoftExcel from "../../assets/images/MicrosoftExcel.png";
import ImagePDF from "../../assets/images/ImagePDF.png";
import ImageZIP from "../../assets/images/ImageZIP.png";
import ImageVideo from "../../assets/images/Video.png";
import { useState } from "react";
import OrderInfo from "../../components/ordersInfo/OrdersInfo";

const { TextArea } = Input;
function DefaultLayout({ children }) {
  TabTitle("Chat");
  var navigate = useNavigate();
  const refreshPage = () => {
    const getLocalUsername = JSON.parse(localStorage.getItem("dzzshasddf"));
    if (getLocalUsername === "zndkeadeeqwrmf") {
      navigate("/chat");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    refreshPage();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [focusInput, SetFocusInput] = useState("");
  const [hiddenRightNav, setHiddenRightNav] = useState("hiddenRightNav");
  const [urlFile, setUrlFile] = useState("");
  const [valueFile, setValueFile] = useState("");
  const [valueChats, setValueChats] = useState("");
  const [valueChat, setValueChat] = useState(``);
  const [dataUserFriendsReaded, setDataUserFriendsReaded] = useState("");
  const [dataUserFriends, setDataUserFriends] = useState("");
  const [dataUserFriend, setDataUserFriend] = useState("");
  const [valueListGhim, setValueListGhim] = useState("");
  const [lengthGhim, setLengthGhim] = useState("");
  const [ResponsiveInputValue, setResponsiveInputValue] = useState("");
  const [valueRightClickMessage, setValueRightClickMessage] = useState("");
  const [modalInformation, setModalInformation] = useState(false);
  const [dataModalInformation, setDataModalInformation] = useState({});
  const [modalCreateGroup, setModalCreateGroup] = useState(false);
  const [
    dataUserFriendsApiAddMembersToGroup,
    setDataUserFriendsApiAddMembersToGroup,
  ] = useState([]);
  const [modalUpdateInformation, setModalUpdateInformation] = useState(false);
  const [valueDeleteLink, setValueDeleteLink] = useState(true);
  const [modalChangeName, setModalChangeName] = useState(false);
  const [focusBoxSearch, setFocusBoxSearch] = useState("");
  const d = new Date();
  const date = {
    year: d.getFullYear(),
    month: d.getMonth(),
    date: d.getDate(),
    hours: d.getHours(),
    minutes: d.getMinutes(),
  };

  const dataUserMeDemo = {
    phone_number: "0898999907",
    gender: "Nam",
    id_user: "0898999907",
    name: "Thanh Ân",
    cover_photo: AvatarTN,
    avatar: AvatarAnLe,
    status: "Vừa truy cập",
    birthday: "23 / 10 / 2025",
    notification_system: false,
    other_people: false,
  };

  const getDataUserMe = () => {
    const valueDataUserMe = JSON.parse(localStorage.getItem("dataUserMe"));
    if (valueDataUserMe) {
      return valueDataUserMe;
    } else {
      return dataUserMeDemo;
    }
  };
  const [dataUserMe, setDataUserMe] = useState(getDataUserMe());

  const id = `${new Date().valueOf()}${Math.floor(
    Math.random() * 1000000000000
  )}`;
  const createDateBoxChat = () => {
    if (valueChats) {
      const valueTimeLast = valueChats.find(
        (valueChat) => valueChat.create_date === true
      );
      if (valueTimeLast) {
        return (
          date.year - valueTimeLast?.year >= 1 ||
          date.month - valueTimeLast?.month >= 1 ||
          date.date - valueTimeLast?.date >= 1 ||
          date.hours - valueTimeLast?.hours >= 2
        );
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  const linkify = (text) => {
    var urlRegex =
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi; //eslint-disable-line
    return text.replace(urlRegex, function (url) {
      return '<a href="' + url + '" target="_blank">' + url + "</a>";
    });
  };

  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString.trim());
  };

  // const isCreateHoursMinutes = (valueWantCreate, valueChats) => {
  //   const valueLastTimeMe = valueChats.find(
  //     (valueChat) => valueChat.other_people !== true
  //   );
  //   if (valueLastTimeMe) {
  //     if (valueWantCreate.hours - valueLastTimeMe?.minutes >= 2) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   } else {
  //     return true;
  //   }
  // };

  const handleClickNavRight = (e) => {
    if (hiddenRightNav) {
      setHiddenRightNav("");
    } else {
      setHiddenRightNav("hiddenRightNav");
    }
    if (window.innerWidth < 993) {
      e.stopPropagation();
    }
  };

  const isOrderInfo = (value) => {
    return value.trim().includes("SGNS");
  };

  // demochatlocal

  const dataUserFriendsApi = [
    {
      phone_number: "123456789",
      id_user: "123456789",
      name: "SuperShip Thông Báo",
      notification: false,
      cover_photo: AvatarTN,
      avatar: SuperShipLogo,
      status: "Vừa truy cập",
      birthday: "22 / 11 / 2022",
      gender: "Nữ",
      pin_conversation: false,
      notification_system: true,
    },
    {
      phone_number: "0898999999",
      id_user: "2",
      name: "SuperShip",
      notification: false,
      cover_photo: AvatarTN,
      avatar: SuperShipLogo,
      status: "Vừa truy cập",
      birthday: "22 / 11 / 2022",
      gender: "Nữ",
      pin_conversation: false,
      notification_system: false,
    },
    {
      phone_number: "0898888888",
      id_user: "3",
      notification: false,
      name: "Lê Thanh Hoài",
      cover_photo: AvatarTN,
      avatar: AvatarAnhHoai,
      not_read: false,
      status: "Vừa truy Cập",
      birthday: "21 / 11 / 2011",
      gender: "Nam",
      pin_conversation: false,
      notification_system: false,
    },
    {
      phone_number: "0998889999",
      id_user: "4",
      name: "Nguyễn Trọng Tài",
      notification: false,
      cover_photo: AvatarTN,
      avatar: AvatarCTO,
      status: "Vừa truy Cập",
      birthday: "01 / 02 / 2012",
      gender: "Nam",
      pin_conversation: false,
      notification_system: false,
    },
    {
      phone_number: "0998889999",
      id_user: "5",
      name: "Kho hàng",
      notification: false,
      cover_photo: AvatarTN,
      avatar: AvatarAn,
      status: "Vừa truy Cập",
      birthday: "01 / 02 / 2012",
      gender: "Nam",
      pin_conversation: false,
      notification_system: false,
    },
    {
      phone_number: "0998889999",
      id_user: "6",
      name: "SuperShipVN",
      notification: false,
      cover_photo: AvatarTN,
      avatar: AvatarTN,
      status: "Vừa truy Cập",
      birthday: "01 / 02 / 2012",
      gender: "Nam",
      pin_conversation: false,
      notification_system: false,
    },
  ];

  const setDataUserFriendsStorageAll = (value) => {
    setDataUserFriendsStorage(value);
    localStorage.setItem("dataUserFriendsStorage", JSON.stringify(value));
  };
  const getDataUserFriendsStorage = () => {
    const dataUserFriendsStorage = JSON.parse(
      localStorage.getItem("dataUserFriendsStorage")
    );
    if (dataUserFriendsStorage) {
      return dataUserFriendsStorage;
    } else {
      return dataUserFriendsApi;
    }
  };

  const [dataUserFriendsStorage, setDataUserFriendsStorage] = useState(
    getDataUserFriendsStorage()
  );

  const valueChatDemo = [
    {
      id_user: "123456789",
      recipients: { id_user: "123456789" },
      ...dataUserFriendsApi[0],
      other_people: true,
      ghim: false,
      is_message_url: isValidUrl(
        "https://mysupership.vn/register?referral=SPSHOMEPAGE"
      ),
      message_url: "https://mysupership.vn/register?referral=SPSHOMEPAGE",
      id: id,
      Responsive: ResponsiveInputValue,
      text_message: linkify(
        "https://mysupership.vn/register?referral=SPSHOMEPAGE"
      ),
      ...date,
      create_date: createDateBoxChat(),
    },
    {
      id_user: "123456789",
      recipients: { id_user: "123456789" },
      ...dataUserFriendsApi[0],
      other_people: true,
      ghim: false,
      is_message_url: isValidUrl(
        "https://mysupership.vn/register?referral=SPSHOMEPAGE"
      ),
      message_url: "https://mysupership.vn/register?referral=SPSHOMEPAGE",
      id: id,
      Responsive: ResponsiveInputValue,
      text_message: linkify(
        "https://mysupership.vn/register?referral=SPSHOMEPAGE"
      ),

      ...date,
      create_date: createDateBoxChat(),
    },
    {
      id_user: "123456789",
      recipients: { id_user: "123456789" },
      id: 3213213213213238,
      ...dataUserFriendsApi[0],
      other_people: true,
      date: 24,
      hours: 13,
      minutes: 39,
      month: 8,
      year: 2022,
      ghim: false,
      file: {
        url: "https://mysupership.com/custom/file/SuperShip_01_10_2022_Mau_Xac_Nhan_Don_Hang_Chuyen_Ngoai.xlsx&utm_source=zalo&utm_medium=zalo&utm_campaign=zalo",
        name: "Ghim hội thoại.xlsx",
        size: 1755705,
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
      name: "Ghim hội thoại.xlsx",
    },
    {
      id_user: "123456789",
      recipients: { id_user: "123456789" },
      id: 3213213213213233213,
      ...dataUserFriendsApi[0],
      other_people: true,
      date: 24,
      hours: 13,
      minutes: 39,
      month: 8,
      year: 2022,
      ghim: false,
      file: {
        url: "https://mdl.supership.net/CT01%20To%CC%9B%CC%80%20khai%20thay%20%C4%91o%CC%82%CC%89i%20tho%CC%82ng%20tin%20cu%CC%9B%20tru%CC%81.doc&utm_source=zalo&utm_medium=zalo&utm_campaign=zalo",
        name: "SuperShip.docx",
        size: 23326,
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      },
      name: "HTML.docx",
    },
    {
      id_user: "123456789",
      recipients: { id_user: "123456789" },
      ...dataUserFriendsApi[0],
      notification_system: true,
      id: 321321321321323321,
      ...dataUserFriendsApi[0],
      other_people: true,
      date: 24,
      hours: 13,
      minutes: 39,
      month: 8,
      year: 2022,
      ghim: false,
      file: {
        url: "https://mdl.supership.net/strgs/files/SuperShip%20-%20CHI%CC%81NH%20SA%CC%81CH%20BO%CC%82%CC%80I%20HOA%CC%80N.pdf?ref=MySuperShip&embedded=true&hl=vi&retry=0&utm_source=zalo&utm_medium=zalo&utm_campaign=zalo",
        name: "HTML.pdf",
        size: 420495,
        type: "application/pdf",
      },
      name: "HTML.pdf",
    },
    {
      id_user: "123456789",
      recipients: { id_user: "123456789" },
      notification_system: true,
      id: 32132147332396546,
      ...dataUserFriendsApi[0],
      date: 24,
      other_people: true,
      create_date: true,
      hours: 13,
      minutes: 39,
      month: 8,
      year: 2022,
      url: ImagePDF,
      type: "image",
      ghim: false,
    },
    {
      id_user: "123456789",
      recipients: { id_user: "123456789" },
      notification_system: true,
      id: 32132143333654211321,
      ...dataUserFriendsApi[0],
      date: 24,
      other_people: true,
      hours: 13,
      minutes: 39,
      month: 8,
      year: 2022,
      url: MicrosoftExcel,
      type: "image",
      ghim: false,
    },
    {
      id_user: "123456789",
      recipients: { id_user: "123456789" },
      notification_system: true,
      id: 3213213213132131,
      ...dataUserFriendsApi[0],
      text_message: linkify(
        "https://www.w3schools.com/jsref/met_storage_setitem.asp"
      ),
      date: 24,
      hours: 13,
      minutes: 39,
      month: 8,
      year: 2022,
      ghim: false,
      other_people: true,
    },
    {
      id_user: "123456789",
      recipients: { id_user: "123456789" },
      notification_system: true,
      id: 3234243546546565,
      text_message: linkify(
        "https://www.w3schools.com/jsref/met_storage_setitem.asp"
      ),
      ...dataUserFriendsApi[0],
      other_people: true,
      date: 24,
      hours: 13,
      minutes: 39,
      month: 8,
      year: 2022,
      ghim: false,
    },
    {
      id_user: "123456789",
      recipients: { id_user: "123456789" },
      notification_system: true,
      id: 321321653784387,
      ...dataUserFriendsApi[0],
      other_people: true,
      date: 24,
      hours: 13,
      minutes: 39,
      month: 8,
      year: 2022,
      url: SuperShipLogo,
      type: "image",
      ghim: false,
    },
    {
      id_user: "123456789",
      recipients: { id_user: "123456789" },
      notification_system: true,
      id: 321321434321321,
      ...dataUserFriendsApi[0],
      date: 24,
      other_people: true,
      hours: 13,
      minutes: 39,
      month: 8,
      year: 2022,
      url: AvatarAn,
      type: "image",
      ghim: false,
    },
    {
      id_user: "123456789",
      recipients: { id_user: "123456789" },
      ...dataUserFriendsApi[0],
      id: 3213213132131,
      text_message: "Tin nhắn text",
      date: 24,
      hours: 13,
      minutes: 39,
      month: 8,
      year: 2022,
      ghim: false,
      other_people: true,
    },
    {
      id_user: "123456789",
      recipients: { id_user: "123456789" },
      ...dataUserFriendsApi[0],
      notification_system: true,
      id: 323426546565,
      text_message: linkify(
        "Find me at http://www.example.com and also at http://stackoverflow.com"
      ),
      other_people: true,
      date: 24,
      hours: 13,
      minutes: 39,
      month: 8,
      year: 2022,
      ghim: false,
    },
  ];

  useEffect(() => {
    localStorage.setItem("123456789", JSON.stringify(valueChatDemo));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onChangeChat = (e) => {
    setValueChat(e.target.value);
  };

  const enterChat = () => {
    if (valueChat.trim() !== "" && valueChat !== null) {
      render(valueChat);
      const element = document.querySelector(".box-nav-3 .box-chat");
      element.scrollTo(0, 0);
      document.querySelector(".button-scroll-bottom").classList.add("hidden");
      setFocusBoxSearch(false);
    }
    const elements = document.querySelectorAll(
      ".box-content-all-chat .content-chat"
    );
    if (elements) {
      elements.forEach((element) => {
        console.log(element.clientHeight);
      });
    }
  };

  const [spinLoadingApiBoxChat, setSpinLoadingApiBoxChat] = useState(false);

  const elementGetLoadScroll = document.querySelector(".box-nav-3 .box-chat");
  if (elementGetLoadScroll) {
    elementGetLoadScroll.addEventListener("scroll", () => {
      const scrollBottom =
        elementGetLoadScroll.scrollHeight -
        elementGetLoadScroll.clientHeight +
        elementGetLoadScroll.scrollTop;
      if (scrollBottom < 50) {
        setSpinLoadingApiBoxChat(true);
      } else {
        setSpinLoadingApiBoxChat(false);
      }
    });
  }

  const deleteMessage = (value) => {
    const newValueChats = valueChats.map((valueChat) => {
      if (valueChat.id === value.id) {
        return { ...valueChat, delete: true };
      } else {
        return valueChat;
      }
    });
    console.log(newValueChats);
    setValueChats(newValueChats);
    const newDataUserFriends = dataUserFriends.map((dataUserFriend) => {
      if (dataUserFriend.id_user === newValueChats[0].recipients.id_user) {
        console.log(1);
        return { ...dataUserFriend, last_value_chat: newValueChats[0] };
      } else {
        return dataUserFriend;
      }
    });
    console.log(newDataUserFriends);
    setDataUserFriendsAll(newDataUserFriends);
    localStorage.setItem(dataUserFriend.id_user, JSON.stringify(newValueChats));
  };

  const setValueChatsInRenderAllMessage = (newValueChat) => {
    if (valueChats) {
      const newValueChats = [newValueChat, ...valueChats];
      localStorage.setItem(
        newValueChat.recipients.id_user,
        JSON.stringify(newValueChats)
      );
      setValueChats(newValueChats);
      setValueChat("");
      setResponsiveInputValue("");
      console.log(newValueChats);
    } else {
      const newValueChats = [newValueChat];
      localStorage.setItem(
        newValueChat.recipients.id_user,
        JSON.stringify(newValueChats)
      );
      setValueChats(newValueChats);
      setValueChat("");
      setResponsiveInputValue("");
      console.log(newValueChats);
    }
  };

  const render = (valueChatReplace) => {
    const newValueChat = {
      ...dataUserMe,
      recipients: { ...dataUserFriend, recipients: "", last_value_chat: "" },
      other_people: false,
      ghim: false,
      is_message_url: isValidUrl(valueChatReplace) && valueDeleteLink,
      message_url: valueChatReplace,
      is_orders_info: isOrderInfo(valueChatReplace),
      id: id,
      Responsive: ResponsiveInputValue,
      text_message: linkify(valueChatReplace),
      ...date,
      create_date: createDateBoxChat(),
    };
    setValueChatsInRenderAllMessage(newValueChat);
  };

  const onChangeImage = (e) => {
    const newValueChat = {
      ...dataUserMe,
      recipients: { ...dataUserFriend, recipients: "", last_value_chat: "" },
      id: id,
      type: e.target.files[0].type?.slice(0, 5),
      url: URL.createObjectURL(e.target.files[0]),
      content: e.target.files[0].name,
      other_people: false,
      create_date: createDateBoxChat(),
      ...date,
    };
    setValueChatsInRenderAllMessage(newValueChat);
  };

  const onChangeFile = (e) => {
    const newValueChat = {
      ...dataUserMe,
      recipients: { ...dataUserFriend, recipients: "", last_value_chat: "" },
      id: id,
      file: {
        name: e.target.files[0].name,
        size: e.target.files[0].size,
        type: e.target.files[0].type,
        url_file: URL.createObjectURL(e.target.files[0]),
        file: e.target.files[0],
      },
      content: e.target.files[0].name,
      other_people: false,
      create_date: createDateBoxChat(),
      ...date,
    };
    setValueChatsInRenderAllMessage(newValueChat);
    localStorage.setItem("testfile", JSON.stringify(e.target.files[0]));
  };

  const handleClickLikeIcon = () => {
    const newValueChat = {
      ...dataUserMe,
      recipients: { ...dataUserFriend, recipients: "", last_value_chat: "" },
      id: id,
      other_people: false,
      content: "👍",
      type: "likeIcon",
      create_date: createDateBoxChat(),
      ...date,
    };
    setValueChatsInRenderAllMessage(newValueChat);
  };

  const content = (
    <div
      style={{
        position: "absolute",
        borderRadius: "4px",
        width: "210px",
        height: "82px",
        padding: "8px",
        backgroundColor: "var(--WA100)",
        left: "0px",
        top: "-225%",
      }}
    >
      <div
        className="chooseFile"
        onClick={() => {
          const uploadFile = document.querySelector(".uploadFile");
          uploadFile.click();
        }}
      >
        <FileOutlined style={{ marginRight: "5px" }} />
        Chọn File
        <input
          className="uploadFile"
          type="file"
          onChange={(e) => onChangeFile(e)}
          style={{
            display: "none",
          }}
        />
      </div>
      <div className="chooseFolder">
        <FolderOutlined style={{ marginRight: "5px" }} /> Chọn thư mục
      </div>
    </div>
  );

  const handleClickIcon = (e) => {
    setValueChat(`${valueChat} ${e}`);
    document.querySelector(".input-chat .ant-input").focus();
  };

  const iconRender = [
    "😘",
    "🙂",
    "😀",
    "😄",
    "😆",
    "😅",
    "😂",
    "🤣",
    "😊",
    "😌",
    "😉",
    "😏",
    "😍",
    "😘",
    "😗",
    "😙",
    "😚",
    "🤗",
    "😳",
    "🙃",
    "😇",
    "😈",
    "😛",
    "😝",
    "😜",
    "😋",
    "🤤",
    "🤓",
    "😎",
    "🤑",
    "😒",
    "🙁",
    "😞",
    "😔",
    "😖",
    "😓",
    "😢",
    "😢",
    "😭",
    "😟",
    "😣",
    "😩",
    "😫",
    "😕",
    "🤔",
    "🙄",
    "😤",
    "😠",
    "😡",
    "🤐",
    "😯",
    "😲",
    "😧",
    "😨",
    "😱",
    "😴",
    "👍",
    "👎",
    "✌️",
    "👌",
    "👋",
    "❤️",
    "💛",
    "💚",
    "💙",
    "💜",
    "🖤",
    "💖",
    "💝",
    "💔",
    "❣️",
    "💕",
  ];

  const contentIcon = (
    <div className="box-choose-icon">
      {iconRender.map((value, key) => {
        return (
          <div
            className="choose-icon"
            key={key}
            style={{ fontSize: "22px" }}
            onClick={() => handleClickIcon(value)}
          >
            {value}
          </div>
        );
      })}
    </div>
  );

  // demo

  // Ghim

  const handleClickGhim = (valueGhim) => {
    const newValueChats = valueChats.map((value) => {
      if (value.id === valueGhim.id) {
        return { ...value, ghim: true };
      } else {
        return value;
      }
    });
    setValueChats(newValueChats);
    localStorage.setItem(dataUserFriend.id_user, JSON.stringify(newValueChats));
    setValueListGhim(
      newValueChats.filter((value) => {
        return value.ghim === true;
      })
    );
    setLengthGhim(
      newValueChats.filter((value) => {
        return value.ghim === true;
      }).length
    );
  };

  const handleClickUnGhim = (valueGhim) => {
    const newValueChats = valueChats.map((value) => {
      if (value.id === valueGhim.id) {
        return { ...value, ghim: false };
      } else {
        return value;
      }
    });
    setValueChats(newValueChats);
    localStorage.setItem(dataUserFriend.id_user, JSON.stringify(newValueChats));
    setValueListGhim(
      newValueChats.filter((value) => {
        return value.ghim === true;
      })
    );
    const newLenghtGhim = newValueChats.filter((value) => {
      return value.ghim === true;
    }).length;

    setLengthGhim(newLenghtGhim);
    if (newLenghtGhim === 1) {
      document.querySelector(".box-ghim-1").style.display = "block";
    }
  };

  // Ghim

  const getDataUserFriends = () => {
    if (JSON.parse(localStorage.getItem("dataUserFriends"))) {
      const getDataUserFriends = JSON.parse(
        localStorage.getItem("dataUserFriends")
      );
      setDataUserFriends(getDataUserFriends);
      setDataUserFriend(getDataUserFriends[0]);
    } else {
      setDataUserFriends(dataUserFriendsApi);
      setDataUserFriend(dataUserFriendsApi[0]);
    }
  };

  useEffect(() => {
    getDataUserFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const setDataUserFriendsAll = (newDataUserFriends) => {
    setDataUserFriends(newDataUserFriends);
    localStorage.setItem("dataUserFriends", JSON.stringify(newDataUserFriends));
  };
  useEffect(() => {
    if (dataUserFriends && valueChats) {
      const dataUserFriendInList = dataUserFriends.find(
        (dataUserFriendInList) =>
          dataUserFriendInList.id_user === dataUserFriend?.id_user
      );
      console.log(dataUserFriendInList);
      if (
        valueChats[0]?.recipients?.id_user === dataUserFriend?.id_user &&
        valueChats[0]?.id !== dataUserFriend?.last_value_chat?.id &&
        dataUserFriendInList
      ) {
        const newDataUserFriends = dataUserFriends;
        const newDataUserFriend = {
          ...dataUserFriend,
          not_read: false,
          last_value_chat: valueChats[0],
        };
        const dataUserFriendIndex = newDataUserFriends.findIndex(
          (newDataUserFriend) =>
            newDataUserFriend?.id_user === dataUserFriend?.id_user
        );
        newDataUserFriends.splice(dataUserFriendIndex, 1);
        setDataUserFriendsAll([newDataUserFriend, ...newDataUserFriends]);
        console.log(newDataUserFriends);
      }
      if (
        valueChats[0]?.recipients?.id_user === dataUserFriend?.id_user &&
        valueChats[0]?.id !== dataUserFriend?.last_value_chat?.id &&
        !dataUserFriendInList
      ) {
        const newDataUserFriends = dataUserFriends;
        const newDataUserFriend = {
          ...dataUserFriend,
          not_read: false,
          last_value_chat: valueChats[0],
        };
        const dataUserFriendIndex = newDataUserFriends.findIndex(
          (newDataUserFriend) =>
            newDataUserFriend?.id_user === dataModalInformation?.id_user
        );
        console.log(dataUserFriendInList);
        console.log(dataUserFriendIndex);
        if (dataUserFriendIndex !== -1 && dataUserFriendIndex) {
          newDataUserFriends.splice(dataUserFriendIndex, 1);
        }
        setDataUserFriendsAll([newDataUserFriend, ...newDataUserFriends]);
        console.log(newDataUserFriends);
      }
      console.log(dataUserFriends);
    }

    setValueDeleteLink(true);
  }, [valueChats]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    dataUserFriends &&
      dataUserFriends.forEach((value) => {
        if (document.querySelector(`.box-choose-chatbox-${value.id_user}`)) {
          document.querySelector(
            `.box-choose-chatbox-${value.id_user}`
          ).style.backgroundColor = "transparent";
        }
      });
    if (
      document.querySelector(`.box-choose-chatbox-${dataUserFriend?.id_user}`)
    ) {
      document.querySelector(
        `.box-choose-chatbox-${dataUserFriend?.id_user}`
      ).style.backgroundColor = "#eeeff2";
    }
    getValueChats(dataUserFriend);
    setResponsiveInputValue("");
    setSpinLoadingApiBoxChat(false);
    console.log(spinLoadingApiBoxChat);
  }, [dataUserFriend]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClickChooseBoxChat = (value) => {
    const hiddenBoxNav2 = document.querySelector(".box-nav-2");
    hiddenBoxNav2.classList.add("hiddenBoxNav2");
    const hiddenBoxNav1 = document.querySelector(".box-nav-1");
    hiddenBoxNav1.classList.add("hiddenBoxNav1");
    if (document.querySelector(".box-ghim-1")) {
      document.querySelector(".box-ghim-1").style.display = "block";
    }
    if (document.querySelector(".box-ghim-2")) {
      document.querySelector(".box-ghim-2").style.display = "none";
    }
    setDataUserFriend(value);
    const newDataUserFriends = dataUserFriends.map((valueN) => {
      if (valueN.id_user === value.id_user) {
        return { ...valueN, not_read: false };
      } else {
        return valueN;
      }
    });
    setDataUserFriendsAll(newDataUserFriends);
  };

  const getValueChats = (value) => {
    const getValueChats = JSON.parse(localStorage.getItem(value?.id_user));
    setValueChats(getValueChats);
    getValueChats &&
      setValueListGhim(
        getValueChats?.filter((value) => {
          return value?.ghim === true;
        })
      );
    getValueChats &&
      setLengthGhim(
        getValueChats?.filter((value) => {
          return value.ghim === true;
        }).length
      );
  };

  const onMounseOverBox = (key) => {
    document.querySelector(`.share-response-${key}`).style.display = "flex";
  };

  const onMouseOutBox = (key) => {
    document.querySelector(`.share-response-${key}`).style.display = "none";
  };

  const bytesToSize = (bytes) => {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "n/a";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) return `${bytes} ${sizes[i]})`;
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
  };

  const renderImageFile = (value) => {
    if (value?.split(".").pop()) {
      switch (value?.split(".").pop()) {
        case "xlsx":
          return MicrosoftExcel;
        case "docx":
          return MicrosoftWord;
        case "pdf":
          return ImagePDF;
        case "zip":
          return ImageZIP;
        case "mp4":
          return ImageVideo;
        case "avi":
          return ImageVideo;
        case "mov":
          return ImageVideo;
        case "flv":
          return ImageVideo;
        case "wmv":
          return ImageVideo;
        default:
          return AvatarAn;
      }
    }
  };

  const handleClickAllTitle = () => {
    document
      .querySelector("#wrapper .box-nav-2 .title-nav-2 .all")
      .classList.add("selected");
    document
      .querySelector("#wrapper .box-nav-2 .title-nav-2 .not-read")
      .classList.remove("selected");
    dataUserFriends.forEach((dataUserFriend) => {
      document.querySelector(
        `.box-choose-chatbox-${dataUserFriend.id_user}`
      ).style.display = "flex";
    });
  };

  useEffect(() => {
    if (
      document.querySelector(
        "#wrapper .box-nav-2 .title-nav-2 .not-read.selected"
      )
    ) {
      dataUserFriends &&
        dataUserFriends.forEach((dataUserFriends) => {
          document.querySelector(
            `.box-choose-chatbox-${dataUserFriends.id_user}`
          ).style.display = "flex";
        });
      dataUserFriendsReaded &&
        dataUserFriendsReaded.forEach((dataUserFriendReaded) => {
          document.querySelector(
            `.box-choose-chatbox-${dataUserFriendReaded?.id_user}`
          ).style.display = "none";
        });
    }
  }, [dataUserFriends]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClickNotReadTitle = () => {
    document
      .querySelector("#wrapper .box-nav-2 .title-nav-2 .all")
      .classList.remove("selected");
    document
      .querySelector("#wrapper .box-nav-2 .title-nav-2 .not-read")
      .classList.add("selected");
    const newDataUserFriends = dataUserFriends.filter(
      (dataUserFriend) => dataUserFriend.not_read !== true
    );
    setDataUserFriendsReaded(newDataUserFriends);
    newDataUserFriends.forEach((dataUserFriendReaded) => {
      document.querySelector(
        `.box-choose-chatbox-${dataUserFriendReaded.id_user}`
      ).style.display = "none";
    });
  };

  const handleClickResponsiveIcon = (value) => {
    setResponsiveInputValue(value);
    document.querySelector(".input-chat .ant-input").focus();
  };

  const clearResponsiveTnputValue = () => {
    setResponsiveInputValue("");
    document.querySelector(".input-chat .ant-input").focus();
  };

  useEffect(() => {
    dataUserFriends &&
      dataUserFriends.forEach((value) => {
        if (document.querySelector(`.box-choose-chatbox-${value.id_user}`)) {
          document.querySelector(
            `.box-choose-chatbox-${value.id_user}`
          ).style.backgroundColor = "transparent";
        }
      });
    if (
      document.querySelector(`.box-choose-chatbox-${dataUserFriend?.id_user}`)
    ) {
      document.querySelector(
        `.box-choose-chatbox-${dataUserFriend?.id_user}`
      ).style.backgroundColor = "#eeeff2";
    }
  }, [dataUserFriends]); // eslint-disable-line react-hooks/exhaustive-deps

  // Modal

  const handleCancelModalInformation = () => {
    setModalInformation(false);
  };
  const handleClickImgChat = (value) => {
    setModalInformation(true);
    setDataModalInformation(value);
  };

  const [modalShare, setModalShare] = useState(false);
  const handleCancelModalShare = () => {
    setModalShare(false);
  };
  const handleClickShare = (value) => {
    setModalShare(true);
    setValueRightClickMessage(value);
  };

  const createListAddMembersToGroup = () => {
    let listAddMenbersToGroup = dataUserFriendsApi;
    dataUserFriend.members.forEach((memberDelete) => {
      const indexObjectDelete = listAddMenbersToGroup.findIndex(
        (member) => memberDelete.id_user === member.id_user
      );
      if (indexObjectDelete !== -1) {
        listAddMenbersToGroup.splice(indexObjectDelete, 1);
      }
    });
    setDataUserFriendsApiAddMembersToGroup(listAddMenbersToGroup);
  };
  const handleCancelModalCreateGroup = () => {
    setModalCreateGroup(false);
  };
  const handleClickCreateGroup = () => {
    setModalCreateGroup(true);
  };
  const [modalAddMembersToGroup, setModalAddMembersToGroup] = useState(false);
  const handleCancelModalAddMembersToGroup = () => {
    setModalAddMembersToGroup(false);
  };
  const handleClickAddMembersToGroup = () => {
    setModalAddMembersToGroup(true);
    createListAddMembersToGroup();
  };

  // Modal

  // Right nav bar media 992px

  window.addEventListener("click", () => {
    if (window.innerWidth < 993) {
      setHiddenRightNav("hiddenRightNav");
    }
  });

  if (document.querySelector(".box-nav-4") && window.innerWidth < 993) {
    document.querySelector(".box-nav-4").addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
  // Right nav bar media 992px

  // right mouse and forcus input

  window.addEventListener("click", () => {
    if (document.querySelector(".right-mouse-share-responsive ")) {
      document.querySelector(".right-mouse-share-responsive ").style.display =
        "none";
    }
    if (document.querySelector(".rightmouse-choose-box-chat ")) {
      document.querySelector(".rightmouse-choose-box-chat ").style.display =
        "none";
    }
    if (document.querySelector(".rightmouse-member ")) {
      document.querySelector(".rightmouse-member ").style.display = "none";
    }
  });

  window.addEventListener("wheel", () => {
    if (document.querySelector(".right-mouse-share-responsive ")) {
      document.querySelector(".right-mouse-share-responsive ").style.display =
        "none";
    }
    if (document.querySelector(".rightmouse-choose-box-chat ")) {
      document.querySelector(".rightmouse-choose-box-chat ").style.display =
        "none";
    }
    if (document.querySelector(".rightmouse-member ")) {
      document.querySelector(".rightmouse-member ").style.display = "none";
    }
  });

  window.addEventListener("contextmenu", () => {
    if (document.querySelector(".right-mouse-share-responsive ")) {
      document.querySelector(".right-mouse-share-responsive ").style.display =
        "none";
    }
    if (document.querySelector(".rightmouse-choose-box-chat ")) {
      document.querySelector(".rightmouse-choose-box-chat ").style.display =
        "none";
    }
    if (document.querySelector(".rightmouse-member")) {
      document.querySelector(".rightmouse-member").style.display = "none";
    }
  });

  let control = false;

  if (document.querySelector(".input-chat .ant-input")) {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Control") {
        control = true;
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.key === "Control") {
        control = false;
      }
    });

    document.addEventListener("keydown", () => {
      if (!control && document.querySelector(".input-chat .ant-input")) {
        document.querySelector(".input-chat .ant-input").focus();
      }
    });
  }

  if (document.getElementsByClassName("InPutSearch")) {
    const arrayEvent = document.getElementsByClassName("InPutSearch");
    const length = arrayEvent.length;
    for (let i = 0; i < length; i++) {
      arrayEvent[i].addEventListener("keydown", (e) => {
        e.stopPropagation();
      });
    }
  }

  // right mouse and forcus input

  // contextMenu Click Right mouse

  const handleOnContextMenu = (e, value) => {
    console.log(1);
    let leftPos = "";
    let topPos = "";
    if (!document.querySelector(".ant-image-preview-mask")) {
      console.log(1);
      e.preventDefault();
      const menu = document.querySelector(".right-mouse-share-responsive");
      if (180 < window.innerWidth - e.clientX) {
        leftPos = `${e.clientX - 10}px`;
      } else {
        leftPos = `${e.pageX - 180}px`;
      }
      if (250 < window.innerHeight - e.clientY) {
        topPos = `${e.clientY - 10}px`;
      } else {
        topPos = `${e.pageY - 114}px`;
      }
      console.log(1);
      menu.style.display = "block";
      menu.style.top = topPos;
      menu.style.left = leftPos;
      setValueRightClickMessage(value);
      e.stopPropagation();
    }
    console.log(1);
  };

  // onContextMenuChooseBoxChat
  const [valueRightClickChooseBoxChat, setValueRightClickChooseBoxChat] =
    useState("");
  const onContextMenuChooseBoxChat = (e, value) => {
    let leftPos = "";
    let topPos = "";
    e.preventDefault();
    const menu = document.querySelector(".rightmouse-choose-box-chat");
    if (180 < window.innerWidth - e.clientX) {
      leftPos = `${e.clientX - 10}px`;
    } else {
      leftPos = `${e.pageX - 220}px`;
    }
    if (250 < window.innerHeight - e.clientY) {
      topPos = `${e.clientY - 10}px`;
    } else {
      topPos = `${e.pageY - 155}px`;
    }
    menu.style.display = "block";
    menu.style.top = topPos;
    menu.style.left = leftPos;
    e.stopPropagation();
    setValueRightClickChooseBoxChat(value);
  };
  // onContextMenu rightMouseMember
  const [valueRightClickMember, setValueRightClickMember] = useState("");

  const onContextMenuMember = (e, value) => {
    let leftPos = "";
    let topPos = "";
    e.preventDefault();
    const menu = document.querySelector(".rightmouse-member");
    if (180 < window.innerWidth - e.clientX) {
      leftPos = `${e.clientX - 10}px`;
    } else {
      leftPos = `${e.pageX - 230}px`;
    }
    if (250 < window.innerHeight - e.clientY) {
      topPos = `${e.clientY - 10}px`;
    } else {
      topPos = `${e.pageY - 115}px`;
    }
    e.stopPropagation();
    setValueRightClickMember(value);
    menu.style.display = "block";
    menu.style.top = topPos;
    menu.style.left = leftPos;
  };

  // onContextMenu rightMouseMember

  return (
    <>
      <ModalChangeName
        setModalChangeName={setModalChangeName}
        modalChangeName={modalChangeName}
        dataUserFriend={dataUserFriend}
        dataUserFriends={dataUserFriends}
        setDataUserFriend={setDataUserFriend}
        setDataUserFriendsAll={setDataUserFriendsAll}
        setValueChats={setValueChats}
      />
      {/* Modal */}
      <ModalUpdateInformation
        dataUserMe={dataUserMe}
        modalUpdateInformation={modalUpdateInformation}
        setModalUpdateInformation={setModalUpdateInformation}
        setDataUserMe={setDataUserMe}
        dataUserFriends={dataUserFriends}
        valueChats={valueChats}
        setValueChats={setValueChats}
        dataUserFriend={dataUserFriend}
        setDataUserFriend={setDataUserFriend}
        setDataUserFriendsAll={setDataUserFriendsAll}
      />

      <IframeFile
        setUrlFile={setUrlFile}
        valueFile={valueFile}
        bytesToSize={bytesToSize}
      />
      <ModalInformation
        modalInformation={modalInformation}
        handleCancelModalInformation={handleCancelModalInformation}
        dataModalInformation={dataModalInformation}
        dataUserMe={dataUserMe}
        setModalUpdateInformation={setModalUpdateInformation}
        setDataUserFriend={setDataUserFriend}
        dataUserFriends={dataUserFriends}
        dataUserFriendsApi={dataUserFriendsApi}
      />
      <ModalShare
        dataUserMe={dataUserMe}
        modalShare={modalShare}
        handleCancelModalShare={handleCancelModalShare}
        valueRightClickMessage={valueRightClickMessage}
        renderImageFile={renderImageFile}
        dataUserFriendsApi={dataUserFriendsApi}
        setValueChats={setValueChats}
        date={date}
        id={id}
        setDataUserFriends={setDataUserFriends}
        dataUserFriends={dataUserFriends}
        dataUserFriend={dataUserFriend}
      />

      <ModalCreateGroup
        modalCreateGroup={modalCreateGroup}
        dataUserFriendsApi={dataUserFriendsApi}
        handleCancelModalCreateGroup={handleCancelModalCreateGroup}
        setDataUserFriendsAll={setDataUserFriendsAll}
        dataUserFriends={dataUserFriends}
        id={id}
        dataUserMe={dataUserMe}
        createDateBoxChat={createDateBoxChat}
        date={date}
        setDataUserFriendsStorageAll={setDataUserFriendsStorageAll}
        dataUserFriendsStorage={dataUserFriendsStorage}
      />

      <ModalAddMembersToGroup
        modalAddMembersToGroup={modalAddMembersToGroup}
        dataUserFriendsApi={dataUserFriendsApi}
        handleCancelModalAddMembersToGroup={handleCancelModalAddMembersToGroup}
        setDataUserFriendsAll={setDataUserFriendsAll}
        dataUserFriends={dataUserFriends}
        dataUserMe={dataUserMe}
        dataUserFriend={dataUserFriend}
        setDataUserFriend={setDataUserFriend}
        dataUserFriendsApiAddMembersToGroup={
          dataUserFriendsApiAddMembersToGroup
        }
        setValueChats={setValueChats}
        valueChats={valueChats}
        id={id}
        setValueChatsInRenderAllMessage={setValueChatsInRenderAllMessage}
        createDateBoxChat={createDateBoxChat}
        date={date}
      />
      {/* Modal*/}

      {/* RightmouseResponsive */}
      <RightmouseResponsive
        handleClickResponsiveIcon={handleClickResponsiveIcon}
        valueResponsiveRightClick={valueRightClickMessage}
        handleClickGhim={handleClickGhim}
        setModalShare={setModalShare}
        handleClickUnGhim={handleClickUnGhim}
        deleteMessage={deleteMessage}
        setValueChatsInRenderAllMessage={setValueChatsInRenderAllMessage}
      />
      {/* RightmouseResponsive */}

      {/* RightmouseChooseBoxChat */}
      <RightmouseChooseBoxChat
        valueRightClickChooseBoxChat={valueRightClickChooseBoxChat}
        dataUserFriends={dataUserFriends}
        setDataUserFriendsAll={setDataUserFriendsAll}
        dataUserFriend={dataUserFriend}
        setDataUserFriend={setDataUserFriend}
      />
      {/* RightmouseChooseBoxChat */}

      <RightmouseMember
        valueRightClickMember={valueRightClickMember}
        dataUserFriend={dataUserFriend}
        setDataUserFriend={setDataUserFriend}
        dataUserFriends={dataUserFriends}
        setDataUserFriendsAll={setDataUserFriendsAll}
        dataUserMe={dataUserMe}
        createDateBoxChat={createDateBoxChat}
        date={date}
        id={id}
        setValueChatsInRenderAllMessage={setValueChatsInRenderAllMessage}
      />

      <Row id="wrapper">
        {/* Nav1 */}
        <Nav1 dataUserMe={dataUserMe} handleClickImgChat={handleClickImgChat} />
        {/* Nav1 */}

        {/* Nav2 */}
        <Nav2
          handleClickAllTitle={handleClickAllTitle}
          handleClickNotReadTitle={handleClickNotReadTitle}
          dataUserFriends={dataUserFriends}
          handleClickChooseBoxChat={handleClickChooseBoxChat}
          onContextMenuChooseBoxChat={onContextMenuChooseBoxChat}
          handleClickCreateGroup={handleClickCreateGroup}
          date={date}
          dataUserMe={dataUserMe}
          focusBoxSearch={focusBoxSearch}
          setFocusBoxSearch={setFocusBoxSearch}
          dataUserFriendsStorage={dataUserFriendsStorage}
          setDataUserFriendsStorageAll={setDataUserFriendsStorageAll}
        />
        {/* Nav2 */}

        <Col className="box-nav-3">
          {/* NavChatHead */}
          <NavChatHead
            dataUserFriend={dataUserFriend}
            handleClickNavRight={handleClickNavRight}
            hiddenRightNav={hiddenRightNav}
            handleClickImgChat={handleClickImgChat}
          />
          {/* NavChatHead */}
          {lengthGhim > 0 && (
            <>
              <div className="box-ghim-1">
                <Ghim
                  valueListGhim={valueListGhim}
                  lengthGhim={lengthGhim}
                  renderImageFile={renderImageFile}
                  handleClickUnGhim={handleClickUnGhim}
                />
              </div>
              {lengthGhim > 1 && (
                <div className="box-ghim-2">
                  <Row className="list-ghim">
                    <div className="list">Danh sách ghim ({lengthGhim})</div>
                    <div
                      className="collapse"
                      onClick={() => {
                        document.querySelector(".box-ghim-1").style.display =
                          "block";
                        document.querySelector(".box-ghim-2").style.display =
                          "none";
                      }}
                    >
                      Thu Gọn <CaretUpOutlined />
                    </div>
                  </Row>
                  {valueListGhim.map((value, key) => {
                    return (
                      <ListGhim
                        value={value}
                        key={key}
                        renderImageFile={renderImageFile}
                        handleClickUnGhim={handleClickUnGhim}
                      />
                    );
                  })}
                </div>
              )}
            </>
          )}
          <div
            className="box-chat"
            onContextMenu={(e) => {
              e.preventDefault();
            }}
          >
            {children}
            <ButtonScrollBottom />
            {valueChats &&
              valueChats.map((value, key) => {
                return (
                  <>
                    {(value.url ||
                      value.file ||
                      value.type ||
                      value.text_message) &&
                      !value.delete && (
                        <div
                          className={
                            value.other_people ? "box-other-people" : "box-me"
                          }
                          onMouseOver={() => onMounseOverBox(key)}
                          onMouseOut={() => onMouseOutBox(key)}
                          key={key}
                        >
                          <Row
                            className={`share-response share-response-${key}`}
                          >
                            {!value.notification_system && (
                              <div>
                                <ExportOutlined
                                  onClick={() =>
                                    handleClickResponsiveIcon(value)
                                  }
                                />
                              </div>
                            )}
                            <div onClick={() => handleClickShare(value)}>
                              <ShareAltOutlined />
                            </div>
                            <div onClick={() => handleClickGhim(value)}>
                              <PaperClipOutlined />
                            </div>
                          </Row>
                          <div
                            className={
                              value.other_people ? "other-people" : "me"
                            }
                            id={`${value.id}`}
                          >
                            <div className="img-chat">
                              <img
                                src={value.avatar}
                                alt="img not load"
                                onClick={() => handleClickImgChat(value)}
                                style={{
                                  border: "0.5px solid #fff",
                                  borderRadius: "50%",
                                  objectFit: "cover",
                                  width: "40px",
                                  height: "40px",
                                  cursor: "pointer",
                                }}
                              />
                            </div>
                            <div
                              className="box-content-all-chat"
                              onContextMenu={(e) => {
                                handleOnContextMenu(e, value);
                              }}
                            >
                              {value.url && (
                                <ImageOrVideo
                                  value={value}
                                  bytesToSize={bytesToSize}
                                  setUrlFile={setUrlFile}
                                  urlFile={urlFile}
                                  setValueFile={setValueFile}
                                />
                              )}{" "}
                              {value.file && (
                                <RenderFile
                                  renderImageFile={renderImageFile}
                                  value={value}
                                  bytesToSize={bytesToSize}
                                  setUrlFile={setUrlFile}
                                  urlFile={urlFile}
                                  setValueFile={setValueFile}
                                />
                              )}
                              {value.type === "likeIcon" && (
                                <LikeIcon value={value} />
                              )}
                              {value.text_message &&
                                !value.is_message_url &&
                                !value.is_orders_info && (
                                  <>
                                    <div className="content-chat">
                                      <div className="box-make-hidden-content-chat">
                                        {value.Responsive && (
                                          <a href={`#${value.Responsive.id}`}>
                                            <ResponsiveInput
                                              ResponsiveInputValue={
                                                value.Responsive
                                              }
                                              clearResponsiveTnputValue={
                                                clearResponsiveTnputValue
                                              }
                                              renderImageFile={renderImageFile}
                                              size="two"
                                            />
                                          </a>
                                        )}
                                        <div
                                          dangerouslySetInnerHTML={{
                                            __html: value.text_message,
                                          }}
                                        />
                                        <div className="date">
                                          {value.hours}:{value.minutes}
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                )}
                              {
                                <>
                                  {value.is_message_url && (
                                    <div className="content-chat">
                                      <div className="box-make-hidden-content-chat">
                                        <LinkPreview
                                          url={value.message_url}
                                          size={
                                            value.other_people ? "two" : "one"
                                          }
                                        />
                                        <div className="date">
                                          {value.hours}:{value.minutes}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </>
                              }
                              {value.is_orders_info && (
                                <div className="content-chat">
                                  <div className="box-make-hidden-content-chat">
                                    <OrderInfo />
                                    <div className="date">
                                      {value.hours}:{value.minutes}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    {value.delete && (
                      <div
                        className={
                          value.other_people ? "box-other-people" : "box-me"
                        }
                        key={key}
                      >
                        <div
                          className={value.other_people ? "other-people" : "me"}
                          id={`${value.id}`}
                        >
                          <div className="img-chat">
                            <img
                              src={value.avatar}
                              alt="img not load"
                              onClick={() => handleClickImgChat(value)}
                              style={{
                                border: "0.5px solid #fff",
                                borderRadius: "50%",
                                objectFit: "cover",
                                width: "40px",
                                height: "40px",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                          <div
                            className="box-content-all-chat"
                            onContextMenu={(e) => {
                              handleOnContextMenu(e, value);
                            }}
                          >
                            <div className="content-chat">
                              <div className="box-make-hidden-content-chat">
                                <div style={{ color: "var(--BA30)" }}>
                                  Tin nhắn đã bị xóa
                                </div>
                              </div>
                              <div className="date">
                                {value.hours}:{value.minutes}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {value.add_members_to_group &&
                      value.members_added.map((memberAdded) => {
                        return (
                          <Row
                            className="box-message"
                            id="1665217404457888996306170"
                          >
                            <Row className="event-message">
                              <Col className="image-message">
                                <img
                                  src={memberAdded.avatar}
                                  onClick={() =>
                                    handleClickImgChat(memberAdded)
                                  }
                                  alt="img not load"
                                  style={{
                                    border: "0.5px solid #fff",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    width: "24px",
                                    height: "24px",
                                    cursor: "pointer",
                                  }}
                                />
                              </Col>
                              <Col
                                className="name-message"
                                onClick={() => handleClickImgChat(memberAdded)}
                              >
                                {memberAdded.name}
                              </Col>
                              <Col className="content-message">được</Col>
                              <Col
                                className="name-message"
                                onClick={() =>
                                  handleClickImgChat(value.members_add)
                                }
                              >
                                {value.members_add.name}
                              </Col>
                              <Col className="content-message">
                                thêm vào nhóm
                              </Col>
                            </Row>
                          </Row>
                        );
                      })}
                    {value.invite_out_group && (
                      <Row
                        className="box-message"
                        id="1665217404457888996306170"
                      >
                        <Row className="event-message">
                          <Col className="image-message">
                            <img
                              src={value.member_removed.avatar}
                              onClick={() =>
                                handleClickImgChat(value.member_removed)
                              }
                              alt="img not load"
                              style={{
                                border: "0.5px solid #fff",
                                borderRadius: "50%",
                                objectFit: "cover",
                                width: "24px",
                                height: "24px",
                                cursor: "pointer",
                              }}
                            />
                          </Col>
                          <Col
                            className="name-message"
                            onClick={() =>
                              handleClickImgChat(value.member_removed)
                            }
                          >
                            {value.member_removed.name}
                          </Col>
                          <Col className="content-message">được</Col>
                          <Col
                            className="name-message"
                            onClick={() =>
                              handleClickImgChat(value.member_remove)
                            }
                          >
                            {value.member_remove.name}
                          </Col>
                          <Col className="content-message">
                            mời ra khỏi nhóm
                          </Col>
                        </Row>
                      </Row>
                    )}
                    {value.remove_members_to_group && (
                      <Row className="box-message">
                        <Row className="event-message">
                          <Col className="image-message">
                            <img
                              src={value.members_removed.avatar}
                              onClick={() =>
                                handleClickImgChat(value.members_removed)
                              }
                              alt="img not load"
                              style={{
                                border: "0.5px solid #fff",
                                borderRadius: "50%",
                                objectFit: "cover",
                                width: "24px",
                                height: "24px",
                                cursor: "pointer",
                              }}
                            />
                          </Col>
                          <Col
                            className="name-message"
                            onClick={() =>
                              handleClickImgChat(value.members_removed)
                            }
                          >
                            {value.members_removed.name}
                          </Col>
                          <Col className="content-message">
                            đã rời khỏi nhóm
                          </Col>
                        </Row>
                      </Row>
                    )}
                    {value.create_date && (
                      <div className="box-date">
                        <div className="line" />
                        <span className="overdate">
                          {date.date - value.date > 0 ||
                          date.month - value.month > 0 ||
                          date.year - value.year > 0
                            ? `${value.date}-${value.month + 1}-${value.year} ${
                                value.hours
                              }:${value.minutes}`
                            : `${value.hours}:${value.minutes} Hôm nay`}
                        </span>
                        <div className="line" />
                      </div>
                    )}
                  </>
                );
              })}
            {spinLoadingApiBoxChat && <Spin />}
          </div>
          {!dataUserFriend?.notification_system && (
            <div className="nav-input-chat">
              <Row className="nav-input">
                <Popover
                  placement="topLeft"
                  content={contentIcon}
                  trigger="click"
                >
                  <Tooltip placement="leftBottom" title="Gửi Icon">
                    <div>
                      <SmileOutlined />
                    </div>
                  </Tooltip>
                </Popover>
                <Tooltip placement="leftBottom" title="Gửi hình ảnh/video">
                  <div
                    onClick={() => {
                      const uploadImage =
                        document.querySelector(".uploadImage");
                      uploadImage.click();
                    }}
                  >
                    <FileImageOutlined />
                    <input
                      className="uploadImage"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        onChangeImage(e);
                      }}
                      style={{
                        display: "none",
                      }}
                    />
                  </div>
                </Tooltip>
                <Popover placement="topLeft" content={content} trigger="click">
                  <Tooltip placement="leftBottom" title="Đính kèm File">
                    <div>
                      <PaperClipOutlined />
                    </div>
                  </Tooltip>
                </Popover>
                <div className="not-use">
                  <RadiusUpleftOutlined />
                </div>
                <div className="not-use">
                  <ContactsOutlined />
                </div>
                <div className="not-use">
                  <ClockCircleOutlined />
                </div>
                <div className="not-use">
                  <ScheduleOutlined />
                </div>
                <div className="not-use">
                  <FontColorsOutlined />
                </div>
                <div className="not-use">
                  <ExclamationOutlined />
                </div>
                <div className="not-use">
                  <EllipsisOutlined />
                </div>
              </Row>
              <div className={`nav-chat ${focusInput}`}>
                {/* Responsive-input */}
                {ResponsiveInputValue && (
                  <ResponsiveInput
                    ResponsiveInputValue={ResponsiveInputValue}
                    clearResponsiveTnputValue={clearResponsiveTnputValue}
                    renderImageFile={renderImageFile}
                    size="one"
                  />
                )}
                {isValidUrl(valueChat) && valueDeleteLink && (
                  <LinkPreview
                    url={valueChat}
                    size="four"
                    setValueDeleteLink={setValueDeleteLink}
                  />
                )}

                {/* Responsive-input */}

                <Row>
                  <div className="input-chat">
                    <TextArea
                      onChange={onChangeChat}
                      value={valueChat}
                      placeholder="Nhập tin nhắn"
                      autoSize={{
                        minRows: 1,
                        maxRows: 6,
                      }}
                      onBlur={() => {
                        SetFocusInput("");
                      }}
                      onFocus={() => {
                        SetFocusInput("focus-input");
                      }}
                      onKeyDown={(e) => {
                        if (e.code === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          enterChat();
                        }
                      }}
                    />
                  </div>
                  <Row className="icon-input">
                    <div className="not-use">
                      <CommentOutlined />
                    </div>
                    <div className="not-use">
                      <SmileOutlined />
                    </div>
                    <div className="not-use">
                      <DingtalkOutlined />
                    </div>
                    <div>
                      {valueChat.trim() !== "" && valueChat !== null ? (
                        <span
                          className="button-sent"
                          onClick={() => render(valueChat)}
                        >
                          GỬI
                        </span>
                      ) : (
                        <span
                          className="not-use"
                          style={{ fontSize: "24px" }}
                          onClick={handleClickLikeIcon}
                        >
                          👍
                        </span>
                      )}
                    </div>
                  </Row>
                </Row>
              </div>
            </div>
          )}
        </Col>
        <Nav4
          renderImageFile={renderImageFile}
          bytesToSize={bytesToSize}
          valueChats={valueChats}
          hiddenRightNav={hiddenRightNav}
          handleClickImgChat={handleClickImgChat}
          dataUserFriend={dataUserFriend}
          setDataUserFriend={setDataUserFriend}
          dataUserFriends={dataUserFriends}
          setDataUserFriendsAll={setDataUserFriendsAll}
          handleClickCreateGroup={handleClickCreateGroup}
          handleClickAddMembersToGroup={handleClickAddMembersToGroup}
          dataUserMe={dataUserMe}
          id={id}
          setValueChats={setValueChats}
          date={date}
          createDateBoxChat={createDateBoxChat}
          setUrlFile={setUrlFile}
          urlFile={urlFile}
          setValueFile={setValueFile}
          setModalChangeName={setModalChangeName}
          onContextMenuMember={onContextMenuMember}
        />
      </Row>
    </>
  );
}

export default DefaultLayout;
