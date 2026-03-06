# 💰 FinFlow — Plan de Diseño & Desarrollo
### Aplicación de Finanzas Personales · Web/Mobile (Responsive → Expo)

> **Versión del documento:** 1.0  
> **Preparado para:** Antigravity  
> **Fecha:** Marzo 2026  
> **Propósito:** Roadmap completo de diseño y desarrollo para una app de gestión financiera personal, simple, visual y accesible para usuarios sin conocimientos previos de finanzas.

---

## 1. Visión del Producto

**FinFlow** es una aplicación de finanzas personales diseñada para personas que quieren tomar control de su dinero sin necesidad de ser expertos financieros. A diferencia de herramientas complejas como ActualBudget o YNAB, FinFlow prioriza la simplicidad visual, el lenguaje claro y la retroalimentación inmediata mediante gráficos e indicadores intuitivos.

### Propuesta de Valor

| Problema Actual | Solución FinFlow |
|---|---|
| Herramientas demasiado complejas | Interfaz guiada, simple y progresiva |
| Lenguaje financiero técnico | Terminología en lenguaje cotidiano |
| Falta de motivación visual | KPIs, gráficas y logros gamificados |
| Sin visión general clara | Dashboard unificado de toda la salud financiera |

---

## 2. Usuarios Objetivo

### Perfil Primario — "El Principiante Consciente"
- 20–35 años, primer trabajo o emprendedor independiente
- Quiere organizarse pero no sabe por dónde empezar
- Usa smartphone principalmente
- No tiene formación en finanzas

### Perfil Secundario — "El Administrador Familiar"
- 30–50 años, maneja gastos del hogar
- Necesita controlar múltiples cuentas y miembros
- Usa tablet o desktop también
- Alguna experiencia con hojas de cálculo

---

## 3. Módulos del Sistema

### 3.1 🏠 Dashboard General
El corazón de la aplicación. Vista panorámica de la salud financiera.

**Elementos clave:**
- **Saldo neto total** (suma de todos los activos - pasivos)
- **Tarjetas resumen** por cuenta (débito, crédito, ahorros)
- **Gráfico de flujo mensual** (ingresos vs egresos — barras o línea)
- **Indicador de salud financiera** (score visual tipo semáforo o porcentaje)
- **Alertas activas** (presupuesto excedido, pago próximo, meta cerca)
- **Accesos rápidos** a las acciones más frecuentes

---

### 3.2 💳 Gestión de Cuentas
Control de todas las cuentas financieras del usuario.

**Tipos de cuenta soportados:**
- Cuenta de débito / efectivo
- Tarjeta de crédito
- Cuenta de ahorros
- Billetera digital (OXXO Pay, Mercado Pago, etc.)
- Inversiones (básico)

**Funcionalidades:**
- Agregar/editar/archivar cuentas
- Saldo actual y saldo disponible (en crédito: límite - usado)
- Historial de transacciones por cuenta
- Gráfico de evolución del saldo en el tiempo
- Transferencias entre cuentas propias
- Fecha de corte y fecha límite de pago (para tarjetas de crédito)

---

### 3.3 📥 Registro de Transacciones
El módulo más usado. Debe ser rápido y sin fricción.

**Al registrar una transacción el usuario define:**
- Tipo: Ingreso / Gasto / Transferencia
- Monto
- Cuenta origen/destino
- Categoría (con ícono y color)
- Fecha
- Nota opcional
- Recurrente: Sí/No (y frecuencia)

**Categorías predefinidas (editables):**
- 🍔 Alimentación · 🏠 Hogar · 🚗 Transporte · 💊 Salud
- 🎮 Entretenimiento · 👕 Ropa · 📚 Educación · 💼 Trabajo
- ✈️ Viajes · 💡 Servicios · 💰 Ingresos · 🎁 Regalos

**Extras:**
- Importar desde foto de ticket (OCR — fase futura)
- Búsqueda y filtros avanzados
- Edición y eliminación de transacciones

---

### 3.4 📊 Presupuestos
Control mensual de cuánto se puede gastar por categoría.

**Funcionalidades:**
- Crear presupuesto mensual por categoría
- Barra de progreso visual (verde → amarillo → rojo)
- Alerta cuando se llega al 80% del presupuesto
- Presupuesto total vs gastado
- Comparativa mes a mes
- Plantillas de presupuesto sugeridas (básico, conservador, flexible)
- Presupuesto por porcentaje (ej: Regla 50/30/20 integrada)

