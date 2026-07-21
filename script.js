// ==========================================
// 1. BASE DE DATOS TEMPORAL EXTENDIDA
// ==========================================
const usuariosSemilla = [
    { id: 101, nombre: "Carlos Mendoza", email: "carlos@gmail.com", password: "123", tipo: "cliente" },
    { id: 102, nombre: "María Fernández", email: "maria@gmail.com", password: "123", tipo: "cliente" },
    { id: 201, nombre: "Roberto Gómez", email: "roberto@plumeria.com", password: "123", tipo: "comercio" },
    { id: 202, nombre: "Laura Casona", email: "contacto@lacasona.com", password: "123", tipo: "comercio" }
];

const directorioSemilla = [
    // Ejemplo de cómo luce ahora cada elemento en directorioSemilla:
    {
        id: 1,
        nombre: "Roberto Gómez - Plomería 24/7",
        categoria: "servicios",
        verificado: true,
        descripcion: "Atención inmediata de urgencias, destapes e instalaciones a domicilio.",
        zona: "Zona Norte / Cobertura a domicilio",
        imagen: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Cotizar Servicio Directo",
        rating: 4.8,
        votos: 12
    },
    {
        id: 2,
        nombre: "Restaurante La Casona",
        categoria: "gastronomia",
        verificado: true,
        descripcion: "Comida típica local, parrilla y atención a familias en un entorno tradicional.",
        zona: "Centro Histórico #450",
        imagen: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Reservar Mesa"
    },
    {
        id: 3,
        nombre: "Dra. Sofía Martínez - Odontología Integral",
        categoria: "salud",
        verificado: true,
        descripcion: "Limpieza dental, ortodoncia y atención de urgencias odontológicas.",
        zona: "Av. Principal #120",
        imagen: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Agendar Cita Médica"
    },
    {
        id: 4,
        nombre: "Taller Mecánico El Rayo",
        categoria: "servicios",
        verificado: false,
        descripcion: "Diagnóstico computarizado, frenos, cambio de aceite y mecánica general.",
        zona: "Calle Industrial #88",
        imagen: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Consultar Presupuesto"
    },
    {
        id: 5,
        nombre: "Vacante: Mozo / Garzón Turno Noche",
        categoria: "empleo",
        verificado: true,
        descripcion: "Se busca personal dinámico para atención al cliente en bar céntrico.",
        zona: "Zona Céntrica",
        imagen: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Postular a la Vacante"
    },

    // --- 10 NUEVOS SERVICIOS AÑADIDOS ---
    {
        id: 6,
        nombre: "Electricista Matriculado - Mantenimiento Hogar",
        categoria: "servicios",
        verificado: true,
        descripcion: "Instalaciones eléctricas residenciales, tableros, cortocircuitos y luces LED.",
        zona: "Cobertura a domicilio",
        imagen: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Solicitar Electricista"
    },
    {
        id: 7,
        nombre: "Café & Pastelería Aroma",
        categoria: "gastronomia",
        verificado: true,
        descripcion: "Café de especialidad, repostería artesanal, desayunos y meriendas.",
        zona: "Av. San Martín #890",
        imagen: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Ver Menú / Pedir"
    },
    {
        id: 8,
        nombre: "Lic. Marcos Rivas - Kinesiología y Fisioterapia",
        categoria: "salud",
        verificado: true,
        descripcion: "Rehabilitación deportiva, dolores posturales y masajes descontracturantes.",
        zona: "Consultorio Centro Médico Norte",
        imagen: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Consultar Turno"
    },
    {
        id: 9,
        nombre: "Vacante: Desarrollador Web Frontend",
        categoria: "empleo",
        verificado: true,
        descripcion: "Buscamos programador con experiencia en HTML, CSS y JS para agencia digital.",
        zona: "Trabajo Remoto / Híbrido",
        imagen: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Enviar CV"
    },
    {
        id: 10,
        nombre: "Pinturas & Remodelaciones Express",
        categoria: "servicios",
        verificado: false,
        descripcion: "Pintura interior y exterior, colocación de durlock y acabados finos.",
        zona: "Zona Sur y Alrededores",
        imagen: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Cotizar Pintura"
    },
    {
        id: 11,
        nombre: "Pizzería y Hamburguesería La Esquina",
        categoria: "gastronomia",
        verificado: true,
        descripcion: "Pizzas a la piedra, hamburguesas gourmet y envíos a domicilio rápidos.",
        zona: "Barrio Jardín #102",
        imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Pedir Delivery"
    },
    {
        id: 12,
        nombre: "Veterinaria & Peluquería Canina Huellitas",
        categoria: "salud",
        verificado: true,
        descripcion: "Consultas veterinarias, vacunación, cirugías menores y baño para mascotas.",
        zona: "Calle Las Heras #310",
        imagen: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Agendar Turno Pet"
    },
    {
        id: 13,
        nombre: "Jardinería y Paisajismo Verde Vivo",
        categoria: "servicios",
        verificado: true,
        descripcion: "Corte de césped, poda de árboles, diseño de jardines y sistemas de riego.",
        zona: "Servicio a Domicilio",
        imagen: "https://images.unsplash.com/photo-1558904541-efa8c196b27d?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Solicitar Visita"
    },
    {
        id: 14,
        nombre: "Academia Mente Ágil - Clases de Apoyo Escolar",
        categoria: "servicios",
        verificado: true,
        descripcion: "Tutorías particulares de Matemáticas, Física e Inglés para primaria y secundaria.",
        zona: "Modalidad Presencial y Online",
        imagen: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Consultar Clases"
    },
    {
        id: 15,
        nombre: "Vacante: Auxiliar Administrativo / Contable",
        categoria: "empleo",
        verificado: true,
        descripcion: "Estudio contable busca asistente para facturación y atención a clientes.",
        zona: "Microcentro",
        imagen: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Postularse"
    },
    {
        id: 16,
        nombre: "Búsqueda de Equipo: Programador Frontend, Backend y Diseñador UX/UI",
        categoria: "proyectos",
        verificado: true,
        descripcion: "Buscamos profesionales independientes para desarrollo de plataforma e-commerce desde cero. Se requiere: 1 Frontend (React), 1 Backend (Node.js) y 1 Diseñador (Figma).",
        zona: "Modalidad 100% Remota",
        imagen: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Postularme al Proyecto"
    }
];
setDB('db_directorio', directorioSemilla);

