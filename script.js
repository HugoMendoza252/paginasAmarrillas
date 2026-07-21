// ==========================================
// 1. BASE DE DATOS TEMPORAL EXTENDIDA
// ==========================================
// ==========================================
// 1. CUENTAS DE USUARIO (9 Cuentas en Total, Clave general: "123")
// ==========================================
const usuariosSemilla = [
    // Cuentas Anteriores
    { id: 101, nombre: "Carlos Mendoza", email: "carlos@gmail.com", password: "123", tipo: "cliente" },
    { id: 102, nombre: "María Fernández", email: "maria@gmail.com", password: "123", tipo: "cliente" },
    { id: 201, nombre: "Roberto Gómez", email: "roberto@plumeria.com", password: "123", tipo: "comercio" },
    { id: 202, nombre: "Laura Casona", email: "contacto@lacasona.com", password: "123", tipo: "comercio" },

    // --- 5 NUEVAS CUENTAS AÑADIDAS ---
    { id: 103, nombre: "Elena Rostova", email: "elena@gmail.com", password: "123", tipo: "cliente" },
    { id: 104, nombre: "Fernando Torres", email: "fernando@hotmail.com", password: "123", tipo: "cliente" },
    { id: 203, nombre: "Agencia Tech Solutions", email: "hola@techsolutions.com", password: "123", tipo: "comercio" },
    { id: 204, nombre: "Dr. Alejandro Silva", email: "contacto@drsilva.com", password: "123", tipo: "comercio" },
    { id: 205, nombre: "Estudio Creativo Prisma", email: "contacto@prismastudio.com", password: "123", tipo: "comercio" }
];

