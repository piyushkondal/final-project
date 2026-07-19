import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryServices from "../../../services/CategoryServices";

export default function ViewCategory() {

  const [Data, setData] = useState([])

  useEffect(() => {
    FatchData()
  }, [])

  const FatchData = async () => {
    let data = await CategoryServices.All()

     setData(data)

     console.log(data);
     

  }
  return (
    <>
      <>


        <div className="super_container">


          {/* Menu */}
          <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
            <div className="menu_close_container">
              <div className="menu_close">
                <div />
                <div />
              </div>
            </div>
            <div className="search">
              <form action="#" className="header_search_form menu_mm">
                <input
                  type="search"
                  className="search_input menu_mm"
                  placeholder="Search"
                  required="required"
                />
                <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
                  <i className="fa fa-search menu_mm" aria-hidden="true" />
                </button>
              </form>
            </div>
            <nav className="menu_nav">
              <ul className="menu_mm">
                <li className="menu_mm">
                  <a href="index.html">Home</a>
                </li>
                <li className="menu_mm">
                  <a href="courses.html">Courses</a>
                </li>
                <li className="menu_mm">
                  <a href="instructors.html">Instructors</a>
                </li>
                <li className="menu_mm">
                  <a href="#">Events</a>
                </li>
                <li className="menu_mm">
                  <a href="blog.html">Blog</a>
                </li>
                <li className="menu_mm">
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="menu_extra">
              <div className="menu_phone">
                <span className="menu_title">phone:</span>(009) 35475 6688933 32
              </div>
              <div className="menu_social">
                <span className="menu_title">follow us</span>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-pinterest" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        
          {/* Courses */}
          <div className="courses">
            <div className="container">
           
            
             
              <div className="row courses_row">

                {
                  Data.map((el) => {
                    return<>
                    <div className="col-lg-4 col-md-6 mt-5  md-3">
                      <div className="course">
                        <div className="course_image">
                          <img src={el.image} alt="" style={{height:"200px", width:"100%"}} />
                        </div>
                        <div className="course_body">
                          <div className="course_header d-flex flex-row align-items-center justify-content-start">
                          
                         
                          </div>
                          <div className="course_title">
                            <h3>
                              <a href="courses.html">{el.CategoryName}</a>
                            </h3>
                          </div>
                          <div className="course_text">
                         {el.Description}
                          </div>
                      
                        </div>
                      </div>
                    </div>
                    
                    </>
                    
                  })
                }



              </div>

            </div>
          </div>


        </div>


      </>
    </>
  )
}