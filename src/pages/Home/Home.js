import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="hfeed site" id="page">
      <Header />
      {/* #masthead */}
      <div id="content" className="site-content" style={{ marginTop: "-63px" }}>
        <div className="ast-container">
          <div id="primary" className="content-area primary">
            <main id="main" className="site-main">
              <article
                className="post-6 page type-page status-publish has-post-thumbnail ast-article-single"
                id="post-6"
                itemType="https://schema.org/CreativeWork"
                itemScope="itemscope"
              >
                <header className="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup"></header>{" "}
                {/* .entry-header */}
                <div className="entry-content clear" itemProp="text">
                  <div
                    data-elementor-type="wp-page"
                    data-elementor-id={6}
                    className="elementor elementor-6"
                  >
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-78d67ee elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                      data-id="78d67ee"
                      data-element_type="section"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-background-overlay" />
                      <div className="elementor-container elementor-column-gap-default">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-df8fdda"
                          data-id="df8fdda"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-a8cd313 elementor-widget elementor-widget-heading"
                              data-id="a8cd313"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t/*! elementor - v3.16.0 - 09-10-2023 */\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-heading-title {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tline-height: 1\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: inherit;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: inherit;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tline-height: inherit\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-small {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 15px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-medium {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 19px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-large {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 29px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-xl {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 39px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-xxl {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 59px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t",
                                  }}
                                />
                                <h6 className="elementor-heading-title elementor-size-default">
                                  Welcome to PTC
                                </h6>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-6404481 elementor-widget elementor-widget-heading"
                              data-id={6404481}
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h1 className="elementor-heading-title elementor-size-default">
                                  PT CORP - Smart Software Service
                                </h1>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-df914fa elementor-widget elementor-widget-heading"
                              data-id="df914fa"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-heading-title elementor-size-default">
                                  PT Corp cung cấp các dịch vụ và mang đến những
                                  sản phẩm công nghệ chuyên nghiệp!
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-9253f1c elementor-widget__width-auto elementor-mobile-align-justify elementor-widget-mobile__width-inherit elementor-widget elementor-widget-button"
                              data-id="9253f1c"
                              data-element_type="widget"
                              data-widget_type="button.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                  <a
                                    className="elementor-button elementor-button-link elementor-size-sm"
                                    href="en/index.html#"
                                  >
                                    <span className="elementor-button-content-wrapper">
                                      <span className="elementor-button-text">
                                        Liên hệ ngay
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-620cdae elementor-widget__width-auto elementor-mobile-align-center elementor-widget-mobile__width-inherit elementor-widget elementor-widget-button"
                              data-id="620cdae"
                              data-element_type="widget"
                              data-widget_type="button.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                  <a
                                    className="elementor-button elementor-button-link elementor-size-sm"
                                    href="en/index.html#"
                                  >
                                    <span className="elementor-button-content-wrapper">
                                      <span className="elementor-button-icon elementor-align-icon-right">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 2048 2048"
                                        >
                                          <path d="M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z"></path>
                                        </svg>{" "}
                                      </span>
                                      <span className="elementor-button-text">
                                        Tìm hiểu thêm
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-9c8b34a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="9c8b34a"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6a106f8"
                          data-id="6a106f8"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-c7c58e7 elementor-widget elementor-widget-heading"
                              data-id="c7c58e7"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h6 className="elementor-heading-title elementor-size-default">
                                  Các sản phẩm
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-dae91c5"
                          data-id="dae91c5"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-bbc328b elementor-widget elementor-widget-heading"
                              data-id="bbc328b"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  Sản phẩm của chúng tôi
                                </h2>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-5de8bc4 elementor-widget elementor-widget-text-editor"
                              data-id="5de8bc4"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t/*! elementor - v3.16.0 - 09-10-2023 */\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: #69727d;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #fff\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #69727d;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tborder: 3px solid;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: transparent\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin-top: 8px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 1em;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\theight: 1em\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfloat: left;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tline-height: 1;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 50px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor .elementor-drop-cap-letter {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: inline-block\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t",
                                  }}
                                />
                                <div
                                  className="elementor-element elementor-element-12a1d66 elementor-widget elementor-widget-text-editor"
                                  data-id="12a1d66"
                                  data-element_type="widget"
                                  data-widget_type="text-editor.default"
                                >
                                  <div className="elementor-widget-container">
                                    <p>
                                      PT Corp phát triển các sản phẩm công nghệ
                                      mũi nhọn để trở thành công cụ đắc lực giúp
                                      ngành giáo dục phát triển
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-956e19e elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                              data-id="956e19e"
                              data-element_type="widget"
                              data-widget_type="divider.default"
                            >
                              <div className="elementor-widget-container">
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t/*! elementor - v3.16.0 - 09-10-2023 */\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t--divider-border-style: none;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t--divider-border-width: 1px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t--divider-color: #0c0d0e;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t--divider-icon-size: 20px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t--divider-element-spacing: 10px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t--divider-pattern-height: 24px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t--divider-pattern-size: 20px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t--divider-pattern-url: none;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t--divider-pattern-repeat: repeat-x\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider .elementor-divider {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: flex\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider .elementor-divider__text {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 15px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tline-height: 1;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmax-width: 95%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider .elementor-divider__element {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: 0 var(--divider-element-spacing);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tflex-shrink: 0\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider .elementor-icon {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: var(--divider-icon-size)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider .elementor-divider-separator {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdirection: ltr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--view-line_icon .elementor-divider-separator,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--view-line_text .elementor-divider-separator {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--view-line_icon .elementor-divider-separator:after,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--view-line_icon .elementor-divider-separator:before,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--view-line_text .elementor-divider-separator:after,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--view-line_text .elementor-divider-separator:before {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcontent: "";\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tborder-bottom: 0;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tflex-grow: 1;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tborder-top: var(--divider-border-width) var(--divider-border-style) var(--divider-color)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tflex-grow: 0;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tflex-shrink: 100\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--element-align-left .elementor-divider-separator:before {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcontent: none\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--element-align-left .elementor-divider__element {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin-left: 0\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tflex-grow: 0;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tflex-shrink: 100\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--element-align-right .elementor-divider-separator:after {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcontent: none\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--element-align-right .elementor-divider__element {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin-right: 0\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tborder-top: var(--divider-border-width) var(--divider-border-style) var(--divider-color)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--separator-type-pattern {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t--divider-border-style: none\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmin-height: var(--divider-pattern-height);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-webkit-mask-size: var(--divider-pattern-size) 100%;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmask-size: var(--divider-pattern-size) 100%;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-webkit-mask-repeat: var(--divider-pattern-repeat);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmask-repeat: var(--divider-pattern-repeat);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: var(--divider-color);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-webkit-mask-image: var(--divider-pattern-url);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmask-image: var(--divider-pattern-url)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--no-spacing {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t--divider-pattern-size: auto\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-divider--bg-round {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t--divider-pattern-repeat: round\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.rtl .elementor-widget-divider .elementor-divider__text {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdirection: rtl\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.e-con-inner>.elementor-widget-divider,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.e-con>.elementor-widget-divider {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: var(--container-widget-width, 100%);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t--flex-grow: var(--container-widget-flex-grow)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t',
                                  }}
                                />
                                <div className="elementor-divider">
                                  <span className="elementor-divider-separator"></span>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-ee11d03 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="ee11d03"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <link
                                  rel="stylesheet"
                                  href="wp-content/plugins/elementor/assets/css/widget-icon-box.min.css"
                                />
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <span className="elementor-icon elementor-animation-">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        id="Layer_1"
                                        data-name="Layer 1"
                                        viewBox="0 0 255 255"
                                      >
                                        <defs>
                                          <style
                                            dangerouslySetInnerHTML={{
                                              __html:
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill: url(en/index.html);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t",
                                            }}
                                          />
                                          <linearGradient
                                            id="logo"
                                            x1="0.5"
                                            y1={128}
                                            x2="255.5"
                                            y2={128}
                                            gradientUnits="userSpaceOnUse"
                                          >
                                            <stop
                                              offset={0}
                                              stopColor="#1c75bc"
                                            />
                                            <stop
                                              offset="0.54"
                                              stopColor="#20a7e0"
                                            />
                                            <stop
                                              offset={1}
                                              stopColor="#00aeef"
                                            />
                                          </linearGradient>
                                        </defs>
                                        <path
                                          className="cls-1"
                                          d="M255.41,125.87c0-.12,0-.21,0-.3v-.13a129.51,129.51,0,0,0-2.51-23A127.65,127.65,0,0,0,153.34,3,128.4,128.4,0,0,0,132.88.5h-9.83A127.15,127.15,0,0,0,51.27,26.08,127.58,127.58,0,0,0,3,102.49,129.47,129.47,0,0,0,.5,128a128.16,128.16,0,0,0,2.57,25.56A127.53,127.53,0,0,0,153.34,253a124.6,124.6,0,0,0,26.8-8.6l.27-.12c2.45-1.13,4.84-2.3,7.17-3.55a4.38,4.38,0,0,0,.61-.31.11.11,0,0,0,.09,0,0,0,0,0,1,0,0s.09,0,.12-.09c.65-.34,1.29-.7,1.93-1.1a.58.58,0,0,0,.25-.12c.46-.22.89-.46,1.32-.71s.85-.52,1.28-.79a.23.23,0,0,0,.12-.06.63.63,0,0,0,.22-.16c.16-.11.31-.24.47-.36l11.35,12.14a20.72,20.72,0,0,0,28.46,1.47,18.79,18.79,0,0,0,1.53-27.33L151,132.94c-.26-.31-.55-.58-.8-.86a24.46,24.46,0,0,0-7.52-5.05,19.91,19.91,0,0,0-2-.79,32.76,32.76,0,0,0-11.19-1.93H51.27V124A76.83,76.83,0,0,1,124,51.51c1.32-.06,2.64-.09,4-.09s2.64,0,4,.09a77,77,0,0,1,68.48,51,73.86,73.86,0,0,1,4,18c.24,2.45.37,4.92.37,7.43v.1a25.48,25.48,0,0,0,23.18,25.46c.73.06,1.44.09,2.17.09s1.44,0,2.18-.09a25.48,25.48,0,0,0,23.09-22.86v-.09c0-.1,0-.22,0-.34.06-.71.09-1.44.09-2.17S255.47,126.58,255.41,125.87ZM130.89,169.41l.12.13,3.38,3.61a.69.69,0,0,1,.1.12L158,198.39l-1.12.5c-1.16.46-2.33.89-3.52,1.31a76.82,76.82,0,0,1-51-.09A76.73,76.73,0,0,1,59.74,163h52A30.32,30.32,0,0,1,130.89,169.41Z"
                                          transform="translate(-0.5 -0.5)"
                                        />
                                      </svg>{" "}
                                    </span>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h5 className="elementor-icon-box-title">
                                      <span>EduQuiz </span>
                                    </h5>
                                    <p className="elementor-icon-box-description">
                                      Công cụ thi trắc nghiệm trực tuyến miễn
                                      phí cho mọi đối tượng.{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-411f023 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="411f023"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <span className="elementor-icon elementor-animation-">
                                      <i
                                        aria-hidden="true"
                                        className="far fa-paper-plane"
                                      />{" "}
                                    </span>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h5 className="elementor-icon-box-title">
                                      <span>EduCMS </span>
                                    </h5>
                                    <p className="elementor-icon-box-description">
                                      Công nghệ phát triển website quảng bá khóa
                                      học, quản lý tuyển sinh, thanh toán trực
                                      tuyến{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-dc99242 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="dc99242"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <span className="elementor-icon elementor-animation-">
                                      <i
                                        aria-hidden="true"
                                        className="far fa-object-ungroup"
                                      />{" "}
                                    </span>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h5 className="elementor-icon-box-title">
                                      <span>EduLMS </span>
                                    </h5>
                                    <p className="elementor-icon-box-description">
                                      Phần mềm quản lý nhà trường, trung tâm đào
                                      tạo.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-4f74ed5 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                      data-id="4f74ed5"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0499c99"
                          data-id="0499c99"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-a4ffdbd elementor-widget elementor-widget-image"
                              data-id="a4ffdbd"
                              data-element_type="widget"
                              data-widget_type="image.default"
                            >
                              <div className="elementor-widget-container">
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t/*! elementor - v3.16.0 - 09-10-2023 */\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: center\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image a {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: inline-block\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image a img[src$=".svg"] {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 48px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image img {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvertical-align: middle;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: inline-block\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t',
                                  }}
                                />{" "}
                                <img
                                  decoding="async"
                                  width={1920}
                                  height={640}
                                  alt
                                  data-srcset="https://pt-corp.vn/wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img.jpg 1920w, https://pt-corp.vn/wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-300x100.jpg 300w, https://pt-corp.vn/wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-1024x341.jpg 1024w, https://pt-corp.vn/wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-768x256.jpg 768w, https://pt-corp.vn/wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-1536x512.jpg 1536w"
                                  data-src="https://pt-corp.vn/wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img.jpg"
                                  data-sizes="(max-width: 1920px) 100vw, 1920px"
                                  className="attachment-full size-full wp-image-1174 lazyload"
                                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                />
                                <noscript>
                                  &lt;img decoding="async" width="1920"
                                  height="640"
                                  src="wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img.jpg"
                                  class="attachment-full size-full
                                  wp-image-1174" alt=""
                                  srcset="wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img.jpg
                                  1920w,
                                  wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-300x100.jpg
                                  300w,
                                  wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-1024x341.jpg
                                  1024w,
                                  wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-768x256.jpg
                                  768w,
                                  wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-1536x512.jpg
                                  1536w" sizes="(max-width: 1920px) 100vw,
                                  1920px" /&gt;
                                </noscript>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-732de15 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="732de15"
                      data-element_type="section"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-background-overlay" />
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-34e8bb9"
                          data-id="34e8bb9"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-e89301a elementor-widget elementor-widget-heading"
                              data-id="e89301a"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h6 className="elementor-heading-title elementor-size-default">
                                  Dịch vụ
                                </h6>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-629407b elementor-widget elementor-widget-heading"
                              data-id="629407b"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  Dịch vụ của chúng tôi
                                </h2>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-64fa893 elementor-widget elementor-widget-text-editor"
                              data-id="64fa893"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <div
                                  className="elementor-element elementor-element-005631b elementor-widget elementor-widget-text-editor"
                                  data-id="005631b"
                                  data-element_type="widget"
                                  data-widget_type="text-editor.default"
                                >
                                  <div className="elementor-widget-container">
                                    <p>
                                      PT Corp mang đến các dịch vụ công nghệ,
                                      đồng hành cùng các doanh nghiệp trong thời
                                      đại 4.0
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-4fdf166 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="4fdf166"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <a
                                      href="en/index.html#"
                                      className="elementor-icon elementor-animation-"
                                      tabIndex={-1}
                                    >
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-sync-alt"
                                      />{" "}
                                    </a>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h5 className="elementor-icon-box-title">
                                      <a href="en/index.html#">
                                        Tư vấn chuyển đổi số{" "}
                                      </a>
                                    </h5>
                                    <p className="elementor-icon-box-description">
                                      Giúp các doanh nghiệp quản lý và vận hành
                                      bộ máy theo hướng tự động, hiệu quả và
                                      chuyên nghiệp
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-4dc0363 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="4dc0363"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <a
                                      href="en/index.html#"
                                      className="elementor-icon elementor-animation-"
                                      tabIndex={-1}
                                    >
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-cogs"
                                      />
                                    </a>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h5 className="elementor-icon-box-title">
                                      <a href="en/index.html#">
                                        Phát triển Web-App{" "}
                                      </a>
                                    </h5>
                                    <p className="elementor-icon-box-description">
                                      PT Corp chuyên thực hiện các dự án Web-App
                                      từ đầu đến cuối
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-60a28ae elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="60a28ae"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <a
                                      href="en/index.html#"
                                      className="elementor-icon elementor-animation-"
                                      tabIndex={-1}
                                    >
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-globe"
                                      />
                                    </a>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h5 className="elementor-icon-box-title">
                                      <a href="en/index.html#">
                                        Thiết kế website chuyên nghiệp{" "}
                                      </a>
                                    </h5>
                                    <p className="elementor-icon-box-description">
                                      PT Corp giúp doanh nghiệp thiết kế website
                                      chuẩn chỉnh: Chuẩn nhận diện thương hiệu,
                                      Chuẩn giao diện UI/UX, Chuẩn SEO{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-bcaa1fd elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="bcaa1fd"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <a
                                      href="en/index.html#"
                                      className="elementor-icon elementor-animation-"
                                      tabIndex={-1}
                                    >
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-chart-line"
                                      />{" "}
                                    </a>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h5 className="elementor-icon-box-title">
                                      <a href="en/index.html#">
                                        Digital Marketing{" "}
                                      </a>
                                    </h5>
                                    <p className="elementor-icon-box-description">
                                      Các dịch vụ quảng bá sản phẩm – dịch vụ
                                      của doanh nghiệp tiếp cận gần hơn đến
                                      người tiêu dùng.{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-2817bf7 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="2817bf7"
                      data-element_type="section"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-77502c4"
                          data-id="77502c4"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-67d42cf elementor-widget elementor-widget-heading"
                              data-id="67d42cf"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h6 className="elementor-heading-title elementor-size-default">
                                  Đối tác &amp; Khách hàng
                                </h6>
                              </div>
                            </div>
                            <section
                              className="elementor-section elementor-inner-section elementor-element elementor-element-ec90427 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                              data-id="ec90427"
                              data-element_type="section"
                            >
                              <div className="elementor-container elementor-column-gap-default">
                                <div
                                  className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-409501c"
                                  data-id="409501c"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-22c20b2 elementor-widget elementor-widget-image"
                                      data-id="22c20b2"
                                      data-element_type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <img
                                          decoding="async"
                                          width={531}
                                          height={100}
                                          alt
                                          data-srcset="https://pt-corp.vn/wp-content/uploads/2023/10/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9jS0tjcy9NQUZ1eEhjS0tjcy8xL3AucG5n.webp 531w, https://pt-corp.vn/wp-content/uploads/2023/10/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9jS0tjcy9NQUZ1eEhjS0tjcy8xL3AucG5n-300x56.webp 300w"
                                          data-src="https://pt-corp.vn/wp-content/uploads/2023/10/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9jS0tjcy9NQUZ1eEhjS0tjcy8xL3AucG5n.webp"
                                          data-sizes="(max-width: 531px) 100vw, 531px"
                                          className="attachment-full size-full wp-image-3176 lazyload"
                                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        />
                                        <noscript>
                                          &lt;img decoding="async" width="531"
                                          height="100"
                                          src="wp-content/uploads/2023/10/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9jS0tjcy9NQUZ1eEhjS0tjcy8xL3AucG5n.webp"
                                          class="attachment-full size-full
                                          wp-image-3176" alt=""
                                          srcset="wp-content/uploads/2023/10/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9jS0tjcy9NQUZ1eEhjS0tjcy8xL3AucG5n.webp
                                          531w,
                                          wp-content/uploads/2023/10/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9jS0tjcy9NQUZ1eEhjS0tjcy8xL3AucG5n-300x56.webp
                                          300w" sizes="(max-width: 531px) 100vw,
                                          531px" /&gt;
                                        </noscript>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-b2c6c18"
                                  data-id="b2c6c18"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-267bcee elementor-widget elementor-widget-image"
                                      data-id="267bcee"
                                      data-element_type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <img
                                          decoding="async"
                                          width={200}
                                          height={104}
                                          alt
                                          data-src="https://pt-corp.vn/wp-content/uploads/2023/10/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9QdElRMC9NQUZ1eEJQdElRMC8xL3AucG5n.webp"
                                          className="attachment-full size-full wp-image-3178 lazyload"
                                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        />
                                        <noscript>
                                          &lt;img decoding="async" width="200"
                                          height="104"
                                          src="wp-content/uploads/2023/10/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9QdElRMC9NQUZ1eEJQdElRMC8xL3AucG5n.webp"
                                          class="attachment-full size-full
                                          wp-image-3178" alt="" /&gt;
                                        </noscript>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-fbc7daa"
                                  data-id="fbc7daa"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-99fd478 elementor-widget elementor-widget-image"
                                      data-id="99fd478"
                                      data-element_type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <img
                                          decoding="async"
                                          width={640}
                                          height={520}
                                          alt
                                          data-srcset="https://pt-corp.vn/wp-content/uploads/2023/10/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qR1F5by9NQUZ1eExqR1F5by8xL3AucG5n.webp 640w, https://pt-corp.vn/wp-content/uploads/2023/10/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qR1F5by9NQUZ1eExqR1F5by8xL3AucG5n-300x244.webp 300w"
                                          data-src="https://pt-corp.vn/wp-content/uploads/2023/10/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qR1F5by9NQUZ1eExqR1F5by8xL3AucG5n.webp"
                                          data-sizes="(max-width: 640px) 100vw, 640px"
                                          className="attachment-full size-full wp-image-3180 lazyload"
                                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        />
                                        <noscript>
                                          &lt;img decoding="async" width="640"
                                          height="520"
                                          src="wp-content/uploads/2023/10/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qR1F5by9NQUZ1eExqR1F5by8xL3AucG5n.webp"
                                          class="attachment-full size-full
                                          wp-image-3180" alt=""
                                          srcset="wp-content/uploads/2023/10/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qR1F5by9NQUZ1eExqR1F5by8xL3AucG5n.webp
                                          640w,
                                          wp-content/uploads/2023/10/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qR1F5by9NQUZ1eExqR1F5by8xL3AucG5n-300x244.webp
                                          300w" sizes="(max-width: 640px) 100vw,
                                          640px" /&gt;
                                        </noscript>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-c9048a9"
                                  data-id="c9048a9"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-3103f8e elementor-widget elementor-widget-image"
                                      data-id="3103f8e"
                                      data-element_type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <img
                                          decoding="async"
                                          width={199}
                                          height={162}
                                          alt
                                          data-src="https://pt-corp.vn/wp-content/uploads/2023/10/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qVmZ4Yy9NQUZ1eEVqVmZ4Yy8xL3AucG5n.webp"
                                          className="attachment-full size-full wp-image-3182 lazyload"
                                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        />
                                        <noscript>
                                          &lt;img decoding="async" width="199"
                                          height="162"
                                          src="wp-content/uploads/2023/10/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qVmZ4Yy9NQUZ1eEVqVmZ4Yy8xL3AucG5n.webp"
                                          class="attachment-full size-full
                                          wp-image-3182" alt="" /&gt;
                                        </noscript>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-ec558c2"
                                  data-id="ec558c2"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-c33851c elementor-widget elementor-widget-image"
                                      data-id="c33851c"
                                      data-element_type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <img
                                          decoding="async"
                                          width={200}
                                          height={62}
                                          alt
                                          data-src="https://pt-corp.vn/wp-content/uploads/2023/10/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9kX1ppQS9NQUZ1eElkX1ppQS8xL3AucG5n.webp"
                                          className="attachment-full size-full wp-image-3184 lazyload"
                                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        />
                                        <noscript>
                                          &lt;img decoding="async" width="200"
                                          height="62"
                                          src="wp-content/uploads/2023/10/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9kX1ppQS9NQUZ1eElkX1ppQS8xL3AucG5n.webp"
                                          class="attachment-full size-full
                                          wp-image-3184" alt="" /&gt;
                                        </noscript>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-8111ebc elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="8111ebc"
                      data-element_type="section"
                      data-settings='{"background_background":"gradient"}'
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a4d56a0"
                          data-id="a4d56a0"
                          data-element_type="column"
                          data-settings='{"background_background":"classic"}'
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-f9b3f82 elementor-view-stacked elementor-position-left elementor-widget__width-auto elementor-widget-mobile__width-initial elementor-shape-circle elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                              data-id="f9b3f82"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <span className="elementor-icon elementor-animation-">
                                      <i
                                        aria-hidden="true"
                                        className="fab fa-google"
                                      />
                                    </span>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <div className="elementor-icon-box-title">
                                      <span>4.8 </span>
                                    </div>
                                    <p className="elementor-icon-box-description">
                                      200+ Reviews{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-d3831eb elementor-view-stacked elementor-position-left elementor-widget__width-auto elementor-widget-mobile__width-initial elementor-shape-circle elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                              data-id="d3831eb"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <span className="elementor-icon elementor-animation-">
                                      <i
                                        aria-hidden="true"
                                        className="fab fa-facebook-f"
                                      />{" "}
                                    </span>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <div className="elementor-icon-box-title">
                                      <span>4.6 </span>
                                    </div>
                                    <p className="elementor-icon-box-description">
                                      400+ Reviews{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-e1be763 elementor-view-stacked elementor-position-left elementor-widget__width-auto elementor-widget-mobile__width-initial elementor-shape-circle elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                              data-id="e1be763"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <span className="elementor-icon elementor-animation-">
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-map-marker-alt"
                                      />{" "}
                                    </span>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <div className="elementor-icon-box-title">
                                      <span>4.8 </span>
                                    </div>
                                    <p className="elementor-icon-box-description">
                                      100+ Reviews{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-8e9190d elementor-view-stacked elementor-position-left elementor-widget__width-auto elementor-widget-mobile__width-initial elementor-shape-circle elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                              data-id="8e9190d"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <span className="elementor-icon elementor-animation-">
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-star"
                                      />
                                    </span>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <div className="elementor-icon-box-title">
                                      <span>4.7 </span>
                                    </div>
                                    <p className="elementor-icon-box-description">
                                      200+ Reviews{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-1a3748b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="1a3748b"
                      data-element_type="section"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-87744fd"
                          data-id="87744fd"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-e9d01c6 elementor--star-style-star_fontawesome elementor-widget elementor-widget-star-rating"
                              data-id="e9d01c6"
                              data-element_type="widget"
                              data-widget_type="star-rating.default"
                            >
                              <div className="elementor-widget-container">
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t/*! elementor - v3.16.0 - 09-10-2023 */\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t@charset "UTF-8";\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #ccd6df;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: eicons;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: inline-block\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating i {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-style: normal;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcursor: default\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating i:before {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcontent: "\\e934";\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: inherit;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: inherit;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #f0ad4e;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tleft: 0\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating .elementor-star-empty:before {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcontent: none\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating .elementor-star-1:before {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 10%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating .elementor-star-2:before {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 20%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating .elementor-star-3:before {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 30%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating .elementor-star-4:before {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 40%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating .elementor-star-5:before {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 50%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating .elementor-star-6:before {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 60%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating .elementor-star-7:before {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 70%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating .elementor-star-8:before {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 80%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating .elementor-star-9:before {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 90%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating__wrapper {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating__title {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin-right: 10px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating--align-right .elementor-star-rating__wrapper {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: right;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-content: flex-end\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating--align-left .elementor-star-rating__wrapper {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-content: flex-start\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating--align-center .elementor-star-rating__wrapper {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-content: center\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating--align-justify .elementor-star-rating__title {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin-right: auto\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t@media (max-width:1024px) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating-tablet--align-right .elementor-star-rating__wrapper {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: right;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-content: flex-end\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating-tablet--align-left .elementor-star-rating__wrapper {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-content: flex-start\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating-tablet--align-center .elementor-star-rating__wrapper {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-content: center\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating-tablet--align-justify .elementor-star-rating__title {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin-right: auto\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t@media (max-width:767px) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating-mobile--align-right .elementor-star-rating__wrapper {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: right;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-content: flex-end\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating-mobile--align-left .elementor-star-rating__wrapper {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-content: flex-start\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating-mobile--align-center .elementor-star-rating__wrapper {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-content: center\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-star-rating-mobile--align-justify .elementor-star-rating__title {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin-right: auto\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.last-star {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tletter-spacing: 0\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor--star-style-star_unicode .elementor-star-rating {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: Arial, Helvetica, sans-serif\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor--star-style-star_unicode .elementor-star-rating i:not(.elementor-star-empty):before {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcontent: "★"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t',
                                  }}
                                />
                                <div className="elementor-star-rating__wrapper">
                                  <div
                                    className="elementor-star-rating"
                                    title="5/5"
                                    itemType="http://schema.org/Rating"
                                    itemScope
                                    itemProp="reviewRating"
                                  >
                                    <i className="elementor-star-full"></i>
                                    <i className="elementor-star-full"></i>
                                    <i className="elementor-star-full"></i>
                                    <i className="elementor-star-full"></i>
                                    <i className="elementor-star-full">
                                      
                                    </i>{" "}
                                    <span
                                      itemProp="ratingValue"
                                      className="elementor-screen-only"
                                    >
                                      5/5
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-85c4cf2 elementor-widget elementor-widget-testimonial"
                              data-id="85c4cf2"
                              data-element_type="widget"
                              data-widget_type="testimonial.default"
                            >
                              <div className="elementor-widget-container">
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t/*! elementor - v3.16.0 - 09-10-2023 */\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-testimonial-wrapper {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: center\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-testimonial-wrapper .elementor-testimonial-content {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 1.3em;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin-bottom: 20px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-testimonial-wrapper .elementor-testimonial-name {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: block\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-testimonial-wrapper .elementor-testimonial-job {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: .85em;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: block\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-testimonial-wrapper .elementor-testimonial-meta {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tline-height: 1\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-testimonial-wrapper .elementor-testimonial-meta-inner {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: inline-block\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-testimonial-wrapper .elementor-testimonial-meta .elementor-testimonial-details,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-testimonial-wrapper .elementor-testimonial-meta .elementor-testimonial-image {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: table-cell;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvertical-align: middle\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-testimonial-wrapper .elementor-testimonial-meta .elementor-testimonial-image img {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 60px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\theight: 60px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 50%;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-o-object-fit: cover;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tobject-fit: cover;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmax-width: none\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-aside .elementor-testimonial-image {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding-right: 15px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-aside .elementor-testimonial-details {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: left\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-top .elementor-testimonial-details,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-top .elementor-testimonial-image {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: block\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-top .elementor-testimonial-image {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin-bottom: 20px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t",
                                  }}
                                />
                                <div className="elementor-testimonial-wrapper">
                                  <div className="elementor-testimonial-content">
                                    "Doanh nghiệp của tôi đã tăng gấp đôi doanh
                                    thu sau khi triển khai số hóa doanh nghiệp
                                    cùng PT Corp"
                                  </div>
                                  <div className="elementor-testimonial-meta elementor-has-image elementor-testimonial-image-position-aside">
                                    <div className="elementor-testimonial-meta-inner">
                                      <div className="elementor-testimonial-image">
                                        <img
                                          decoding="async"
                                          width={40}
                                          height={40}
                                          alt
                                          data-src="https://pt-corp.vn/wp-content/uploads/2023/10/digital-marketing-agency-reviewer-img-1.jpg"
                                          className="attachment-full size-full wp-image-1162 lazyload"
                                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        />
                                        <noscript>
                                          &lt;img decoding="async" width="40"
                                          height="40"
                                          src="wp-content/uploads/2023/10/digital-marketing-agency-reviewer-img-1.jpg"
                                          class="attachment-full size-full
                                          wp-image-1162" alt="" /&gt;
                                        </noscript>
                                      </div>
                                      <div className="elementor-testimonial-details">
                                        <div className="elementor-testimonial-name">
                                          Johnson nguyen
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-1074201"
                          data-id={1074201}
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-b53e417 elementor--star-style-star_fontawesome elementor-widget elementor-widget-star-rating"
                              data-id="b53e417"
                              data-element_type="widget"
                              data-widget_type="star-rating.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-star-rating__wrapper">
                                  <div
                                    className="elementor-star-rating"
                                    title="5/5"
                                    itemType="http://schema.org/Rating"
                                    itemScope
                                    itemProp="reviewRating"
                                  >
                                    <i className="elementor-star-full"></i>
                                    <i className="elementor-star-full"></i>
                                    <i className="elementor-star-full"></i>
                                    <i className="elementor-star-full"></i>
                                    <i className="elementor-star-full">
                                      
                                    </i>{" "}
                                    <span
                                      itemProp="ratingValue"
                                      className="elementor-screen-only"
                                    >
                                      5/5
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-9e20127 elementor-widget elementor-widget-testimonial"
                              data-id="9e20127"
                              data-element_type="widget"
                              data-widget_type="testimonial.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-testimonial-wrapper">
                                  <div className="elementor-testimonial-content">
                                    "Website công ty tôi được phát triển bởi PT
                                    Corp. Và năm đầu tiên hoạt động đã mang về
                                    doanh thu 200 triệu đô"
                                  </div>
                                  <div className="elementor-testimonial-meta elementor-has-image elementor-testimonial-image-position-aside">
                                    <div className="elementor-testimonial-meta-inner">
                                      <div className="elementor-testimonial-image">
                                        <img
                                          decoding="async"
                                          width={40}
                                          height={40}
                                          alt
                                          data-src="https://pt-corp.vn/wp-content/uploads/2023/10/digital-marketing-agency-reviewer-img-2.jpg"
                                          className="attachment-full size-full wp-image-1176 lazyload"
                                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        />
                                        <noscript>
                                          &lt;img decoding="async" width="40"
                                          height="40"
                                          src="wp-content/uploads/2023/10/digital-marketing-agency-reviewer-img-2.jpg"
                                          class="attachment-full size-full
                                          wp-image-1176" alt="" /&gt;
                                        </noscript>
                                      </div>
                                      <div className="elementor-testimonial-details">
                                        <div className="elementor-testimonial-name">
                                          Luis Tran
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-a436ed0"
                          data-id="a436ed0"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-998af6a elementor--star-style-star_fontawesome elementor-widget elementor-widget-star-rating"
                              data-id="998af6a"
                              data-element_type="widget"
                              data-widget_type="star-rating.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-star-rating__wrapper">
                                  <div
                                    className="elementor-star-rating"
                                    title="5/5"
                                    itemType="http://schema.org/Rating"
                                    itemScope
                                    itemProp="reviewRating"
                                  >
                                    <i className="elementor-star-full"></i>
                                    <i className="elementor-star-full"></i>
                                    <i className="elementor-star-full"></i>
                                    <i className="elementor-star-full"></i>
                                    <i className="elementor-star-full">
                                      
                                    </i>{" "}
                                    <span
                                      itemProp="ratingValue"
                                      className="elementor-screen-only"
                                    >
                                      5/5
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-006d987 elementor-widget elementor-widget-testimonial"
                              data-id="006d987"
                              data-element_type="widget"
                              data-widget_type="testimonial.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-testimonial-wrapper">
                                  <div className="elementor-testimonial-content">
                                    "Nhờ PT Corp triển khai Digital Marketing mà
                                    chúng tôi đã vượt qua thời kỳ khó khăn nhất.
                                    Chúng tôi đang dự định đề xuất tăng gấp đôi
                                    ngân sách quảng cáo cho năm tiếp theo"
                                  </div>
                                  <div className="elementor-testimonial-meta elementor-has-image elementor-testimonial-image-position-aside">
                                    <div className="elementor-testimonial-meta-inner">
                                      <div className="elementor-testimonial-image">
                                        <img
                                          decoding="async"
                                          width={40}
                                          height={40}
                                          alt
                                          data-src="https://pt-corp.vn/wp-content/uploads/2023/10/digital-marketing-agency-reviewer-img-3.jpg"
                                          className="attachment-full size-full wp-image-1178 lazyload"
                                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        />
                                        <noscript>
                                          &lt;img decoding="async" width="40"
                                          height="40"
                                          src="wp-content/uploads/2023/10/digital-marketing-agency-reviewer-img-3.jpg"
                                          class="attachment-full size-full
                                          wp-image-1178" alt="" /&gt;
                                        </noscript>
                                      </div>
                                      <div className="elementor-testimonial-details">
                                        <div className="elementor-testimonial-name">
                                          An Pham
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                {/* .entry-content .clear */}
              </article>
              {/* #post-## */}
            </main>
            {/* #main */}
          </div>
          {/* #primary */}
        </div>{" "}
        {/* ast-container */}
      </div>
      {/* #content */}
     <Footer />
    </div>
  );
}