// Reinicio de Memoria para asegurar actualización
setDB('db_usuarios', usuariosSemilla);
if (!localStorage.getItem('db_directorio')) {
    setDB('db_directorio', directorioSemilla);
}

function getDB(k) { return JSON.parse(localStorage.getItem(k)) || []; }
function setDB(k, v) { localStorage.setItem(k, JSON.stringify(v)); }
function getSession() { return JSON.parse(localStorage.getItem('sesion_activa')); }

// ==========================================
// 2. CONTROL DE SESIÓN
// ==========================================
// ==========================================
// CONTROL DE SESIÓN Y NAVEGACIÓN
// ==========================================
function checkSession() {
    const user = getSession();
    const authNav = document.getElementById('authNav');
    const addBusinessBtn = document.getElementById('addBusinessBtn');

    if (user) {
        // Al iniciar sesión, el nombre enlaza a perfil.html y agrega la opción "Mi Perfil"
        authNav.innerHTML = `
            <div class="user-badge">
                <a href="perfil.html" class="user-profile-link" title="Ir a Mi Perfil">
                    <i class="fa-solid fa-circle-user"></i> ${user.nombre}
                </a>
                <button class="btn-logout" onclick="logout()"><i class="fa-solid fa-power-off"></i> Salir</button>
            </div>
        `;
        if (addBusinessBtn) addBusinessBtn.style.display = 'block';
    } else {
        authNav.innerHTML = `<button class="btn-auth" onclick="openAuthModal()"><i class="fa-solid fa-user"></i> Iniciar Sesión</button>`;
        if (addBusinessBtn) addBusinessBtn.style.display = 'none';
    }
}
function logout() {
    localStorage.removeItem('sesion_activa');
    checkSession();
    renderDirectory(getDB('db_directorio'));
}

