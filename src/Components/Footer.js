import React, { Component } from "react";
import Fade from "react-reveal";
import { withTranslation } from "react-i18next";

class Footer extends Component {
  render() {
    const { t } = this.props;
    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>

              <ul className="copyright">
                <li>&copy; {t("footer.copyright")}</li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default withTranslation()(Footer);
