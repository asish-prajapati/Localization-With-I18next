import React, { Component } from "react";
import Slide from "react-reveal";
import { withTranslation } from "react-i18next";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    const { t } = this.props;
    // const educationComp = t("resume.education").map(function (education) {
    //   return (
    //     <div key={education.school}>
    //       <h3>{education.school}</h3>
    //       <p className="info">
    //         {education.degree} <span>&bull;</span>
    //         <em className="date">{education.date}</em>
    //       </p>
    //       <p>{education.des}</p>
    //     </div>
    //   );
    // });

    // const workComp = resume.work.map(function (work) {
    //   return (
    //     <div key={resume.work.company}>
    //       <h3>{resume.work.company}</h3>
    //       <p className="info">
    //         {resume.work.title}
    //         <span>&bull;</span> <em className="date">{resume.work.date}</em>
    //       </p>
    //       <p>{resume.work.des}</p>
    //     </div>
    //   );
    // });

    // const skillsComp = resume.skills.skillset.map((skills) => {
    //   const backgroundColor = this.getRandomColor();
    //   const className = "bar-expand " + skills.name.toLowerCase();
    //   const width = resume.skills.level;

    //   return (
    //     <li key={resume.skills.name}>
    //       <span style={{ width, backgroundColor }} className={className}></span>
    //       <em>{resume.skills.name}</em>
    //     </li>
    //   );
    // });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>{t("resume.educationTitle")}</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <div key={t("resume.education.0.school")}>
                    <h3>{t("resume.education.0.school")}</h3>
                    <p className="info">
                      {t("resume.education.0.degree")} <span>&bull;</span>
                      <em className="date">{t("resume.education.0.date")}</em>
                    </p>
                    <p>{t("resume.education.0.des")}</p>
                  </div>
                  <div key={t("resume.education.1.school")}>
                    <h3>{t("resume.education.1.school")}</h3>
                    <p className="info">
                      {t("resume.education.1.degree")} <span>&bull;</span>
                      <em className="date">{t("resume.education.1.date")}</em>
                    </p>
                    <p>{t("resume.education.1.des")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>{t("resume.workTitle")}</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div key={t("resume.work.0.company")}>
                <h3>{t("resume.work.0.company")}</h3>

                <p className="info">
                  {t("resume.work.0.title")}
                  <span>&bull;</span>
                  <em className="date">{t("resume.work.0.date")}</em>
                </p>
                <p>{t("resume.work.0.des")}</p>
              </div>
              <div key={t("resume.work.1.company")}>
                <h3>{t("resume.work.1.company")}</h3>

                <p className="info">
                  {t("resume.work.1.title")}
                  <span>&bull;</span>
                  <em className="date">{t("resume.work.1.date")}</em>
                </p>
                <p>{t("resume.work.1.des")}</p>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>{t("resume.skillsTitle")}</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{t("resume.skills.des")}</p>

              <div className="bars">
                <ul className="skills">
                  <li key={t("resume.skills.skill_set.0.name")}>
                    <span
                      style={{
                        width: t("resume.skills.skill_set.0.level"),
                        backgroundColor: this.getRandomColor(),
                      }}
                      className={`bar-expand ${t(
                        "resume.skills.skill_set.0.name"
                      ).toLowerCase()}`}
                    ></span>
                    <em>{t("resume.skills.skill_set.0.name")}</em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default withTranslation()(Resume);
