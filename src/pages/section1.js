import React from 'react';

const Section1 = () =>
<section className="g-py-100">
  <div className="container">
    <div className="row">
      <div className="col-md-6 align-self-center g-mb-50--md g-mb-0--md">
        <div className="u-heading-v2-3--bottom g-brd-primary g-mb-30">
          <h2 className="h1 u-heading-v2__title g-color-gray-dark-v2 text-uppercase g-font-weight-700">We Are Unify Agency</h2>
        </div>

        <div className="g-font-size-18 g-line-height-2 g-mb-30">
          <p>Unify <strong>creative</strong> technology company providing key digital services. Focused on helping our clients to build a <strong>successful</strong> business on web and mobile.</p>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
        </div>

        <a href="/" className="btn u-btn-primary u-shadow-v21 g-font-size-12 text-uppercase g-font-weight-600 g-rounded-50 g-py-15 g-px-25 g-mr-15 g-mb-10 g-mb-0--sm">
          <i className="icon-layers g-pos-rel g-top-1 g-mr-5"></i> Buy Full Version
        </a>
        <small className="d-block d-sm-inline-block g-color-gray-dark-v5 g-font-size-12">*Exclusive item on Wrapboostrap Marketpalce</small>
      </div>

      <div className="col-md-6 align-self-center text-center g-overflow-hidden">
        <img className="img-fluid w-75" src="../../assets/img/inline/inline11.png" alt="some data"
             data-animation="fadeInUp"
             data-animation-delay="0"
             data-animation-duration="1000" />
      </div>
    </div>
  </div>
</section>

export default Section1
