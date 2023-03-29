import React from 'react'
import { Link } from "react-router-dom";
import ForwardLogo from "../assets/Forward.svg";
import "./about.css"
import Part1 from "../assets/about/part1.svg"
import Line from "../assets/about/Line.svg"
import ForwardLogo1 from "../assets/about/Forward_Logo.svg"
import Group69 from "../assets/about/Group 69.svg"
import Per1 from "../assets/about/per1.svg"
import Per2 from "../assets/about/per2.svg"
import Per3 from "../assets/about/per3.svg"
import Per4 from "../assets/about/per4.svg"
import Per5 from "../assets/about/per5.svg"

// import Privacy from ""
// import TermsOfService from""

const About = () => {
  return (
    <div>
      <div class="container">
      <div class="nav">
				
				<div class="logo">
					<a href="https://useforward.app/home">
						<img src= {ForwardLogo} alt="logo" />
					</a>
				</div>
				
				<div class="buttons">
					<div class="Employers">
						<a>Home</a>
					</div>
					<div class="About">
						<a>About Us</a></div>
					<div class="BookDemo">
						<a
							href="https://forms.gle/wSrvKmLvtJe5wWYX7"
							>Join Waitlist</a>
						
					</div>
				</div>
			</div>

      </div>
      <div class="part_1">
			<div class="part_1_content">
				<p class="part_1_title">Forward is a Journey.</p>
				<img src={Line} alt=""/>
				<ul class="part_1_description">
					<li>It’s a journey for job seekers on a quest to find a place where
						they belong.</li>
					<li>Its a journey for businesses searching for a new addition to their
						ever-growing family.</li>
					<li>And it’s a journey for us, who are trying to create a world where these two can	find each other, as fairly and stress-free as possible.</li>
				</ul>
			</div>
			<img src={Part1}></img>
		</div>
        <div class="part_2">
			<div class="part_2_images">
				<img class="second_ring" src={Group69} alt=""/>
				<img class="forward_logo" src={ForwardLogo1} alt=""/>
				<div class="forward_blur"></div>
			</div>
			<div class="part_2_content">
				<p class="part_2_title">Our Story.</p>
				<img src={Line} alt="Line"/>
				<ul class="part_2_description">
					<li>Our journey began with a deep-seated frustration over the 
						inadequacy of existing job hunting resources and a lack of clarity 
						regarding our position in the job market.</li>
					<li>The	current hiring landscape suffers from a shortage of skilled 
						talent, an number of applicants, and a time- consuming
						recruitment process.</li>
					<li>We recognized the gap	between the needs of companies and the  resources available	to job seekers. We set out to bridge this gap by  providing	a platform that offers comprehensive support to job seekers while also meeting the needs of companies and recruiters.</li>
				</ul>
			</div>
		</div>
        {/* <div class="part3">
			
			<div class="p3_b">
				<p class="part_3_title" style="margin-bottom: 30px;">Our Team.</p>
				<img src={Line} alt="Line"/>
				
				<div class="p3_s" style="float: left;">
					
					<div class="p3_s1">
						<img src={Per1} alt="per"/>
						<div class="intro">
							<div class="intro_sub">
								<div>Chinmay Rathod</div>
								<div>Co-Founder & CEO</div>
							</div>
						</div>
					</div>
					
					<div class="p3_s1">
						<img src={Per2} alt="per"/>
						<div class="intro">
							<div class="intro_sub">
								<div>Gautham Narayanan</div>
								<div>Co-Founder & COO</div>
							</div>
						</div>
					</div>
				</div>

				
				<div class="p3_s" style="float: left;">
					
					<div class="p3_s1">
						<img src={Per3} alt="per"/>
						<div class="intro">
							<div class="intro_sub">
								<div>Trique Nguyen</div>
								<div>Fullstack Eng.</div>
							</div>
						</div>
					</div>
					
					<div class="p3_s1">
						<img src={Per4} alt="per"/>
						<div class="intro">
							<div class="intro_sub">
								<div>Peter Pham</div>
								<div>Research & AI</div>
							</div>
						</div>
					</div>
					
					<div class="p3_s1">
						<img src={Per5} alt="per"/>
						<div class="intro">
							<div class="intro_sub">
								<div>Auni Bagchi</div>
								<div>Research & AI</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        <div class="footer">
            <div class="footer_divider"></div>
            <div class="footer_box">
            <div class="footer_copyright">
                <div class="footer_forward_logo">
                    <img src={Forward} alt=""/>
                </div>
                <p>All rights reserved Copyright Grinning Co. 2023</p>

            </div>
            <div class="footer_quick_links">
          <div class="footer_link_1">
            <ol>
              <p>Quick Links</p>
              <ul>
                <li><a href="https://useforward.app/home">Employers</a></li>
                <li><a href="https://useforward.app/about">About</a></li>
                <li><a
                  href="https://forms.gle/wSrvKmLvtJe5wWYX7"
                  >Book Demo</a></li>
              </ul>
            </ol>
          </div>
          <div class="footer_link_2">
            <ol>
              <p>Social</p>
              <ul>
                <a href="https://www.linkedin.com/company/useforward/"
                  >Linkedin</a>
              </ul>
              
            </ol>
          </div>
          <div class="footer_link_3">
            <ol>
              <p>Others</p>
              <ul>
                <a href={Privacy}>Privacy Policy</a>
                <a href={TermsOfService}>Terms of Use</a>
              </ul>
            </ol>
          </div>
        </div>

            </div>
        </div> */}
        
        
    </div>
  )
}

export default About