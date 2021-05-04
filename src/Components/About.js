import React, { Component } from "react";
import Fade from "react-reveal";
import { withTranslation } from "react-i18next";

class About extends Component {
  render() {
    const { t } = this.props;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="https://nordicgiant2.github.io/react-nice-resume-page/images/profilepic.jpg"
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>{t("about.title1")}</h2>

              <p>{t("about.desc1")}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>{t("about.title2")}</h2>
                  <p className="address">
                    <span>{t("about.desc2.name")}</span>
                    <br />
                    <span>
                      {t("about.desc2.street")}
                      <br />
                      {t("about.desc2.city")} {t("about.desc2.state")},{" "}
                      {t("about.desc2.zipcode")}
                    </span>
                    <br />
                    <span>{t("about.desc2.phone")}</span>
                    <br />
                    <span>{t("about.desc2.email")}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="#" className="button">
                      <i className="fa fa-download"></i>
                      {t("about.button")}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default withTranslation()(About);
