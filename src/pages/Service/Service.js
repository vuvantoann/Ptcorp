import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Service() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="hfeed site" id="page">
      <Header />
      <div id="content" className="site-content" style={{ marginTop: "-63px" }}>
        <div className="ast-container">
          <div id="primary" className="content-area primary">
            <main id="main" className="site-main">
              <article
                className="post-1120 page type-page status-publish ast-article-single"
                id="post-1120"
                itemType="https://schema.org/CreativeWork"
                itemScope="itemscope"
              >
                <header className="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup"></header>{" "}
                {/* .entry-header */}
                <div className="entry-content clear" itemProp="text">
                  <div
                    data-elementor-type="wp-page"
                    data-elementor-id={1120}
                    className="elementor elementor-1120"
                  >
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-47117e6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="47117e6"
                      data-element_type="section"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c5cbc28"
                          data-id="c5cbc28"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-aff0c05 elementor-widget elementor-widget-heading"
                              data-id="aff0c05"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "\n                                                            /*! elementor - v3.16.0 - 09-10-2023 */\n                                                            .elementor-heading-title {\n                                                                padding: 0;\n                                                                margin: 0;\n                                                                line-height: 1\n                                                            }\n\n                                                            .elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a {\n                                                                color: inherit;\n                                                                font-size: inherit;\n                                                                line-height: inherit\n                                                            }\n\n                                                            .elementor-widget-heading .elementor-heading-title.elementor-size-small {\n                                                                font-size: 15px\n                                                            }\n\n                                                            .elementor-widget-heading .elementor-heading-title.elementor-size-medium {\n                                                                font-size: 19px\n                                                            }\n\n                                                            .elementor-widget-heading .elementor-heading-title.elementor-size-large {\n                                                                font-size: 29px\n                                                            }\n\n                                                            .elementor-widget-heading .elementor-heading-title.elementor-size-xl {\n                                                                font-size: 39px\n                                                            }\n\n                                                            .elementor-widget-heading .elementor-heading-title.elementor-size-xxl {\n                                                                font-size: 59px\n                                                            }\n                                                        ",
                                  }}
                                />
                                <h1 className="elementor-heading-title elementor-size-default">
                                  Dịch vụ
                                </h1>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-b190ddb elementor-widget elementor-widget-heading"
                              data-id="b190ddb"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-heading-title elementor-size-default">
                                  PT CORP - Bệ phóng cho doanh nghiệp của bạn
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-a9a43e4 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="a9a43e4"
                      data-element_type="section"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-background-overlay" />
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b77a5dd"
                          data-id="b77a5dd"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-a214a3e elementor-widget elementor-widget-heading"
                              data-id="a214a3e"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h6 className="elementor-heading-title elementor-size-default">
                                  Các dịch vụ
                                </h6>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-f282360 elementor-widget elementor-widget-heading"
                              data-id="f282360"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  IT SERVICES
                                </h2>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-c5b0770 elementor-widget elementor-widget-text-editor"
                              data-id="c5b0770"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "\n                                                            /*! elementor - v3.16.0 - 09-10-2023 */\n                                                            .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap {\n                                                                background-color: #69727d;\n                                                                color: #fff\n                                                            }\n\n                                                            .elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap {\n                                                                color: #69727d;\n                                                                border: 3px solid;\n                                                                background-color: transparent\n                                                            }\n\n                                                            .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap {\n                                                                margin-top: 8px\n                                                            }\n\n                                                            .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter {\n                                                                width: 1em;\n                                                                height: 1em\n                                                            }\n\n                                                            .elementor-widget-text-editor .elementor-drop-cap {\n                                                                float: left;\n                                                                text-align: center;\n                                                                line-height: 1;\n                                                                font-size: 50px\n                                                            }\n\n                                                            .elementor-widget-text-editor .elementor-drop-cap-letter {\n                                                                display: inline-block\n                                                            }\n                                                        ",
                                  }}
                                />
                                <section
                                  className="elementor-section elementor-top-section elementor-element elementor-element-d0a6c19 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                  data-id="d0a6c19"
                                  data-element_type="section"
                                  data-settings='{"background_background":"classic"}'
                                >
                                  <div className="elementor-container elementor-column-gap-default">
                                    <div
                                      className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-09473d7"
                                      data-id="09473d7"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-1f08382 elementor-widget elementor-widget-text-editor"
                                          data-id="1f08382"
                                          data-element_type="widget"
                                          data-widget_type="text-editor.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <p>
                                              Các dịch vụ công nghệ thông tin
                                              giúp nâng cao hiệu quả trong quản
                                              trị doanh nghiệp
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-1609061"
                          data-id={1609061}
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-6c38ac8 elementor-widget__width-inherit elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="6c38ac8"
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
                                    <a
                                      href="../index.html@p=1120#"
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
                                      <a href="../index.html@p=1120#">
                                        Tư vấn chuyển đổi số{" "}
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-5d35116 elementor-widget__width-inherit elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="5d35116"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <a
                                      href="../index.html@p=1120#"
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
                                      <a href="../index.html@p=1120#">
                                        Phát triển Web-App{" "}
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-e845454 elementor-widget__width-inherit elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="e845454"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <a
                                      href="../index.html@p=1120#"
                                      className="elementor-icon elementor-animation-"
                                      tabIndex={-1}
                                    >
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-user-friends"
                                      />{" "}
                                    </a>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h5 className="elementor-icon-box-title">
                                      <a href="../index.html@p=1120#">
                                        Outsource nhân sự{" "}
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-f60aaca"
                          data-id="f60aaca"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-4ced265 elementor-widget__width-inherit elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="4ced265"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <a
                                      href="../index.html@p=1120#"
                                      className="elementor-icon elementor-animation-"
                                      tabIndex={-1}
                                    >
                                      <i
                                        aria-hidden="true"
                                        className="fab fa-internet-explorer"
                                      />{" "}
                                    </a>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h5 className="elementor-icon-box-title">
                                      <a href="../index.html@p=1120#">
                                        Thiết kế website chuyên nghiệp{" "}
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-e6aafea elementor-widget__width-inherit elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="e6aafea"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <a
                                      href="../index.html@p=1120#"
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
                                      <a href="../index.html@p=1120#">
                                        Bảo trì hệ thống{" "}
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-7ccd6a8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="7ccd6a8"
                      data-element_type="section"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e361a82"
                          data-id="e361a82"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-3ca6eeb elementor-position-right elementor-vertical-align-middle elementor-widget elementor-widget-image-box"
                              data-id="3ca6eeb"
                              data-element_type="widget"
                              data-widget_type="image-box.default"
                            >
                              <div className="elementor-widget-container">
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "\n                                                            /*! elementor - v3.16.0 - 09-10-2023 */\n                                                            .elementor-widget-image-box .elementor-image-box-content {\n                                                                width: 100%\n                                                            }\n\n                                                            @media (min-width:768px) {\n\n                                                                .elementor-widget-image-box.elementor-position-left .elementor-image-box-wrapper,\n                                                                .elementor-widget-image-box.elementor-position-right .elementor-image-box-wrapper {\n                                                                    display: flex\n                                                                }\n\n                                                                .elementor-widget-image-box.elementor-position-right .elementor-image-box-wrapper {\n                                                                    text-align: right;\n                                                                    flex-direction: row-reverse\n                                                                }\n\n                                                                .elementor-widget-image-box.elementor-position-left .elementor-image-box-wrapper {\n                                                                    text-align: left;\n                                                                    flex-direction: row\n                                                                }\n\n                                                                .elementor-widget-image-box.elementor-position-top .elementor-image-box-img {\n                                                                    margin: auto\n                                                                }\n\n                                                                .elementor-widget-image-box.elementor-vertical-align-top .elementor-image-box-wrapper {\n                                                                    align-items: flex-start\n                                                                }\n\n                                                                .elementor-widget-image-box.elementor-vertical-align-middle .elementor-image-box-wrapper {\n                                                                    align-items: center\n                                                                }\n\n                                                                .elementor-widget-image-box.elementor-vertical-align-bottom .elementor-image-box-wrapper {\n                                                                    align-items: flex-end\n                                                                }\n                                                            }\n\n                                                            @media (max-width:767px) {\n                                                                .elementor-widget-image-box .elementor-image-box-img {\n                                                                    margin-left: auto !important;\n                                                                    margin-right: auto !important;\n                                                                    margin-bottom: 15px\n                                                                }\n                                                            }\n\n                                                            .elementor-widget-image-box .elementor-image-box-img {\n                                                                display: inline-block\n                                                            }\n\n                                                            .elementor-widget-image-box .elementor-image-box-title a {\n                                                                color: inherit\n                                                            }\n\n                                                            .elementor-widget-image-box .elementor-image-box-wrapper {\n                                                                text-align: center\n                                                            }\n\n                                                            .elementor-widget-image-box .elementor-image-box-description {\n                                                                margin: 0\n                                                            }\n                                                        ",
                                  }}
                                />
                                <div className="elementor-image-box-wrapper">
                                  <figure className="elementor-image-box-img">
                                    <img
                                      decoding="async"
                                      width={640}
                                      height={427}
                                      alt
                                      data-srcset="https://pt-corp.vn/wp-content/uploads/2023/09/business-3563101_640.jpg 640w, https://pt-corp.vn/wp-content/uploads/2023/09/business-3563101_640-300x200.jpg 300w"
                                      data-src="https://pt-corp.vn/wp-content/uploads/2023/09/business-3563101_640.jpg"
                                      data-sizes="(max-width: 640px) 100vw, 640px"
                                      className="attachment-full size-full wp-image-781 lazyload"
                                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    />
                                    <noscript>
                                      &lt;img decoding="async" width="640"
                                      height="427"
                                      src="../wp-content/uploads/2023/09/business-3563101_640.jpg"
                                      class="attachment-full size-full
                                      wp-image-781" alt=""
                                      srcset="../wp-content/uploads/2023/09/business-3563101_640.jpg
                                      640w,
                                      ../wp-content/uploads/2023/09/business-3563101_640-300x200.jpg
                                      300w" sizes="(max-width: 640px) 100vw,
                                      640px" /&gt;
                                    </noscript>
                                  </figure>
                                  <div className="elementor-image-box-content">
                                    <h4 className="elementor-image-box-title">
                                      Tư vấn chuyển đổi số
                                    </h4>
                                    <p className="elementor-image-box-description">
                                      PT Corp mang đến dịch vụ tư vấn chuyển đổi
                                      số giúp các doanh nghiệp quản lý và vận
                                      hành bộ máy theo hướng tự động, hiệu quả
                                      và chuyên nghiệp
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-0d958dc elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box"
                              data-id="0d958dc"
                              data-element_type="widget"
                              data-widget_type="image-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-image-box-wrapper">
                                  <figure className="elementor-image-box-img">
                                    <img
                                      decoding="async"
                                      width={2560}
                                      height={1761}
                                      alt
                                      data-srcset="https://pt-corp.vn/wp-content/uploads/2023/09/13805027_1904.i402.013.Web-development-isometric-concept-composition-scaled.jpg 2560w, https://pt-corp.vn/wp-content/uploads/2023/09/13805027_1904.i402.013.Web-development-isometric-concept-composition-300x206.jpg 300w, https://pt-corp.vn/wp-content/uploads/2023/09/13805027_1904.i402.013.Web-development-isometric-concept-composition-1024x705.jpg 1024w, https://pt-corp.vn/wp-content/uploads/2023/09/13805027_1904.i402.013.Web-development-isometric-concept-composition-768x528.jpg 768w, https://pt-corp.vn/wp-content/uploads/2023/09/13805027_1904.i402.013.Web-development-isometric-concept-composition-1536x1057.jpg 1536w, https://pt-corp.vn/wp-content/uploads/2023/09/13805027_1904.i402.013.Web-development-isometric-concept-composition-2048x1409.jpg 2048w"
                                      data-src="https://pt-corp.vn/wp-content/uploads/2023/09/13805027_1904.i402.013.Web-development-isometric-concept-composition-scaled.jpg"
                                      data-sizes="(max-width: 2560px) 100vw, 2560px"
                                      className="attachment-full size-full wp-image-791 lazyload"
                                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    />
                                    <noscript>
                                      &lt;img decoding="async" width="2560"
                                      height="1761"
                                      src="../wp-content/uploads/2023/09/13805027_1904.i402.013.Web-development-isometric-concept-composition-scaled.jpg"
                                      class="attachment-full size-full
                                      wp-image-791" alt=""
                                      srcset="../wp-content/uploads/2023/09/13805027_1904.i402.013.Web-development-isometric-concept-composition-scaled.jpg
                                      2560w,
                                      ../wp-content/uploads/2023/09/13805027_1904.i402.013.Web-development-isometric-concept-composition-300x206.jpg
                                      300w,
                                      ../wp-content/uploads/2023/09/13805027_1904.i402.013.Web-development-isometric-concept-composition-1024x705.jpg
                                      1024w,
                                      ../wp-content/uploads/2023/09/13805027_1904.i402.013.Web-development-isometric-concept-composition-768x528.jpg
                                      768w,
                                      ../wp-content/uploads/2023/09/13805027_1904.i402.013.Web-development-isometric-concept-composition-1536x1057.jpg
                                      1536w,
                                      ../wp-content/uploads/2023/09/13805027_1904.i402.013.Web-development-isometric-concept-composition-2048x1409.jpg
                                      2048w" sizes="(max-width: 2560px) 100vw,
                                      2560px" /&gt;
                                    </noscript>
                                  </figure>
                                  <div className="elementor-image-box-content">
                                    <h4 className="elementor-image-box-title">
                                      Phát triển Web-App
                                    </h4>
                                    <p className="elementor-image-box-description">
                                      Phát triển Web-App phục vụ nhu cầu chuyển
                                      đổi số cho doanh nghiệp. PT Corp chuyên
                                      thực hiện các dự án Web-App từ đầu đến
                                      cuối.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-3c25468 elementor-position-right elementor-vertical-align-middle elementor-widget elementor-widget-image-box"
                              data-id="3c25468"
                              data-element_type="widget"
                              data-widget_type="image-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-image-box-wrapper">
                                  <figure className="elementor-image-box-img">
                                    <img
                                      decoding="async"
                                      width={640}
                                      height={427}
                                      alt
                                      data-srcset="https://pt-corp.vn/wp-content/uploads/2023/09/software-development-4165307_640.jpg 640w, https://pt-corp.vn/wp-content/uploads/2023/09/software-development-4165307_640-300x200.jpg 300w"
                                      data-src="https://pt-corp.vn/wp-content/uploads/2023/09/software-development-4165307_640.jpg"
                                      data-sizes="(max-width: 640px) 100vw, 640px"
                                      className="attachment-full size-full wp-image-787 lazyload"
                                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    />
                                    <noscript>
                                      &lt;img decoding="async" width="640"
                                      height="427"
                                      src="../wp-content/uploads/2023/09/software-development-4165307_640.jpg"
                                      class="attachment-full size-full
                                      wp-image-787" alt=""
                                      srcset="../wp-content/uploads/2023/09/software-development-4165307_640.jpg
                                      640w,
                                      ../wp-content/uploads/2023/09/software-development-4165307_640-300x200.jpg
                                      300w" sizes="(max-width: 640px) 100vw,
                                      640px" /&gt;
                                    </noscript>
                                  </figure>
                                  <div className="elementor-image-box-content">
                                    <h4 className="elementor-image-box-title">
                                      Outsource nhân sự
                                    </h4>
                                    <p className="elementor-image-box-description">
                                      Dịch vụ Nhân sự IT thuê ngoài của PT Corp
                                      giúp các doanh nghiệp rút ngắn thời gian
                                      và tiết kiệm chi phí trong việc tuyển dụng
                                      đội ngũ IT nhằm phát triển các sản phẩm
                                      phần mềm mong muốn.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-810310e elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box"
                              data-id="810310e"
                              data-element_type="widget"
                              data-widget_type="image-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-image-box-wrapper">
                                  <figure className="elementor-image-box-img">
                                    <img
                                      decoding="async"
                                      width={885}
                                      height={435}
                                      alt
                                      data-srcset="https://pt-corp.vn/wp-content/uploads/2023/09/Screenshot_4.png 885w, https://pt-corp.vn/wp-content/uploads/2023/09/Screenshot_4-300x147.png 300w, https://pt-corp.vn/wp-content/uploads/2023/09/Screenshot_4-768x377.png 768w"
                                      data-src="https://pt-corp.vn/wp-content/uploads/2023/09/Screenshot_4.png"
                                      data-sizes="(max-width: 885px) 100vw, 885px"
                                      className="attachment-full size-full wp-image-713 lazyload"
                                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    />
                                    <noscript>
                                      &lt;img decoding="async" width="885"
                                      height="435"
                                      src="../wp-content/uploads/2023/09/Screenshot_4.png"
                                      class="attachment-full size-full
                                      wp-image-713" alt=""
                                      srcset="../wp-content/uploads/2023/09/Screenshot_4.png
                                      885w,
                                      ../wp-content/uploads/2023/09/Screenshot_4-300x147.png
                                      300w,
                                      ../wp-content/uploads/2023/09/Screenshot_4-768x377.png
                                      768w" sizes="(max-width: 885px) 100vw,
                                      885px" /&gt;
                                    </noscript>
                                  </figure>
                                  <div className="elementor-image-box-content">
                                    <h4 className="elementor-image-box-title">
                                      Thiết kế website chuyên nghiệp
                                    </h4>
                                    <p className="elementor-image-box-description">
                                      PT Corp giúp doanh nghiệp thiết kế website
                                      chuẩn chỉnh: Chuẩn nhận diện thương hiệu,
                                      Chuẩn giao diện UI/UX, Chuẩn SEO
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
                      className="elementor-section elementor-top-section elementor-element elementor-element-ef9e938 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="ef9e938"
                      data-element_type="section"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-background-overlay" />
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c5fbeea"
                          data-id="c5fbeea"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-94456d7 elementor-widget elementor-widget-heading"
                              data-id="94456d7"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h6 className="elementor-heading-title elementor-size-default">
                                  Các dịch vụ
                                </h6>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-f074914 elementor-widget elementor-widget-heading"
                              data-id="f074914"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  Digital Marketing
                                </h2>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-879965c elementor-widget elementor-widget-text-editor"
                              data-id="879965c"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <section
                                  className="elementor-section elementor-top-section elementor-element elementor-element-d0a6c19 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                  data-id="d0a6c19"
                                  data-element_type="section"
                                  data-settings='{"background_background":"classic"}'
                                >
                                  <div className="elementor-container elementor-column-gap-default">
                                    <div
                                      className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-09473d7"
                                      data-id="09473d7"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-1f08382 elementor-widget elementor-widget-text-editor"
                                          data-id="1f08382"
                                          data-element_type="widget"
                                          data-widget_type="text-editor.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div
                                              className="elementor-element elementor-element-113d97e elementor-widget elementor-widget-text-editor"
                                              data-id="113d97e"
                                              data-element_type="widget"
                                              data-widget_type="text-editor.default"
                                            >
                                              <div className="elementor-widget-container">
                                                <p>
                                                  Các dịch vụ quảng bá sản phẩm
                                                  – dịch vụ của doanh nghiệp
                                                  tiếp cận gần hơn đến người
                                                  tiêu dùng.
                                                </p>
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
                          </div>
                        </div>
                        <div
                          className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-25d6a6a"
                          data-id="25d6a6a"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-484297d elementor-widget__width-inherit elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="484297d"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <a
                                      href="../index.html@p=1120#"
                                      className="elementor-icon elementor-animation-"
                                      tabIndex={-1}
                                    >
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-pencil-ruler"
                                      />{" "}
                                    </a>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h5 className="elementor-icon-box-title">
                                      <a href="../index.html@p=1120#">
                                        Thiết kế đồ họa{" "}
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-fc06d32 elementor-widget__width-inherit elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="fc06d32"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <a
                                      href="../index.html@p=1120#"
                                      className="elementor-icon elementor-animation-"
                                      tabIndex={-1}
                                    >
                                      <i
                                        aria-hidden="true"
                                        className="fab fa-facebook"
                                      />{" "}
                                    </a>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h5 className="elementor-icon-box-title">
                                      <a href="../index.html@p=1120#">
                                        Chăm sóc MXH{" "}
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-3c2f2f1 elementor-widget__width-inherit elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="3c2f2f1"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <a
                                      href="../index.html@p=1120#"
                                      className="elementor-icon elementor-animation-"
                                      tabIndex={-1}
                                    >
                                      <i
                                        aria-hidden="true"
                                        className="fab fa-wordpress-simple"
                                      />{" "}
                                    </a>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h5 className="elementor-icon-box-title">
                                      <a href="../index.html@p=1120#">
                                        Chăm sóc website{" "}
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-9b23d6b"
                          data-id="9b23d6b"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-b6c0aa2 elementor-widget__width-inherit elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="b6c0aa2"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <a
                                      href="../index.html@p=1120#"
                                      className="elementor-icon elementor-animation-"
                                      tabIndex={-1}
                                    >
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-bullhorn"
                                      />{" "}
                                    </a>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h5 className="elementor-icon-box-title">
                                      <a href="../index.html@p=1120#">
                                        Quảng cáo đa nền tảng{" "}
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-c7dfa7d elementor-widget__width-inherit elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="c7dfa7d"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <a
                                      href="../index.html@p=1120#"
                                      className="elementor-icon elementor-animation-"
                                      tabIndex={-1}
                                    >
                                      <i
                                        aria-hidden="true"
                                        className="fab fa-sistrix"
                                      />{" "}
                                    </a>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h5 className="elementor-icon-box-title">
                                      <a href="../index.html@p=1120#">
                                        SEO Top Google{" "}
                                      </a>
                                    </h5>
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
