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
const concactListDataBase = [
    {
        contact_id: 1,
        name: 'Gollum',
        phone: 1134697584,
        avatar: `https://miro.medium.com/v2/resize:fit:640/format:webp/0*yt7Mwvdb8e08xxhk.jpg`,
        unread_messages: 1,
        messages: [
            {
                message_id: 1,
                message: `Mi precioso!!`,
                message_at: new Date("November 29, 2025 17:12:12"),
                isSentMessage: false,
                message_state: null
            }
    ]
    },
    {
        contact_id: 2,
        name: 'Frodo',
        phone: 1134891632,
        avatar: `https://i.pinimg.com/736x/a7/a6/68/a7a668ab346de7aea8e3733487f19521.jpg`,
        unread_messages: 0,
        messages: [
            {
                message_id: 1,
                message: `Our business is our own`,
                message_at: new Date(),
                isSentMessage: false,
                message_state: null
            },
            {
                message_id: 2,
                message: `Destruya el anillo, Señor Frodo!!`,
                message_at: new Date("November 28, 2025 05:23:12"),
                isSentMessage: true,
                message_state: `SENT`
            },
            {
                message_id: 3,
                message: `Este es un mensaje muy largo para hacer la prueba de cómo queda en la barra de contactos de la parte izquierda.`,
                message_at: new Date("November 28, 2025 05:23:59"),
                isSentMessage: true,
                message_state: `SENT`
            },
        ]
    },
    {
        contact_id: 3,
        name: 'Legolas',
        phone: 1134697584,
        avatar: `https://i.pinimg.com/736x/d7/63/94/d7639428a3f44e28900affcc2d34312b.jpg`,
        unread_messages: 0,
        messages: [
            {
                message_id: 1,
                message: `Tendrías que haber traído más flechas!`,
                message_at: new Date("December 1, 2025 03:02:12"),
                isSentMessage: true,
                message_state: `NOT_SENT`
            }
    ]
    },
    {
        contact_id: 4,
        name: 'Aragorn',
        phone: 1134634584,
        avatar: `https://i.pinimg.com/736x/92/8f/b6/928fb663b8d316fc5aa3c39a2ab572a4.jpg`,
        unread_messages: 2,
        messages: [
            {
                message_id: 1,
                message: `Puedo ser invisible si quiero`,
                message_at: new Date("November 30, 2025 12:27:00"),
                isSentMessage: false,
                message_state: `SEEN`
            },
            {
                message_id: 2,
                message: `Pero desaparecer completamente`,
                message_at: new Date("November 30, 2025 12:27:00"),
                isSentMessage: false,
                message_state: `SEEN`
            },
    ]
    },
]

export default concactListDataBase