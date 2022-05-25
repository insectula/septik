import React, {useEffect, useState} from "react";
import {Button, FormControl, Input, InputLabel, TextField} from "@mui/material";
import {IMaskInput} from "react-imask";
import PropTypes from 'prop-types';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="+7 (%##) ###-####"
            definitions={{
                '%': /[1-9]/,
                '#': /[0-9]/,
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};



export function Option1(props) {

    const[disable, setDisable] = useState(false)

    const options = [
        { text: "От 1 до 3 человек", handler: props.actionProvider.question2, id: 1 },
        { text: "4 - 6 человек", handler: props.actionProvider.question2, id: 2 },
        { text: "7 - 11 человек", handler: props.actionProvider.question2, id: 3 },
        { text: "Более 12 человек", handler: props.actionProvider.question2, id: 4 },
    ];

    const optionsMarkup = options.map((option) => (
        <Button
            disabled={disable}
            key={option.id}
            onClick={() => {
                props.setState((state) => ({
                    ...state,
                    people: option.text
                  }));
                option.handler(option.text);  
                setDisable(true)
                }}
            variant="outlined"
            color="success"
            size="small"
            sx={{paddingX:'0.8rem',
                paddingY:'0.35rem',
                fontSize: '9pt',
                borderRadius: '50px',
                margin: '5px',
            }}
        >
            {option.text}
        </Button>
    ));

    return <div className="options-container">{optionsMarkup}</div>;
};

export const Option2 = (  props ) => {

    const[disable, setDisable] = useState(false)
    
    const options = [
        { text: "От 40 до 80 см", handler: props.actionProvider.question3, id: 1 },
        { text: "80 - 140 см", handler: props.actionProvider.question3, id: 2 },
        { text: "Более 140 см", handler: props.actionProvider.question3, id: 3 },
        { text: "Не знаю", handler: props.actionProvider.question3, id: 4 },
    ];

    const optionsMarkup = options.map((option) => (
        <Button
            disabled={disable}
            key={option.id}
            onClick={() => {
                props.setState((state) => ({
                    ...state,
                    wasteDepth: option.text
                  }));
                option.handler(option.text);  
                setDisable(true)
                }}
            variant="outlined"
            color="success"
            size="small"
            sx={{paddingX:'0.8rem',
                paddingY:'0.35rem',
                fontSize: '9pt',
                borderRadius: '50px',
                margin: '5px',
            }}
        >
            {option.text}
        </Button>
    ));

    return <div className="options-container">{optionsMarkup}</div>;
};
export const Option3 = (  props ) => {
    const[disable, setDisable] = useState(false)

    const options = [
        { text: "Высокий", handler: props.actionProvider.question4, id: 1 },
        { text: "Низкий", handler: props.actionProvider.question4, id: 2 },
        { text: "Не знаю", handler: props.actionProvider.question4, id: 3 },
    ];

    const optionsMarkup = options.map((option) => (
        <Button
            disabled={disable}
            key={option.id}
            onClick={() => {
                props.setState((state) => ({
                    ...state,
                    waterLevel: option.text
                  }));
                option.handler(option.text);  
                setDisable(true)
                }}
            variant="outlined"
            color="success"
            size="small"
            sx={{paddingX:'0.8rem',
                paddingY:'0.35rem',
                fontSize: '9pt',
                borderRadius: '50px',
                margin: '5px',
            }}
        >
            {option.text}
        </Button>
    ));

    return <div className="options-container">{optionsMarkup}</div>;
};

export const Option4 = (  props ) => {
    const[disable, setDisable] = useState(false)

    const options = [
        { text: "Да", handler: props.actionProvider.question5, id: 1 },
        { text: "Нет", handler: props.actionProvider.question5, id: 2 },
    ];
    const optionsMarkup = options.map((option) => (
        <Button
            disabled={disable}
            key={option.id}
            onClick={() => {
                props.setState((state) => ({
                    ...state,
                    winterHouse: option.text
                  }));
                option.handler(option.text);  
                setDisable(true)
                }}
            variant="outlined"
            color="success"
            size="small"
            sx={{paddingX:'0.8rem',
                paddingY:'0.35rem',
                fontSize: '9pt',
                borderRadius: '50px',
                margin: '5px',
            }}
        >
            {option.text}
        </Button>
    ));

    return <div className="options-container">{optionsMarkup}</div>;
};
export const Option5 = (  props ) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState(false)
    const [color, setColor] = useState('success')
    const[disable, setDisable] = useState(false)

    const handleClick = (handler) => {
        if (value === '') {
            setError(true);
            setColor('error');
        }
        else {
            props.setState((state) => ({
                ...state,
                consumerDevices: value
            }));
            handler(value); 
            setDisable(true)
    }}
    const option = { text: "Подтвердить", handler: props.actionProvider.phone, id: 1 };

    return <div
        className="input-container">
            <FormControl sx={{marginBottom: '20px', marginRight: '30px',}} variant="standard">
                <TextField
                    value={value}
                    onChange={(e) => {
                            setError(false);
                            setColor('success')
                            if ((e.target.value < 0) && (e.target.value !== '')) {setValue('');setError(true);}
                            else if ((e.target.value < 1) && (e.target.value !== '')) {setValue('');}
                            else setValue(e.target.value);
                        }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleClick(option.handler);
                        }
                        else if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                            setError(true);
                        }
                        }}
                    disabled={disable}
                    color="success"
                    variant="standard"
                    autoFocus={true}
                    id="standard-number"
                    label="Введите число для ответа"
                    type="number"
                    error={error}
                    InputLabelProps={{
                        shrink: true,
                        }}
                />
                <Button
                disabled={disable}
                key={option.id}
                onClick={() => {handleClick(option.handler)}}
                variant="outlined"
                color={color}
                size="small"
                sx={{paddingX:'0.8rem',
                    paddingY:'0.35rem',
                    fontSize: '9pt',
                    borderRadius: '50px',
                    margin: '5px',
                }}
            >
                {option.text}
            </Button>
            </FormControl>
            
        </div>;
};
export const Phone = ( props ) => {
    const[disable, setDisable] = useState(false)
    const [color, setColor] = useState('success')
    const [error, setError] = useState(false)
    const option = { text: "Подтвердить", handler: props.actionProvider.send, id: 1 };
    const [values, setValues] = useState({
        textmask: '(#__) ___-____',
        numberformat: '1320',
    });

    const handleClick = (handler) => {
        if ((values.textmask === '+7 (') || values.textmask.length < 17) {
            setError(true);
            setColor('error');
        }
        else {
        props.setState((state) => ({
            ...state,
            userPhone: values.textmask
        }));
        handler(values.textmask);  
        setDisable(true)
        }
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        setError(false);
        setColor('success')
    };
    return <div
        className="input-container">
        <FormControl sx={{marginBottom: '20px', marginRight: '30px'}} variant="standard">
            <InputLabel htmlFor="formatted-text-mask-input" color="success">
                Оставьте ваш номер телефона
            </InputLabel>
            <Input
            error={error}
            disabled={disable}
            autoFocus={true}
            color='success'
            value={values.textmask}
            onChange={handleChange}
            onKeyPress={(event) => {
                if (event.key === 'Enter') {
                    handleClick(option.handler);
                }
                else if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    setError(true);
                }
                }}
            name="textmask"
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
            />    
            <Button
                disabled={disable}
                key={option.id}
                onClick={() => {handleClick(option.handler)}}
                variant="outlined"
                color={color}
                size="small"
                sx={{paddingX:'0.8rem',
                    paddingY:'0.35rem',
                    fontSize: '9pt',
                    borderRadius: '50px',
                    margin: '5px',
                }}
            >
                {option.text}
            </Button>
        </FormControl>
      
    </div>;
};

const postRequest = (details) => {
    
};

export const Send = ({
    people,
    wasteDepth,
    waterLevel,
    winterHouse,
    consumerDevices,
    userPhone
  }) => {
    const details = {
        userPhone: userPhone,
        people: people,
        wasteDepth: wasteDepth,
        waterLevel: waterLevel,
        winterHouse: winterHouse,
        consumerDevices: consumerDevices,
    };
    useEffect(() => {
        console.log(details);
        fetch('/send',{
            method: 'POST',
            body: JSON.stringify(details),
            headers: {"Content-Type": "application/json"}
        })},
        []);
    return (
        <div className="options-container"/>    
    );
  };