import { IconMenu2, IconX } from "@tabler/icons-react"
import classes from "./Header.module.css"
import { useState } from "react"

type ActiveNav = "home" | "posts" | "tags" | "resume" | "search"

export const Header = ({ activeNav }: { activeNav?: ActiveNav }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={classes.header}>
      <div className={classes.bar}>
        <div className={classes.diag}></div>
        <button
          className={`link-button accent ${classes.openButton}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IconX /> : <IconMenu2 />}
        </button>
      </div>
      <Nav activeNav={activeNav} isOpen={isOpen} />
    </header>
  )
}

const Nav = ({
  activeNav,
  isOpen,
}: {
  activeNav?: ActiveNav
  isOpen: boolean
}) => {
  return (
    <nav className={`${classes.nav} ${isOpen ? classes.isOpen : ""}`}>
      <ul className={classes.list}>
        <li>
          <a
            href="/"
            className={`link-button row ${activeNav === "home" ? classes.active : ""}`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/posts/"
            className={`link-button row ${activeNav === "posts" ? classes.active : ""}`}
          >
            Posts
          </a>
        </li>
        <li>
          <a
            href="/resume/"
            className={`link-button row ${activeNav === "resume" ? classes.active : ""}`}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}
