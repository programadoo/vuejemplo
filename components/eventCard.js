export default {
    props: ['evento'],
    template: `
    <div class="card">
        <h3>{{ evento.nombre }}</h3>
        <span class="badge">{{ evento.deporte }}</span>
        <p class="score">{{ evento.marcador }}</p>
        <button @click="$emit('ver-detalle', evento.id)">Ver detalles</button>
    </div>
    `
}