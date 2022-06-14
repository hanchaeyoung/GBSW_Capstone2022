import React from "react";
import '../styles/Mainpage.css';
import logoImg from '../assets/logoImg.png';
import profileImg from '../assets/profileImg.png';
import Capstone from '../assets/Capstone.jpg'
import menu from '../assets/menu.png';
import WritingPage from "./WritingPage";
import { Link } from "react-router-dom";
import plus from '../assets/plus.png';

export const Mainpage = () => {
  return (
    <div className="center1">
      <header>
        <div className="lineImg">
          <div className="lineImgSort">
            <img src={menu} />
          </div>
        </div>

        <div className="logo">
          <img src={logoImg} alt="로고" />
        </div>

        <div className="profile">
            <img src={profileImg} alt="프로필" />
        </div>
      </header>

      <div className="headerSort"></div>

      <div className="btnSort">
        <Link to="/WritingPage">
          <img src={plus} className="btn" onClick={WritingPage} />
        </Link>
      </div>

      <div class="postDiv">
        <div className="postSort">
          <div class="post">
            <div className="postImg">
              <img src={Capstone} alt="타이틀 이미지" />
            </div>
            <div className="text">
              C언어 1일차
            </div>
          </div>

          <div class="post">
              <div className="postImg">
                  이미지
              </div>
              <div className="text">
                  제목
              </div>
          </div>

          <div class="post">
              <div className="postImg">
                  이미지
              </div>
              <div className="text">
                  제목
              </div>
          </div>

          <div class="post">
              <div className="postImg">
                  이미지
              </div>
              <div className="text">
                  제목
              </div>
          </div>

          <div class="post">
              <div className="postImg">
                  이미지
              </div>
              <div className="text">
                  제목
              </div>
          </div>

          <div class="post">
              <div className="postImg">
                  이미지
              </div>
              <div className="text">
                  제목
              </div>
          </div>

          <div class="post">
              <div className="postImg">
                  이미지
              </div>
              <div className="text">
                  제목
              </div>
          </div>

          <div class="post">
              <div className="postImg">
                  이미지
              </div>
              <div className="text">
                  제목
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