**KPI clave:**
- `% del presupuesto utilizado`
- `Días restantes del mes vs dinero restante`
- `Categoría con más desviación`

---

### 3.5 🎯 Metas de Ahorro
Sistema motivacional para alcanzar objetivos financieros.

**Por cada meta el usuario define:**
- Nombre y descripción (ej: "Vacaciones a Cancún")
- Monto objetivo
- Fecha límite (opcional)
- Cuenta de ahorro asociada
- Aportación periódica sugerida (calculada automáticamente)

**Visualización:**
- Barra de progreso circular con porcentaje
- Proyección de fecha de cumplimiento
- "¿Cuánto necesito ahorrar por semana/mes?"
- Historial de aportaciones
- Celebración visual al completar la meta (confetti, badge)

---

### 3.6 🏦 Préstamos y Deudas
Control de créditos, préstamos personales y pagos a plazos.

**Tipos:**
- Préstamo personal
- Crédito automotriz
- Crédito hipotecario
- "Préstamo de amigo" (informal)
- Compras a meses sin intereses

**Por cada préstamo:**
- Capital original
- Saldo pendiente
- Tasa de interés (si aplica)
- Número de pagos y pagos restantes
- Fecha del próximo pago
- Amortización automática al registrar pago
- Calendario de pagos

**KPI clave:**
- `Total de deuda activa`
- `Porcentaje de ingresos destinado a deuda`
- `Fecha estimada de estar libre de deudas`

---

### 3.7 📈 Reportes & Analítica
La inteligencia visual de la app.

**Gráficos disponibles:**
- **Dona / Pie** — Distribución de gastos por categoría (mensual)
- **Barras agrupadas** — Ingresos vs Gastos por mes (últimos 6/12 meses)
- **Línea de tendencia** — Evolución del patrimonio neto
- **Waterfall** — Flujo de caja mensual
- **Heatmap** — Días del mes con más gasto

**Filtros:**
- Período: semana / mes / trimestre / año / personalizado
- Cuenta específica o todas
- Categoría específica

**Exportación:**
- PDF con resumen mensual
- CSV con transacciones (fase 2)

---

### 3.8 🔔 Notificaciones & Recordatorios
- Recordatorio de pago de tarjeta (X días antes)
- Alerta de presupuesto al 80% y 100%
- Resumen semanal automático
- "Llevas X días sin registrar gastos"
- Logro desbloqueado (gamificación)

---

## 4. KPIs Principales del Dashboard

| KPI | Descripción | Tipo de visualización |
|---|---|---|
| **Saldo Neto** | Activos totales - Pasivos | Número grande con tendencia |
| **Flujo del Mes** | Ingresos - Gastos del mes actual | Número + indicador +/- |
| **% Presupuesto Usado** | Gasto real / Presupuesto total | Barra circular |
| **Tasa de Ahorro** | Ahorro / Ingreso × 100 | Porcentaje + semáforo |
| **Salud Financiera** | Score 0–100 compuesto | Gauge o score card |
| **Días sin Deuda** | Countdown o conteo | Número + motivación |

---

## 5. Diseño UI/UX

### 5.1 Principios de Diseño
1. **Claridad sobre completitud** — Mostrar lo importante primero
2. **Progresivo** — Funciones avanzadas disponibles, no impuestas
3. **Retroalimentación positiva** — Celebrar logros, no solo alertar errores
4. **Mobile-first** — Pensado para uso en teléfono, escalado a desktop
5. **Accesibilidad** — Contraste adecuado, textos legibles, íconos con etiqueta

### 5.2 Sistema de Diseño

**Tipografía:**
- Display / Títulos: `Sora` o `Plus Jakarta Sans` (moderna, amigable)
- Cuerpo: `Inter` o `DM Sans`
- Números/métricas: `JetBrains Mono` o `Roboto Mono` (para cifras)

**Paleta de colores:**
```
Primario:    #1B4FFF  (Azul confianza)
Secundario:  #00C48C  (Verde éxito/ahorro)
Alerta:      #FF6B35  (Naranja advertencia)
Peligro:     #FF3B5C  (Rojo límite)
Neutro dark: #0F172A
Neutro mid:  #64748B
Fondo:       #F8FAFC
Cards:       #FFFFFF con sombra suave
```

**Modo oscuro:** Soportado desde v1.

