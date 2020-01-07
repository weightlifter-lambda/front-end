import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLaughSquint } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const FooterWrap = styled.div`
  width: 90%vw;
  height: 25%vh;
`;

const Favicon = styled.span`
  margin: 2rem;
  font-size: 3rem;
  &:hover {
    color: #b22222;
  }
`;

const Copyright = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
`;

const fb = (
  <a href="http://www.facebook.com" className="social">
    <FontAwesomeIcon icon={faFacebookF} />
  </a>
);
const github = (
  <a href="http://www.github.com" className="social">
    <FontAwesomeIcon icon={faGithub} />
  </a>
);
const twitter = (
  <a href="http://www.twitter.com" className="social">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
);
const instagram = (
  <a href="http://www.instagram.com" className="social">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
);
const brands = [fb, github, twitter, instagram];

export default function Footer() {
  return (
    <div className="social-media">
      <FooterWrap>
        <h1>
          {brands.map(item => (
            <Favicon key={item}>{item}</Favicon>
          ))}
        </h1>
        <Copyright>
          DJ Team 2019
          <FontAwesomeIcon icon={faLaughSquint} />
        </Copyright>
      </FooterWrap>
    </div>
  );
}
