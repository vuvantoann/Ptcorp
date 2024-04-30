import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
export default function About() {
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
                className="post-1129 page type-page status-publish ast-article-single"
                id="post-1129"
                itemType="https://schema.org/CreativeWork"
                itemScope="itemscope"
              >
                <header className="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup"></header>{" "}
                {/* .entry-header */}
                <div className="entry-content clear" itemProp="text">
                  <div
                    data-elementor-type="wp-page"
                    data-elementor-id={1129}
                    className="elementor elementor-1129"
                  >
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-4dcbe88 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="4dcbe88"
                      data-element_type="section"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3c1f7d8"
                          data-id="3c1f7d8"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-ff67811 elementor-widget elementor-widget-heading"
                              data-id="ff67811"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "/*! elementor - v3.16.0 - 09-10-2023 */\n    .elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}",
                                  }}
                                />
                                <h1 className="elementor-heading-title elementor-size-default">
                                  Giới thiệu
                                </h1>{" "}
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-d78bb9a elementor-widget elementor-widget-heading"
                              data-id="d78bb9a"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-heading-title elementor-size-default">
                                  PT Corp cung cấp các dịch vụ và mang đến những
                                  sản phẩm công nghệ chuyên nghiệp!
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-df9c35e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="df9c35e"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5ae9521"
                          data-id="5ae9521"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <section
                              className="elementor-section elementor-inner-section elementor-element elementor-element-af2b33e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                              data-id="af2b33e"
                              data-element_type="section"
                            >
                              <div className="elementor-container elementor-column-gap-default">
                                <div
                                  className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6406705"
                                  data-id={6406705}
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-51e7681 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading"
                                      data-id="51e7681"
                                      data-element_type="widget"
                                      data-widget_type="heading.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <h2 className="elementor-heading-title elementor-size-default">
                                          PT CORP - Smart Software Service
                                        </h2>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e30a610"
                                  data-id="e30a610"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-a3029be elementor-widget elementor-widget-text-editor"
                                      data-id="a3029be"
                                      data-element_type="widget"
                                      data-widget_type="text-editor.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <style
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              "/*! elementor - v3.16.0 - 09-10-2023 */\n    .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}",
                                          }}
                                        />{" "}
                                        <p>
                                          Chúng tôi mang đến giải pháp chuyển
                                          đổi số toàn diện cho các doanh nghiệp
                                          tại Việt Nam. Với các đối tác nước
                                          ngoài, PT Corp luôn là lựa chọn tin
                                          cậy khi phát triển các sản phẩm công
                                          nghệ cao (Web-APP). Bộ máy nhân sự của
                                          chúng tôi không ngừng mở rộng, phát
                                          triển về cả chất lượng và số lượng.
                                        </p>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                            <div
                              className="elementor-element elementor-element-fcb742a elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                              data-id="fcb742a"
                              data-element_type="widget"
                              data-widget_type="divider.default"
                            >
                              <div className="elementor-widget-container">
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      '/*! elementor - v3.16.0 - 09-10-2023 */\n    .elementor-widget-divider{--divider-border-style:none;--divider-border-width:1px;--divider-color:#0c0d0e;--divider-icon-size:20px;--divider-element-spacing:10px;--divider-pattern-height:24px;--divider-pattern-size:20px;--divider-pattern-url:none;--divider-pattern-repeat:repeat-x}.elementor-widget-divider .elementor-divider{display:flex}.elementor-widget-divider .elementor-divider__text{font-size:15px;line-height:1;max-width:95%}.elementor-widget-divider .elementor-divider__element{margin:0 var(--divider-element-spacing);flex-shrink:0}.elementor-widget-divider .elementor-icon{font-size:var(--divider-icon-size)}.elementor-widget-divider .elementor-divider-separator{display:flex;margin:0;direction:ltr}.elementor-widget-divider--view-line_icon .elementor-divider-separator,.elementor-widget-divider--view-line_text .elementor-divider-separator{align-items:center}.elementor-widget-divider--view-line_icon .elementor-divider-separator:after,.elementor-widget-divider--view-line_icon .elementor-divider-separator:before,.elementor-widget-divider--view-line_text .elementor-divider-separator:after,.elementor-widget-divider--view-line_text .elementor-divider-separator:before{display:block;content:"";border-bottom:0;flex-grow:1;border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-left .elementor-divider-separator:before{content:none}.elementor-widget-divider--element-align-left .elementor-divider__element{margin-left:0}.elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-right .elementor-divider-separator:after{content:none}.elementor-widget-divider--element-align-right .elementor-divider__element{margin-right:0}.elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator{border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--separator-type-pattern{--divider-border-style:none}.elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,.elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator{width:100%;min-height:var(--divider-pattern-height);-webkit-mask-size:var(--divider-pattern-size) 100%;mask-size:var(--divider-pattern-size) 100%;-webkit-mask-repeat:var(--divider-pattern-repeat);mask-repeat:var(--divider-pattern-repeat);background-color:var(--divider-color);-webkit-mask-image:var(--divider-pattern-url);mask-image:var(--divider-pattern-url)}.elementor-widget-divider--no-spacing{--divider-pattern-size:auto}.elementor-widget-divider--bg-round{--divider-pattern-repeat:round}.rtl .elementor-widget-divider .elementor-divider__text{direction:rtl}.e-con-inner>.elementor-widget-divider,.e-con>.elementor-widget-divider{width:var(--container-widget-width,100%);--flex-grow:var(--container-widget-flex-grow)}',
                                  }}
                                />{" "}
                                <div className="elementor-divider">
                                  <span className="elementor-divider-separator"></span>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-7ed15e4 elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-view-default elementor-widget elementor-widget-icon"
                              data-id="7ed15e4"
                              data-element_type="widget"
                              data-widget_type="icon.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-wrapper">
                                  <div className="elementor-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fas fa-quote-right"
                                    />{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-064f7f6 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-testimonial"
                              data-id="064f7f6"
                              data-element_type="widget"
                              data-widget_type="testimonial.default"
                            >
                              <div className="elementor-widget-container">
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "/*! elementor - v3.16.0 - 09-10-2023 */\n    .elementor-testimonial-wrapper{overflow:hidden;text-align:center}.elementor-testimonial-wrapper .elementor-testimonial-content{font-size:1.3em;margin-bottom:20px}.elementor-testimonial-wrapper .elementor-testimonial-name{line-height:1.5;display:block}.elementor-testimonial-wrapper .elementor-testimonial-job{font-size:.85em;display:block}.elementor-testimonial-wrapper .elementor-testimonial-meta{width:100%;line-height:1}.elementor-testimonial-wrapper .elementor-testimonial-meta-inner{display:inline-block}.elementor-testimonial-wrapper .elementor-testimonial-meta .elementor-testimonial-details,.elementor-testimonial-wrapper .elementor-testimonial-meta .elementor-testimonial-image{display:table-cell;vertical-align:middle}.elementor-testimonial-wrapper .elementor-testimonial-meta .elementor-testimonial-image img{width:60px;height:60px;border-radius:50%;-o-object-fit:cover;object-fit:cover;max-width:none}.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-aside .elementor-testimonial-image{padding-right:15px}.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-aside .elementor-testimonial-details{text-align:left}.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-top .elementor-testimonial-details,.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-top .elementor-testimonial-image{display:block}.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-top .elementor-testimonial-image{margin-bottom:20px}",
                                  }}
                                />{" "}
                                <div className="elementor-testimonial-wrapper">
                                  <div className="elementor-testimonial-content">
                                    PT Corp ra đời với sứ mệnh là giúp khách
                                    hàng của chúng tôi đạt được thành công nhờ
                                    CNTT.
                                  </div>
                                  <div className="elementor-testimonial-meta elementor-has-image elementor-testimonial-image-position-aside">
                                    <div className="elementor-testimonial-meta-inner">
                                      <div className="elementor-testimonial-image">
                                        <img
                                          decoding="async"
                                          width={340}
                                          height={340}
                                          alt
                                          data-srcset="https://pt-corp.vn/wp-content/uploads/2023/09/peter.jpg 340w, https://pt-corp.vn/wp-content/uploads/2023/09/peter-300x300.jpg 300w, https://pt-corp.vn/wp-content/uploads/2023/09/peter-150x150.jpg 150w"
                                          data-src="https://pt-corp.vn/wp-content/uploads/2023/09/peter.jpg"
                                          data-sizes="(max-width: 340px) 100vw, 340px"
                                          className="attachment-full size-full wp-image-674 lazyload"
                                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        />
                                        <noscript>
                                          &lt;img decoding="async" width="340"
                                          height="340" alt=""
                                          data-srcset="https://pt-corp.vn/wp-content/uploads/2023/09/peter.jpg
                                          340w,
                                          https://pt-corp.vn/wp-content/uploads/2023/09/peter-300x300.jpg
                                          300w,
                                          https://pt-corp.vn/wp-content/uploads/2023/09/peter-150x150.jpg
                                          150w"
                                          data-src="https://pt-corp.vn/wp-content/uploads/2023/09/peter.jpg"
                                          data-sizes="(max-width: 340px) 100vw,
                                          340px" class="attachment-full
                                          size-full wp-image-674 lazyload"
                                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                          /&gt;&lt;noscript&gt;&lt;img
                                          decoding="async" width="340"
                                          height="340"
                                          src="../wp-content/uploads/2023/09/peter.jpg"
                                          class="attachment-full size-full
                                          wp-image-674" alt=""
                                          srcset="../wp-content/uploads/2023/09/peter.jpg
                                          340w,
                                          ../wp-content/uploads/2023/09/peter-300x300.jpg
                                          300w,
                                          ../wp-content/uploads/2023/09/peter-150x150.jpg
                                          150w" sizes="(max-width: 340px) 100vw,
                                          340px" /&gt;
                                        </noscript>{" "}
                                      </div>
                                      <div className="elementor-testimonial-details">
                                        <div className="elementor-testimonial-name">
                                          PETER
                                        </div>
                                        <div className="elementor-testimonial-job">
                                          Founder &amp; CEO
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
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-b61d1fa elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                      data-id="b61d1fa"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d872a91"
                          data-id="d872a91"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-5185987 elementor-widget elementor-widget-image"
                              data-id={5185987}
                              data-element_type="widget"
                              data-widget_type="image.default"
                            >
                              <div className="elementor-widget-container">
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      '/*! elementor - v3.16.0 - 09-10-2023 */\n    .elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=".svg"]{width:48px}.elementor-widget-image img{vertical-align:middle;display:inline-block}',
                                  }}
                                />{" "}
                                <img
                                  decoding="async"
                                  width={1920}
                                  height={640}
                                  alt
                                  data-srcset="https://pt-corp.vn/wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-1-1-1-1-18.jpg 1920w, https://pt-corp.vn/wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-1-1-1-1-18-300x100.jpg 300w, https://pt-corp.vn/wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-1-1-1-1-18-1024x341.jpg 1024w, https://pt-corp.vn/wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-1-1-1-1-18-768x256.jpg 768w, https://pt-corp.vn/wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-1-1-1-1-18-1536x512.jpg 1536w"
                                  data-src="https://pt-corp.vn/wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-1-1-1-1-18.jpg"
                                  data-sizes="(max-width: 1920px) 100vw, 1920px"
                                  className="attachment-full size-full wp-image-3014 lazyload"
                                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                />
                                <noscript>
                                  &lt;img decoding="async" width="1920"
                                  height="640"
                                  src="../wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-1-1-1-1-18.jpg"
                                  class="attachment-full size-full
                                  wp-image-3014" alt=""
                                  srcset="../wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-1-1-1-1-18.jpg
                                  1920w,
                                  ../wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-1-1-1-1-18-300x100.jpg
                                  300w,
                                  ../wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-1-1-1-1-18-1024x341.jpg
                                  1024w,
                                  ../wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-1-1-1-1-18-768x256.jpg
                                  768w,
                                  ../wp-content/uploads/2023/10/digital-marketing-agency-about-us-full-width-img-1-1-1-1-18-1536x512.jpg
                                  1536w" sizes="(max-width: 1920px) 100vw,
                                  1920px" /&gt;
                                </noscript>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-b5798e8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="b5798e8"
                      data-element_type="section"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e035d57"
                          data-id="e035d57"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-93f6004 elementor-widget elementor-widget-heading"
                              data-id="93f6004"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  BAN LÃNH ĐẠO CÔNG TY
                                </h2>{" "}
                              </div>
                            </div>
                            <section
                              className="elementor-section elementor-inner-section elementor-element elementor-element-a43cab4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                              data-id="a43cab4"
                              data-element_type="section"
                            >
                              <div className="elementor-container elementor-column-gap-default">
                                <div
                                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-c97dd79"
                                  data-id="c97dd79"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-e5d6a39 elementor-position-top elementor-widget elementor-widget-image-box"
                                      data-id="e5d6a39"
                                      data-element_type="widget"
                                      data-widget_type="image-box.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <style
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              "/*! elementor - v3.16.0 - 09-10-2023 */\n    .elementor-widget-image-box .elementor-image-box-content{width:100%}@media (min-width:768px){.elementor-widget-image-box.elementor-position-left .elementor-image-box-wrapper,.elementor-widget-image-box.elementor-position-right .elementor-image-box-wrapper{display:flex}.elementor-widget-image-box.elementor-position-right .elementor-image-box-wrapper{text-align:right;flex-direction:row-reverse}.elementor-widget-image-box.elementor-position-left .elementor-image-box-wrapper{text-align:left;flex-direction:row}.elementor-widget-image-box.elementor-position-top .elementor-image-box-img{margin:auto}.elementor-widget-image-box.elementor-vertical-align-top .elementor-image-box-wrapper{align-items:flex-start}.elementor-widget-image-box.elementor-vertical-align-middle .elementor-image-box-wrapper{align-items:center}.elementor-widget-image-box.elementor-vertical-align-bottom .elementor-image-box-wrapper{align-items:flex-end}}@media (max-width:767px){.elementor-widget-image-box .elementor-image-box-img{margin-left:auto!important;margin-right:auto!important;margin-bottom:15px}}.elementor-widget-image-box .elementor-image-box-img{display:inline-block}.elementor-widget-image-box .elementor-image-box-title a{color:inherit}.elementor-widget-image-box .elementor-image-box-wrapper{text-align:center}.elementor-widget-image-box .elementor-image-box-description{margin:0}",
                                          }}
                                        />
                                        <div className="elementor-image-box-wrapper">
                                          <figure className="elementor-image-box-img">
                                            <img
                                              decoding="async"
                                              width={340}
                                              height={340}
                                              alt
                                              data-srcset="https://pt-corp.vn/wp-content/uploads/2023/09/peter.jpg 340w, https://pt-corp.vn/wp-content/uploads/2023/09/peter-300x300.jpg 300w, https://pt-corp.vn/wp-content/uploads/2023/09/peter-150x150.jpg 150w"
                                              data-src="https://pt-corp.vn/wp-content/uploads/2023/09/peter.jpg"
                                              data-sizes="(max-width: 340px) 100vw, 340px"
                                              className="attachment-full size-full wp-image-674 lazyload"
                                              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                            />
                                            <noscript>
                                              &lt;img decoding="async"
                                              width="340" height="340" alt=""
                                              data-srcset="https://pt-corp.vn/wp-content/uploads/2023/09/peter.jpg
                                              340w,
                                              https://pt-corp.vn/wp-content/uploads/2023/09/peter-300x300.jpg
                                              300w,
                                              https://pt-corp.vn/wp-content/uploads/2023/09/peter-150x150.jpg
                                              150w"
                                              data-src="https://pt-corp.vn/wp-content/uploads/2023/09/peter.jpg"
                                              data-sizes="(max-width: 340px)
                                              100vw, 340px"
                                              class="attachment-full size-full
                                              wp-image-674 lazyload"
                                              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                              /&gt;&lt;noscript&gt;&lt;img
                                              decoding="async" width="340"
                                              height="340"
                                              src="../wp-content/uploads/2023/09/peter.jpg"
                                              class="attachment-full size-full
                                              wp-image-674" alt=""
                                              srcset="../wp-content/uploads/2023/09/peter.jpg
                                              340w,
                                              ../wp-content/uploads/2023/09/peter-300x300.jpg
                                              300w,
                                              ../wp-content/uploads/2023/09/peter-150x150.jpg
                                              150w" sizes="(max-width: 340px)
                                              100vw, 340px" /&gt;
                                            </noscript>
                                          </figure>
                                          <div className="elementor-image-box-content">
                                            <h3 className="elementor-image-box-title">
                                              PETER
                                            </h3>
                                            <p className="elementor-image-box-description">
                                              Founder &amp; CEO
                                            </p>
                                          </div>
                                        </div>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-1fa44c4"
                                  data-id="1fa44c4"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-27c3343 elementor-position-top elementor-widget elementor-widget-image-box"
                                      data-id="27c3343"
                                      data-element_type="widget"
                                      data-widget_type="image-box.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="elementor-image-box-wrapper">
                                          <figure className="elementor-image-box-img">
                                            <img
                                              decoding="async"
                                              width={150}
                                              height={150}
                                              alt
                                              data-src="https://pt-corp.vn/wp-content/uploads/2023/09/adam.jpg"
                                              className="attachment-full size-full wp-image-676 lazyload"
                                              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                            />
                                            <noscript>
                                              &lt;img decoding="async"
                                              width="150" height="150"
                                              src="../wp-content/uploads/2023/09/adam.jpg"
                                              class="attachment-full size-full
                                              wp-image-676" alt="" /&gt;
                                            </noscript>
                                          </figure>
                                          <div className="elementor-image-box-content">
                                            <h3 className="elementor-image-box-title">
                                              ADAM
                                            </h3>
                                            <p className="elementor-image-box-description">
                                              Account Manager
                                            </p>
                                          </div>
                                        </div>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-23f95de"
                                  data-id="23f95de"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-02675a5 elementor-position-top elementor-widget elementor-widget-image-box"
                                      data-id="02675a5"
                                      data-element_type="widget"
                                      data-widget_type="image-box.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="elementor-image-box-wrapper">
                                          <figure className="elementor-image-box-img">
                                            <img
                                              decoding="async"
                                              width={200}
                                              height={200}
                                              alt
                                              data-srcset="https://pt-corp.vn/wp-content/uploads/2023/09/darius.jpg 200w, https://pt-corp.vn/wp-content/uploads/2023/09/darius-150x150.jpg 150w"
                                              data-src="https://pt-corp.vn/wp-content/uploads/2023/09/darius.jpg"
                                              data-sizes="(max-width: 200px) 100vw, 200px"
                                              className="attachment-full size-full wp-image-672 lazyload"
                                              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                            />
                                            <noscript>
                                              &lt;img decoding="async"
                                              width="200" height="200"
                                              src="../wp-content/uploads/2023/09/darius.jpg"
                                              class="attachment-full size-full
                                              wp-image-672" alt=""
                                              srcset="../wp-content/uploads/2023/09/darius.jpg
                                              200w,
                                              ../wp-content/uploads/2023/09/darius-150x150.jpg
                                              150w" sizes="(max-width: 200px)
                                              100vw, 200px" /&gt;
                                            </noscript>
                                          </figure>
                                          <div className="elementor-image-box-content">
                                            <h3 className="elementor-image-box-title">
                                              DARIUS
                                            </h3>
                                            <p className="elementor-image-box-description">
                                              Product Manager
                                            </p>
                                          </div>
                                        </div>{" "}
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
                      className="elementor-section elementor-top-section elementor-element elementor-element-4dae77ef elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="4dae77ef"
                      data-element_type="section"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-background-overlay" />
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6cbcfdf9"
                          data-id="6cbcfdf9"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-3c35c753 elementor-widget elementor-widget-heading"
                              data-id="3c35c753"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h6 className="elementor-heading-title elementor-size-default">
                                  Dịch vụ
                                </h6>{" "}
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-371271c6 elementor-widget elementor-widget-heading"
                              data-id="371271c6"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  Dịch vụ của chúng tôi
                                </h2>{" "}
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-4f4da496 elementor-widget elementor-widget-text-editor"
                              data-id="4f4da496"
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
                                </div>{" "}
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-33422f05 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="33422f05"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <link
                                  rel="stylesheet"
                                  href="../wp-content/plugins/elementor/assets/css/widget-icon-box.min.css"
                                />{" "}
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <a
                                      href="../index.html@p=1129#"
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
                                      <a href="../index.html@p=1129#">
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
                              className="elementor-element elementor-element-73b7a440 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="73b7a440"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <a
                                      href="../index.html@p=1129#"
                                      className="elementor-icon elementor-animation-"
                                      tabIndex={-1}
                                    >
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-cogs"
                                      />{" "}
                                    </a>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h5 className="elementor-icon-box-title">
                                      <a href="../index.html@p=1129#">
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
                              className="elementor-element elementor-element-8e335fe elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="8e335fe"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <a
                                      href="../index.html@p=1129#"
                                      className="elementor-icon elementor-animation-"
                                      tabIndex={-1}
                                    >
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-globe"
                                      />{" "}
                                    </a>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h5 className="elementor-icon-box-title">
                                      <a href="../index.html@p=1129#">
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
                              className="elementor-element elementor-element-209dec67 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                              data-id="209dec67"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <a
                                      href="../index.html@p=1129#"
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
                                      <a href="../index.html@p=1129#">
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
                      className="elementor-section elementor-top-section elementor-element elementor-element-ff4c404 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="ff4c404"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-no">
                        <div
                          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-f5e7894"
                          data-id="f5e7894"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-9da05b2 elementor--star-style-star_fontawesome elementor-widget elementor-widget-star-rating"
                              data-id="9da05b2"
                              data-element_type="widget"
                              data-widget_type="star-rating.default"
                            >
                              <div className="elementor-widget-container">
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      '/*! elementor - v3.16.0 - 09-10-2023 */\n    @charset "UTF-8";.elementor-star-rating{color:#ccd6df;font-family:eicons;display:inline-block}.elementor-star-rating i{display:inline-block;position:relative;font-style:normal;cursor:default}.elementor-star-rating i:before{content:"\\e934";display:block;font-size:inherit;font-family:inherit;position:absolute;overflow:hidden;color:#f0ad4e;top:0;left:0}.elementor-star-rating .elementor-star-empty:before{content:none}.elementor-star-rating .elementor-star-1:before{width:10%}.elementor-star-rating .elementor-star-2:before{width:20%}.elementor-star-rating .elementor-star-3:before{width:30%}.elementor-star-rating .elementor-star-4:before{width:40%}.elementor-star-rating .elementor-star-5:before{width:50%}.elementor-star-rating .elementor-star-6:before{width:60%}.elementor-star-rating .elementor-star-7:before{width:70%}.elementor-star-rating .elementor-star-8:before{width:80%}.elementor-star-rating .elementor-star-9:before{width:90%}.elementor-star-rating__wrapper{display:flex;align-items:center}.elementor-star-rating__title{margin-right:10px}.elementor-star-rating--align-right .elementor-star-rating__wrapper{text-align:right;justify-content:flex-end}.elementor-star-rating--align-left .elementor-star-rating__wrapper{text-align:left;justify-content:flex-start}.elementor-star-rating--align-center .elementor-star-rating__wrapper{text-align:center;justify-content:center}.elementor-star-rating--align-justify .elementor-star-rating__title{margin-right:auto}@media (max-width:1024px){.elementor-star-rating-tablet--align-right .elementor-star-rating__wrapper{text-align:right;justify-content:flex-end}.elementor-star-rating-tablet--align-left .elementor-star-rating__wrapper{text-align:left;justify-content:flex-start}.elementor-star-rating-tablet--align-center .elementor-star-rating__wrapper{text-align:center;justify-content:center}.elementor-star-rating-tablet--align-justify .elementor-star-rating__title{margin-right:auto}}@media (max-width:767px){.elementor-star-rating-mobile--align-right .elementor-star-rating__wrapper{text-align:right;justify-content:flex-end}.elementor-star-rating-mobile--align-left .elementor-star-rating__wrapper{text-align:left;justify-content:flex-start}.elementor-star-rating-mobile--align-center .elementor-star-rating__wrapper{text-align:center;justify-content:center}.elementor-star-rating-mobile--align-justify .elementor-star-rating__title{margin-right:auto}}.last-star{letter-spacing:0}.elementor--star-style-star_unicode .elementor-star-rating{font-family:Arial,Helvetica,sans-serif}.elementor--star-style-star_unicode .elementor-star-rating i:not(.elementor-star-empty):before{content:"★"}',
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
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-ba8e4ba elementor-widget elementor-widget-testimonial"
                              data-id="ba8e4ba"
                              data-element_type="widget"
                              data-widget_type="testimonial.default"
                            >
                              <div className="elementor-widget-container">
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
                                          data-src="https://pt-corp.vn/wp-content/uploads/2023/10/digital-marketing-agency-reviewer-img-1-1-1-1-1-1.jpg"
                                          className="attachment-full size-full wp-image-1404 lazyload"
                                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        />
                                        <noscript>
                                          &lt;img decoding="async" width="40"
                                          height="40"
                                          src="../wp-content/uploads/2023/10/digital-marketing-agency-reviewer-img-1-1-1-1-1-1.jpg"
                                          class="attachment-full size-full
                                          wp-image-1404" alt="" /&gt;
                                        </noscript>{" "}
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
                          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-019bbc4"
                          data-id="019bbc4"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-592b97c elementor--star-style-star_fontawesome elementor-widget elementor-widget-star-rating"
                              data-id="592b97c"
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
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-4025c63 elementor-widget elementor-widget-testimonial"
                              data-id="4025c63"
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
                                          data-src="https://pt-corp.vn/wp-content/uploads/2023/10/digital-marketing-agency-reviewer-img-2-1-1-1-1-1.jpg"
                                          className="attachment-full size-full wp-image-3146 lazyload"
                                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        />
                                        <noscript>
                                          &lt;img decoding="async" width="40"
                                          height="40"
                                          src="../wp-content/uploads/2023/10/digital-marketing-agency-reviewer-img-2-1-1-1-1-1.jpg"
                                          class="attachment-full size-full
                                          wp-image-3146" alt="" /&gt;
                                        </noscript>{" "}
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
                          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ad02c16"
                          data-id="ad02c16"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-cc128c4 elementor--star-style-star_fontawesome elementor-widget elementor-widget-star-rating"
                              data-id="cc128c4"
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
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-9063a9e elementor-widget elementor-widget-testimonial"
                              data-id="9063a9e"
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
                                          data-src="https://pt-corp.vn/wp-content/uploads/2023/10/digital-marketing-agency-reviewer-img-3-1-1-1-1-1.jpg"
                                          className="attachment-full size-full wp-image-3148 lazyload"
                                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        />
                                        <noscript>
                                          &lt;img decoding="async" width="40"
                                          height="40"
                                          src="../wp-content/uploads/2023/10/digital-marketing-agency-reviewer-img-3-1-1-1-1-1.jpg"
                                          class="attachment-full size-full
                                          wp-image-3148" alt="" /&gt;
                                        </noscript>{" "}
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
                    <section
                      className="elementor-section elementor-top-section elementor-element elementor-element-a51ddb8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="a51ddb8"
                      data-element_type="section"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-615f0c30"
                          data-id="615f0c30"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-2a8868ad elementor-widget elementor-widget-heading"
                              data-id="2a8868ad"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  Khách hàng - Đối tác
                                </h2>{" "}
                              </div>
                            </div>
                            <section
                              className="elementor-section elementor-inner-section elementor-element elementor-element-6d660b8a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                              data-id="6d660b8a"
                              data-element_type="section"
                            >
                              <div className="elementor-container elementor-column-gap-default">
                                <div
                                  className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-4a431b00"
                                  data-id="4a431b00"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-696ddbf4 elementor-widget elementor-widget-image"
                                      data-id="696ddbf4"
                                      data-element_type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <img
                                          decoding="async"
                                          width={531}
                                          height={100}
                                          alt
                                          data-srcset="https://pt-corp.vn/wp-content/uploads/2023/09/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9jS0tjcy9NQUZ1eEhjS0tjcy8xL3AucG5n.webp 531w, https://pt-corp.vn/wp-content/uploads/2023/09/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9jS0tjcy9NQUZ1eEhjS0tjcy8xL3AucG5n-300x56.webp 300w"
                                          data-src="https://pt-corp.vn/wp-content/uploads/2023/09/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9jS0tjcy9NQUZ1eEhjS0tjcy8xL3AucG5n.webp"
                                          data-sizes="(max-width: 531px) 100vw, 531px"
                                          className="attachment-full size-full wp-image-548 lazyload"
                                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        />
                                        <noscript>
                                          &lt;img decoding="async" width="531"
                                          height="100"
                                          src="../wp-content/uploads/2023/09/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9jS0tjcy9NQUZ1eEhjS0tjcy8xL3AucG5n.webp"
                                          class="attachment-full size-full
                                          wp-image-548" alt=""
                                          srcset="../wp-content/uploads/2023/09/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9jS0tjcy9NQUZ1eEhjS0tjcy8xL3AucG5n.webp
                                          531w,
                                          ../wp-content/uploads/2023/09/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9jS0tjcy9NQUZ1eEhjS0tjcy8xL3AucG5n-300x56.webp
                                          300w" sizes="(max-width: 531px) 100vw,
                                          531px" /&gt;
                                        </noscript>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-36a5cb09"
                                  data-id="36a5cb09"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-4ef74afc elementor-widget elementor-widget-image"
                                      data-id="4ef74afc"
                                      data-element_type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <img
                                          decoding="async"
                                          width={199}
                                          height={162}
                                          alt
                                          data-src="https://pt-corp.vn/wp-content/uploads/2023/09/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qVmZ4Yy9NQUZ1eEVqVmZ4Yy8xL3AucG5n.webp"
                                          className="attachment-full size-full wp-image-550 lazyload"
                                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        />
                                        <noscript>
                                          &lt;img decoding="async" width="199"
                                          height="162"
                                          src="../wp-content/uploads/2023/09/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qVmZ4Yy9NQUZ1eEVqVmZ4Yy8xL3AucG5n.webp"
                                          class="attachment-full size-full
                                          wp-image-550" alt="" /&gt;
                                        </noscript>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-1a57a358"
                                  data-id="1a57a358"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-7d22b77 elementor-widget elementor-widget-image"
                                      data-id="7d22b77"
                                      data-element_type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <img
                                          decoding="async"
                                          width={640}
                                          height={520}
                                          alt
                                          data-srcset="https://pt-corp.vn/wp-content/uploads/2023/09/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qR1F5by9NQUZ1eExqR1F5by8xL3AucG5n.webp 640w, https://pt-corp.vn/wp-content/uploads/2023/09/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qR1F5by9NQUZ1eExqR1F5by8xL3AucG5n-300x244.webp 300w"
                                          data-src="https://pt-corp.vn/wp-content/uploads/2023/09/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qR1F5by9NQUZ1eExqR1F5by8xL3AucG5n.webp"
                                          data-sizes="(max-width: 640px) 100vw, 640px"
                                          className="attachment-full size-full wp-image-556 lazyload"
                                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        />
                                        <noscript>
                                          &lt;img decoding="async" width="640"
                                          height="520"
                                          src="../wp-content/uploads/2023/09/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qR1F5by9NQUZ1eExqR1F5by8xL3AucG5n.webp"
                                          class="attachment-full size-full
                                          wp-image-556" alt=""
                                          srcset="../wp-content/uploads/2023/09/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qR1F5by9NQUZ1eExqR1F5by8xL3AucG5n.webp
                                          640w,
                                          ../wp-content/uploads/2023/09/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qR1F5by9NQUZ1eExqR1F5by8xL3AucG5n-300x244.webp
                                          300w" sizes="(max-width: 640px) 100vw,
                                          640px" /&gt;
                                        </noscript>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-1e167e7d"
                                  data-id="1e167e7d"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-22ad6ecb elementor-widget elementor-widget-image"
                                      data-id="22ad6ecb"
                                      data-element_type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <img
                                          decoding="async"
                                          width={200}
                                          height={104}
                                          alt
                                          data-src="https://pt-corp.vn/wp-content/uploads/2023/09/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9QdElRMC9NQUZ1eEJQdElRMC8xL3AucG5n.webp"
                                          className="attachment-full size-full wp-image-552 lazyload"
                                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        />
                                        <noscript>
                                          &lt;img decoding="async" width="200"
                                          height="104"
                                          src="../wp-content/uploads/2023/09/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9QdElRMC9NQUZ1eEJQdElRMC8xL3AucG5n.webp"
                                          class="attachment-full size-full
                                          wp-image-552" alt="" /&gt;
                                        </noscript>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-1572f949"
                                  data-id="1572f949"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="elementor-element elementor-element-1cbf8234 elementor-widget elementor-widget-image"
                                      data-id="1cbf8234"
                                      data-element_type="widget"
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <img
                                          decoding="async"
                                          width={200}
                                          height={62}
                                          alt
                                          data-src="https://pt-corp.vn/wp-content/uploads/2023/09/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9kX1ppQS9NQUZ1eElkX1ppQS8xL3AucG5n.webp"
                                          className="attachment-full size-full wp-image-554 lazyload"
                                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        />
                                        <noscript>
                                          &lt;img decoding="async" width="200"
                                          height="62"
                                          src="../wp-content/uploads/2023/09/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9kX1ppQS9NQUZ1eElkX1ppQS8xL3AucG5n.webp"
                                          class="attachment-full size-full
                                          wp-image-554" alt="" /&gt;
                                        </noscript>{" "}
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
