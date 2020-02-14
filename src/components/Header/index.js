import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faChevronCircleUp,
  faShoppingCart,
  faPrescriptionBottleAlt,
  faCookieBite,
  faPrescription,
  faTree,
  faMortarPestle,
  faHands
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import NavItem from "../NavItem";
import { useSelector } from "react-redux";
import ShopMenuItem from "../ShopMenuItem";
const Header = () => {
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileShopMenu, setIsMobileShopMenuOpen] = useState(false);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const closeMenu = () => {
    setIsShopMenuOpen(false);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileShopMenuOpen(false);
  };
  const cart = useSelector(state => state.cart);
  let cartCount = 0;
  for (let i = 0; i < cart.length; i++) {
    cartCount += cart[i].quantity;
  }
  return (
    <div>
      <header id="header">
        <h1 id="logoHeader">
          <Link onClick={closeMenu} className="routerLink" to="/">
            Emporia
          </Link>
        </h1>
        <nav>
          <ul id="navList">
            <NavItem
              onClick={closeMenu}
              to="/shop/new-arrivals"
              content="New Arrivals"
            />

            <button
              id="shopMenuToggle"
              className="routerLink"
              onMouseOver={() => setIsShopMenuOpen(true)}
              onClick={() => setIsShopMenuOpen(!isShopMenuOpen)}
            >
              Shop{" "}
              {isShopMenuOpen ? (
                <FontAwesomeIcon id="menuChevron" icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon id="menuChevron" icon={faChevronDown} />
              )}
            </button>

            <NavItem onClick={closeMenu} to="/about" content="About" />

            {isLoggedIn ? (
              <NavItem onClick={closeMenu} to="/account" content="Account" />
            ) : (
              <>
                <NavItem onClick={closeMenu} to="/login" content="Log In" />
                <NavItem
                  onClick={closeMenu}
                  to="/register"
                  content="Register"
                />
              </>
            )}

            <NavItem
              onClick={closeMenu}
              to="/cart"
              content=""
              icon={faShoppingCart}
              cart={cart.length > 0 ? cartCount : ""}
            />
          </ul>
          {isShopMenuOpen && (
            <div id="shopMenu" onMouseLeave={closeMenu}>
              <h3 id="shopMenuHeading">Shop by Category</h3>

              <ShopMenuItem
                onClick={closeMenu}
                to="/shop/vitamins-supplements"
                icon={faPrescriptionBottleAlt}
                content="Vitamins & Supplements"
              />
              <ShopMenuItem
                onClick={closeMenu}
                to="/shop/skin-care"
                icon={faHands}
                content="Skin Care"
              />
              <ShopMenuItem
                onClick={closeMenu}
                to="/shop/probiotics"
                icon={faMortarPestle}
                content="Probiotics"
              />
              <ShopMenuItem
                onClick={closeMenu}
                to="/shop/mens-health"
                icon={faPrescription}
                content="Men's Health"
              />
              <ShopMenuItem
                onClick={closeMenu}
                to="/shop/childrens-health"
                icon={faCookieBite}
                content="Children's Health"
              />
              <ShopMenuItem
                onClick={closeMenu}
                to="/shop/holistic"
                icon={faTree}
                content="Holistic"
              />
              <button id="closeMenuBtn" onClick={closeMenu}>
                <FontAwesomeIcon icon={faChevronCircleUp} />
              </button>
            </div>
          )}
        </nav>
        <div id="mobileHeaderContent">
          <NavItem
            onClick={closeMobileMenu}
            to="/cart"
            content=""
            icon={faShoppingCart}
            cart={cart.length > 0 ? cartCount : ""}
          />
          <button
            id="mobileMenu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            Menu
          </button>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div
          id="mobileMenuContent"
          className={isMobileMenuOpen ? "open" : "closed"}
        >
          <nav>
            <ul>
              <NavItem
                to="/new-arrivals"
                onClick={closeMobileMenu}
                class="mobileMenu"
                content="New Arrivals"
              />

              <button
                id="mobileShopMenuToggle"
                className="routerLink"
                // onMouseOver={() => setIsMobileShopMenuOpen(true)}
                onClick={() => setIsMobileShopMenuOpen(!isMobileShopMenu)}
              >
                Shop{" "}
                {isMobileShopMenu ? (
                  <FontAwesomeIcon id="menuChevron" icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon id="menuChevron" icon={faChevronDown} />
                )}
              </button>

              {isMobileShopMenu ? (
                <div id="mobileShopMenuContent">
                  <ShopMenuItem
                    onClick={closeMobileMenu}
                    to="/shop/vitamins-supplements"
                    icon={faPrescriptionBottleAlt}
                    content="Vitamins & Supplements"
                    mobile={true}
                  />
                  <br />
                  <ShopMenuItem
                    onClick={closeMobileMenu}
                    to="/shop/skin-care"
                    icon={faHands}
                    content="Skin Care"
                    mobile={true}
                  />
                  <br />
                  <ShopMenuItem
                    onClick={closeMobileMenu}
                    to="/shop/probiotics"
                    icon={faMortarPestle}
                    content="Probiotics"
                    mobile={true}
                  />
                  <br />
                  <ShopMenuItem
                    onClick={closeMobileMenu}
                    to="/shop/mens-health"
                    icon={faPrescription}
                    content="Men's Health"
                    mobile={true}
                  />
                  <br />
                  <ShopMenuItem
                    onClick={closeMobileMenu}
                    to="/shop/childrens-health"
                    icon={faCookieBite}
                    content="Children's Health"
                    mobile={true}
                  />
                  <br />
                  <ShopMenuItem
                    onClick={closeMobileMenu}
                    to="/shop/holistic"
                    icon={faTree}
                    content="Holistic"
                    mobile={true}
                  />
                  <br />
                </div>
              ) : (
                ""
              )}

              <NavItem
                onClick={closeMobileMenu}
                to="/about"
                class="mobileMenu"
                content="About"
              />

              {isLoggedIn ? (
                <NavItem
                  onClick={closeMobileMenu}
                  to="/account"
                  content="Account"
                />
              ) : (
                <>
                  <NavItem
                    onClick={closeMobileMenu}
                    to="/login"
                    class="mobileMenu"
                    class="login"
                    content="Log In"
                  />
                  <NavItem
                    onClick={closeMobileMenu}
                    to="/register"
                    class="mobileMenu register"
                    content="Register"
                  />
                </>
              )}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
export default Header;