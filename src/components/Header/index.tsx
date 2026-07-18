import { USER_ROUTES, ROUTES } from "@/constants/const";
import { Link } from "react-router-dom";
import profilePhoto from "../../assets/logo/profil-photo.png";

const Index: React.FC = () => {
  return (
    <>
      <header className="bg-[#000] sticky top-0 right-0 left-0 z-50">
        <div className="flex justify-between container mx-auto max-w-[1650px] text-white font-extrabold">
          <nav className="flex items-center gap-5">
            <Link to={USER_ROUTES.HOME} className="flex items-center">
              <svg
                className="w-25 h-auto fill-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                aria-labelledby="logo-desktop-title"
                viewBox="0 0 99.2 31.6"
              >
                <path d="M30.4,15.8C30.1-0.4,8.6-6.4,0.3,8.7C0.7,9,1.2,9.4,1.5,9.6c-0.6,1.3-1.1,2.7-1.3,4C0.1,14.5,0,15.4,0,16.4 c0,8.4,6.8,15.2,15.2,15.2s15.2-6.8,15.2-15.2C30.4,16.2,30.4,16,30.4,15.8L30.4,15.8z M3.8,18.5c-0.2,1.6-0.1,2.2-0.1,2.4L3.3,21 c-0.1-0.3-0.5-1.2-0.6-2.5c-0.4-4.9,2.9-9.3,8-10.1c4.7-0.7,9.1,2.2,10.2,6.3l-0.4,0.1c-0.1-0.1-0.3-0.4-1-1.2 C13.9,7.9,5,10.5,3.8,18.5L3.8,18.5z M18.2,21.2c-0.8,1.1-2,1.8-3.4,1.8c-2.3,0-4.2-1.9-4.2-4.2c0-2.2,1.7-4,3.9-4.1l0,0 c1.3-0.1,2.6,0.7,3.2,1.8c0.6,1.3,0.4,2.8-0.6,3.9C17.5,20.7,17.9,21,18.2,21.2L18.2,21.2z M26.9,21.4c-2.2,5-6.7,7.6-11.5,7.5 c-9.3-0.5-12-11.1-5.8-15l0.3,0.3c-0.1,0.1-0.5,0.4-1,1.6c-0.7,1.4-0.9,2.7-0.8,3.6c0.5,7.5,10.9,9,14.5,1.6 C27.1,10.8,15,0.5,4.2,8.4L4,8.1C6.8,3.7,12.3,1.7,17.6,3C25.7,5.1,30.1,13.5,26.9,21.4z"></path>
                <path d="M45.2,9.8v7c0,2.8-1.7,4.9-4.8,4.9s-4.8-2.1-4.8-4.9v-7h2.5v6.8c0,1.7,0.8,2.7,2.3,2.7c1.5,0,2.3-1,2.3-2.7V9.8 C42.7,9.8,45.2,9.8,45.2,9.8z M54.7,18.2c0,2-1.6,3.5-4.2,3.5h-4.1V9.9h3.9c2.3,0,3.8,1.1,3.8,2.8c0,1.3-0.6,2.1-1.5,2.5 C53.8,15.7,54.7,16.6,54.7,18.2L54.7,18.2z M49,12.2v2.5h1.3c0.8,0,1.3-0.5,1.3-1.2s-0.5-1.2-1.3-1.2L49,12.2L49,12.2z M50.4,19.4 c1.1,0,1.7-0.5,1.7-1.5s-0.6-1.5-1.7-1.5H49v2.9L50.4,19.4L50.4,19.4z M55.7,9.9h2.5v11.7h-2.5V9.9z M64.3,14.7c2,0.7,3,1.6,3,3.4 c0,2.4-1.9,3.8-4.1,3.8c-2,0-3.6-0.9-4.2-2.6l2-1.5c0.4,1.1,1.3,1.7,2.3,1.7c0.8,0,1.4-0.5,1.4-1.2c0-0.7-0.5-1.1-2.1-1.7 c-1.8-0.7-3.2-1.6-3.2-3.5c0-1.9,1.6-3.3,3.8-3.3c1.8,0,3.2,0.7,3.8,2.1l-2,1.4c-0.4-0.9-1-1.4-1.9-1.4c-0.8,0-1.3,0.4-1.3,1 C61.9,13.6,62.6,14.1,64.3,14.7z M80,15.8c0,3.4-2.5,6-6,6c-3.6,0-6-2.6-6-5.6c0-2,0.8-3.5,1.9-4.4l-0.4-0.4 c0.9-0.9,2.5-1.6,4.4-1.6C77.5,9.7,80,12.4,80,15.8L80,15.8z M77.4,15.8c0-2.1-1.3-3.6-3.4-3.6c-1.2,0-2.1,0.5-2.6,1l0.4,0.4 c-0.6,0.5-1.2,1.2-1.2,2.5c0,1.8,1.3,3.3,3.4,3.3C76.1,19.4,77.4,17.9,77.4,15.8L77.4,15.8z M83.6,12.4v2.7h5V17h-5v4.6H81V9.9h8 v2.4H83.6L83.6,12.4z M99.2,12.4h-3.3v9.3h-2.5v-9.3H90V9.9h9.1V12.4z"></path>
              </svg>
            </Link>
            <ul className="flex items-center uppercase ml-8 h-12 ">
              <li className="h-full ">
                <Link
                  to={USER_ROUTES.GAMES}
                  className="flex items-center h-full px-10 hover:bg-white hover:text-black transition"
                >
                  games
                </Link>
              </li>

              <li className="h-full ">
                <Link className="flex items-center h-full px-8 hover:bg-white hover:text-black transition">
                  help
                </Link>
              </li>

              <li className="h-full ">
                <Link className="flex items-center h-full px-8 hover:bg-white hover:text-black transition">
                  store
                </Link>
              </li>

              <li className="h-full ">
                <Link className="flex items-center h-full px-8 hover:bg-white hover:text-black transition">
                  ubisoft+
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-14 mr-6">
            <a className="flex gap-2 items-center" href="#">
              Download Ubisoft Connect
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.125 0.9375C8.125 0.592322 7.84518 0.3125 7.5 0.3125C7.15482 0.3125 6.875 0.592322 6.875 0.9375L6.875 8.10644L4.51857 5.59167C4.28255 5.33979 3.88703 5.32694 3.63515 5.56296C3.38327 5.79898 3.37041 6.19449 3.60643 6.44637L7.04393 10.1149C7.16209 10.241 7.32719 10.3125 7.5 10.3125C7.67281 10.3125 7.83791 10.241 7.95607 10.1149L11.3936 6.44637C11.6296 6.19449 11.6167 5.79898 11.3649 5.56296C11.113 5.32694 10.7175 5.33979 10.4814 5.59167L8.125 8.10644L8.125 0.9375ZM2.8125 13.4375C2.46732 13.4375 2.1875 13.7173 2.1875 14.0625C2.1875 14.4077 2.46732 14.6875 2.8125 14.6875H12.1875C12.5327 14.6875 12.8125 14.4077 12.8125 14.0625C12.8125 13.7173 12.5327 13.4375 12.1875 13.4375H2.8125Z"
                  fill="#F2F2F2"
                ></path>
              </svg>
            </a>
            <button className=" cursor-pointer flex justify-center items-center outline-none bg-[#363636]/60 rounded-3xl w-[28px] h-[28px]">
              <span className=" w-[20px] h-[20px] ">
                <svg
                  className="block w-full h-full"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="magnifying-glass"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                  ></path>
                </svg>
              </span>
            </button>

            <Link
              to={USER_ROUTES.BASKET}
              className="flex items-center gap-2 bg-[hsla(0,0%,94.9%,.15)] px-[18px] py-[6px] rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0.88 0.88 12.22 12.25"
                aria-hidden="true"
                focusable="false"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.078 1.016a.583.583 0 0 1 .822.062l1.53 1.775c.017.02.033.042.047.064h8.741a.875.875 0 0 1 .833 1.141L11.278 9.6a.875.875 0 0 1-.833.608H3.208a.875.875 0 0 1-.875-.875V3.368L1.016 1.84a.583.583 0 0 1 .062-.823zM3.5 9.042h6.732l.84-2.625H3.5v2.625zm0-3.792V4.083h8.318l-.373 1.167H3.5z"
                  fill="#fff"
                ></path>
                <path
                  d="M4.667 11.958a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0zM9.625 13.125a1.167 1.167 0 1 0 0-2.333 1.167 1.167 0 0 0 0 2.333z"
                  fill="#fff"
                ></path>
              </svg>
              Cart <span>(1)</span>
            </Link>
            <Link
              to={ROUTES.LOGIN}
              className="cursor-pointer flex justify-center items-center bg-[#edeef0] w-[30px]"
            >
              <img src={profilePhoto} alt="" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Index;
