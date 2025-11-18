import axios from 'axios';

// 1. Crear la instancia de Axios con la URL base
const api = axios.create({
    // Asegúrate de que esta sea la URL base de tu API en Render
    baseURL: 'https://appinmobiliaria.onrender.com', 
    headers: {
        'Content-Type': 'application/json',
    },
});

// 2. Interceptor de Solicitudes
// Este código se ejecuta antes de que CADA solicitud sea enviada.
api.interceptors.request.use(
    (config) => {
        // Obtener el token de acceso desde localStorage (coherente con el login)
        const accessToken = localStorage.getItem('access');

        // Si el token existe, se añade el encabezado de autorización
        if (accessToken) {
            (config.headers as any)['Authorization'] = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        // Manejar errores de configuración o de red antes del envío
        return Promise.reject(error);
    }
);

export default api;