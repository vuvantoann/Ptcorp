import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
export default function Header() {
  const { username } = useSelector((root) => root.UserReducer);
  console.log(username)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header
      className="site-header header-main-layout-1 ast-primary-menu-enabled ast-logo-title-inline ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline"
      id="masthead"
      itemType="https://schema.org/WPHeader"
      itemScope="itemscope"
      itemID="#masthead"
    >
      <div id="ast-desktop-header" data-toggle-type="dropdown">
        <div className="ast-main-header-wrap main-header-bar-wrap ">
          <div
            className="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item"
            data-section="section-primary-header-builder"
          >
            <div
              className="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container"
              data-section="section-primary-header-builder"
            >
              <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                  <div
                    className="ast-builder-layout-element ast-flex site-header-focus-item"
                    data-section="title_tagline"
                  >
                    <div
                      className="site-branding ast-site-identity"
                      itemType="https://schema.org/Organization"
                      itemScope="itemscope"
                    >
                      <span className="site-logo-img">
                        <NavLink
                          to="/"
                          className="custom-logo-link transparent-custom-logo"
                          rel="home"
                          itemProp="url"
                          aria-label="PT CORP - Smart Software"
                        >
                          <img
                            width={144}
                            height={32}
                            alt="logo-pt-corp-HD"
                            decoding="async"
                            data-srcset="https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-144x32.png 144w, https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-300x66.png 300w, https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-1024x226.png 1024w, https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-768x170.png 768w, https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-1536x340.png 1536w, https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-2048x453.png 2048w"
                            data-src="https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-144x32.png"
                            data-sizes="(max-width: 144px) 100vw, 144px"
                            className="custom-logo lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          />
                          <noscript>
                            &lt;img width="144" height="32"
                            alt="logo-pt-corp-HD" decoding="async"
                            data-srcset="https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-144x32.png
                            144w,
                            https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-300x66.png
                            300w,
                            https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-1024x226.png
                            1024w,
                            https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-768x170.png
                            768w,
                            https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-1536x340.png
                            1536w,
                            https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-2048x453.png
                            2048w"
                            data-src="https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-144x32.png"
                            data-sizes="(max-width: 144px) 100vw, 144px"
                            class="custom-logo lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                            /&gt;&lt;noscript&gt;&lt;img width="144" height="32"
                            src="wp-content/uploads/2023/09/logo-pt-corp-HD-144x32.png"
                            class="custom-logo" alt="logo-pt-corp-HD"
                            decoding="async"
                            srcset="wp-content/uploads/2023/09/logo-pt-corp-HD-144x32.png
                            144w,
                            wp-content/uploads/2023/09/logo-pt-corp-HD-300x66.png
                            300w,
                            wp-content/uploads/2023/09/logo-pt-corp-HD-1024x226.png
                            1024w,
                            wp-content/uploads/2023/09/logo-pt-corp-HD-768x170.png
                            768w,
                            wp-content/uploads/2023/09/logo-pt-corp-HD-1536x340.png
                            1536w,
                            wp-content/uploads/2023/09/logo-pt-corp-HD-2048x453.png
                            2048w" sizes="(max-width: 144px) 100vw, 144px" /&gt;
                          </noscript>
                        </NavLink>
                      </span>
                    </div>
                    {/* .site-branding */}
                  </div>
                  <div
                    className="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item"
                    data-section="section-hb-menu-1"
                  >
                    <div className="ast-main-header-bar-alignment">
                      <div className="main-header-bar-navigation">
                        <nav
                          className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item"
                          id="primary-site-navigation-desktop"
                          aria-label="Site Navigation"
                          itemType="https://schema.org/SiteNavigationElement"
                          itemScope="itemscope"
                        >
                          <div className="main-navigation ast-inline-flex">
                            <ul
                              id="ast-hf-menu-1"
                              className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex  submenu-with-border stack-on-mobile ast-mega-menu-enabled"
                            >
                              <li
                                id="menu-item-1121"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-1121"
                              >
                                <NavLink to="/" className="menu-link">
                                  <span className="ast-icon icon-arrow">
                                    <svg
                                      className="ast-arrow-svg"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      version="1.1"
                                      x="0px"
                                      y="0px"
                                      width="26px"
                                      height="16.043px"
                                      viewBox="57 35.171 26 16.043"
                                      enableBackground="new 57 35.171 26 16.043"
                                      xmlSpace="preserve"
                                    >
                                      <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                                    </svg>
                                  </span>
                                  <span className="menu-text">Trang chủ</span>
                                </NavLink>
                              </li>
                              <li
                                id="menu-item-1122"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1122"
                              >
                                <NavLink to="/service" className="menu-link">
                                  <span className="ast-icon icon-arrow">
                                    <svg
                                      className="ast-arrow-svg"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      version="1.1"
                                      x="0px"
                                      y="0px"
                                      width="26px"
                                      height="16.043px"
                                      viewBox="57 35.171 26 16.043"
                                      enableBackground="new 57 35.171 26 16.043"
                                      xmlSpace="preserve"
                                    >
                                      <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                                    </svg>
                                  </span>
                                  <span className="menu-text">Dịch vụ</span>
                                </NavLink>
                              </li>
                              <li
                                id="menu-item-3281"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3281"
                              >
                                <NavLink to="/product" className="menu-link">
                                  <span className="ast-icon icon-arrow">
                                    <svg
                                      className="ast-arrow-svg"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      version="1.1"
                                      x="0px"
                                      y="0px"
                                      width="26px"
                                      height="16.043px"
                                      viewBox="57 35.171 26 16.043"
                                      enableBackground="new 57 35.171 26 16.043"
                                      xmlSpace="preserve"
                                    >
                                      <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                                    </svg>
                                  </span>
                                  <span className="menu-text">Sản phẩm</span>
                                </NavLink>
                              </li>
                              <li
                                id="menu-item-3281"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3281"
                              >
                                <NavLink to="/marketing" className="menu-link">
                                  <span className="ast-icon icon-arrow">
                                    <svg
                                      className="ast-arrow-svg"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      version="1.1"
                                      x="0px"
                                      y="0px"
                                      width="26px"
                                      height="16.043px"
                                      viewBox="57 35.171 26 16.043"
                                      enableBackground="new 57 35.171 26 16.043"
                                      xmlSpace="preserve"
                                    >
                                      <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                                    </svg>
                                  </span>
                                  <span className="menu-text">Marketing</span>
                                </NavLink>
                              </li>
                              <li
                                id="menu-item-1123"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1123"
                              >
                                <NavLink to="/about" className="menu-link">
                                  <span className="ast-icon icon-arrow">
                                    <svg
                                      className="ast-arrow-svg"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      version="1.1"
                                      x="0px"
                                      y="0px"
                                      width="26px"
                                      height="16.043px"
                                      viewBox="57 35.171 26 16.043"
                                      enableBackground="new 57 35.171 26 16.043"
                                      xmlSpace="preserve"
                                    >
                                      <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                                    </svg>
                                  </span>
                                  <span className="menu-text">Giới thiệu</span>
                                </NavLink>
                              </li>
                              <li
                                id="menu-item-344"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-344"
                              >
                                <NavLink to="/blog" className="menu-link">
                                  <span className="ast-icon icon-arrow">
                                    <svg
                                      className="ast-arrow-svg"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      version="1.1"
                                      x="0px"
                                      y="0px"
                                      width="26px"
                                      height="16.043px"
                                      viewBox="57 35.171 26 16.043"
                                      enableBackground="new 57 35.171 26 16.043"
                                      xmlSpace="preserve"
                                    >
                                      <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                                    </svg>
                                  </span>
                                  <span className="menu-text">Blog</span>
                                </NavLink>
                              </li>
                              <li
                                id="menu-item-1124"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1124"
                              >
                                <NavLink to="/contact" className="menu-link">
                                  <span className="ast-icon icon-arrow">
                                    <svg
                                      className="ast-arrow-svg"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      version="1.1"
                                      x="0px"
                                      y="0px"
                                      width="26px"
                                      height="16.043px"
                                      viewBox="57 35.171 26 16.043"
                                      enableBackground="new 57 35.171 26 16.043"
                                      xmlSpace="preserve"
                                    >
                                      <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                                    </svg>
                                  </span>
                                  <span className="menu-text">Liên hệ</span>
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                  <div
                    className="ast-builder-layout-element ast-flex site-header-focus-item ast-header-search"
                    data-section="section-header-search"
                  >
                    <div className="ast-search-menu-icon slide-search">
                      <form
                        role="search"
                        method="get"
                        className="search-form"
                        action="en/index.html"
                      >
                        <label>
                          <span className="screen-reader-text">
                            Search for:
                          </span>
                          <input
                            type="search"
                            className="search-field"
                            placeholder="Search …"
                            defaultValue
                            name="s"
                            tabIndex={-1}
                          />
                          <button
                            className="search-submit ast-search-submit"
                            aria-label="Search Submit"
                          >
                            <span hidden>Search</span>
                            <i>
                              <span className="ast-icon icon-search">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  viewBox="-888 480 142 142"
                                  enableBackground="new -888 480 142 142"
                                  xmlSpace="preserve"
                                >
                                  <path d="M-787.4,568.7h-6.3l-2.4-2.4c7.9-8.7,12.6-20.5,12.6-33.1c0-28.4-22.9-51.3-51.3-51.3  c-28.4,0-51.3,22.9-51.3,51.3c0,28.4,22.9,51.3,51.3,51.3c12.6,0,24.4-4.7,33.1-12.6l2.4,2.4v6.3l39.4,39.4l11.8-11.8L-787.4,568.7  L-787.4,568.7z M-834.7,568.7c-19.7,0-35.5-15.8-35.5-35.5c0-19.7,15.8-35.5,35.5-35.5c19.7,0,35.5,15.8,35.5,35.5  C-799.3,553-815,568.7-834.7,568.7L-834.7,568.7z" />
                                </svg>
                              </span>
                            </i>
                          </button>
                        </label>
                      </form>
                      <div className="ast-search-icon">
                        <a
                          className="slide-search astra-search-icon"
                          aria-label="Search icon link"
                          href="en/index.html#"
                        >
                          <span className="screen-reader-text">Search</span>
                          <span className="ast-icon icon-search">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              x="0px"
                              y="0px"
                              viewBox="-888 480 142 142"
                              enableBackground="new -888 480 142 142"
                              xmlSpace="preserve"
                            >
                              <path d="M-787.4,568.7h-6.3l-2.4-2.4c7.9-8.7,12.6-20.5,12.6-33.1c0-28.4-22.9-51.3-51.3-51.3  c-28.4,0-51.3,22.9-51.3,51.3c0,28.4,22.9,51.3,51.3,51.3c12.6,0,24.4-4.7,33.1-12.6l2.4,2.4v6.3l39.4,39.4l11.8-11.8L-787.4,568.7  L-787.4,568.7z M-834.7,568.7c-19.7,0-35.5-15.8-35.5-35.5c0-19.7,15.8-35.5,35.5-35.5c19.7,0,35.5,15.8,35.5,35.5  C-799.3,553-815,568.7-834.7,568.7L-834.7,568.7z" />
                            </svg>
                          </span>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ast-builder-layout-element ast-flex site-header-focus-item ast-header-button-1"
                    data-section="section-hb-button-1"
                  >
                    <div className="ast-builder-button-wrap ast-builder-button-size-sm">
                     {username !=="" ?  <NavLink
                        to="/signin"
                        className="ast-custom-button-link"
                        target="_self"
                      >
                        <div className="ast-custom-button">{username}</div>
                      </NavLink> : <NavLink
                        to="/signin"
                        className="ast-custom-button-link"
                        target="_self"
                      >
                        <div className="ast-custom-button">Đăng nhập</div>
                      </NavLink>}
                      <NavLink
                        to="/contact"
                        className="menu-link"
                        target="_self"
                      >
                        Tư vấn dịch vụ
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ast-desktop-header-content content-align-flex-start "
          style={{ display: isMenuOpen ? "block" : "none" }}
        >
          <div
            className="ast-builder-menu-mobile ast-builder-menu ast-builder-menu-mobile-focus-item ast-builder-layout-element site-header-focus-item"
            data-section="section-header-mobile-menu"
          >
            <div className="ast-main-header-bar-alignment">
              <div className="main-header-bar-navigation">
                <nav
                  className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item"
                  id="ast-desktop-site-navigation"
                  aria-label="Site Navigation"
                  itemType="https://schema.org/SiteNavigationElement"
                  itemScope="itemscope"
                >
                  <div className="main-navigation">
                    <ul
                      id="ast-desktop-toggle-menu"
                      className="main-header-menu ast-nav-menu ast-flex  submenu-with-border astra-menu-animation-fade  stack-on-mobile ast-mega-menu-enabled"
                    >
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-1121">
                        <NavLink to="/" className="menu-link">
                          <span className="ast-icon icon-arrow">
                            <svg
                              className="ast-arrow-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              x="0px"
                              y="0px"
                              width="26px"
                              height="16.043px"
                              viewBox="57 35.171 26 16.043"
                              enableBackground="new 57 35.171 26 16.043"
                              xmlSpace="preserve"
                            >
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg>
                          </span>
                          <span className="menu-text">Trang chủ</span>
                        </NavLink>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1122">
                        <NavLink to="/service" className="menu-link">
                          <span className="ast-icon icon-arrow">
                            <svg
                              className="ast-arrow-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              x="0px"
                              y="0px"
                              width="26px"
                              height="16.043px"
                              viewBox="57 35.171 26 16.043"
                              enableBackground="new 57 35.171 26 16.043"
                              xmlSpace="preserve"
                            >
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg>
                          </span>
                          <span className="menu-text">Dịch vụ</span>
                        </NavLink>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3281">
                        <NavLink to="/product" className="menu-link">
                          <span className="ast-icon icon-arrow">
                            <svg
                              className="ast-arrow-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              x="0px"
                              y="0px"
                              width="26px"
                              height="16.043px"
                              viewBox="57 35.171 26 16.043"
                              enableBackground="new 57 35.171 26 16.043"
                              xmlSpace="preserve"
                            >
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg>
                          </span>
                          <span className="menu-text">Sản phẩm</span>
                        </NavLink>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3281">
                        <NavLink to="/marketing" className="menu-link">
                          <span className="ast-icon icon-arrow">
                            <svg
                              className="ast-arrow-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              x="0px"
                              y="0px"
                              width="26px"
                              height="16.043px"
                              viewBox="57 35.171 26 16.043"
                              enableBackground="new 57 35.171 26 16.043"
                              xmlSpace="preserve"
                            >
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg>
                          </span>
                          <span className="menu-text">Marketing</span>
                        </NavLink>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1123">
                        <NavLink to="/about" className="menu-link">
                          <span className="ast-icon icon-arrow">
                            <svg
                              className="ast-arrow-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              x="0px"
                              y="0px"
                              width="26px"
                              height="16.043px"
                              viewBox="57 35.171 26 16.043"
                              enableBackground="new 57 35.171 26 16.043"
                              xmlSpace="preserve"
                            >
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg>
                          </span>
                          <span className="menu-text">Giới thiệu</span>
                        </NavLink>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-344">
                        <NavLink to="/blog" className="menu-link">
                          <span className="ast-icon icon-arrow">
                            <svg
                              className="ast-arrow-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              x="0px"
                              y="0px"
                              width="26px"
                              height="16.043px"
                              viewBox="57 35.171 26 16.043"
                              enableBackground="new 57 35.171 26 16.043"
                              xmlSpace="preserve"
                            >
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg>
                          </span>
                          <span className="menu-text">Blog</span>
                        </NavLink>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1124">
                        <NavLink to="/contact" className="menu-link">
                          <span className="ast-icon icon-arrow">
                            <svg
                              className="ast-arrow-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              x="0px"
                              y="0px"
                              width="26px"
                              height="16.043px"
                              viewBox="57 35.171 26 16.043"
                              enableBackground="new 57 35.171 26 16.043"
                              xmlSpace="preserve"
                            >
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                            </svg>
                          </span>
                          <span className="menu-text">Liên hệ</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Main Header Bar Wrap */}
      <div
        id="ast-mobile-header"
        className="ast-mobile-header-wrap "
        data-type="dropdown"
      >
        <div className="ast-main-header-wrap main-header-bar-wrap">
          <div
            className="ast-primary-header-bar ast-primary-header main-header-bar site-primary-header-wrap site-header-focus-item ast-builder-grid-row-layout-default ast-builder-grid-row-tablet-layout-default ast-builder-grid-row-mobile-layout-default"
            data-section="section-primary-header-builder"
          >
            <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
              <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                <div
                  className="ast-builder-layout-element ast-flex site-header-focus-item"
                  data-section="title_tagline"
                >
                  <div
                    className="site-branding ast-site-identity"
                    itemType="https://schema.org/Organization"
                    itemScope="itemscope"
                  >
                    <span className="site-logo-img">
                      <NavLink
                        to="/"
                        className="custom-logo-link transparent-custom-logo"
                        rel="home"
                        itemProp="url"
                        aria-label="PT CORP - Smart Software"
                      >
                        <img
                          width={144}
                          height={32}
                          alt="logo-pt-corp-HD"
                          decoding="async"
                          data-srcset="https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-144x32.png 144w, https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-300x66.png 300w, https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-1024x226.png 1024w, https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-768x170.png 768w, https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-1536x340.png 1536w, https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-2048x453.png 2048w"
                          data-src="https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-144x32.png"
                          data-sizes="(max-width: 144px) 100vw, 144px"
                          className="custom-logo lazyload"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        />
                        <noscript>
                          &lt;img width="144" height="32" alt="logo-pt-corp-HD"
                          decoding="async"
                          data-srcset="https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-144x32.png
                          144w,
                          https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-300x66.png
                          300w,
                          https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-1024x226.png
                          1024w,
                          https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-768x170.png
                          768w,
                          https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-1536x340.png
                          1536w,
                          https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-2048x453.png
                          2048w"
                          data-src="https://pt-corp.vn/wp-content/uploads/2023/09/logo-pt-corp-HD-144x32.png"
                          data-sizes="(max-width: 144px) 100vw, 144px"
                          class="custom-logo lazyload"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          /&gt;&lt;noscript&gt;&lt;img width="144" height="32"
                          src="wp-content/uploads/2023/09/logo-pt-corp-HD-144x32.png"
                          class="custom-logo" alt="logo-pt-corp-HD"
                          decoding="async"
                          srcset="wp-content/uploads/2023/09/logo-pt-corp-HD-144x32.png
                          144w,
                          wp-content/uploads/2023/09/logo-pt-corp-HD-300x66.png
                          300w,
                          wp-content/uploads/2023/09/logo-pt-corp-HD-1024x226.png
                          1024w,
                          wp-content/uploads/2023/09/logo-pt-corp-HD-768x170.png
                          768w,
                          wp-content/uploads/2023/09/logo-pt-corp-HD-1536x340.png
                          1536w,
                          wp-content/uploads/2023/09/logo-pt-corp-HD-2048x453.png
                          2048w" sizes="(max-width: 144px) 100vw, 144px" /&gt;
                        </noscript>
                      </NavLink>
                    </span>
                  </div>
                  {/* .site-branding */}
                </div>
              </div>
              <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                <div
                  className="ast-builder-layout-element ast-flex site-header-focus-item"
                  data-section="section-header-mobile-trigger"
                >
                  <div className="ast-button-wrap">
                    <button
                      type="button"
                      className={`menu-toggle main-header-menu-toggle ast-mobile-menu-trigger-minimal ${
                        isMenuOpen ? "active" : ""
                      }`}
                      aria-expanded={isMenuOpen}
                      onClick={toggleMenu}
                    >
                      <span className="screen-reader-text">Main Menu</span>
                      <span className="mobile-menu-toggle-icon">
                        <span className="ahfb-svg-iconset ast-inline-flex svg-baseline">
                          <svg
                            className="ast-mobile-svg ast-menu-svg"
                            fill="currentColor"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
                          </svg>
                        </span>
                        <span className="ahfb-svg-iconset ast-inline-flex svg-baseline">
                          <svg
                            className="ast-mobile-svg ast-close-svg"
                            fill="currentColor"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                          </svg>
                        </span>{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isMenuOpen ? (
          <div className="ast-mobile-header-content content-align-flex-start ">
            <div
              className="ast-builder-menu-mobile ast-builder-menu ast-builder-menu-mobile-focus-item ast-builder-layout-element site-header-focus-item"
              data-section="section-header-mobile-menu"
            >
              <div className="ast-main-header-bar-alignment">
                <div className="main-header-bar-navigation">
                  <nav
                    className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item"
                    id="ast-mobile-site-navigation"
                    aria-label="Site Navigation"
                    itemType="https://schema.org/SiteNavigationElement"
                    itemScope="itemscope"
                  >
                    <div className="main-navigation">
                      <ul
                        id="ast-hf-mobile-menu"
                        className="main-header-menu ast-nav-menu ast-flex  submenu-with-border astra-menu-animation-fade  stack-on-mobile ast-mega-menu-enabled"
                      >
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-1121">
                          <NavLink to="/" className="menu-link">
                            <span className="ast-icon icon-arrow">
                              <svg
                                className="ast-arrow-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                width="26px"
                                height="16.043px"
                                viewBox="57 35.171 26 16.043"
                                enableBackground="new 57 35.171 26 16.043"
                                xmlSpace="preserve"
                              >
                                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                              </svg>
                            </span>
                            <span className="menu-text">Trang chủ</span>
                          </NavLink>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1122">
                          <NavLink to="/service" className="menu-link">
                            <span className="ast-icon icon-arrow">
                              <svg
                                className="ast-arrow-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                width="26px"
                                height="16.043px"
                                viewBox="57 35.171 26 16.043"
                                enableBackground="new 57 35.171 26 16.043"
                                xmlSpace="preserve"
                              >
                                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                              </svg>
                            </span>
                            <span className="menu-text">Dịch vụ</span>
                          </NavLink>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3281">
                          <NavLink to="/product" className="menu-link">
                            <span className="ast-icon icon-arrow">
                              <svg
                                className="ast-arrow-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                width="26px"
                                height="16.043px"
                                viewBox="57 35.171 26 16.043"
                                enableBackground="new 57 35.171 26 16.043"
                                xmlSpace="preserve"
                              >
                                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                              </svg>
                            </span>
                            <span className="menu-text">Sản phẩm</span>
                          </NavLink>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3281">
                          <NavLink to="/marketing" className="menu-link">
                            <span className="ast-icon icon-arrow">
                              <svg
                                className="ast-arrow-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                width="26px"
                                height="16.043px"
                                viewBox="57 35.171 26 16.043"
                                enableBackground="new 57 35.171 26 16.043"
                                xmlSpace="preserve"
                              >
                                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                              </svg>
                            </span>
                            <span className="menu-text">Marketing</span>
                          </NavLink>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1123">
                          <NavLink to="/about" className="menu-link">
                            <span className="ast-icon icon-arrow">
                              <svg
                                className="ast-arrow-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                width="26px"
                                height="16.043px"
                                viewBox="57 35.171 26 16.043"
                                enableBackground="new 57 35.171 26 16.043"
                                xmlSpace="preserve"
                              >
                                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                              </svg>
                            </span>
                            <span className="menu-text">Giới thiệu</span>
                          </NavLink>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-344">
                          <NavLink to="/blog" className="menu-link">
                            <span className="ast-icon icon-arrow">
                              <svg
                                className="ast-arrow-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                width="26px"
                                height="16.043px"
                                viewBox="57 35.171 26 16.043"
                                enableBackground="new 57 35.171 26 16.043"
                                xmlSpace="preserve"
                              >
                                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                              </svg>
                            </span>
                            <span className="menu-text">Blog</span>
                          </NavLink>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1124">
                          <NavLink to="/contact" className="menu-link">
                            <span className="ast-icon icon-arrow">
                              <svg
                                className="ast-arrow-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                width="26px"
                                height="16.043px"
                                viewBox="57 35.171 26 16.043"
                                enableBackground="new 57 35.171 26 16.043"
                                xmlSpace="preserve"
                              >
                                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                              </svg>
                            </span>
                            <span className="menu-text">Liên hệ</span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </header>
  );
}
