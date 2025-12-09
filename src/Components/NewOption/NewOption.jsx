import { useContext, useState } from 'react'
import './NewOption.css'
import { ContactListContext } from '../../Context/ContactListContext'

function NewOption() {
    const { contactList } = useContext(ContactListContext)
    const [isShown, setIsShown] = useState(false)
    const [newName, setNewName] = useState('')
    const [isWrongName, setIsWrongName] = useState(false)
    const [newPhone, setNewPhone] = useState('')
    const [isWrongPhone, setIsWrongPhone] = useState(false)


    function displayForm(e, pressedButton) {
        /* Modifica el estado de isShown para mostrar/ocultar el formulario */
        if (pressedButton) {
            e.preventDefault()
        }
        setIsShown(!isShown)
        /* Borra los valores de los campos */
        setNewName('')
        setNewPhone('')
        setIsWrongName(false)
        setIsWrongPhone(false)
    }

    function handleSubmit(e) {
        /* Agrega la información a la base de datos */
        e.preventDefault()

        /* Verificar la información enviada */
        if (!verifyName()) {
            return
        }
        if (!verifyPhone()) {
            return
        }

        /* Enviando la información a la 'base de datos' */
        contactList.push({
            contact_id: contactList.length + 1,
            name: newName,
            phone: newPhone,
            unread_messages: 0,
            messages: []
        })
        
        /* Oculta el formulario */
        displayForm(e)
    }

    function verifyName() {
        if (!newName.trim()) {
            setIsWrongName(true)
            return false
        }
        return true
    }

    function verifyPhone() {
        /* Podría verificar si el número arranca en 11 y que el tercer dígito no sea 0, pero lo dejo para otro momento */
        if (isNaN(newPhone) || newPhone.length !== 10) {
            setIsWrongPhone(true)
            return false
        }
        return true
    }

    return (
        <div className='new_container'>
            <div className="new_flex">
                <h1 className="new_whatsApp_logo">
                    WhatsApp
                </h1>

                <div className="new_options">
                    <button onClick={displayForm} className="new_option new_contact">
                        <i className="bi bi-person-plus"></i>
                    </button>

                    <button className="new_option new_chat">
                        <i className="bi bi-chat-left"></i>
                    </button>
                </div>
            </div>

            <div className={isShown ? "new_contact_container display_form_flex" : "new_contact_container"}>
                <form className="new_contact_form">
                    <div className="new_contact_name">
                        <label htmlFor="new_name_input" className="new_contact_label new_name_label">
                            <i className="bi bi-person"></i>
                            Nombre Completo
                        </label>
                        <input 
                            type="text" 
                            className="new_contact_input new_name_input" 
                            id='new_name_input' 
                            placeholder='Ingresa el nombre completo' 
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            />
                        {isWrongName && <span className='invalid_field'>Nombre inválido</span>}
                    </div>
                    <div className="new_contact_phone">
                        <label htmlFor="new_phone_input" className="new_contact_label new_phone_label">
                            <i className="bi bi-telephone"></i>
                            Teléfono
                        </label>
                        <input 
                            type="text" 
                            className="new_contact_input new_phone_input" 
                            id='new_phone_input' 
                            placeholder='1112345678'
                            value={newPhone}
                            onChange={(e) => setNewPhone(e.target.value)}
                            />
                        {isWrongPhone && <span className='invalid_field'>Teléfono inválido</span>}
                    </div>

                    <div className="new_btns_container">
                        <button 
                        type='submit' 
                        className="btn_new_form btn_add_new_contact"
                        onClick={(e) => handleSubmit(e)}>
                            Agregar
                        </button>
                        <button 
                        onClick={(e) => displayForm(e, true)} 
                        className="btn_new_form btn_cancel_add">
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewOption