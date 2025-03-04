import Image from 'next/image'

export default function RostovDynamicData() {

    return (
        <div className="dynamic-page-data">
            <div className='dynamic-page-data-main'>
                <Image
                    src="http://localhost:5000/no-avatar.jpg"
                    width={100}
                    height={100}
                    alt='Common image'
                    quality={10}
                />
                <div className="dynamic-page-data-title">
                    Ростов-на-Дону
                    <div>
                        Население: 1, 138 млн.
                    </div>
                </div>
            </div>
            <div className='dynamic-page-data-more'>
                Росто́в-на-Дону́ (сокращённо часто — Ростов) — крупнейший город на юго-западе России, а
                дминистративный центр Южного федерального округа и Ростовской области.
            </div>
        </div>
    )
}