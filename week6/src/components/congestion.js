
import React, { useEffect, useState } from "react";
import { getArrivalsCongestion } from "../api/api";

const ArrivalStatus = () => {
    const [congestion, setCongestion] = useState([]);

    useEffect(() => {
        getArrivalsCongestion()
            .then((res) => {

                console.log(res.data);
                const itemData = res.data?.response?.body?.items?.item || [];
                setCongestion(Array.isArray(itemData) ? itemData : [itemData]);
            })

            .catch((err) => console.error(err));
    }, []);


    return (
        <div>
            <h1>실시간 공항 입국장 혼잡도</h1>

            {congestion && congestion.map((item, index) => (
                <div key={index}>
                    <p><strong>입국 게이트:</strong> {item.entrygate}번</p>
                    <p><strong>인원:</strong> 내국인 {item.korean}명 + 외국인 {item.foreigner}명</p>
                    <p><strong>편명:</strong> {item.flightid}</p>
                </div>
            ))}
        </div>
    );
};
export default ArrivalStatus;