import React from 'react';

const Header = () =>
  <header id="js-header" className="u-header u-header--static u-header--toggle"
      data-header-fix-moment="500"
      data-header-fix-effect="slide">
    <div className="u-header__section u-header__section--light g-bg-white g-transition-0_3 g-py-10"
       data-header-fix-moment-exclude="g-bg-white g-py-10"
       data-header-fix-moment-classes="g-bg-white-opacity-0_9 u-shadow-v18 g-py-3">
    <nav className="js-mega-menu navbar navbar-toggleable-md">
      <div className="container">
        <button className="navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-right-0" type="button"
                aria-label="Toggle navigation"
                aria-expanded="false"
                aria-controls="navBar"
                data-toggle="collapse"
                data-target="#navBar">
          <span className="hamburger hamburger--slider">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </span>
        </button>

        <a href="../../unify-main/home/home-page-1.html" className="navbar-brand">
          <img src="../../assets/img/logo/logo-1.png" alt="logo" />
        </a>

        {/*<!-- Navigation -->*/}
        <div className="collapse navbar-collapse align-items-center flex-sm-row g-pt-10 g-pt-5--lg g-mr-40--lg" id="navBar">
          <ul className="navbar-nav text-uppercase g-font-weight-600 ml-auto">
            <li className="nav-item g-mx-10--lg g-mx-15--xl">
              <a href="../../index.html" className="nav-link g-py-7 g-px-0">Intro</a>
            </li>

            <li className="nav-item hs-has-sub-menu g-mx-10--lg g-mx-15--xl">
              <a id="nav-link--home" className="nav-link g-py-7 g-px-0" href="/"
                 aria-haspopup="true"
                 aria-expanded="false"
                 aria-controls="nav-submenu--home"
              >Home</a>

              <ul className="hs-sub-menu list-unstyled g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-py-7 g-mt-20 g-mt-15--lg--scrolling" id="nav-submenu--home"
                  aria-labelledby="nav-link--home">
                <li className="dropdown-item"><a className="nav-link" href="../../unify-main/home/home-page-1.html">Home 1</a></li>
                <li className="dropdown-item"><a className="nav-link" href="../../unify-main/home/home-page-2.html">Home 2</a></li>
                <li className="dropdown-item"><a className="nav-link" href="../../unify-main/home/home-page-3.html">Home 3</a></li>
                <li className="dropdown-item"><a className="nav-link" href="../../unify-main/home/home-page-4.html">Home 4</a></li>
                <li className="dropdown-item"><a className="nav-link" href="../../unify-main/home/home-page-5.html">Home 5</a></li>
                <li className="dropdown-item"><a className="nav-link" href="../../unify-main/home/home-page-6.html">Home 6</a></li>
                <li className="dropdown-item"><a className="nav-link" href="../../unify-main/home/home-page-7.html">Home 7</a></li>
                <li className="dropdown-item"><a className="nav-link" href="../../unify-main/home/home-page-8.html">Home 8</a></li>
                <li className="dropdown-item"><a className="nav-link" href="../../unify-main/home/home-page-9.html">Home 9</a></li>
                <li className="dropdown-item"><a className="nav-link" href="../../unify-main/home/home-page-10.html">Home 10</a></li>
                <li className="dropdown-item"><a className="nav-link" href="../../unify-main/home/home-page-11.html">Home 11</a></li>
                <li className="dropdown-item"><a className="nav-link" href="../../unify-main/home/home-page-12.html">Home 12</a></li>
                <li className="dropdown-item"><a className="nav-link" href="../../unify-main/home/home-page-13.html">Home 13</a></li>
                <li className="dropdown-item"><a className="nav-link" href="../../unify-main/home/home-page-14.html">Home 14</a></li>
                <li className="dropdown-item"><a className="nav-link" href="../../unify-main/home/home-page-15.html">Home 15</a></li>
              </ul>
            </li>

            <li className="nav-item hs-has-sub-menu g-mx-10--lg g-mx-15--xl">
              <a id="nav-link--pages" className="nav-link g-py-7 g-px-0" href="/"
                 aria-haspopup="true"
                 aria-expanded="false"
                 aria-controls="nav-submenu--pages"
              >Pages</a>

              <ul className="hs-sub-menu list-unstyled g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-py-7 g-mt-20 g-mt-15--lg--scrolling" id="nav-submenu--pages"
                  aria-labelledby="nav-link--pages">
                <li className="dropdown-item hs-has-sub-menu">
                  <a id="nav-link--pages--about" className="nav-link" href="/"
                     aria-haspopup="true"
                     aria-expanded="false"
                     aria-controls="nav-submenu--pages--about"
                  >About</a>

                  <ul className="hs-sub-menu list-unstyled g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-py-7 g-my-2" id="nav-submenu--pages--about"
                      aria-labelledby="nav-link--pages--about">
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-about-1.html">About 1</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-about-2.html">About 2</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-about-3.html">About 3</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-about-4.html">About 4</a></li>
                    <li className="dropdown-divider"></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-about-me-1.html">About me 1</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-about-me-2.html">About me 2</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-about-me-3.html">About me 3</a></li>
                  </ul>
                </li>

                <li className="dropdown-item hs-has-sub-menu">
                  <a id="nav-link--pages--services" className="nav-link" href="/"
                     aria-haspopup="true"
                     aria-expanded="false"
                     aria-controls="nav-submenu--pages--services"
                  >Services</a>

                  <ul className="hs-sub-menu list-unstyled g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-py-7 g-my-2" id="nav-submenu--pages--services"
                      aria-labelledby="nav-link--pages--services">
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-services-1.html">Services 1</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-services-2.html">Services 2</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-services-3.html">Services 3</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-services-4.html">Services 4</a></li>
                  </ul>
                </li>
                <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-clients-1.html">Clients</a></li>
                <li className="dropdown-item hs-has-sub-menu">
                  <a id="nav-link--pages--profile" className="nav-link" href="/"
                     aria-haspopup="true"
                     aria-expanded="false"
                     aria-controls="nav-submenu--pages--profile"
                  >Profiles</a>

                  <ul className="hs-sub-menu list-unstyled g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-py-7 g-my-2" id="nav-submenu--pages--profile"
                      aria-labelledby="nav-link--pages--profile">
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-profile-main-1.html">Main</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-profile-profile-1.html">User Profile</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-profile-projects-1.html">Profile Projects</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-profile-comments-1.html">Profile Comments</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-profile-history-1.html">Profile History</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-profile-reviews-1.html">Profile Reviews</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-profile-settings-1.html">Profile Settings</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-profile-users-1.html">Profile Users Contacts</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-profile-users-1-full-width.html">Profile Users Contacts (full width)</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-profile-users-2.html">Profile Users Contacts 2</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/pages/page-profile-users-2-full-width.html">Profile Users Contacts (full width) 2</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item hs-has-sub-menu g-mx-10--lg g-mx-15--xl">
              <a id="nav-link--features" className="nav-link g-py-7 g-px-0" href="/"
                 aria-haspopup="true"
                 aria-expanded="false"
                 aria-controls="nav-submenu--features"
              >Features</a>

              <ul className="hs-sub-menu list-unstyled g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-py-7 g-mt-20 g-mt-15--lg--scrolling" id="nav-submenu--features"
                  aria-labelledby="nav-link--features">
                <li className="dropdown-item"><a className="nav-link" href="../../unify-main/shortcodes/headers/index.html">Headers</a></li>
                <li className="dropdown-item"><a className="nav-link" href="../../unify-main/shortcodes/promo/shortcode-blocks-promo.html">Promo blocks</a></li>
                <li className="dropdown-item hs-has-sub-menu">
                  <a id="nav-link--features--pop-ups" className="nav-link" href="/"
                     aria-haspopup="true"
                     aria-expanded="false"
                     aria-controls="nav-submenu--features--pop-ups"
                  >Pop-ups</a>

                  <ul className="hs-sub-menu list-unstyled g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-py-7 g-my-2" id="nav-submenu--features--pop-ups"
                      aria-labelledby="nav-link--features--pop-ups">
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/shortcodes/shortcode-base-lightbox.html">Lightbox</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/shortcodes/shortcode-base-modals.html">Modals</a></li>
                    <li className="dropdown-item"><a className="nav-link" href="../../unify-main/shortcodes/shortcode-blocks-gallery.html">Gallery</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/*<!-- End Navigation -->*/}

        <div className="d-inline-block hidden-xs-down g-pos-rel g-valign-middle g-pl-30 g-pl-0--lg">
          <a className="btn u-btn-outline-primary g-font-size-13 text-uppercase g-py-10 g-px-15" href="/">Login</a>
        </div>
      </div>
    </nav>
    </div>
  </header>

export default Header
