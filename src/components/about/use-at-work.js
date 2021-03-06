import React from "react"
const items = [
  {
    title: "Text Editor",
    name: "Visual Studio Code",
    href: "https://code.visualstudio.com/",
  },
  {
    title: "Communication Tool",
    name: "Slack",
    href: "https://slack.com/",
  },
  {
    title: "Todo App",
    name: "Trello",
    href: "http://trello.com/",
  },
  {
    title: "Note App",
    name: "Evernote",
    href: "https://evernote.com/",
  },
  {
    title: "Design Tool",
    name: "Figma",
    href: "https://www.figma.com/",
  },
  {
    title: "Color Parette",
    name: "Eva Design System",
    href: "https://colors.eva.design/",
  },
]

const UseAtWork = () => {
  return (
    <div>
      <h2>Use at Work</h2>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              {item.title} : <a href={item.href}>{item.name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default UseAtWork
