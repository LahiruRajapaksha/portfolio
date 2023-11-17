import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../../hooks/useMediaQuery";
import MenuIcon from "../../assets/MenuIcon";
import { NAVBAR_ITEMS } from "../constants";
type LinkProps = {
  page: string;
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};

const Link = (props: LinkProps) => {
  const { page, selectedPage, setSelectedPage } = props;
  const pageToLoweCase = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === pageToLoweCase ? "text-black" : ""
      } hover:text-black transition duration-500`}
      href={`#${pageToLoweCase}`}
      onClick={() => setSelectedPage(pageToLoweCase)}
    >
      {page}
    </AnchorLink>
  );
};

type PageNavBarProps = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};
const PageNavBar = (props: PageNavBarProps) => {
  const { selectedPage, setSelectedPage } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 480px)");
  return (
    <nav className="z-40 w-full fixed top-0 py-6">
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">Lahiru</h4>
        {isLargeScreen ? (
          <div className="flex justify-between gap-16 font-opensans text-sm">
            {NAVBAR_ITEMS.map((item) => (
              <Link
                key={item}
                page={item}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        ) : (
          <button
            className="rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon size="24px" />
          </button>
        )}
        {isMenuOpen && !isLargeScreen && (
          <div className="flex flex-col gap-8 py-16">
            {NAVBAR_ITEMS.map((item) => (
              <Link
                key={item}
                page={item}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default PageNavBar;
