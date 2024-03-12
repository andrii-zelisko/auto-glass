import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AboutUs() {
    return (
        <div className="section-page aboutUs">
            <div className="aboutUs-image"></div>
            <div className="container">
                <div className="section-title">
                    Про Нас
                </div>
                <div className="row">
                    <div className="aboutUs-block">
                        <div className="aboutUs-sub-block">
                            <div className="aboutUs-sub-icon">
                                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                            </div>
                            <div className="phones-email">
                                <div className="aboutUs-sub-description">
                                    Наша Фірма працює на ринку автоскла у столиці Західної України м. Львові вже більше п'ятнадцяти років.
                        </div>
                            </div>
                        </div>
                        <div className="aboutUs-sub-block">
                            <div className="aboutUs-sub-icon">
                                <FontAwesomeIcon icon="fa-solid fa-briefcase" />
                            </div>
                            <div className="phones-email">
                                <div className="aboutUs-sub-description">
                                    Ми постійно здійснюєм продаж та заміну скла до всіх автомобілів закордонного, пострадянського та вітчизняного виробництва. Для роботи використовується якісне скло виробництва фірм Sekurit, Pilkington, AGC, Nordglass (Польша) та фірм Fuyao і Xinyi (Китай),
                                    а також високоякісний розхідний матеріал (клей, праймер та активатор) фірм Sika і Teroson. Кваліфіковані майстри швидко та якісно проводять демонтаж старого та монтаж нового скла.
                        </div>
                            </div>
                        </div>
                        <div className="aboutUs-sub-block">
                            <div className="aboutUs-sub-icon">
                                <FontAwesomeIcon icon="fa-solid fa-clock" />
                            </div>
                            <div className="phones-email">
                                <div className="aboutUs-sub-description">
                                    Надається гарантія на проведені роботи. Також працівники нашої фірми швидко та якісно виконають ремонт сколів та тріщин автоскла.
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
