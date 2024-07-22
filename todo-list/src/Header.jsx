import "./scss/header.scss"

export function Header() {
  return (
    <div className="b-header">
      <div className="b-header_item-menu"></div>
      <div className="b-header_item-search"></div>
      <div className="b-header_item-logo"></div>
      <div className="b-header_item-user"></div>
      <div className="b-header_item-cart"></div>
    </div>
  )
}
