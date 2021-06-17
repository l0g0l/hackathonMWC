import React from 'react';
import Header from '../../Components/Layout/Header/Header';
import Title from '../../Components/Title/Title';
import Form from '../../Components/Form/Form';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


import '../../common.scss';
import './verifyprofile.scss'

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 45 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 300,
      height: 150,
      backgroundColor: theme.palette.background.paper,
      border: 'none',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      fontFamily: 'sans-serif',
      borderRadius: 6,
      [theme.breakpoints.down('sm')]: {
        marginleft: 25,
  
      },
     
    },
  }));

const VerifyProfile = () => {
   const classes =useStyles();
  
    const [modalStyle] = React.useState(getModalStyle);
    const [modalOpen, setmodalOpen] = React.useState(false);
    const form_fields_definition = [{
        placeholder: "0000 0000 0000 0000",
        text: "Número de tarjeta",
        error_msg: "Por favor introduce un número válido",
        name: "credito",
        validationOptions: { required: true }
    },
    {
        placeholder: "CVC",
        text: "Código secreto *",
        error_msg: "",
        validationOptions: {
            required: false,
        },
        name: "cvc"
    }]

    const modal_open = () =>{
        setmodalOpen(true)
    }

    const modal_close = () =>{
        setmodalOpen(false)
    }

    return (
        <>
            <div className="Total">
                <Header step={'03/03'} subtitle={'Verificación por tarjeta'}/>
                <div className="all2">
                    <div className="containerregister">
                        <Title txt={'Verifica tu perfil'}/>
                        <Form buttontxt={'Crear cuenta'} fieldsDefinition={form_fields_definition} button_onclick={modal_open}/>
                        <Modal 
                            open={modalOpen}
                            onClose={modal_close}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            <div style={modalStyle}  className={classes.paper} >
                                <h2 id="simple-modal-title">¡Todo guay!</h2>
                                <p id="simple-modal-description">
                                    Tu cuenta se ha creado correctamente</p>
                                <a href="https://nuwe.io/" target="_blank" rel="noreferrer" ><button id="modal-button">Vamos para Nuwe</button></a>
                                
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default VerifyProfile
