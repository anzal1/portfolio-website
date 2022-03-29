import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

// const experience = {
// 	title: "Experience",
// 	subtitle: "Work, Internship and Volunteership",
// 	description:
// 		"I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
// 	header_image_path: "experience.svg",
// 	sections: [
// 		{
// 			title: "Internships",
// 			experiences: [
// 				{
// 					title: "Software Develepment Intern",
// 					company: "Angage360",
// 					company_url: "https://www.angage360.com/",
// 					logo_path: "google_logo.png",
// 					duration: "December 2021 - Present",
// 					location: "Work from Home",
// 					description:
// 						"I have been working to develop new tech solutions in analytics of industrial growth and the prevention of burnouts in the tech industry .",
// 					color: "#ee3c26"
// 				},
// 				{
// 					title: "Frontend Developer",
// 					company: "Oriflame",
// 					company_url:
// 						"#",
// 					logo_path: "google_logo.png",
// 					duration: "Sept 2021 - Nov 2021",
// 					location: "Work From Home",
// 					description:
// 						"New product showcase designs and various tweaks in the UI.",
// 					color: "#0071C5"
// 				}
// 			]
// 		},
// 		{
// 			title: "Volunteerships",
// 			experiences: [
// 				{
// 					title: "IEEE CS JMI (TECHNICAL ADVISOR) ",
// 					company: "IEEE CS",
// 					company_url: "#",
// 					logo_path: "google_logo.png",
// 					duration: "June 2019 - April 2020",
// 					location: "Delhi, India",
// 					description:
// 						"Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
// 					color: "#4285F4"
// 				},
// 				{
// 					title: "IEEE CS JMI (DSA LEAD)",
// 					company: "IEEE  CS",
// 					company_url: "#",
// 					logo_path: "microsoft_logo.png",
// 					duration: "Jan 2021 - Jan 2022",
// 					location: "Delhi, India", 
// 					description:
// 						"Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
// 					color: "#D83B01"
// 				}
// 				
// 			]
// 		}
// 	]
// };

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                {/* <img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
									alt=""
								/> */}
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
