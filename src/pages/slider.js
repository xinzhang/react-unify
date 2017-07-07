import React from 'react';
import $ from 'jquery';
import './slider.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    console.log('slider');
  }

  // componentDidMount() {
  //   console.log('componentDidMount');
  //   var tpj = $;
  //   var revapi26;
  //
  //   if (tpj("#rev_slider_26_1").revolution === undefined) {
  //       console.log('revslider_showDoubleJqueryError("#rev_slider_26_1")');
  //     } else {
  //       revapi26 = tpj("#rev_slider_26_1").show().revolution({
  //         sliderType: "standard",
  //         jsFileLocation: "revolution/js/",
  //         sliderLayout: "fullscreen",
  //         dottedOverlay: "none",
  //         delay: 9000,
  //         navigation: {
  //           keyboardNavigation: "off",
  //           keyboard_direction: "horizontal",
  //           mouseScrollNavigation: "off",
  //           mouseScrollReverse: "default",
  //           onHoverStop: "off",
  //           touch: {
  //             touchenabled: "on",
  //             touchOnDesktop: "off",
  //             swipe_threshold: 75,
  //             swipe_min_touches: 1,
  //             swipe_direction: "horizontal",
  //             drag_block_vertical: false
  //           }
  //           ,
  //           arrows: {
  //             style: "uranus",
  //             enable: true,
  //             hide_onmobile: true,
  //             hide_under: 778,
  //             hide_onleave: false,
  //             tmp: '',
  //             left: {
  //               h_align: "left",
  //               v_align: "center",
  //               h_offset: 15,
  //               v_offset: 0
  //             },
  //             right: {
  //               h_align: "right",
  //               v_align: "center",
  //               h_offset: 15,
  //               v_offset: 0
  //             }
  //           }
  //           ,
  //           bullets: {
  //             enable: true,
  //             hide_onmobile: false,
  //             style: "bullet-bar",
  //             hide_onleave: false,
  //             direction: "horizontal",
  //             h_align: "center",
  //             v_align: "bottom",
  //             h_offset: 0,
  //             v_offset: 30,
  //             space: 5,
  //             tmp: ''
  //           }
  //         },
  //         responsiveLevels: [1240, 1024, 778, 480],
  //         visibilityLevels: [1240, 1024, 778, 480],
  //         gridwidth: [1240, 1024, 778, 480],
  //         gridheight: [868, 768, 960, 720],
  //         lazyType: "none",
  //         parallax: {
  //           type: "scroll",
  //           origo: "slidercenter",
  //           speed: 2000,
  //           levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
  //         },
  //         shadow: 0,
  //         spinner: "off",
  //         stopLoop: "off",
  //         stopAfterLoops: -1,
  //         stopAtSlide: -1,
  //         shuffle: "off",
  //         autoHeight: "off",
  //         fullScreenAutoWidth: "off",
  //         fullScreenAlignForce: "off",
  //         fullScreenOffsetContainer: "",
  //         fullScreenOffset: "60px",
  //         hideThumbsOnMobile: "off",
  //         hideSliderAtLimit: 0,
  //         hideCaptionAtLimit: 0,
  //         hideAllCaptionAtLilmit: 0,
  //         debugMode: false,
  //         fallbacks: {
  //           simplifyAll: "off",
  //           nextSlideOnWindowFocus: "off",
  //           disableFocusListener: false,
  //         }
  //       });
  //     }
  // }

  render() {
    return(
        <div className="g-overflow-hidden">
          <div id="rev_slider_26_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="mask-showcase" data-source="gallery" styles={{background:'#aaaaaa', padding:'0px'}}>
            <div id="rev_slider_26_1" className="rev_slider fullscreenbanner tiny_bullet_slider" styles={{display:'none'}} data-version="5.4.1">
              <ul>
                <li data-index="rs-73" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="http://works.themepunch.com/revolution_5_3/wp-content/" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                  {/*
                  <img src="../../assets/img/bg/transparent2.png" data-bgcolor='linear-gradient(90deg, rgba(0, 0, 153, 0.5) 0%, rgba(0, 190, 214, 0.6) 100%)'' style='background:linear-gradient(90deg, rgba(0, 0, 153, 0.5) 0%, rgba(0, 190, 214, 0.6) 100%)' alt="" data-bgposition="center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                  */}
                  <div className="tp-caption rev-btn  tp-resizeme slider-launch"
                       id="slide-73-layer-4"
                       data-x="['left','left','left','left']" data-hoffset="['170','120','70','40']"
                       data-y="['middle','middle','middle','middle']" data-voffset="['150','150','150','110']"
                       data-width="none"
                       data-height="none"
                       data-whitespace="normal"

                       data-type="button"
                       data-responsive_offset="on"

                       data-frames='[{"delay":500,"speed":1000,"sfxcolor":"#ffff58","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(0,0,0);bg:rgb(255,255,255);"}]'
                       data-textAlign="['inherit','inherit','inherit','inherit']"
                       data-paddingtop="[0,0,0,0]"
                       data-paddingright="[30,30,30,30]"
                       data-paddingbottom="[0,0,0,0]"
                       data-paddingleft="[30,30,30,30]"
                       >Launch
                  </div>

                  <div className="tp-caption   tp-resizeme rs-parallaxlevel-2"
                       id="slide-73-layer-1"
                       data-x="['center','center','center','center']" data-hoffset="['500','500','390','220']"
                       data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
                       data-width="none"
                       data-height="none"
                       data-whitespace="nowrap"

                       data-type="image"
                       data-responsive_offset="on"

                       data-frames='[{"delay":400,"speed":750,"sfxcolor":"#2f3b4a","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                       data-textAlign="['inherit','inherit','inherit','inherit']"
                       data-paddingtop="[0,0,0,0]"
                       data-paddingright="[0,0,0,0]"
                       data-paddingbottom="[0,0,0,0]"
                       data-paddingleft="[0,0,0,0]"

                       styles={{zIndex: '6'}}>
                       <img src="../../assets/img-temp/900x600/img5.jpg" alt="" data-ww="['1000px','1000px','800px','500px']" data-hh="['563px','563px','450','281']" width="1200" height="675" data-no-retina />
                  </div>

                  <div className="tp-caption   tp-resizeme slider-projects"
                       id="slide-73-layer-3"
                       data-x="['left','left','left','left']" data-hoffset="['150','100','50','20']"
                       data-y="['middle','middle','middle','middle']" data-voffset="['-177','-177','-177','-157']"
                       data-width="none"
                       data-height="none"
                       data-whitespace="normal"

                       data-type="text"
                       data-responsive_offset="on"

                       data-frames='[{"delay":300,"speed":750,"sfxcolor":"#ffff58","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                       data-textAlign="['left','left','left','left']"
                       data-paddingtop="[10,10,10,10]"
                       data-paddingright="[20,20,20,20]"
                       data-paddingbottom="[10,10,10,10]"
                       data-paddingleft="[20,20,20,20]"

                       >Projects
                  </div>


                  <div className="tp-caption   tp-resizeme slider-projects2"
                       id="slide-73-layer-2"
                       data-x="['left','left','left','left']" data-hoffset="['150','100','50','20']"
                       data-y="['middle','middle','middle','middle']" data-voffset="['-30','-30','-30','-30']"
                       data-fontsize="['70','70','70','50']"
                       data-lineheight="['70','70','70','50']"
                       data-width="['650','650','620','380']"
                       data-height="none"
                       data-whitespace="normal"

                       data-type="text"
                       data-responsive_offset="on"

                       data-frames='[{"delay":200,"speed":750,"sfxcolor":"#ffff58","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                       data-textAlign="['left','left','left','left']"
                       data-paddingtop="[20,20,20,20]"
                       data-paddingright="[20,20,20,20]"
                       data-paddingbottom="[30,30,30,30]"
                       data-paddingleft="[20,20,20,20]"

                       >The force of nature felt in waves crashing.
                  </div>
                </li>

                <li data-index="rs-74" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="http://works.themepunch.com/revolution_5_3/wp-content/" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                  {/*<img src="../../assets/img/bg/transparent2.png" data-bgcolor='linear-gradient(120deg, #b7ebf6 0%, rgba(228, 97, 210, 0.7) 100%)'' style='background:linear-gradient(120deg, #b7ebf6 0%, rgba(228, 97, 210, 0.7) 100%)' alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina /> */}
                  <div className="tp-caption   tp-resizeme rs-parallaxlevel-2"
                       id="slide-74-layer-1"
                       data-x="['center','center','center','center']" data-hoffset="['-500','-500','-390','-220']"
                       data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
                       data-width="none"
                       data-height="none"
                       data-whitespace="nowrap"

                       data-type="image"
                       data-responsive_offset="on"

                       data-frames='[{"delay":200,"speed":750,"sfxcolor":"#243949","sfx_effect":"blockfromright","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoright","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                       data-textAlign="['inherit','inherit','inherit','inherit']"
                       data-paddingtop="[0,0,0,0]"
                       data-paddingright="[0,0,0,0]"
                       data-paddingbottom="[0,0,0,0]"
                       data-paddingleft="[0,0,0,0]"

                       styles="{{zIndex:'5'}}">
                       <img src="../../assets/img-temp/900x600/img6.jpg" alt="" data-ww="['1000px','1000px','800px','500px']" data-hh="['563px','563px','450px','281px']" width="1200" height="675" data-no-retina />
                  </div>

                  <div className="tp-caption rev-btn  tp-resizeme slider-launch-zindex6"
                       id="slide-74-layer-4"
                       data-x="['left','left','left','left']" data-hoffset="['880','760','600','330']"
                       data-y="['middle','middle','middle','middle']" data-voffset="['150','150','150','110']"
                       data-width="none"
                       data-height="none"
                       data-whitespace="normal"

                       data-type="button"
                       data-responsive_offset="on"

                       data-frames='[{"delay":500,"speed":750,"sfxcolor":"#cbbacc","sfx_effect":"blockfromright","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoright","frame":"999","to":"z:0;","ease":"Power4.easeOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(0,0,0);bg:rgb(255,255,255);"}]'
                       data-textAlign="['inherit','inherit','inherit','inherit']"
                       data-paddingtop="[0,0,0,0]"
                       data-paddingright="[30,30,30,30]"
                       data-paddingbottom="[0,0,0,0]"
                       data-paddingleft="[30,30,30,30]"

                       >Launch
                  </div>

                  <div className="tp-caption tp-resizeme slider-projects"
                       id="slide-74-layer-3"
                       data-x="['left','left','left','left']" data-hoffset="['820','700','540','270']"
                       data-y="['middle','middle','middle','middle']" data-voffset="['-177','-177','-177','-157']"
                       data-width="none"
                       data-height="none"
                       data-whitespace="normal"

                       data-type="text"
                       data-responsive_offset="on"

                       data-frames='[{"delay":400,"speed":750,"sfxcolor":"#cbbacc","sfx_effect":"blockfromright","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoright","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                       data-textAlign="['left','left','left','left']"
                       data-paddingtop="[10,10,10,10]"
                       data-paddingright="[20,20,20,20]"
                       data-paddingbottom="[10,10,10,10]"
                       data-paddingleft="[20,20,20,20]"

                       >PROJECTS
                  </div>

                  <div className="tp-caption   tp-resizeme slider-projects2"
                       id="slide-74-layer-2"
                       data-x="['left','left','left','left']" data-hoffset="['360','240','110','80']"
                       data-y="['middle','middle','middle','middle']" data-voffset="['-30','-30','-30','-30']"
                       data-fontsize="['70','70','70','50']"
                       data-lineheight="['70','70','70','50']"
                       data-width="['650','650','620','380']"
                       data-height="none"
                       data-whitespace="normal"

                       data-type="text"
                       data-responsive_offset="on"

                       data-frames='[{"delay":300,"speed":750,"sfxcolor":"#cbbacc","sfx_effect":"blockfromright","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoright","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                       data-textAlign="['right','right','right','right']"
                       data-paddingtop="[20,20,20,20]"
                       data-paddingright="[20,20,20,20]"
                       data-paddingbottom="[30,30,30,30]"
                       data-paddingleft="[20,20,20,20]"

                       >The beauty of nature is hidden in details.
                  </div>
                </li>
              </ul>
              <div className="tp-bannertimer" styles="{{height:'10px','background':'rgba(0,0,0,0.15)'"></div>
            </div>
          </div>
        </div>
      )
  }

}

export default Slider;
