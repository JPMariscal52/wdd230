// Selecciona el input, el botón y la lista
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Añade un evento de clic al botón "Add Chapter"
button.addEventListener('click', () => {
    // Verifica si el campo de entrada no está en blanco
    if (input.value.trim() !== '') {
        // Crea un elemento <li>
        const li = document.createElement('li');
        
        // Crea un botón de eliminar
        const deleteButton = document.createElement('button');
        
        // Establece el contenido del botón de eliminar
        deleteButton.textContent = '❌';
        
        // Establece el contenido del <li> con el valor del input
        li.textContent = input.value;
        
        // Añade el botón de eliminar al <li>
        li.appendChild(deleteButton);
        
        // Añade el <li> a la lista
        list.appendChild(li);
        
        // Añade un evento de clic al botón de eliminar
        deleteButton.addEventListener('click', () => {
            // Remueve el <li> al que pertenece el botón de eliminar
            li.remove();
        });
        
        // Enfoca de nuevo en el campo de entrada
        input.focus();
        
        // Limpia el valor del campo de entrada
        input.value = '';
    } else {
        // Si el campo de entrada está en blanco, muestra un mensaje (puedes cambiarlo según tu preferencia)
        alert('Por favor, ingresa un capítulo.');
        // Enfoca de nuevo en el campo de entrada
        input.focus();
    }
});
