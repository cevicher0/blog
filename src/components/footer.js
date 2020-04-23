import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const socialMediaLogos = [
  {
    icon: "github",
    href: "https://github.com/cevicher0",
  },
  {
    icon: "twitter",
    href: "https://twitter.com/cevicher0",
  },
  {
    icon: "instagram",
    href: "https://www.instagram.com/cevicher0/",
  },
  {
    icon: "linkedin",
    href: "https://www.linkedin.com/in/reiyoshizawa/",
  },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <ul className="social-media-logos">
          {socialMediaLogos.map(logo => {
            const icon = ["fab", `${logo.icon}`]
            return (
              <li key={logo.icon} className="social-media-logos__item">
                <a
                  href={logo.href}
                  className="social-media-logos__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={logo.icon}
                >
                  <FontAwesomeIcon icon={icon} className="logo-icon" />
                </a>
              </li>
            )
          })}
        </ul>
        <div className="footer__copyright">
          © {new Date().getFullYear()}, Built by
          {` `}
          Rei Yoshizawa
        </div>
      </div>
    </footer>
  )
}

export default Footer