// ==========================================
// 3. RENDERIZADO DE FICHAS
// ==========================================
function renderDirectory(items) {
    const grid = document.getElementById('directoryGrid');
    if (!grid) return;
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = "<p>No hay resultados registrados.</p>";
        return;
    }

    items.forEach(item => {
        const ratingVal = item.rating || 5.0;
        const card = document.createElement('div');
        card.classList.add('card');

        // Al hacer clic en la tarjeta (excepto en el botón), se abre el modal de detalle
        card.onclick = (e) => {
            if (!e.target.classList.contains('btn-action')) {
                openDetailModal(item.id);
            }
        };

        card.innerHTML = `
            <img src="${item.imagen || 'https://via.placeholder.com/500x300'}" class="card-img">
            <div class="card-body">
                <div style="display: flex; justify-space-between; align-items: center; margin-bottom: 5px;">
                    ${item.verificado ? '<span class="badge-verified"><i class="fa-solid fa-circle-check"></i> Verificado</span>' : '<span></span>'}
                    <span style="font-weight: bold; color: #ffc107; font-size: 0.9rem;">
                        <i class="fa-solid fa-star"></i> ${ratingVal.toFixed(1)}
                    </span>
                </div>
                <h3 class="card-title">${item.nombre}</h3>
                <p class="card-desc">${item.descripcion}</p>
                <p class="card-info"><i class="fa-solid fa-location-dot"></i> ${item.zona}</p>
                <button class="btn-action" onclick="openBookingModal('${item.nombre}')">${item.botonTexto || 'Contactar'}</button>
            </div>
        `;
        grid.appendChild(card);
    });
}
// ==========================================
// 4. LÓGICA DE MODALES Y ACCIONES
// ==========================================
function openAuthModal() { document.getElementById('authModal').style.display = 'flex'; }
function openBookingModal(t) {
    document.getElementById('modalTitle').innerText = `Contactar: ${t}`;
    document.getElementById('bookingModal').style.display = 'flex';
}

function closeModals() {
    if (document.getElementById('authModal')) document.getElementById('authModal').style.display = 'none';
    if (document.getElementById('bookingModal')) document.getElementById('bookingModal').style.display = 'none';
    if (document.getElementById('newBusinessModal')) document.getElementById('newBusinessModal').style.display = 'none';
}

const addBtn = document.getElementById('addBusinessBtn');
if (addBtn) addBtn.onclick = () => document.getElementById('newBusinessModal').style.display = 'flex';

const showRegBtn = document.getElementById('showRegister');
if (showRegBtn) {
    showRegBtn.onclick = (e) => {
        e.preventDefault();
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('registerSection').style.display = 'block';
    };
}

const showLogBtn = document.getElementById('showLogin');
if (showLogBtn) {
    showLogBtn.onclick = (e) => {
        e.preventDefault();
        document.getElementById('registerSection').style.display = 'none';
        document.getElementById('loginSection').style.display = 'block';
    };
}

// FORMULARIOS
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.onsubmit = (e) => {
        e.preventDefault();
        const eMail = document.getElementById('loginEmail').value.trim();
        const pass = document.getElementById('loginPassword').value.trim();
        const user = getDB('db_usuarios').find(u => u.email.toLowerCase() === eMail.toLowerCase() && u.password === pass);

        if (user) {
            localStorage.setItem('sesion_activa', JSON.stringify(user));
            closeModals();
            checkSession();
            alert(`¡Bienvenido de nuevo, ${user.nombre}!`);
        } else {
            alert("Credenciales incorrectas. Usa: roberto@plumeria.com / Clave: 123");
        }
    };
}

const regForm = document.getElementById('registerForm');
if (regForm) {
    regForm.onsubmit = (e) => {
        e.preventDefault();
        const users = getDB('db_usuarios');
        const newUser = {
            id: Date.now(),
            nombre: document.getElementById('regName').value,
            email: document.getElementById('regEmail').value,
            password: document.getElementById('regPassword').value,
            tipo: document.getElementById('regType').value
        };

        users.push(newUser);
        setDB('db_usuarios', users);
        localStorage.setItem('sesion_activa', JSON.stringify(newUser));
        closeModals();
        checkSession();
    };
}

const newBizForm = document.getElementById('newBusinessForm');
if (newBizForm) {
    newBizForm.onsubmit = (e) => {
        e.preventDefault();
        const items = getDB('db_directorio');
        const newItem = {
            id: Date.now(),
            nombre: document.getElementById('bizTitle').value,
            categoria: document.getElementById('bizCategory').value,
            verificado: true,
            descripcion: document.getElementById('bizDesc').value,
            zona: document.getElementById('bizZone').value,
            imagen: document.getElementById('bizImg').value || "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=500&q=80",
            botonTexto: "Contactar Directamente"
        };

        items.unshift(newItem);
        setDB('db_directorio', items);
        renderDirectory(items);
        closeModals();
        alert("¡Negocio publicado con éxito en el directorio!");
    };
}

const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.onsubmit = (e) => {
        e.preventDefault();
        alert("¡Solicitud enviada con éxito!");
        closeModals();
    };
}

// FILTROS
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

if (searchBtn) searchBtn.onclick = filterData;
if (searchInput) searchInput.onkeyup = filterData;
if (categoryFilter) categoryFilter.onchange = filterData;

