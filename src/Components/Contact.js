import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import { withTranslation } from "react-i18next";

class Contact extends Component {
  render() {
    const { t } = this.props;
    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span></span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{t("contact.des")}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form action="" method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      {t("contact.formtitle.name")}{" "}
                      <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="contactName"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      {t("contact.formtitle.email")}{" "}
                      <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">
                      {t("contact.formtitle.subject")}
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      {t("contact.formtitle.message")}{" "}
                      <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit">
                      {t("contact.formtitle.submit")}
                    </button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>{t("contact.address")}</h4>
                <p className="address">
                  {t("contact.name")}
                  <br />
                  {t("contact.street")} <br />
                  {t("contact.city")}, {t("contact.state")}{" "}
                  {t("contact.zipcode")}
                  <br />
                  <span>{t("contact.phone")}</span>
                </p>
              </div>

              <div className="widget widget_tweets"></div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default withTranslation()(Contact);
