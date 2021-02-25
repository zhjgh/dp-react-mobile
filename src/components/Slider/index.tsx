import React, { useState, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import './index.css';

interface IBannerListParams {
  imgUrl: string;
  url: string;
}

interface IProps {
  isLoop?: boolean; // 非必传-是否循环轮播图
  isAuto?: boolean; // 非必传-是否自动轮播
  isShowPagination?: boolean; // 非必传-是否显示分页器
  isShowPageNumber?: boolean; // 非必传-是否右下角显示分页数量
  fieldNames?: IBannerListParams; // 非必传-自定义参数名称
  borderRadius?: string; // 非必传-设置圆角
  height?: string; // 非必传-设置高度
  spaceBetween?: number; // 非必传-轮播图间距
  bannerList: Array<IBannerListParams>; // 必传-轮播列表
  onClick?: (item: Object) => void; // 非必传-自定义点击跳转
}

const Slider: React.FC<IProps> = props => {
  const [current, setCurrent] = useState(1);
  const [sliderSwiper, setSliderSwiper] = useState({});
  const { isLoop, isAuto, bannerList, isShowPagination, isShowPageNumber, fieldNames = {} } = props;
  const { height, borderRadius, spaceBetween, onClick } = props;
  const totalNumber = bannerList.length;
  const { imgUrl, url } = fieldNames as IBannerListParams;

  let newArr: Array<IBannerListParams> = []
  if(Object.keys(fieldNames as IBannerListParams).length > 0){
    newArr = bannerList.map((v: any) => {
      return {
        imgUrl: imgUrl && v[imgUrl],
        url: url && v[url]
      }
    })
  }else{
    newArr = bannerList
  }
  
  useEffect(() => {
    if (totalNumber && !Object.keys(sliderSwiper).length) {
      let newSliderSwiper = new Swiper('.slider-container', {
        loop: isLoop,
        autoplay: isAuto ? {
          delay: 3000,
          disableOnInteraction: false,
        }: false,
        speed: 500,
        spaceBetween,
        pagination: { el: '.swiper-pagination' },     
        on: {
          // @ts-ignore
          slideChange: function(){
            // @ts-ignore
            setCurrent(this.realIndex + 1);
          },
          click: function(){
            // @ts-ignore
            if(onClick) onClick(newArr[this.realIndex])
            // @ts-ignore
            else url && (window.location.href = newArr[this.realIndex].url)
          }
        }
      });
      setSliderSwiper(newSliderSwiper);
    }
  }, [totalNumber, sliderSwiper]);

  return (
    <div className="slider-container" style={{
      height,
      borderRadius,
    }}>
      <div className="swiper-wrapper">
        {newArr.map(slider => {
          return (
            <div className="swiper-slide" key={slider.imgUrl}>
              <div className="slider-nav">
                <a>
                  <img
                    src={slider.imgUrl}
                    width="100%"
                    height="100%"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
      {
        (isShowPagination && totalNumber > 1) && (<div className="swiper-pagination"></div>)
      }
      {
        (isShowPageNumber && totalNumber > 1) && (
          <div className="swiper-pageNumber">
            <span className="current">{current}</span>
            <span className="line">/</span>
            <span className="total">{totalNumber}</span>
          </div>
        )
      }
    </div>
  );
};

Slider.defaultProps = {
  isLoop: true,
  isAuto: false,
  isShowPagination: true,
  isShowPageNumber: false,
  bannerList: [],
  height: 'auto',
  borderRadius: 'none',
  spaceBetween: 0,
}

export default React.memo(Slider);