**Componentes clave:**
- Cards flotantes con sombra sutil
- Barras de progreso con gradiente
- Chips de categoría (color + ícono)
- Bottom navigation bar (mobile)
- Sidebar colapsable (desktop)
- Modales de acción rápida (agregar transacción en 3 pasos)

### 5.3 Navegación

**Mobile (Bottom Nav):**
```
[🏠 Inicio] [📊 Gastos] [➕ Agregar] [🎯 Metas] [👤 Perfil]
```

**Desktop (Sidebar):**
```
Dashboard → Cuentas → Transacciones → Presupuesto → 
Metas → Préstamos → Reportes → Configuración
```

---

## 6. Stack Tecnológico Recomendado

### Frontend Web (Fase 1)
| Capa | Tecnología | Razón |
|---|---|---|
| Framework | **React + Vite** | Rápido, ecosistema amplio, compatible con Expo |
| Estado | **Zustand** | Ligero, simple, sin boilerplate |
| Estilos | **Tailwind CSS** | Rápido desarrollo, consistencia |
| Gráficos | **Recharts** o **ApexCharts** | Flexibles, responsivos, hermosos |
| Componentes | **shadcn/ui** | Accesibles, personalizables |
| Formularios | **React Hook Form + Zod** | Validación robusta |
| Fechas | **Day.js** | Ligero, suficiente para finanzas |
| Iconos | **Lucide React** | Consistente, limpio |

### Backend (Fase 1)
| Capa | Tecnología | Razón |
|---|---|---|
| Runtime | **Node.js + Express** o **Bun + Hono** | Familiar, rápido de desarrollar |
| Base de datos | **PostgreSQL** (Supabase) | Relacional, consultas complejas de finanzas |
| Auth | **Supabase Auth** | Fácil, seguro, OAuth incluido |
| ORM | **Prisma** | Type-safe, migraciones simples |
| API | **REST** (v1) → **tRPC** (v2) | Empezar simple, evolucionar |

### Mobile (Fase 2 — Exportación a Expo)
| Capa | Tecnología |
|---|---|
| Framework | **Expo (React Native)** |
| Navegación | **Expo Router** |
| Estilos | **NativeWind** (Tailwind para RN) |
| Estado | Mismo **Zustand** |
| Notificaciones | **Expo Notifications** |

> **Ventaja clave:** Usar React en web facilita enormemente la migración a React Native/Expo. La lógica de negocio (hooks, stores, utils) es reutilizable casi al 100%.

---

## 7. Arquitectura de Datos

### Entidades principales

```
User
  ├── Accounts (cuentas)
  │     ├── Transactions (transacciones)
  │     └── Transfers (transferencias entre cuentas)
  ├── Budgets (presupuestos)
  │     └── BudgetCategories
  ├── SavingsGoals (metas de ahorro)
  │     └── GoalContributions
  ├── Loans (préstamos)
  │     └── LoanPayments
  └── Categories (categorías personalizadas)
```

### Relaciones clave
- Una transacción siempre pertenece a una cuenta y tiene una categoría
- Un presupuesto es mensual y agrupa categorías con límites
- Una meta de ahorro está vinculada a una cuenta de ahorros
- Un préstamo genera pagos que se registran como transacciones

---

## 8. Roadmap de Desarrollo

### 🚀 Fase 0 — Diseño & Prototipo (2–3 semanas)
- [ ] Wireframes de todas las pantallas principales
- [ ] Design system completo (colores, tipografía, componentes)
- [ ] Prototipo interactivo en Figma
- [ ] Validación con 3–5 usuarios objetivo
- [ ] Definición de MVP final

---

### 🏗️ Fase 1 — MVP Web (6–8 semanas)
**Sprint 1 (sem 1–2): Base y Auth**
- [ ] Configuración del proyecto (Vite + Tailwind + Zustand)
- [ ] Configuración de Supabase (DB + Auth)
- [ ] Registro, login, recuperación de contraseña
- [ ] Onboarding de 3 pasos (configurar primera cuenta)

**Sprint 2 (sem 3–4): Cuentas + Transacciones**
- [ ] CRUD de cuentas (débito, crédito, ahorro)
- [ ] CRUD de transacciones
- [ ] Categorías con íconos y colores
- [ ] Historial paginado con filtros básicos

**Sprint 3 (sem 5–6): Dashboard + Presupuesto**
- [ ] Dashboard con KPIs principales
- [ ] Gráfico de ingresos vs gastos
- [ ] Módulo de presupuesto mensual
- [ ] Barras de progreso por categoría
- [ ] Alertas básicas

