import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Slider, Ellipsis } from '../.';

const bannerList = [{
  imgUrl: 'https://dpic.tiankong.com/xt/tw/QJ6652059390.jpg?x-oss-process=style/show_794s',
  url: 'https://www.baidu.com/',
}, {
  imgUrl: 'https://dpic.tiankong.com/70/ir/QJ6882503180.jpg?x-oss-process=style/794ws',
  url: 'https://www.hello.com/'
}]

const App = () => {
  return (
    <div>
      <h1>轮播图组件</h1>
      <Slider 
        bannerList={bannerList} 
        height="4.3rem" 
        isShowPageNumber={true} 
        onClick={(item) => console.log(item)} 
      />
      <h1>省略组件</h1>
      <Ellipsis>singlesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesinglesingle</Ellipsis>
      <br />
      <Ellipsis type="multiple" rows={2}>中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行中文两行</Ellipsis>
      <br />
      <Ellipsis type="multiple" rows={2}>multiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiplemultiple</Ellipsis>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
