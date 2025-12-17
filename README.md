# Elección del desafío
Intentaré crear una versión simplificada de Whatsapp, en la que se puedan enviar, editar y eliminar mensajes, además de agregar y buscar contactos. 
Los estilos serán lo más parecidos a los que se ven en https://web.whatsapp.com/.

# Tecnologías usadas
La principal herramienta usada es React, los estilos se hacen puramente con css

# Desafíos
Diría que el armado del 'html' y los estilos no fueron de gran dificultad. El responsivo tuvo lo suyo en cuanto a la barra de contactos, y tuve que hacer una transformación rara para el botón de envío de mensajes así parece centrado (esta explicado en el css de MessageTextares.css), pero no creo que haya sido tan problemático.

La gran mayoría de las funciones tuvieron su nivel de dificultad, pero lo más complejo fue cuando tuve que agregar los context. La gran mayoría de las funciones que ya tenía creadas dejaban de funcionar correctamente al usar el context. Me costó, pero lo pude solucionar.

Otro gran problema que tenía era que no se renderizaba automáticamente los mensajes o los contactos cuando modificaba o agregaba algo. Según lo visto en clase, terminé haciendo que el detalle del contacto viniera desde el estado creado en ContactListContext en vez de venir directamente de la lista que hace de 'base de datos' (/data/contact-list).

