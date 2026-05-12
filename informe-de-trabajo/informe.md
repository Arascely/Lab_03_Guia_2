# Informe de Aseguramiento de Calidad - Lab_03_Guia_2

## 1. Introducción y Datos
- **Estudiante:** Grissel Arascely Rodríguez Quispe  
- **Proyecto:** Lab_03_Guia_2 - Aseguramiento de Calidad  
- **Entorno:** VS Code + Node.js + ESLint  

## 2. Fase de Identificación (Rama qa)
En esta fase se utilizó ESLint para detectar defectos en el código antes de cualquier corrección.

**Evidencia de Análisis Inicial:**  
![Evidencia de Linter](./capturas/4.png)

**Hallazgo:**  
Se detectaron 9 problemas iniciales, incluyendo el uso de `var` y comparaciones no estrictas (`==`).

**Análisis Técnico:**  
Errores como `no-undef` en la terminal indicaban que el entorno de Node.js no estaba configurado correctamente en los globales de ESLint.

## 3. Fase de corrección automática y manual (Rama dev)
Se procedió a realizar la limpieza del código utilizando herramientas automáticas y ajustes manuales según las reglas de negocio.

**Uso de lint:fix:**  
![Uso de lint:fix](./capturas/3.jpeg)

**Resultado:**  
Se eliminaron las advertencias de `no-var` automáticamente, dejando solo los errores críticos que requieren intervención manual (como la lógica de comparación y definiciones de consola).

**Estado Final del Linter:**  
![Estado final del linter](./capturas/3.png)

**Resultado final:**  
Como resultado el código tiene 0 errores y 0 advertencias tras aplicar las correcciones manuales en el archivo `Products.js`.

## 5. Conclusión 
> *"La integración de ESLint para el control local y SonarCloud para el análisis en la nube nos permitió detectar fallos que no solemos ver. Sin embargo, la validación manual fue indispensable para asegurar que los precios de los productos cumplieran con las reglas de negocio de InkaRetail, en todo caso la calidad es un proceso híbrido entre herramientas y criterio analítico para llegar a un mejor resultado y producto."*