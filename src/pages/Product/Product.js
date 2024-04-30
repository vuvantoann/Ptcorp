import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
export default function Product() {
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
                className="post-3266 page type-page status-publish has-post-thumbnail ast-article-single"
                id="post-3266"
                itemType="https://schema.org/CreativeWork"
                itemScope="itemscope"
              >
                <header className="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup"></header>{" "}
                {/* .entry-header */}
                <div className="entry-content clear" itemProp="text">
                  <div
                    data-elementor-type="wp-page"
                    data-elementor-id={3266}
                    className="elementor elementor-3266"
                  >
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-48495b99 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="48495b99"
                      data-element_type="section"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-75e43b79"
                          data-id="75e43b79"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-4a64ef06 elementor-widget elementor-widget-heading"
                              data-id="4a64ef06"
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
                                  Sản phẩm
                                </h1>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-1d9ee6b1 elementor-widget elementor-widget-heading"
                              data-id="1d9ee6b1"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-heading-title elementor-size-default">
                                  PT CORP - Khởi tạo hệ sinh thái giáo dục
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-455d1f8b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="455d1f8b"
                      data-element_type="section"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-485d9df9"
                          data-id="485d9df9"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-6601f1ef elementor-position-right elementor-vertical-align-middle elementor-widget elementor-widget-image-box"
                              data-id="6601f1ef"
                              data-element_type="widget"
                              data-widget_type="image-box.default"
                            >
                              <div className="elementor-widget-container">
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t/*! elementor - v3.16.0 - 09-10-2023 */\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-box .elementor-image-box-content {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 100%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t@media (min-width:768px) {\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-box.elementor-position-left .elementor-image-box-wrapper,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-box.elementor-position-right .elementor-image-box-wrapper {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: flex\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-box.elementor-position-right .elementor-image-box-wrapper {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: right;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tflex-direction: row-reverse\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-box.elementor-position-left .elementor-image-box-wrapper {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tflex-direction: row\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-box.elementor-position-top .elementor-image-box-img {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: auto\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-box.elementor-vertical-align-top .elementor-image-box-wrapper {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: flex-start\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-box.elementor-vertical-align-middle .elementor-image-box-wrapper {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-box.elementor-vertical-align-bottom .elementor-image-box-wrapper {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: flex-end\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t@media (max-width:767px) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-box .elementor-image-box-img {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin-left: auto !important;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin-right: auto !important;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin-bottom: 15px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-box .elementor-image-box-img {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: inline-block\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-box .elementor-image-box-title a {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: inherit\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-box .elementor-image-box-wrapper {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: center\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-box .elementor-image-box-description {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: 0\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t",
                                  }}
                                />
                                <div className="elementor-image-box-wrapper">
                                  <figure className="elementor-image-box-img">
                                    <a
                                      href="https://eduquiz.vn/"
                                      target="_blank"
                                      tabIndex={-1}
                                      rel="noopener"
                                    >
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
                                    </a>
                                  </figure>
                                  <div className="elementor-image-box-content">
                                    <h4 className="elementor-image-box-title">
                                      <a
                                        href="https://eduquiz.vn/"
                                        target="_blank"
                                        rel="noopener"
                                      >
                                        EduQuiz (since 2017)
                                      </a>
                                    </h4>
                                    <p className="elementor-image-box-description">
                                      Công cụ thi trắc nghiệm trực tuyến miễn
                                      phí cho mọi đối tượng. Đáp ứng tốt nhu cầu
                                      ôn tập trong nhà trường, trung tâm đào
                                      tạo. Được ra mắt vào năm 2017 và trở thành
                                      người bạn đồng hành của nhiều thế hệ sinh
                                      viên trong cả nước. Kể từ năm 2023,
                                      EduQuiz nâng cấp hệ thống hoàn toàn mới,
                                      mạnh mẽ hơn, tiện lợi hơn và chuyên nghiệp
                                      hơn.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-401f599d elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box"
                              data-id="401f599d"
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
                                      EduCMS{" "}
                                    </h4>
                                    <p className="elementor-image-box-description">
                                      EduCMS là Công nghệ phát triển website
                                      quảng bá khóa học, quản lý tuyển sinh,
                                      thanh toán trực tuyến
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-617e3c82 elementor-position-right elementor-vertical-align-middle elementor-widget elementor-widget-image-box"
                              data-id="617e3c82"
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
                                      EduLMS (coming soon)
                                    </h4>
                                    <p className="elementor-image-box-description">
                                      EduLMS là Phần mềm quản lý nhà trường,
                                      trung tâm đào tạo. Các chức năng nổi bật
                                      như: Quản lý giáo viên; quản lý học sinh,
                                      sinh viên, học viên; quản lý lớp học; làm
                                      bài kiểm tra
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
