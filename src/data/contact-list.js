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
        name: 'Gandalf the Grey',
        phone: 1134697584,
        avatar: `https://scontent.faep14-3.fna.fbcdn.net/v/t39.30808-1/358641340_576837511324596_1257872081624141630_n.jpg?stp=c110.0.338.338a_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=esxehfZU6zcQ7kNvwGj4Se5&_nc_oc=Admr2AKF3KRJRIrVoas0usYiSa40I8T19gBYIZ8Ia25osQntXatz177uCvXsb2HeAG1GUmqq43nHjUFm1-aous8j&_nc_zt=24&_nc_ht=scontent.faep14-3.fna&_nc_gid=IV_1bmHwxXt-HpMlznHb9g&oh=00_Afk5wAZAkVOA4BGO7-gxocsQjrYGLPstul0TCjmMOSPPtQ&oe=693A61A3`,
        unread_messages: 1,
        messages: [
            {
                message_id: 1,
                message: `YOU SHALL NOT PASS`,
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
        name: 'Aragon',
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