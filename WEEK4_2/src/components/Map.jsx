import React, { useEffect, useRef } from "react";
import "./Map.css";

export const Map = () => {
  const container = useRef(null);

  useEffect(() => {
    const { kakao } = window;

    if (!kakao) {
      console.error("카카오맵 SDK가 로드되지 않았습니다.");
      return;
    }

    const map=new kakao.maps.Map(container.current,{
      center:new kakao.maps.LatLng(37.591310, 127.022131),
      level : 3,
    });

    const ps = new kakao.maps.services.Places();
    const bounds=new kakao.maps.LatLngBounds();
    
    ["본크레페", "뿡어당", "엘리카츠"].forEach((place)=>{
      ps.keywordSearch(place,(data, status)=>{
        if(status===kakao.maps.services.Status.OK){
          const point=new kakao.maps.LatLng(data[0].y, data[0].x);

          new kakao.maps.Marker({map, position:point});
          bounds.extend(point);
          map.setBounds(bounds);
        }
      });
    });
  }, []);


  

  return (
    
  
  
  <div className="mapContainer" style={{ position: "relative", width: "100%", height: "100vh" }}>
  <div className="place-list">
    <h1>My Hot-place Map</h1>
    <p className="subtitle">Saved Places</p>

    <div className="item-container">
      <div className="icon"></div>
      <div className="info">
        <strong>본크레페</strong>
        <br />
        <span>서울 성북구 동소문로20다길 30 1층</span>
      </div>
    </div>
    <br />
    <div className="item-container">
      <div className="icon"></div>
      <div className="info">
        <strong>뿡어당</strong>
        <br />
        <span>서울 성북구 보문로34길 94 1층 102호</span>
      </div>
    </div>
    <br />
    <div className="item-container">
      <div className="icon"></div>
      <div className="info">
        <strong>엘리카츠</strong>
        <br />
        <span>서울 성북구 보문로34길 68-6 1층</span>
      </div>
    </div>
  </div>
  <div
      ref={container}
      style={{ width: "100%", height: "100vh" }}
    ></div>
  </div>
  );

};