import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { withTranslation } from "react-i18next";
import i18next from "i18next";

class Header extends Component {
  render() {
    const { t } = this.props;
    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                {t("header.header_links.home")}
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                {t("header.header_links.about")}
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                {t("header.header_links.resume")}
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                {t("header.header_links.contact")}
              </a>
            </li>
            <li>
              <button
                className="smoothscroll langbtn"
                onClick={() => i18next.changeLanguage("en")}
              >
                EN
              </button>
            </li>
            <li>
              <button
                className="smoothscroll langbtn"
                onClick={() => i18next.changeLanguage("de")}
              >
                DE
              </button>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{t("header.name")}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{t("header.desc")}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="#" className="button btn project-btn">
                  <i className="fa fa-book"></i>
                  {t("header.other_links.projects")}
                </a>
                <a href="#" className="button btn github-btn">
                  <i className="fa fa-github"></i>
                  {t("header.other_links.github")}
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default withTranslation()(Header);
