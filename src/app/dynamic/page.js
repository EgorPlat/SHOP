"use client"
import { useState } from "react";
import "./page.css";
import dynamic from 'next/dynamic'

const PenzaDynamicData = dynamic(() => import('../../../widgets/dynamic/penza-info'), {
    loading: () => <p>Penza info loading...</p>
})
const RostovDynamicData = dynamic(() => import('../../../widgets/dynamic/rostov-info'), {
    loading: () => <p>Rostov info loading...</p>
})

export default function DynamicPage() {

    const [isDataVisible, setIsDataVisible] = useState({
        penza: true,
        rostov: false
    });

    const changeVisability = (dataVisible) => {
        setIsDataVisible(dataVisible);
    };

    return (
        <div className="dynamic-page">
           <div className="dynamic-basic-content">
                <div className="dynamic-basic-content-title">
                    <div 
                        className={`dynamic-basic-content-title-link ${isDataVisible.penza ? "active" :"default"}`}
                        onClick={() => changeVisability({ rostov: false, penza: true })}
                    >
                        Пенза
                    </div>
                    <div 
                        className={`dynamic-basic-content-title-link ${isDataVisible.rostov ? "active" :"default"}`}
                        onClick={() => changeVisability({ rostov: true, penza: false })}
                    >
                        Ростов-на-Дону
                    </div>
                </div>
                {
                    isDataVisible.penza && <PenzaDynamicData />
                }
                {
                    isDataVisible.rostov && <RostovDynamicData />
                }
            </div>
        </div>
    )
}