// ==========================================
// LÓGICA DE GESTIÓN DEL PERFIL
// ==========================================

// Obtener datos del localStorage
function getDB(k) { return JSON.parse(localStorage.getItem(k)) || []; }
function setDB(k, v) { localStorage.setItem(k, JSON.stringify(v)); }
function getSession() { return JSON.parse(localStorage.getItem('sesion_activa')); }

// 1. VERIFICAR QUE EL USUARIO ESTÉ AUTENTICADO
const currentUser = getSession();

if (!currentUser) {
    alert("Debes iniciar sesión para acceder a tu perfil.");
    window.location.href = "index.html"; // Redirigir al inicio si no hay sesión
} else {
    initProfile();
}

// 2. INICIALIZAR VISTA
function initProfile() {
    // Cargar encabezado
    document.getElementById('userHeaderName').innerText = currentUser.nombre;
    document.getElementById('userHeaderRole').innerText = `Rol: ${currentUser.tipo}`;

    // Cargar formulario
    document.getElementById('profName').value = currentUser.nombre;
    document.getElementById('profEmail').value = currentUser.email;
    document.getElementById('profType').value = currentUser.tipo === 'comercio' ? 'Dueño de Comercio / Contratista' : 'Cliente / Buscador';

    // Cargar publicaciones creadas por el usuario
    renderMyServices();
}

// 3. ACTUALIZAR DATOS DE PERFIL
document.getElementById('profileForm').onsubmit = (e) => {
    e.preventDefault();
    const newName = document.getElementById('profName').value.trim();

    if (!newName) return;

    // Actualizar en la lista global de usuarios
    const users = getDB('db_usuarios');
    const userIndex = users.findIndex(u => u.id === currentUser.id);

    if (userIndex !== -1) {
        users[userIndex].nombre = newName;
        setDB('db_usuarios', users);
    }

    // Actualizar en la sesión activa
    currentUser.nombre = newName;
    localStorage.setItem('sesion_activa', JSON.stringify(currentUser));

    alert("¡Perfil actualizado con éxito!");
    initProfile();
};

// 4. MOSTRAR LISTA DE PUBLICACIONES PROPIAS
function renderMyServices() {
    const container = document.getElementById('myServicesList');
    container.innerHTML = "";

    const allServices = getDB('db_directorio');

    // Filtra los negocios que coincidan con el nombre del usuario o muestra todos los creados si es el usuario semilla
    const myServices = allServices.filter(s =>
        s.nombre.toLowerCase().includes(currentUser.nombre.toLowerCase()) ||
        (currentUser.email === "roberto@plumeria.com" && s.id === 1)
    );

    if (myServices.length === 0) {
        container.innerHTML = `
            <p style="color: #666; font-size: 0.9rem;">No tienes ningún servicio publicado actualmente.</p>
        `;
        return;
    }

    myServices.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('my-service-item');
        div.innerHTML = `
            <div class="my-service-info">
                <img src="${item.imagen || 'https://via.placeholder.com/50'}" alt="img">
                <div>
                    <h4>${item.nombre}</h4>
                    <p><i class="fa-solid fa-location-dot"></i> ${item.zona}</p>
                </div>
            </div>
            <button class="btn-delete" onclick="deleteService(${item.id})">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        container.appendChild(div);
    });
}

// 5. ELIMINAR UN SERVICIO
function deleteService(id) {
    if (confirm("¿Estás seguro de que deseas eliminar este servicio del directorio?")) {
        let allServices = getDB('db_directorio');
        allServices = allServices.filter(s => s.id !== id);
        setDB('db_directorio', allServices);
        renderMyServices();
        alert("Publicación eliminada correctamente.");
    }
}

// 6. CERRAR SESIÓN
function logoutPerfil() {
    localStorage.removeItem('sesion_activa');
    window.location.href = "index.html";
}