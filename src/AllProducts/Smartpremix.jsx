import React, { useState } from 'react'
import './Product.css'

import pic1 from '../AllProducts-Images/Samartpremix1.jpeg'
import pic2 from '../AllProducts-Images/Smartpremix2.jpeg'
import pic3 from '../AllProducts-Images/Samartpremix3.jpeg'
import pic4 from '../AllProducts-Images/Samartpremix4.jpeg'
import pic5 from '../AllProducts-Images/Samartpremix5.jpeg'

import vegLogo from '../assets/icons/veg-icon.svg';
import Reputation from '../components/reputations/reputation'

const Smartpremix = () => {

  const images = [pic1, pic2, pic3, pic4, pic5];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  }

  const handleThumbnailHover = (index) => {
    setCurrentIndex(index);
  }

  const product = {
    name: "Smart Mix Multipurpose premix",
    punchLine: "35 % Oil Free and Less Acidic .",
    quantity: "400",
    price: "144",
    buyFromHere: [
      {
        marketPlace: "Flipkart",
        link: "https://www.flipkart.com/bisuddha-smart-mix-400-g/p/itmb5abfac8080b7?pid=RYMGZC79PCKT7BHF",
        backgroundColor: "#ff9900",
        color: "#000000"
      },
    ],
    alsoAvailableIn: [
      {
        quantity: "200 gm,900 gm",
        price: "80, 288",
      }
    ],
    alsoBuyFromHere: [
      {
        marketPlace: "amazon",
        link: "try",
        backgroundColor: "#ff9900",
        color: "#000000"
      }
    ],
    highlights: [
      {
        head: "Type",
        details: "Premix"
      },
      {
        head: "Quantity",
        details: "200 gm"
      },
      {
        head: "Base Ingredient",
        details: "Millets,Rice Flour,Fenugreek Power"
      },
      {
        head: "",
        details: "No Transfats, No Preservative."
      },
      {
        head: "",
        details: "No Artificial Color, Guuten Free,100% Natural Ingradiants,Less Acidic"
      },
      {
        head: "",
        details: "High Fiber,Vegan Friendly,Easy Digest."
      },
    ],
    specifications: [
      {
        head: "Brand",
        details: "Bisuddha"
      },
      {
        head: "Fssai Lic. No.",
        details: "12824013000076"
      },
      {
        head: "Product Name",
        details: "Smart Mix"
      },
      {
        head: "Quantity",
        details: "200 gm , 400 gm"
      },
      {
        head: "Base Flavour",
        details: "Millets(Channa,Ahor,Urad)"
      },
      {
        head: "Organic",
        details: "Yes"
      },
      {
        head: "Container Type",
        details: "Sandy brown Packet (Paper packet)"
      },
      {
        head: "Best Before",
        details: "12 Months from Mfg Date"
      },
      {
        head: "Storage",
        details: "Store in a Cool Dry Place"
      },
      {
        head: "Ingredient Type",
        details: "Vegetarian"
      },
      {
        head: "Food Preference",
        details: "Vegetarian"
      },
      {
        head: "Added Preservatives",
        details: "INS 211"
      },
      {
        head: "Artificial Flavour",
        details: "No"
      },
      {
        head: "Added Color",
        details: "No"
      },
    ],
    ingredients: [
      {
        value: "Amla"
      },
      {
        value: "Sugar"
      },
      {
        value: "Black Salt"
      },
      {
        value: "Spices"
      },
      {
        value: "INS 211"
      },
      {
        value: "Jaggery"
      },
      {
        value: "Lemon Juice"
      }
    ],
    nutritionalValue: [
      {
        head: "Nutrients",
        value: [
          //Energy , Protein, Carbohydrate, Total Sugars, Added Sugars, Total Fat, Sodium
          {
            name: "Energy (kcal)",
          },
          {
            name: "Carbohydrate (g)",
          },
          {
            name: "Protein (g)",
          },
          {
            name: "Fat (g)",
          },
          {
            name: "Added Sugar (g)",
          },
          {
            name: "Iron Content (g)",
          },
          {
            name: "Calcium Content (mg)",
          },
          {
            name: "Sodium Content (gm)",
          },
          {
            name: "Potassium Content (mg)",
          },
          {
            name: "Magnesium Content (mg)",
          },
          {
            name: "Vitamin B12(mg)",
          },
          {
            name: "Vitamin A (IU)"
          },
          
        ]
      },
      /* {
        head: "Per 25 gm",
        value: [
          {
            value: "84.08"
          },
          {
            value: "21.00"
          },
          {
            value: "0.03"
          },
          {
            value: "0.00"
          },
          {
            value: "0.00"
          },
          {
            value: "0.00"
          },
          {
            value: "0.00"
          },
          {
            value: "51.28"
          },
          {
            value: "23.58"
          },
          {
            value: "12.23"
          },
          {
            value: "0.83"
          },
          {
            value: "0"
          },
          {
            value: "3.13"
          },
          {
            value: "0.10"
          }
        ]
      }, */
      {
        head: "Per 100 gm",
        value: [
          {
            value: "375.71"
          },
          {
            value: "70.24"
          },
          {
            value: "12.82"
          },
          {
            value: "4.83"
          },
          {
            value: "0.72"
          },
          {
            value: "4.58"
          },
          {
            value: "51.18"
          },
          {
            value: "0.42"
          },
          {
            value: "0.67"
          },
          {
            value: "18.65"
          },
          {
            value: "212"
          },
          {
            value: "55"
          },
          /* {
            value: "12.5"
          },
          {
            value: "0.4"
          }, */
        ]
      },
      // {
      //   head: "% RDA per serve*",
      //   value: [
      //     {
      //       value: "0.88%"
      //     },
      //     {
      //       value: "_"
      //     },
      //     {
      //       value: "_"
      //     },
      //     {
      //       value: "_"
      //     },
      //     {
      //       value: "7.20%"
      //     },
      //     {
      //       value: "0.02%"
      //     },
      //     {
      //       value: "5.40%"
      //     }
      //   ]
      // },
    ],
    nutritionalDisclaimer: "",
    legalDisclaimer: "This is only brand name/trade mark and does not represent its true nature."
  }

  const perHundredGramPrice = Math.round(((product.price / product.quantity) * 100).toFixed(2));

  return (
    <div className="temp product">
      <div className="container">
        <div className="product-container">
          <div className="product-container-left sticky">
            <div className="product-image-container">
              <div className="thumbnail-gallery child">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => handleThumbnailClick(index)}
                    onMouseEnter={() => handleThumbnailHover(index)}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>
              <div className="carousel-container child">
                <div className="product-image">
                  <img src={images[currentIndex]} alt={` ${currentIndex + 1}`} />
                </div>
              </div>
            </div>
          </div>
          <div className="product-container-right">
            <div className="product-details">

              <div className="product-name">
                <h2>{product.name}</h2>
                <div className="vegLogo">
                  <img src={vegLogo} alt="" />
                </div>
              </div>
              
              {
                product.punchLine ? <div className="product-punchline"><p className="lex">{product.punchLine}</p></div> : null
              }
              <div className="product-price pt-1"><h3>₹{product.price}</h3></div>

              <div className="product-quantity pt-1">
                <h5 className="lex">Quantity :</h5>
                <div className="product-quantity-value">
                  <h6 className="c-b">{product.quantity} gm</h6>
                  <p>@ ₹{perHundredGramPrice}/100gm</p>
                </div>
              </div>

              <div className="product-highlights pt-2">
                {
                  !product.highlights ? null :
                    <div className="product-highlight">
                      <h5 className="lex">Highlights :</h5>
                      <div className="product-highlight-value">
                        {
                          product.highlights.map((item, index) => (
                            <div key={index} className="product-highlight-value-item pb-1 c-b">
                              <span className='dot'></span>
                              {
                                item.head ? <h6 className="c-b">{item.head} :</h6> : null
                              }
                              {
                                item.details ? <p>{item.details}</p> : null
                              }
                            </div>
                          ))
                        }
                      </div>
                    </div>
                }
              </div>

              <div className="product-buy-from-here pt-2">
                {
                  !product.buyFromHere ? null :
                    <div className="product-buy">
                      <h5 className="lex c-g">Buy from here :</h5>
                      <div className="product-buy-value">
                        {
                          product.buyFromHere.map((item, index) => (
                            <div key={index} className="product-buy-value-item">
                              <a href={item.link} target="_blank" rel="noreferrer">
                                <button className="buy-btn btn-primary" style={{ backgroundColor: item.backgroundColor, color: item.color }}>
                                  <h6 className="">Buy Here</h6>
                                  <div className="s lex lw">From {item.marketPlace}</div>
                                </button></a>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                }
              </div>

              <div className="product-also-available-in pt-2">
                {
                  !product.alsoAvailableIn ? null :
                    <div className="product-available">
                      <h5 className="lex">Also Available in :</h5>
                      <div className="product-available-value">
                        {
                          product.alsoAvailableIn.map((item, index) => (
                            <div key={index} className="product-available-value-item">
                              <h6 className="c-b">{item.quantity}</h6>
                              <p>₹{item.price}</p>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                }
              </div>

              {/* <div className="product-also-buy-from-here pt-2">
              {
                !product.alsoBuyFromHere ? null :
                  <div className="product-buy">
                    <h5 className="lex c-g">Buy this from here :</h5>
                    <div className="product-buy-value">
                      {
                        product.alsoBuyFromHere.map((item, index) => (
                          <div key={index} className="product-buy-value-item">
                            <a href={item.link} target="_blank" rel="noreferrer">
                              <button className="buy-btn btn-primary" style={{ backgroundColor: item.backgroundColor, color: item.color }}>
                                <h6 className="">Buy Here</h6>
                                <div className="s lex lw">From {item.marketPlace}</div>
                              </button></a>
                          </div>
                        ))
                      }
                    </div>
                  </div>
              
              }
            </div> */}

              <div className="product-ingredients pt-2">
                {
                  !product.ingredients ? null :
                    <div className="product-ingredient">
                      <h5 className="lex c-g">Ingredients :</h5>
                      <div className="product-ingredient-value">
                        {
                          product.ingredients.map((item, index) => (
                            <div key={index} className="product-ingredient-value-item pb-1 c-b">
                              <span className="dot"></span>
                              {
                                item.value ? <p>{item.value}</p> : null
                              }
                            </div>
                          ))
                        }
                      </div>
                    </div>
                }
              </div>

              <div className="product-specifications pt-2">
                {
                  !product.specifications ? null :
                    <div className="product-specification">
                      <h5 className="lex c-g">Specifications :</h5>
                      <div className="product-specification-value">
                        {
                          product.specifications.map((item, index) => (
                            <div key={index} className="product-specification-value-item pb-1 c-b">
                              {
                                item.head ? <h6 className="c-g">{item.head} :</h6> : null
                              }
                              {
                                item.details ? <p>{item.details}</p> : null
                              }
                            </div>
                          ))
                        }
                      </div>
                    </div>
                }
              </div>

              <div className="product-nutritional-section pt-2">
                {
                  !product.nutritionalValue ? null :
                    <div className="product-nutritional">
                      <h5 className="lex c-g">Nutritional Value :</h5>
                      <div className="product-nutritional-value">
                        {
                          product.nutritionalValue.map((item, index) => (
                            <div key={index} className="product-nutritional-value-item">
                              {
                                (item.value.length) ? <h6 className="c-g">{item.head}</h6> : <div className="none"></div>
                              }
                              {
                                item.value.map((value, index) => (
                                  <div key={index} className="product-nutritional-value-item-value">
                                    {
                                      value.name ? <p className="c-g">{value.name}</p> : null
                                    }
                                    <div>
                                      {
                                        value.value ? <p className="c-b">{value.value}</p> : null
                                      }
                                    </div>
                                  </div>
                                ))
                              }
                            </div>
                          ))
                        }
                      </div>
                    </div>
                }
                {
                  !product.nutritionalDisclaimer ? null :
                    <div className="product-nutritional-disclaimer pt-1">
                      <div className="lex c-g">{product.nutritionalDisclaimer}</div>
                    </div>
                }
              </div>

              <div className="product-legal-disclaimer pt-2">
                {
                  !product.legalDisclaimer ? null :
                    <div className="product-legal">
                      <h5 className="lex c-g">Legal Disclaimer :</h5>
                      <div className="product-legal-value">
                        <p className="lex c-g">{product.legalDisclaimer}</p>
                      </div>
                    </div>
                }
              </div>
            </div>
            <Reputation />
          </div>
        </div>

        <div className="goBack ta-rig">
          <h5>
            Back to All Products
          </h5>
          <a href="/our-products">
            <button
              className="btn-primary buy-btn h6 lex "
            >
              Shop All
            </button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Smartpremix 