function filterData() {
    const text = searchInput ? searchInput.value.toLowerCase() : "";
    const cat = categoryFilter ? categoryFilter.value : "todos";

    const filtered = getDB('db_directorio').filter(i => {
        const mText = i.nombre.toLowerCase().includes(text) || i.descripcion.toLowerCase().includes(text);
        const mCat = cat === "todos" || i.categoria === cat;
        return mText && mCat;
    });
    renderDirectory(filtered);
}
let currentDetailId = null;
let selectedUserRating = 0;

function openDetailModal(id) {
    const items = getDB('db_directorio');
    const item = items.find(i => i.id === id);
    if (!item) return;

    currentDetailId = id;
    selectedUserRating = 0;
    resetStarSelection();

    // Llenar datos en el modal
    document.getElementById('detailImg').src = item.imagen || 'https://via.placeholder.com/500x300';
    document.getElementById('detailTitle').innerText = item.nombre;
    document.getElementById('detailCategory').innerText = item.categoria;
    document.getElementById('detailZone').querySelector('span').innerText = item.zona;
    document.getElementById('detailDescription').innerText = item.descripcion;

    const badge = document.getElementById('detailBadge');
    badge.style.display = item.verificado ? 'inline-block' : 'none';
    if (item.verificado) badge.innerHTML = '<i class="fa-solid fa-circle-check"></i> Verificado';

    // Renderizar Puntuación Actual
    const ratingVal = item.rating || 5.0;
    const votosCount = item.votos || 1;
    document.getElementById('detailRatingText').innerText = `${ratingVal.toFixed(1)} / 5 (${votosCount} opiniones)`;

    renderStarsDisplay(document.getElementById('detailStars'), ratingVal);

    // Botón de Acción Principal
    const actionBtn = document.getElementById('detailActionBtn');
    actionBtn.innerText = item.botonTexto || 'Contactar';
    actionBtn.onclick = () => {
        closeModals();
        openBookingModal(item.nombre);
    };

    document.getElementById('detailModal').style.display = 'flex';
}

function renderStarsDisplay(container, rating) {
    container.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('i');
        if (rating >= i) {
            star.className = 'fa-solid fa-star';
        } else if (rating >= i - 0.5) {
            star.className = 'fa-solid fa-star-half-stroke';
        } else {
            star.className = 'fa-regular fa-star';
        }
        container.appendChild(star);
    }
}

// LÓGICA DE INTERACCIÓN DE ESTRELLAS PARA EL USUARIO
document.querySelectorAll('.star-btn').forEach(star => {
    star.addEventListener('click', function () {
        selectedUserRating = parseInt(this.getAttribute('data-value'));
        updateStarSelection(selectedUserRating);
        document.getElementById('btnSubmitRating').disabled = false;
    });
});

function updateStarSelection(val) {
    document.querySelectorAll('.star-btn').forEach(star => {
        const starVal = parseInt(star.getAttribute('data-value'));
        if (starVal <= val) {
            star.classList.remove('fa-regular');
            star.classList.add('fa-solid');
            star.style.color = '#ffc107';
        } else {
            star.classList.remove('fa-solid');
            star.classList.add('fa-regular');
            star.style.color = '#ccc';
        }
    });
}

function resetStarSelection() {
    document.querySelectorAll('.star-btn').forEach(star => {
        star.classList.remove('fa-solid');
        star.classList.add('fa-regular');
        star.style.color = '#ccc';
    });
    document.getElementById('btnSubmitRating').disabled = true;
}

// ENVIAR NUEVA CALIFICACIÓN
document.getElementById('btnSubmitRating').onclick = () => {
    if (!currentDetailId || selectedUserRating === 0) return;

    const items = getDB('db_directorio');
    const index = items.findIndex(i => i.id === currentDetailId);

    if (index !== -1) {
        let currentRating = items[index].rating || 5.0;
        let currentVotes = items[index].votos || 1;

        // Cálculo de promedio ponderado
        let newVotes = currentVotes + 1;
        let newRating = ((currentRating * currentVotes) + selectedUserRating) / newVotes;

        items[index].rating = newRating;
        items[index].votos = newVotes;

        setDB('db_directorio', items);
        renderDirectory(items);
        openDetailModal(currentDetailId); // Recargar modal
        alert("¡Muchas gracias por tu calificación!");
    }
};

// Cerrar también el Detail Modal en closeModals
const prevCloseModals = closeModals;
closeModals = function () {
    if (document.getElementById('detailModal')) document.getElementById('detailModal').style.display = 'none';
    if (typeof prevCloseModals === 'function') prevCloseModals();
};
// INICIALIZACIÓN
checkSession();
renderDirectory(getDB('db_directorio'));