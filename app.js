const { createApp, ref, onMounted } = Vue;

// Importa tus componentes (asegúrate de que footer.js ya tenga el export default)
import NavbarComponent from './components/Navbar.js';
import EventCard from './components/EventCard.js';

const app = createApp({
    setup() {
        const eventos = ref([]);
        const cargando = ref(true);

        const obtenerDatos = async () => {
            try {
                // Simularemos que los 'users' son equipos/eventos
                const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
                const datos = await respuesta.json();
                
                // Mapeamos los datos para que tengan formato de evento deportivo
                eventos.value = datos.map(user => ({
                    id: user.id,
                    nombre: `${user.name} vs ${user.username}`,
                    deporte: user.id % 2 === 0 ? 'Fútbol' : 'Basketball',
                    marcador: `${Math.floor(Math.random() * 5)} - ${Math.floor(Math.random() * 5)}`,
                }));
            } catch (error) {
                console.error("Error al traer datos:", error);
            } finally {
                cargando.value = false;
            }
        };

        // Ejecutar al cargar la app
        onMounted(obtenerDatos);

        return {
            eventos,
            cargando
        };
    }
});

app.component('navbar-component', NavbarComponent);
app.component('event-card', EventCard);
app.mount('#app');