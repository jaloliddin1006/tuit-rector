import { Dropdown, Select } from "antd";

import logoSrc from "public/img/logo.png";
import uzb from "public/img/flag_uzb.png";
import eng from "public/img/flag_eng.png";
import rus from "public/img/flag_rus.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const items = [
  {
    key: "1",
    label: (
      <Link
        to="/login"
        className="flex items-center justify-center gap-3 inter text-[0.857rem] text-[#1E1E1EB2] font-[500] leading-[1.1rem]"
      >
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        Chiqish
      </Link>
    ),
  },
];

const { Option } = Select;
const Header = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  
  

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <div className="py-[1.2rem] inter">
        <header className="w-full flex flex-wrap items-center justify-between gap-4 ">
          <div
            onClick={() => navigate("/")}
            className="logo flex items-center gap-[0.3rem] cursor-pointer"
          >
            <div className="col">
              <img
                src={logoSrc}
                alt="TUIT logo"
                className="w-[4.5rem] h-[4.5rem] object-fit object-center"
              />
            </div>
            <div className="col">
              <div className="inter text-[0.857rem] text-[#1E1E1EB2] font-[500] leading-[1.1rem] uppercase">
                MUHAMMAD AL-XORAZMIY NOMIDAGI
              </div>
              <div className="inter text-[0.857rem] text-[#1E1E1EB2] font-[500] leading-[1.1rem] uppercase">
                Toshkent axborot <br /> texnologiyalari unversiteti
              </div>
            </div>
          </div>
          <nav className="flex items-center gap-6">
            {
              window.location.pathname === "/all-faculties" && <Select
              defaultValue="kif"
              style={{ width: "fit-content" }}
              onChange={() => console.log("O'quv yili tanlandi")}
              options={[
                { value: "kif", label: "Kompyuter injiniring fakulteti" },
                { value: "dif", label: "Dasturiy injiniring fakulteti" },
                { value: "ax", label: "Axborot xavfsizligi" },
              ]}
            />
            }
            <div className="nav-search rounded-[8px] border-[2px] border-solid border-[#1E1E1E1A] w-[24.75rem] p-[0.5rem_1rem] bg-white flex items-center justify-between gap-2 text-[#1E1E1E99] font-[500] focus:drop-shadow-[0_15px_15px_rgba(0,0,0,0.2)] hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.15)]">
              <i className="fa-solid fa-magnifying-glass w-[1.125rem] h-[1.125rem]"></i>
              <input
                type="text"
                value={searchText}
                placeholder={"Qidiruv"}
                onChange={(e) => handleSearchInput(e)}
                className="header_search outline-none border-none text-black placeholder:text-[#1E1E1E99]"
              />
            </div>
            <div
              onClick={toggleFullScreen}
              className="mail cursor-pointer border-[1px] border-solid border-[#1E1E1E33] p-2 flex items-center justify-center rounded-[0.375rem]"
            >
              <i className="fa-solid fa-expand text-[1.2rem]"></i>
            </div>
            <div className="languages flex items-center gap-1">
              <Select
                defaultValue="2023/2024"
                style={{ width: "fit-content" }}
                onChange={() => console.log("O'quv yili tanlandi")}
                options={[
                  { value: "2023/2024", label: "2023/2024" },
                  { value: "2022/2023", label: "2022/2023" },
                  { value: "2021/2022", label: "2021/2022" },
                ]}
              />
              <Select
                defaultValue="Birinchi semestr"
                style={{ width: "fit-content" }}
                onChange={() => console.log("Semestr tanlandi")}
                options={[
                  { value: "Birinchi semestr", label: "Birinchi semestr" },
                  { value: "Ikkinchi semestr", label: "Ikkinchi semestr" },
                ]}
              />
              <Select
                defaultValue={"uzb"}
                style={{
                  width: 100,
                }}
                onChange={(value) => console.log(`Selected language ${value}`)}
                placeholder="Select a country"
              >
                <Option value="uzb">
                  <div className="flex items-center gap-2">
                    <img src={uzb} alt="USA" style={{ width: 16 }} />
                    UZB
                  </div>
                </Option>
                <Option value="rus">
                  <div className="flex items-center gap-2">
                    <img src={rus} alt="Canada" style={{ width: 16 }} />
                    RUS
                  </div>
                </Option>
                <Option value="eng">
                  <div className="flex items-center gap-2">
                    <img src={eng} alt="UK" style={{ width: 16 }} />
                    ENG
                  </div>
                </Option>
              </Select>
            </div>

            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
            >
              <div className="user cursor-pointer flex items-center gap-2">
                <div className="col">
                  <img
                    src={logoSrc}
                    alt="User Image"
                    className="object-fit object-cover rounded-full h-[2.25rem] w-[2.25rem]"
                  />
                </div>
                <div className="col">
                  <div className="user__name text-[0.875rem] font-[500] text-[#1E1E1E]">
                    Admin
                  </div>
                  <div className="user__role text-[0.75rem] font-[400] text-[#1E1E1EB2]">
                    Admin
                  </div>
                </div>
              </div>
            </Dropdown>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
