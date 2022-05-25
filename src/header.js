import {Component} from "react";
import telegram from "./img/telegram.png";
import whatsapp from "./img/whatsapp.png";
class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="title">
                    <p> Септики от официального дилера в Москве и Московской<br/> области с установкой под ключ </p>
                </div>
                <div className="carrier">
                    <div className="logo"/>
                    <div className="contact">
                        <div className="phone">
                            <a href="tel:+79877377788"><strong>
                                +7 495 577-79-79
                            </strong></a>
                        </div>
                        <div className="socials">
                            <div className="online"><div className="dot"/></div>
                                <p> online </p>
                            <div className="links">
                                <a href="https://t.me/79877377788">
                                    <img src={telegram}/>
                                </a>
                                &nbsp;
                                <a href="https://wa.me/79877377788">
                                    <img src={whatsapp}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Header;