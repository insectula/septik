import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import {Option1, Option2, Option3, Option4, Option5, Phone, Send } from './options';
import {BotAvatar} from './BotAvatar';

const config = {
    botName: "Виталий",
    initialMessages: [

        createChatBotMessage(
            `Здравствуйте!\n  Меня зовут Виталий. Я онлайн-консультант компании Альфа Комплекс.`,
            {
                delay:900
            }
        ),
        createChatBotMessage(
            `Пожалуйста, 
            ответьте на пару вопросов, чтобы я мог сделать для вас расчет подходящего септика.`,
            {delay: 3300}
        ),
        createChatBotMessage(
            `Какое количество людей проживает или часто находится в домовладении?`,
            {
                delay: 5400,
                widget: "Option1",
            }
        )
    ],
    state: {
        people: '',
        wasteDepth: '',
        waterLevel: '',
        winterHouse: '',
        consumerDevices: '',
        userPhone: '',
    },
    widgets: [
        {
            widgetName: "Option1",
            widgetFunc: (props) => <Option1 {...props} />,
            mapStateToProps: ["people"]
        },
        {
            widgetName: "Option2",
            widgetFunc: (props) => <Option2 {...props} />,
            mapStateToProps: ["wasteDepth"]
        },
        {
            widgetName: "Option3",
            widgetFunc: (props) => <Option3 {...props} />,
            mapStateToProps: ["waterLevel"]
        },
        {
            widgetName: "Option4",
            widgetFunc: (props) => <Option4 {...props} />,
            mapStateToProps: ["winterHouse"]
        },
        {
            widgetName: "Option5",
            widgetFunc: (props) => <Option5 {...props} />,
            mapStateToProps: ["consumerDevices"]
        },
        {
            widgetName: "Phone",
            widgetFunc: (props) => <Phone {...props} />,
            mapStateToProps: ["userPhone"]
        },
        {
            widgetName: "Send",
            widgetFunc: (props) => <Send {...props} />,
            mapStateToProps: [
                    "people",
                    "wasteDepth",
                    "waterLevel",
                    "winterHouse",
                    "consumerDevices",
                    "userPhone"
            ]
        }

    ],
    customComponents: {
        header: () => <div style={{display:'none'}}/>,
        botAvatar: (props) => <BotAvatar {...props} />,
    },
    customStyles: {
        botMessageBox: {
            backgroundColor: "#337733",
        },
        chatButton: {
            backgroundColor: "#337733",
        },
    },
}

export default config;