// ==========================================
// 2. DIRECTORIO COMPLETO (30 Servicios / Proyectos en Total)
// ==========================================
const directorioSemilla = [
    // --- 15 SERVICIOS ANTERIORES ---
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
        votos: 15
    },
    {
        id: 2,
        nombre: "Restaurante La Casona",
        categoria: "gastronomia",
        verificado: true,
        descripcion: "Comida típica local, parrilla y atención a familias en un entorno tradicional.",
        zona: "Centro Histórico #450",
        imagen: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Reservar Mesa",
        rating: 4.6,
        votos: 22
    },
    {
        id: 3,
        nombre: "Dra. Sofía Martínez - Odontología Integral",
        categoria: "salud",
        verificado: true,
        descripcion: "Limpieza dental, ortodoncia y atención de urgencias odontológicas.",
        zona: "Av. Principal #120",
        imagen: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Agendar Cita Médica",
        rating: 4.9,
        votos: 30
    },
    {
        id: 4,
        nombre: "Taller Mecánico El Rayo",
        categoria: "servicios",
        verificado: false,
        descripcion: "Diagnóstico computarizado, frenos, cambio de aceite y mecánica general.",
        zona: "Calle Industrial #88",
        imagen: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Consultar Presupuesto",
        rating: 4.2,
        votos: 8
    },
    {
        id: 5,
        nombre: "Vacante: Mozo / Garzón Turno Noche",
        categoria: "empleo",
        verificado: true,
        descripcion: "Se busca personal dinámico para atención al cliente en bar céntrico.",
        zona: "Zona Céntrica",
        imagen: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Postular a la Vacante",
        rating: 4.5,
        votos: 6
    },
    {
        id: 6,
        nombre: "Electricista Matriculado - Mantenimiento Hogar",
        categoria: "servicios",
        verificado: true,
        descripcion: "Instalaciones eléctricas residenciales, tableros, cortocircuitos y luces LED.",
        zona: "Cobertura a domicilio",
        imagen: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Solicitar Electricista",
        rating: 4.7,
        votos: 19
    },
    {
        id: 7,
        nombre: "Café & Pastelería Aroma",
        categoria: "gastronomia",
        verificado: true,
        descripcion: "Café de especialidad, repostería artesanal, desayunos y meriendas.",
        zona: "Av. San Martín #890",
        imagen: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Ver Menú / Pedir",
        rating: 4.8,
        votos: 40
    },
    {
        id: 8,
        nombre: "Lic. Marcos Rivas - Kinesiología y Fisioterapia",
        categoria: "salud",
        verificado: true,
        descripcion: "Rehabilitación deportiva, dolores posturales y masajes descontracturantes.",
        zona: "Consultorio Centro Médico Norte",
        imagen: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Consultar Turno",
        rating: 4.9,
        votos: 14
    },
    {
        id: 9,
        nombre: "Vacante: Desarrollador Web Frontend",
        categoria: "empleo",
        verificado: true,
        descripcion: "Buscamos programador con experiencia en HTML, CSS y JS para agencia digital.",
        zona: "Trabajo Remoto / Híbrido",
        imagen: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Enviar CV",
        rating: 4.3,
        votos: 11
    },
    {
        id: 10,
        nombre: "Pinturas & Remodelaciones Express",
        categoria: "servicios",
        verificado: false,
        descripcion: "Pintura interior y exterior, colocación de durlock y acabados finos.",
        zona: "Zona Sur y Alrededores",
        imagen: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Cotizar Pintura",
        rating: 4.1,
        votos: 7
    },
    {
        id: 11,
        nombre: "Pizzería y Hamburguesería La Esquina",
        categoria: "gastronomia",
        verificado: true,
        descripcion: "Pizzas a la piedra, hamburguesas gourmet y envíos a domicilio rápidos.",
        zona: "Barrio Jardín #102",
        imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Pedir Delivery",
        rating: 4.6,
        votos: 35
    },
    {
        id: 12,
        nombre: "Veterinaria & Peluquería Canina Huellitas",
        categoria: "salud",
        verificado: true,
        descripcion: "Consultas veterinarias, vacunación, cirugías menores y baño para mascotas.",
        zona: "Calle Las Heras #310",
        imagen: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Agendar Turno Pet",
        rating: 4.9,
        votos: 28
    },
    {
        id: 13,
        nombre: "Jardinería y Paisajismo Verde Vivo",
        categoria: "servicios",
        verificado: true,
        descripcion: "Corte de césped, poda de árboles, diseño de jardines y sistemas de riego.",
        zona: "Servicio a Domicilio",
        imagen: "https://images.unsplash.com/photo-1558904541-efa8c196b27d?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Solicitar Visita",
        rating: 4.4,
        votos: 12
    },
    {
        id: 14,
        nombre: "Academia Mente Ágil - Clases de Apoyo Escolar",
        categoria: "servicios",
        verificado: true,
        descripcion: "Tutorías particulares de Matemáticas, Física e Inglés para primaria y secundaria.",
        zona: "Modalidad Presencial y Online",
        imagen: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Consultar Clases",
        rating: 4.8,
        votos: 17
    },
    {
        id: 15,
        nombre: "Vacante: Auxiliar Administrativo / Contable",
        categoria: "empleo",
        verificado: true,
        descripcion: "Estudio contable busca asistente para facturación y atención a clientes.",
        zona: "Microcentro",
        imagen: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Postularse",
        rating: 4.5,
        votos: 9
    },

    // --- 15 NUEVO SERVICIOS / PROYECTOS AÑADIDOS ---
    {
        id: 16,
        nombre: "Proyecto Startup: Busco Programador Frontend, Backend y Diseñador UX/UI",
        categoria: "proyectos",
        verificado: true,
        descripcion: "Desarrollo completo de app SaaS. Se busca equipo freelance: 1 Dev Frontend (React), 1 Dev Backend (Node.js/PostgreSQL) y 1 Diseñador UX/UI (Figma).",
        zona: "Modalidad 100% Remota",
        imagen: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Postular al Equipo",
        rating: 5.0,
        votos: 4
    },
    {
        id: 17,
        nombre: "Estudio Fotográfico Prisma - Eventos y Sesiones",
        categoria: "servicios",
        verificado: true,
        descripcion: "Cobertura fotográfica profesional para bodas, cumpleaños, retratos personales y fotos de producto para e-commerce.",
        zona: "Estudio en Zona Centro / Desplazamientos",
        imagen: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Cotizar Sesión",
        rating: 4.9,
        votos: 21
    },
    {
        id: 18,
        nombre: "Sushi & Fusion Nikkei - Express",
        categoria: "gastronomia",
        verificado: true,
        descripcion: "Rolls de autor, tiraditos, ceviches y opciones vegetarianas elaborados con ingredientes frescos del día.",
        zona: "Av. Belgrano #1200",
        imagen: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Hacer Pedido",
        rating: 4.7,
        votos: 33
    },
    {
        id: 19,
        nombre: "Clínica Veterinaria 24 Horas - Dr. Silva",
        categoria: "salud",
        verificado: true,
        descripcion: "Guardia médica animal 24 horas, quirófano equipado, radiografías digitales y ecografías para perros y gatos.",
        zona: "Av. Libertador #340",
        imagen: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Llamar a Urgencias",
        rating: 5.0,
        votos: 45
    },
    {
        id: 20,
        nombre: "Proyecto Rediseño de Marca: Busco Diseñador Gráfico y Marketer",
        categoria: "proyectos",
        verificado: true,
        descripcion: "Cadena comercial busca profesionales independientes para rediseñar su identidad corporativa y lanzar campaña publicitaria digital.",
        zona: "Remoto / Reuniones híbridas",
        imagen: "https://images.unsplash.com/photo-1542744094-3a312169a165?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Enviar Portafolio",
        rating: 4.8,
        votos: 6
    },
    {
        id: 21,
        nombre: "Servicio de Mudanzas y Fletes San José",
        categoria: "servicios",
        verificado: false,
        descripcion: "Traslado de muebles, embalaje profesional, carga/descarga y fletes dentro y fuera de la ciudad.",
        zona: "Cobertura Regional",
        imagen: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Cotizar Flete",
        rating: 4.3,
        votos: 10
    },
    {
        id: 22,
        nombre: "Gimnasio & Studio Fitness Vitality",
        categoria: "salud",
        verificado: true,
        descripcion: "Entrenamiento funcional, musculación, clases de spinning y asesoramiento nutricional personalizado.",
        zona: "Calle Córdoba #550",
        imagen: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Consultar Membresía",
        rating: 4.7,
        votos: 29
    },
    {
        id: 23,
        nombre: "Vacante: Contador / Auditor Senior",
        categoria: "empleo",
        verificado: true,
        descripcion: "Empresa de logística en expansión busca profesional graduado en Ciencias Económicas con experiencia comprobable.",
        zona: "Distrito Financiero",
        imagen: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Postularme",
        rating: 4.4,
        votos: 5
    },
    {
        id: 24,
        nombre: "Instalación y Servicio Técnico de Aire Acondicionado",
        categoria: "servicios",
        verificado: true,
        descripcion: "Instalación de equipos split, carga de gas refrigerante, mantenimiento preventivo y reparación de fallas.",
        zona: "Atención a domicilio",
        imagen: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Solicitar Técnico",
        rating: 4.6,
        votos: 18
    },
    {
        id: 25,
        nombre: "Panadería y Confitería Don Juan",
        categoria: "gastronomia",
        verificado: true,
        descripcion: "Pan fresco elaborado a la leña, facturas, masas finas y tortas personalizadas para eventos.",
        zona: "Barrio San Martín #205",
        imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Encargar Torta",
        rating: 4.9,
        votos: 38
    },
    {
        id: 26,
        nombre: "Nutricionista Lic. Natalia Gomez",
        categoria: "salud",
        verificado: true,
        descripcion: "Planes de alimentación para descenso de peso, rendimiento deportivo y nutrición vegetariana/vegana.",
        zona: "Atención Presencial y Online",
        imagen: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Agendar Turno",
        rating: 4.8,
        votos: 16
    },
    {
        id: 27,
        nombre: "Proyecto Construcción: Requiero Arquitecto y Maestro Mayor de Obra",
        categoria: "proyectos",
        verificado: true,
        descripcion: "Construcción de vivienda unifamiliar de 120m2. Se requiere proyecto de planos, dirección de obra y ejecución.",
        zona: "Zona Residencial Norte",
        imagen: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Enviar Propuesta",
        rating: 4.9,
        votos: 8
    },
    {
        id: 28,
        nombre: "Limpieza Profesional de Tapizados y Alfombras",
        categoria: "servicios",
        verificado: false,
        descripcion: "Lavado e higienización profunda con máquinas de inyección y extracción para sillones, colchones y autos.",
        zona: "Servicio a Domicilio",
        imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Cotizar Limpieza",
        rating: 4.5,
        votos: 13
    },
    {
        id: 29,
        nombre: "Vacante: Recepcionista y Atención al Cliente",
        categoria: "empleo",
        verificado: true,
        descripcion: "Hotel boutique busca personal capacitado para recepción, gestión de reservas e informes a turistas.",
        zona: "Centro Turístico",
        imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Enviar Curriculum",
        rating: 4.2,
        votos: 7
    },
    {
        id: 30,
        nombre: "Barbería & Club Masculino Don Corleone",
        categoria: "servicios",
        verificado: true,
        descripcion: "Cortes de cabello modernos y clásicos, perfilado de barba con toalla caliente y tratamiento facial.",
        zona: "Calle Moreno #780",
        imagen: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=500&q=80",
        botonTexto: "Agendar Cita",
        rating: 4.9,
        votos: 52
    }
];


