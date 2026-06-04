# GitHub API Integration & Repository Fetcher

Este proyecto es una aplicación diseñada para interactuar con la API REST de GitHub, permitiendo consultar, extraer y listar de forma dinámica los repositorios públicos de cualquier usuario de la plataforma. Resuelve la necesidad de centralizar y automatizar la búsqueda de portafolios de código mediante peticiones asíncronas optimizadas.

## 🚀 Características Principales

* **Consumo de API REST:** Conexión directa con los endpoints oficiales de GitHub.
* **Manejo Asíncrono:** Implementación de flujos asíncronos para garantizar una experiencia de usuario fluida y sin bloqueos en la interfaz.
* **Procesamiento de Datos:** Filtrado y estructuración de la información clave extraída (nombres de repositorios, descripciones, tecnologías principales y estrellas).
* **Interfaz Limpia:** Interfaz web responsiva para visualizar los resultados en tiempo real.

## 🛠️ Tecnologías y Herramientas Utilizadas

* **Lenguaje:** JavaScript (ES6+).
* **Librerías de Conectividad:** Axios.
* **Diseño/Estilos:** HTML5, CSS3, Bootstrap.
* **Entorno de ejecución:** Node.js / Navegador Web

## 📋 Arquitectura y Resolución del Problema

El mayor desafío técnico de este desarrollo consistió en gestionar los límites de peticiones (*rate-limiting*) de la API de GitHub y procesar las respuestas JSON de manera eficiente. 

1. **Petición Segura:** Se modularizó el servicio de conexión para estructurar los *headers* de forma correcta.
2. **Control de Errores (Error Handling):** Se implementaron bloques `try/catch` para capturar estados HTTP específicos (como usuarios no encontrados `404` o caídas del servidor).
3. **Renderizado Dinámico:** Los datos crudos se mapean para inyectar solo la información de valor en el cliente final.

## 🔧 Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto de manera local:

1. **Clonar el repositorio:**
```bash
   git clone [https://github.com/longaresf/github-api-integration.git](https://github.com/longaresf/github-api-integration.git)
```

2. Ingresar al directorio:
   Bash
   cd github-api-integration

3. Iniciar la aplicación:
   Bash
   npm start    # o python main.py o abrir el index.html en el navegador

✒️ Autor

    Francisco Longares - Desarrollador del Proyecto - longaresf




