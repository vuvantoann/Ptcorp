import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
export default function Contact() {
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
                className="post-1131 page type-page status-publish ast-article-single"
                id="post-1131"
                itemType="https://schema.org/CreativeWork"
                itemScope="itemscope"
              >
                <header className="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup"></header>{" "}
                {/* .entry-header */}
                <div className="entry-content clear" itemProp="text">
                  <div
                    data-elementor-type="wp-page"
                    data-elementor-id={1131}
                    className="elementor elementor-1131"
                  >
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-731811b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="731811b"
                      data-element_type="section"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-59f1f67"
                          data-id="59f1f67"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-01e43c5 elementor-widget elementor-widget-heading"
                              data-id="01e43c5"
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
                                <h1 className="elementor-heading-title elementor-size-default">
                                  LIÊN HỆ
                                </h1>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-4c1a4e2 elementor-widget elementor-widget-heading"
                              data-id="4c1a4e2"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-heading-title elementor-size-default">
                                  Hãy liên hệ với chúng tôi khi bạn cần hỗ trợ,
                                  tư vấn
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-b693d5e elementor-section-content-top elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="b693d5e"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ccd4bc4"
                          data-id="ccd4bc4"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-ac67ecd elementor-position-left elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                              data-id="ac67ecd"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <link
                                  rel="stylesheet"
                                  href="../wp-content/plugins/elementor/assets/css/widget-icon-box.min.css"
                                />
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
                                    <h6 className="elementor-icon-box-title">
                                      <span>Địa chỉ </span>
                                    </h6>
                                    <p className="elementor-icon-box-description">
                                      Số 33 Phố Trung Kính, Trung Hòa, Cầu Giấy,
                                      Hà Nội{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-ecc209e elementor-position-left elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                              data-id="ecc209e"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <span className="elementor-icon elementor-animation-">
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-phone"
                                      />
                                    </span>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h6 className="elementor-icon-box-title">
                                      <span>Điện thoại </span>
                                    </h6>
                                    <p className="elementor-icon-box-description">
                                      +84 962 185 843{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-0a3ae79 elementor-position-left elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                              data-id="0a3ae79"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <span className="elementor-icon elementor-animation-">
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-envelope"
                                      />{" "}
                                    </span>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h6 className="elementor-icon-box-title">
                                      <span>Email </span>
                                    </h6>
                                    <p className="elementor-icon-box-description">
                                      support@pt-corp.vn{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0139529"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-d54eb2c elementor-widget elementor-widget-heading"
                              data-id="d54eb2c"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h6 className="elementor-heading-title elementor-size-default">
                                  Mẫu liên hệ
                                </h6>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-122949d uael-cf7-style-box uael-cf7-input-size-sm uael-cf7-button-left uael-cf7-btn-size-sm uael-cf7-highlight-style-default elementor-widget elementor-widget-uael-cf7-styler"
                              data-id="122949d"
                              data-element_type="widget"
                              data-widget_type="uael-cf7-styler.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="uael-cf7-container">
                                  <div className="uael-cf7 uael-cf7-style elementor-clickable">
                                    <div
                                      className="wpcf7 no-js"
                                      id="wpcf7-f9-p1131-o1"
                                      lang="en-US"
                                      dir="ltr"
                                    >
                                      <div className="screen-reader-response">
                                        <p
                                          role="status"
                                          aria-live="polite"
                                          aria-atomic="true"
                                        />
                                        <ul />
                                      </div>
                                      <form
                                        action="../index.html@p=1131#wpcf7-f9-p1131-o1"
                                        method="post"
                                        className="wpcf7-form init"
                                        aria-label="Contact form"
                                        noValidate="novalidate"
                                        data-status="init"
                                      >
                                        <div style={{ display: "none" }}>
                                          <input
                                            type="hidden"
                                            name="_wpcf7"
                                            defaultValue={9}
                                          />
                                          <input
                                            type="hidden"
                                            name="_wpcf7_version"
                                            defaultValue="5.8.1"
                                          />
                                          <input
                                            type="hidden"
                                            name="_wpcf7_locale"
                                            defaultValue="en_US"
                                          />
                                          <input
                                            type="hidden"
                                            name="_wpcf7_unit_tag"
                                            defaultValue="wpcf7-f9-p1131-o1"
                                          />
                                          <input
                                            type="hidden"
                                            name="_wpcf7_container_post"
                                            defaultValue={1131}
                                          />
                                          <input
                                            type="hidden"
                                            name="_wpcf7_posted_data_hash"
                                            defaultValue
                                          />
                                        </div>
                                        <p>
                                          <label>
                                            {" "}
                                            Họ tên:
                                            <br />
                                            <span
                                              className="wpcf7-form-control-wrap"
                                              data-name="your-name"
                                            >
                                              <input
                                                size={40}
                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                autoComplete="name"
                                                aria-required="true"
                                                aria-invalid="false"
                                                defaultValue
                                                type="text"
                                                name="your-name"
                                              />
                                            </span>
                                          </label>
                                        </p>
                                        <p>
                                          <label>
                                            {" "}
                                            Số điện thoại:
                                            <br />
                                            <span
                                              className="wpcf7-form-control-wrap"
                                              data-name="your-phone"
                                            >
                                              <input
                                                size={40}
                                                className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel"
                                                autoComplete="tel"
                                                aria-required="true"
                                                aria-invalid="false"
                                                defaultValue
                                                type="tel"
                                                name="your-phone"
                                              />
                                            </span>
                                          </label>
                                        </p>
                                        <p>
                                          <label>
                                            {" "}
                                            Email của bạn:
                                            <br />
                                            <span
                                              className="wpcf7-form-control-wrap"
                                              data-name="your-email"
                                            >
                                              <input
                                                size={40}
                                                className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                                                autoComplete="email"
                                                aria-required="true"
                                                aria-invalid="false"
                                                defaultValue
                                                type="email"
                                                name="your-email"
                                              />
                                            </span>
                                          </label>
                                        </p>
                                        <p>
                                          <label>
                                            {" "}
                                            Lời nhắn:
                                            <br />
                                            <span
                                              className="wpcf7-form-control-wrap"
                                              data-name="your-message"
                                            >
                                              <textarea
                                                cols={40}
                                                rows={10}
                                                className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                                aria-required="true"
                                                aria-invalid="false"
                                                name="your-message"
                                                defaultValue={""}
                                              />
                                            </span>
                                          </label>
                                        </p>
                                        <p>
                                          <input
                                            className="wpcf7-form-control wpcf7-submit has-spinner"
                                            type="submit"
                                            defaultValue="Gửi"
                                          />
                                        </p>
                                        <p
                                          style={{ display: "none !important" }}
                                        ></p>
                                        <div
                                          className="wpcf7-response-output"
                                          aria-hidden="true"
                                        />
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-b85f569 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                              data-id="b85f569"
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
        </div>

        {/* ast-container */}
      </div>
      {/* #content */}
      <Footer />
    </div>
  );
}
