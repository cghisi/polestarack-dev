import { Component } from "react";
import { PrismicLink, PrismicText } from "@prismicio/react";
import Image from "next/image";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }

  render() {
    const { isExpanded } = this.state;
    const menu = this.props.navigation.data.items;

    return (
      <div>
        <button
          id="nav-toggle"
          className="flex items-center"
          onClick={(e) => this.handleToggle(e)}
        >
          <svg
            className="fill-current h-7 w-7"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            alt="navigation"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <nav className={`${isExpanded ? "flex" : "hidden"}`}>
        <aside className="transform top-0 left-0 w-3/4 lg:w-2/6 bg-black fixed h-full overflow-auto ease-in-out z-40">
            <div
              className="flex w-full items-center p-4"
              onClick={(e) => this.handleToggle(e)}
            >
              <span className="w-full text-right">
                <Image
                  src="/close.svg"
                  alt="Close Menu"
                  width={35}
                  height={35}
                />
              </span>
            </div>

            {menu.map((item, index) => (
              <span className="flex items-center pl-10 lg:pl-20 py-4" key={index}>
                <PrismicLink
                  field={item.url}
                  className="text-white/60 hover:text-white text-2xl font-medium"
                >
                  <PrismicText field={item.label} />
                </PrismicLink>
              </span>
            ))}
          </aside>
        </nav>
      </div>
    );
  }
}

export default Navigation;
