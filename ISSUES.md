# Explicación de los Cambios en Backend y Frontend

## Cambios en el Backend

### 1. **Exposición del puerto de la base de datos en Docker Compose**
   - **Razón**: Exponer el puerto de la base de datos (`5432`) permite que otros servicios (como el backend y herramientas como pgAdmin) se conecten al contenedor de la base de datos.
   - **Impacto**: Mejora la conectividad y las capacidades de depuración durante el desarrollo.

### 2. **Eliminación de `dist` de `.dockerignore`**
   - **Razón**: La carpeta `dist` es necesaria para el despliegue en producción. Excluirla de `.dockerignore` asegura que se copie en la imagen de Docker.
   - **Impacto**: Previene problemas donde las compilaciones de producción fallan debido a archivos faltantes.

### 3. **Cambio a Node.js 16**
   - **Razón**: Node.js 16 es la versión de soporte a largo plazo (LTS), proporcionando mayor estabilidad y nuevas características.
   - **Impacto**: Asegura compatibilidad con dependencias modernas y un mejor rendimiento.

### 4. **Agregar la columna `preference` a los tests**
   - **Razón**: Actualizar los tests para reflejar la nueva columna `preference` en el esquema de la base de datos.
   - **Impacto**: Mantiene consistencia con el modelo de datos actualizado y previene fallos en los tests.

### 5. **Agregar la columna `preference` a DTO, entidad y consultas**
   - **Razón**: El campo `preference` fue agregado para mejorar los datos del perfil de usuario. Esto se reflejó en el objeto de transferencia de datos (DTO), la entidad y las consultas a la base de datos.
   - **Impacto**: Permite que las operaciones del backend manejen el nuevo campo.

## Cambios en el Frontend

### 1. **Agregar clave API en `.env`**
   - **Razón**: Almacenar la clave API de IA en el archivo de entorno asegura seguridad y facilidad de acceso para los servicios de IA.
   - **Impacto**: Proporciona una integración fluida con los servicios de IA.

### 2. **Cambio a Node.js 16 en el Dockerfile**
   - **Razón**: Igual que en el backend, para asegurar estabilidad y compatibilidad con las características más recientes.
   - **Impacto**: Armoniza la versión de Node.js en todo el proyecto.

### 3. **Agregar `--frozen-lockfile` y `--ignore-engines` en el Dockerfile**
   - **Razón**: 
     - `--frozen-lockfile`: Asegura que el archivo `yarn.lock` se siga estrictamente, evitando actualizaciones inesperadas de dependencias.
     - `--ignore-engines`: Ignora incompatibilidades de versiones de Node.js o Yarn durante la instalación de dependencias (por la version @google/generative-ai).
   - **Impacto**: Mejora la gestión de dependencias y previene errores de instalación.

### 4. **Actualizaciones de estilos globales en Tailwind**
   - **Razón**: Agregar estilos globales mejora la consistencia de la interfaz de usuario en toda la aplicación.
   - **Impacto**: Mejora el atractivo visual y mantiene un diseño coherente.

### 5. **Agregar favicon, logo y fondo al menú lateral**
   - **Razón**: Actualizaciones de branding que mejoran la interfaz de usuario y la experiencia del usuario.
   - **Impacto**: Hace que la aplicación sea visualmente distintiva y alineada con la marca del proyecto.

### 6. **Actualizar estilos de botones e ítems de las secciones**
   - **Razón**: Mejorar los estilos de los botones aumenta la usabilidad y accesibilidad.
   - **Impacto**: Proporciona una interfaz de usuario más moderna e interactiva.

### 7. **Agregar el campo `preference` en los modelos del frontend**
   - **Razón**: Manejar el nuevo campo `preference` en el frontend agregándolo a `UserQuery` y `UserRequest`.
   - **Impacto**: Permite el manejo y la visualización adecuada del nuevo campo en la interfaz de usuario.

### 8. **Usar `react-hook-form` en lugar de `useState`**
   - **Razón**: `react-hook-form` simplifica la gestión de formularios, proporciona mejor validación y mejora el rendimiento.
   - **Impacto**: Reduce la complejidad del código y mejora la escalabilidad.

### 9. **Agregar funcionalidad de refresco bajo demanda**
   - **Razón**: Permite refrescar componentes o datos específicos bajo demanda, mejorando la capacidad de respuesta.
   - **Impacto**: Mejora la experiencia del usuario al proporcionar información actualizada sin recargar toda la página.

### 10. **Servicio de generación de nombres de usuario por IA**
   - **Razón**: Automatiza la generación de nombres de usuario basados en los datos del usuario utilizando IA.
   - **Impacto**: Ahorra tiempo y proporciona un proceso único y consistente para la generación de nombres de usuario.

### 11. **Aplicación de estilos globales**
   - **Razón**: Agregar estilos globales consistentes asegura una apariencia unificada en toda la aplicación.
   - **Impacto**: Mejora la experiencia del usuario y la coherencia del diseño.

### 12. **Instalación de `@google/generative-ai`**
   - **Razón**: Esta biblioteca es necesaria para integrar características de IA, como generar nombres de usuario basados en los datos del usuario.
   - **Impacto**: Habilita funcionalidades impulsadas por IA en el front.


