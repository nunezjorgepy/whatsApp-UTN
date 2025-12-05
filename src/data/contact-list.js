/* 
TODO:
    - Por ahora, todos tienen el mismo avatar. Lo tengo que cambiar.
    - Buscar una mejor manera de generar ids para los mensajes
*/

/* 
Explicación de la lista
    name: nombre del contacto
    phone: teléfono
    avatar: foto de perfil
    unread_messages: cantidad de mensajes no leídos
    messages: mensajes enviados entre los contactos
        - message: el mensaje individual
        - message_at: fecha y hora del mensaje
        - isSentMessage: si yo envié el mensaje es true, si no es false
        - message_state: indica si el mensaje fue enviado (o no), recibido o leído
*/
const concactList = [
    {
        contact_id: 1,
        name: 'Gandalf the Grey',
        phone: 1134697584,
        avatar: `https://photosmint.com/wp-content/uploads/2025/03/beautiful-whatsapp-dp-boy.jpg`,
        unread_messages: 3,
        messages: [
            {
                message_id: 1001,
                message: `YOU SHALL NOT PASS`,
                message_at: new Date(),
                isSentMessage: false,
                message_state: null
            }
    ]
    },
    {
        contact_id: 2,
        name: 'Frodo',
        phone: 1134891632,
        avatar: `https://photosmint.com/wp-content/uploads/2025/03/beautiful-whatsapp-dp-boy.jpg`,
        unread_messages: 0,
        messages: [
            {
                message_id: 2001,
                message: `Our business is our own`,
                message_at: new Date(),
                isSentMessage: false,
                message_state: null
            },
            {
                message_id: 2002,
                message: `Destruya el anillo, Señor Frodo!!`,
                message_at: new Date("November 28, 2025 05:23:12"),
                isSentMessage: true,
                message_state: `RECIEVED`
            },
        ]
    },
    {
        contact_id: 3,
        name: 'Legolas',
        phone: 1134697584,
        avatar: `https://photosmint.com/wp-content/uploads/2025/03/beautiful-whatsapp-dp-boy.jpg`,
        unread_messages: 3,
        messages: [
            {
                message_id: 1001,
                message: `Tendrías que haber traído más flechas!`,
                message_at: new Date(),
                isSentMessage: true,
                message_state: `SEEN`
            }
    ]
    },
    {
        contact_id: 4,
        name: 'Aragon',
        phone: 1134697584,
        avatar: `https://photosmint.com/wp-content/uploads/2025/03/beautiful-whatsapp-dp-boy.jpg`,
        unread_messages: 3,
        messages: [
            {
                message_id: 4001,
                message: `Puedo ser invisible si quiero`,
                message_at: new Date(),
                isSentMessage: true,
                message_state: `SEEN`
            },
            {
                message_id: 4002,
                message: `Pero desaparecer completamente`,
                message_at: new Date(),
                isSentMessage: true,
                message_state: `SEEN`
            },
    ]
    },
]

export default concactList