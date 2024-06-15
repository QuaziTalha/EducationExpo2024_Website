import React from "react";

export default function Header() {
  return (
    <div>
      <div>
        {/* overlay */}
        <div className="et-overlay group">
          <div className="opacity-0 pointer-events-none group-[.active]:opacity-100 group-[.active]:pointer-events-auto transition ease-linear duration-300  bg-etBlack/80 fixed inset-0 z-[60]" />
        </div>
        {/* overlay */}
        {/* sidebar */}
        <div className="et-sidebar group">
          <div className=" group-[.active]:translate-x-0 translate-x-[100%] transition-transform ease-linear duration-300 fixed right-0 w-full max-w-[25%] xl:max-w-[30%] lg:max-w-[40%] md:max-w-[50%] sm:max-w-[60%] xxs:max-w-full bg-[#18377e] h-full z-[100] overflow-auto p-[50px] lg:p-[30px] space-y-[40px]">
            {/* heading */}
            <div className="et-sidebar-heading">
              <div className="logo flex justify-between items-center">
                <a href="./">
                  <img src="assets/img/logo-white.png" alt="logo" />
                </a>
                <button
                  type="button"
                  className="et-sidebar-close-btn border border-white/50 w-[45px] aspect-square shrink-0 text-white text-[22px] rounded-full hover:text-etBlue hover:bg-white"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
            </div>
            {/* mobile menu */}
            <div className="et-header-nav-in-mobile" />
          </div>
        </div>
        {/* HEADER SECTION START */}
        <header className="et-header to-be-fixed py-[30px] xxs:py-[20px] fixed top-0 w-full px-[155px] xxxl:px-[100px] xxl:px-[40px] xs:px-[20px] z-50">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div className="logo shrink-0">
              <a href="./">
                <img src="assets/img/logo/EduExpo-2024-White.png" style={{position: "absolute", top: "18px",left: "50px", width: "115px"}} alt="logo" />
              </a>
            </div>
            <div className="et-header-right flex items-center gap-[60px] xl:gap-[30px]">
              <div className="to-go-to-sidebar-in-mobile flex md:flex-col md:items-start items-center gap-[100px] xl:gap-[30px] md:gap-y-[15px]">
                {/* nav */}
                <ul className="et-header-nav flex md:flex-col gap-x-[43px] xl:gap-x-[33px] font-kanit text-[17px] font-normal">
                  <li className="has-sub-menu relative">
                    <a href="./" role="button">Home</a>
                    <ul className="et-header-submenu">
                      <li>
                        <a href="./">Home</a>
                      </li>
                      <li>
                        <a href="/">About Education Expo</a>
                      </li>
                      <li>
                        <a href="/">About Minds in Motion</a>
                      </li>
                      <li>
                        <a href="/">Organizing Comiitee</a>
                      </li>
                      <li>
                        <a href="/">Our Policies</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about">About us</a>
                  </li>
                  <li className="has-sub-menu relative">
                    <a href="/" role="button">Events</a>
                    <ul className="et-header-submenu">
                      <li>
                        <a href="events.html">All Events</a>
                      </li>
                      <li>
                        <a href="event-details.html">Events Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub-menu relative">
                    <a href="/" role="button">Pages</a>
                    <ul className="et-header-submenu">
                      <li>
                        <a href="pricing.html">Pricing Plan</a>
                      </li>
                      <li>
                        <a href="gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="sponsor.html">Sponsors</a>
                      </li>
                      <li>
                        <a href="venue.html">Venue</a>
                      </li>
                      <li>
                        <a href="404.html">Error 404</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub-menu relative">
                    <a href="/" role="button">Team</a>
                    <ul className="et-header-submenu">
                      <li>
                        <a href="team.html">Team Members</a>
                      </li>
                      <li>
                        <a href="team-member-details.html">Team Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub-menu relative">
                    <a href="/" role="button">News</a>
                    <ul className="et-header-submenu">
                      <li>
                        <a href="news.html">All News</a>
                      </li>
                      <li>
                        <a href="news-details.html">News Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
                {/* button */}
                <a
                  href="/#"
                  className="et-btn bg-white flex items-center justify-center gap-x-[15px] h-[50px] px-[15px] text-etBlue font-medium text-[17px] rounded-full group"
                >
                  <span className="icon">
                    <svg
                      width={27}
                      height={16}
                      viewBox="0 0 27 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.02101 0H0.844661C0.378197 0 0 0.378144 0 0.844662V5.12625C0 5.59277 0.378197 5.97091 0.844661 5.97091C1.96347 5.97091 2.8737 6.88114 2.8737 8C2.8737 9.11886 1.96347 10.029 0.844661 10.029C0.378197 10.029 0 10.4071 0 10.8736V15.1553C0 15.6218 0.378197 15.9999 0.844661 15.9999H8.02101V0Z"
                        className="fill-etBlue group-hover:fill-white transition"
                      />
                      <path
                        d="M26.0001 5.97091C26.4665 5.97091 26.8447 5.59277 26.8447 5.12625V0.844662C26.8447 0.378144 26.4665 0 26.0001 0H9.71094V16H26.0001C26.4665 16 26.8447 15.6219 26.8447 15.1553V10.8737C26.8447 10.4072 26.4665 10.029 26.0001 10.029C24.8813 10.029 23.971 9.11886 23.971 8C23.971 6.88114 24.8813 5.97091 26.0001 5.97091Z"
                        className="fill-etBlue group-hover:fill-white transition"
                      />
                    </svg>
                  </span>{" "}
                  Get Tickets
                </a>
              </div>
              {/* mobile menu button */}
              <button
                type="button"
                className="et-mobile-menu-open-btn hidden md:inline-block bg-etBlue rounded-full w-[50px] aspect-square text-white text-[18px] hover:bg-etBlue"
              >
                <i className="fa-solid fa-bars" />
              </button>
            </div>
          </div>
        </header>
        {/* HEADER SECTION END */}
      </div>
    </div>
  );
}