import './HomePage.css'
import ContactContainer from '../../Components/ContactsContainer/ContactContainer'

function HomePage() {
    return (
        <main>
            <ContactContainer />
            <section className="no_chat_opened">
                <i className="bi bi-whatsapp no_chat_whatsapp"></i>
                <h2 className="no_chat_title">WhatsApp para Windows</h2>
                <p className="no_chat_p">
                    Envía y recibe mensajes sin necesidad de tener tu teléfono conectado.
                </p>
                <p className="no_chat_p">
                    Usa WhatsApp en hasta 4 dispositivos vinculados y 1 teléfono a la vez.
                </p>
                <span className="no_chat_span">
                    <i className="bi bi-lock no_chat_lock"></i>
                    <span className='no_chat_span'>Tus mensajes personales están cifrados de extremo a extremo</span>
                </span>
            </section>
        </main>
    )
}

export default HomePage