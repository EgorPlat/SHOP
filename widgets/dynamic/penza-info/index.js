import Image from 'next/image'

export default function PenzaDynamicData() {

    return (
        <div className="dynamic-page-data">
            <div className='dynamic-page-data-main'>
                <Image
                    src="http://localhost:5000/no-avatar.jpg"
                    width={100}
                    height={100}
                    alt='Common image'
                />
                <div className="dynamic-page-data-title">
                    Пенза
                    <div>
                        Население: 523 тыс.
                    </div>
                </div>
            </div>
            <div className='dynamic-page-data-more'>
                Пе́нза — город в центре европейской части России, административный центр Пензенской области. 
                Является городом областного значения, образует муниципальное образование городской округ город Пенза.
            </div>
        </div>
    )
}