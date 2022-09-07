export const formatearFecha = (fecha: number) => {
    const fechaNueva = new Date(fecha);

    const opciones: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };

    return fechaNueva.toLocaleDateString('es-CO', opciones);
}