export const formatearFecha = (fecha: number) => {
    const fechaNueva = new Date(fecha);

    const opciones: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };

    return fechaNueva.toLocaleDateString('es-CO', opciones);
}

export const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
}