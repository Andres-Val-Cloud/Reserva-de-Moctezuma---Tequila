# 🚀 Guía de Despliegue a Vercel

## Pasos para desplegar tu proyecto "Reserva de Moctezuma" en Vercel

### 1. Preparación del repositorio Git

Si aún no has inicializado Git en tu proyecto:

```bash
git init
git add .
git commit -m "Initial commit - Reserva de Moctezuma website"
```

### 2. Subir a GitHub

1. **Crea un repositorio en GitHub:**
   - Ve a https://github.com y crea un nuevo repositorio
   - Nómbralo `reserva-de-moctezuma` o como prefieras
   - No agregues README.md, .gitignore ni licencia (ya los tienes)

2. **Conecta tu repositorio local con GitHub:**
   ```bash
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git branch -M main
   git push -u origin main
   ```

### 3. Desplegar en Vercel

#### Opción A: Desde la web de Vercel (Recomendado)

1. **Ve a https://vercel.com** e inicia sesión con tu cuenta de GitHub
2. **Haz clic en "New Project"**
3. **Importa tu repositorio** de GitHub
4. **Configura el proyecto:**
   - Framework Preset: `Other`
   - Build Command: `npm run build` (o déjalo vacío)
   - Output Directory: `.` (punto para indicar la raíz)
   - Install Command: `npm install`

5. **Haz clic en "Deploy"**

#### Opción B: Desde la terminal con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Ejecutar desde la carpeta del proyecto
vercel

# Seguir las instrucciones en pantalla
```

### 4. Variables de entorno (si las necesitas)

Si tu proyecto requiere variables de entorno, configúralas en:
- **Vercel Dashboard** → Tu Proyecto → Settings → Environment Variables

### 5. Dominio personalizado (opcional)

Una vez desplegado, puedes:
1. Ir a tu proyecto en Vercel Dashboard
2. Settings → Domains
3. Agregar tu dominio personalizado

---

## 📝 Archivos de configuración incluidos

- ✅ `vercel.json` - Configuración de despliegue
- ✅ `package.json` - Scripts optimizados para estático
- ✅ `.gitignore` - Archivos a ignorar
- ✅ `README.md` - Documentación actualizada

## 🌐 URLs del proyecto

Una vez desplegado:
- **Producción**: https://tu-proyecto.vercel.app
- **Local**: http://localhost:3000 (con `npm run dev`)

## 🔧 Comandos útiles

```bash
# Desarrollo local
npm run dev

# Preview (igual que dev para sitios estáticos)
npm run preview

# Verificar build (para sitios estáticos no hay build)
npm run build
```

---

## ⚡ Tips para optimización

1. **Compresión de imágenes**: Asegúrate de que tus assets estén optimizados
2. **Caché de CDN**: Vercel automáticamente cachea tus assets estáticos
3. **Performance**: Usa herramientas como Lighthouse para medir performance

¡Tu sitio estará listo para el mundo! 🎉
