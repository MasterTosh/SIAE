# SIAE - Sistema Integral de Administracion Escolar

Base funcional del sistema web responsivo y app para alumnos.

## Ejecutar localmente

```bash
npm start
```

Luego abre:

```text
http://localhost:3000
```

## Publicar en Railway

1. Sube este proyecto a GitHub.
2. En Railway, crea un nuevo proyecto desde el repositorio.
3. Railway detectara Node.js y ejecutara `npm start`.
4. El servidor usa `process.env.PORT`, por lo que esta listo para Railway.

## Diseno elegido

- Estilo general: colorido con bordes redondeados.
- Listados de usuarios: estilo minimalista/amigable inspirado en "Alumnos con pagos pendientes".
- Horarios: estilo minimalista/amigable inspirado en "Horario de la semana".

## Funcionalidades actuales

- Dashboard general.
- Gestion de usuarios con busqueda, filtros, alta, edicion y eliminacion local.
- Vista academica con horario semanal.
- Finanzas con pagos y estados.
- Captura visual de calificaciones.
- Credenciales digitales con QR simulado.
- Reportes.
- Vista tipo app movil para alumnos.
- Persistencia en `localStorage` del navegador.
# SIAE