**Sprint 4 (sem 7–8): Metas + Préstamos + Pulido**
- [ ] Módulo de metas de ahorro
- [ ] Módulo de préstamos básico
- [ ] Modo oscuro
- [ ] Responsive completo (mobile, tablet, desktop)
- [ ] Testing y corrección de bugs

---

### 📱 Fase 2 — Mobile Expo (4–6 semanas adicionales)
- [ ] Configuración Expo + Expo Router
- [ ] Adaptación de componentes a NativeWind
- [ ] Navegación nativa (gestos, tabs)
- [ ] Notificaciones push
- [ ] Biometría (Face ID / huella)
- [ ] Build y publicación (App Store + Google Play)

---

### ✨ Fase 3 — Funciones Avanzadas (Futuro)
- [ ] OCR para escanear tickets/facturas
- [ ] Importación de estados de cuenta (CSV, PDF)
- [ ] Módulo de inversiones básico
- [ ] Multimoneda
- [ ] Compartir presupuesto familiar (multi-usuario)
- [ ] IA para categorización automática de gastos
- [ ] Análisis predictivo ("A este ritmo, te quedas sin presupuesto el día 20")
- [ ] Integración con bancos (Open Banking)

---

## 9. Consideraciones de Seguridad

- Autenticación con JWT + refresh tokens
- Todos los datos cifrados en tránsito (HTTPS/TLS)
- Row Level Security (RLS) en Supabase — cada usuario solo ve sus datos
- Contraseñas nunca almacenadas, solo hashes (bcrypt)
- Sesión con expiración automática
- Rate limiting en endpoints sensibles
- Sin almacenamiento de datos bancarios directos (solo saldos manuales en Fase 1)

---

## 10. Métricas de Éxito del Producto

| Métrica | Objetivo Fase 1 |
|---|---|
| Tiempo de onboarding | < 3 minutos |
| Transacciones registradas por usuario/mes | > 20 |
| Retención a 30 días | > 40% |
| NPS (satisfacción) | > 50 |
| Tiempo para ver el dashboard | < 2 segundos |
| Cobertura de categorías automáticas | > 80% de transacciones |

---

## 11. Estimación de Tiempos y Recursos

### Equipo mínimo recomendado
| Rol | Dedicación | Notas |
|---|---|---|
| 1 Fullstack Developer | 100% | Stack React + Node |
| 1 UI/UX Designer | 50% (primeras 4 sem luego consulta) | Figma |
| 1 Product Owner / QA | 25% | Puede ser el mismo cliente |

### Estimación de tiempo total
| Fase | Duración | Entregable |
|---|---|---|
| Diseño & Prototipo | 2–3 semanas | Figma completo |
| MVP Web | 6–8 semanas | App web funcional |
| Mobile Expo | 4–6 semanas | Apps nativas |
| **Total estimado** | **12–17 semanas** | **Producto completo v1** |

---

## 12. Preguntas Abiertas para Definir

Antes de iniciar el desarrollo, conviene resolver:

1. **¿La app es personal (un usuario) o multi-usuario desde el inicio?**
2. **¿Se requiere soporte multi-moneda en la Fase 1?** (MXN, USD, etc.)
3. **¿Habrá una versión freemium o es completamente gratuita?**
4. **¿El backend será propio o se usa Supabase como BaaS completo?**
5. **¿Se necesita modo offline? ¿Con sincronización posterior?**
6. **¿Cuál es el presupuesto disponible para infraestructura mensual?**

---

## 13. Próximos Pasos Inmediatos

```
Semana 1
├── Reunión de alineación con Antigravity
├── Definir respuestas a preguntas abiertas (sección 12)
├── Crear repositorio + configuración base del proyecto
└── Iniciar wireframes de Dashboard y flujo de onboarding

Semana 2
├── Completar wireframes de todos los módulos
├── Iniciar design system en Figma
└── Configurar Supabase y estructura de base de datos

Semana 3
├── Prototipo interactivo listo para validación
└── Inicio de desarrollo del Sprint 1
```

---

> **Documento preparado con el objetivo de servir como punto de partida claro para el equipo de Antigravity. Todos los módulos, estimaciones y decisiones tecnológicas son puntos de partida sujetos a ajuste según el contexto, presupuesto y preferencias del equipo.**

---

*FinFlow — Tus finanzas, a tu ritmo.* 🌊