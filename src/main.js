import React, {useState} from "react";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import 'react-chatbot-kit/build/main.css';
import './chatbot/chat.css';

import Chatbot from "react-chatbot-kit";

import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";


export default function Main() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="main filter">
            <div className='main-top'>
                <div onClick={handleClickOpen} className='sale-rnd'>
                    <div className='pointer green-rnd'>
                        <div className='dot'>
                            %
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-text">
                <p>Подберём и установим септик под ваши нужды с гарантией на 25 лет всего за 1 день под ключ</p>
                <span>Ответьте на несколько вопросов и получите предварительную смету на установку от нашего инженера, а также скидку на монтаж</span>
            </div>

            <div className="left"/>
            <div className="main-images">
                <div className="right"/>
                <div className='button'>
                    <Button variant="contained" onClick={handleClickOpen} sx={{
                        zIndex: '100',
                        border: '1px solid #00ff4d',
                        borderRadius: '30px',
                        fontFamily: 'sans-serif',
                        fontWeight: '700',
                        fontSize: '12pt',
                        height: '45pt',
                        width: '200pt',
                        backgroundColor: '#18b848',
                        "&:hover":{
                            backgroundColor: '#35CF62'
                        },
                        color: '#FFFFFF',
                    }}> ПОДОБРАТЬ СЕПТИК
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        fullWidth={true}
                        maxWidth='md'
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        sx={{
                            backgroundColor: '#00000055',
                        }}
                        PaperProps={{
                            style: {
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                                height:'90vh'
                            },
                        }}
                    >
                        <DialogActions onClick={handleClose} sx={{ width: '95%',color: '#fff', fontSize: '22pt', '&hover': {cursor: 'pointer'}}}>
                            <span className='pointer'>
                                &times;
                            </span>
                        </DialogActions>
                        <DialogContent>
                            <Chatbot
                                config={config}
                                actionProvider={ActionProvider}
                                messageParser={MessageParser}
                            />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
};
