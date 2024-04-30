import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { GetListProductAction } from "../../redux/actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { CartAction } from "../../redux/actions/CartAction";

export default function Marketing() {
  const dispatch = useDispatch();
  const { arrProduct } = useSelector((root) => root.ProductReducer);
  console.log(arrProduct);
  useEffect(() => {
    const data = GetListProductAction();
    dispatch(data);
  }, []);

  const [activeItem, setActiveItem] = useState("MO");

  const handleItemClick = (type) => {
    setActiveItem(type);
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
                                  Marketing
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
                    <div id="service-list">
                      <div
                        className={`service-item ${
                          activeItem === "MO" ? "active" : ""
                        }`}
                        onClick={() => handleItemClick("MO")}
                      >
                        DỊCH VỤ MARKETING ONLINE
                      </div>
                      <div
                        className={`service-item ${
                          activeItem === "SALE" ? "active" : ""
                        }`}
                        onClick={() => handleItemClick("SALE")}
                      >
                        DỊCH VỤ SALE
                      </div>
                      <div
                        className={`service-item ${
                          activeItem === "ADS" ? "active" : ""
                        }`}
                        onClick={() => handleItemClick("ADS")}
                      >
                        GOOGLE ADS/ FACEBOOK ADS
                      </div>
                    </div>
                    <div className="product-container">
                      {arrProduct
                        .filter((item) => item.type === activeItem)
                        .map((item, index) => {
                          return (
                            <div className="product-item">
                              <div className="header-form">{item.name}</div>
                              <div
                                style={{
                                  textAlign: "left",
                                  padding: "20px 30px",
                                  fontSize: "18px",
                                }}
                              >
                                {item.description
                                  .split(".")
                                  .map((sentence, index) => (
                                    <div key={index}>
                                      <FontAwesomeIcon
                                        icon={faCircleDot}
                                        size="sm"
                                        color="brown"
                                        className="coffee-icon"
                                      />{" "}
                                      {sentence.trim()}
                                    </div>
                                  ))}
                              </div>
                              <div>
                                <span
                                  style={{
                                    fontSize: "22px",
                                    color: "red",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {item.price.toLocaleString()}
                                </span>{" "}
                                / tháng
                              </div>
                              <button
                                className="buy-form"
                                onClick={() => {
                                  const data = {
                                    productId: item.id,
                                    amount: item.price,
                                  };
                                  localStorage.setItem("userID",localStorage.getItem('userID'));
                                  localStorage.setItem("productId",item.id);
                                  localStorage.setItem("price",item.price)

                                  const action = CartAction(data);
                                  dispatch(action);
                                }}
                              >
                                Đăng ký
                              </button>
                            </div>
                          );
                        })}
                    </div>
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
