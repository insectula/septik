class ActionProvider {
    constructor( createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.createClientMessage = createClientMessage;
        this.setState = setStateFunc;
    }

    answer = (option) => {
        const reply = this.createClientMessage(option,
            {
                withAvatar: 'false',
                delay: 3000
            }
        );
        this.updateChatbotState(reply);
    }

    question2 = (option) => {
        this.answer(option)
        const message = this.createChatBotMessage(
            "Какая глубина залегания канализационной трубы?",
            {
                widget: "Option2",
                delay:1500
            }
        );

        this.updateChatbotState(message);
    };
    question3 = (option) => {
        this.answer(option)
        const message = this.createChatBotMessage(
            "Какой уровень залегания грунтовых вод?",
            {
                widget: "Option3",
                delay:1300
            }
        );

        this.updateChatbotState(message);
    };
    question4 = (option) => {
        this.answer(option)
        const message = this.createChatBotMessage(
            "Посещаете ли вы загородный дом зимой?",
            {
                widget: "Option4",
                delay:1200
            }
        );

        this.updateChatbotState(message);
    };
    question5 = (option) => {
        this.answer(option)
        const message = this.createChatBotMessage(
            "Какое количество водопотребителей есть в доме? Посчитайте сколько в доме есть раковин, стиральных машин, ванн и других приборов, потребляющих воду.",
            {
                widget: "Option5",
                delay:1700
            }
        );

        this.updateChatbotState(message);
    };
    phone = (option) => {
        this.answer(option)
        const message = this.createChatBotMessage("Спасибо, это были все вопросы.",
            {
                delay:1000
            }
        );
        const message2 = this.createChatBotMessage("Оставьте ваш телефон и наши менеджеры свяжутся с вами. Расскажут какой тип септика подходит вам и предложат лучшее предложение.",
            {
                widget: "Phone",
                delay:3000
            }
        );
        this.updateChatbotState(message);
        this.updateChatbotState(message2);
    };
    send = (option) => {
        const reply = this.createClientMessage(option,
            {
                withAvatar: 'false',
                delay: 1100,
                widget: 'Send'
            }
        );
        this.updateChatbotState(reply);
        this.end()
    };
    end = () => {        
        const message = this.createChatBotMessage('Ваша заявка принята. Мы скоро свяжемся с вами!',
            {
                delay:1900,
            }
        );
        this.updateChatbotState(message);}

    updateChatbotState(message) {
        // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    }
}

export default ActionProvider;