// REINICIO FORZADO DE MEMORIA PARA REFLEJAR NUEVOS DATOS
setDB('db_usuarios', usuariosSemilla);
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
// ==========================================
// 3. RENDERIZADO DE FICHAS CON LÍMITE EN INICIO
// ==========================================
function renderDirectory(items) {
    const grid = document.getElementById('directoryGrid');
    if (!grid) return;
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = "<p>No hay resultados registrados para esta búsqueda.</p>";
        return;
    }

    // Detectamos si estamos en la página principal (index.html)
    const esPaginaInicio = window.location.pathname.endsWith('index.html') ||
        window.location.pathname === '/' ||
        window.location.pathname.endsWith('/');

    // Si estamos en inicio, recortamos el arreglo a solo los primeros 10 elementos
    const itemsAMostrar = esPaginaInicio ? items.slice(0, 10) : items;

    itemsAMostrar.forEach(item => {
        const ratingVal = item.rating || 5.0;
        const card = document.createElement('div');
        card.classList.add('card');

        // Al hacer clic en la tarjeta (excepto en el botón), abre el detalle
        card.onclick = (e) => {
            if (!e.target.classList.contains('btn-action')) {
                openDetailModal(item.id);
            }
        };

        card.innerHTML = `
            <img src="${item.imagen || 'https://via.placeholder.com/500x300'}" class="card-img">
            <div class="card-body">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
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