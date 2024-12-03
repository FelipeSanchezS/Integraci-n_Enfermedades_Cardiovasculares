# Integración Enfermedades Cardiovasculares

Este repositorio contiene todos los archivos necesarios para la implementación y ejecución del proyecto, incluyendo:  

- **Frontend**: Archivos HTML y CSS basados en una plantilla Bootstrap para el formulario interactivo.  
- **Red Neuronal**: Código de la red neuronal entrenada para la predicción de enfermedades cardiovasculares.  
- **Exportación del Modelo**: Implementación y exportación de la red neuronal en formato TensorFlow.js para uso web.  
- **API**: Código de la API desarrollada en JavaScript para la conexión de datos con Google Sheets.  
- **Evidencias**: Material de soporte que documenta la ejecución del proyecto.  

---

## Descripción del Proyecto  

El objetivo del proyecto es predecir la probabilidad de que una persona desarrolle enfermedades cardiovasculares, facilitando así la detección temprana y mejorando el apoyo al personal de salud en la toma de decisiones.  

### Flujo del Proyecto  

1. **Red Neuronal**:  
   - Desarrollada utilizando TensorFlow, entrenada con un conjunto de datos relevantes y ajustada para un rendimiento óptimo.  
   - Exportada en formato TensorFlow.js para su integración con aplicaciones web.  

2. **Formulario Interactivo**:  
   - Implementado en HTML y CSS usando Bootstrap.  
   - Recopila las mismas variables utilizadas durante el entrenamiento del modelo.  

3. **Predicción y Almacenamiento de Datos**:  
   - Los datos ingresados en el formulario son procesados por la red neuronal para generar predicciones.  
   - Los resultados, junto con los datos de entrada, son enviados a una hoja de cálculo en Google Drive mediante una API desarrollada en JavaScript.  

4. **Dashboard**:  
   - Visualiza los datos recolectados para facilitar el análisis y la toma de decisiones por parte del personal médico.  

---

## Requisitos de Instalación  

Para ejecutar el proyecto a nivel local, es necesario instalar las siguientes dependencias:  

- **Python Librerías**:  
  ```bash
  pip install pandas matplotlib tensorflow numpy scikit-learn seaborn

Rutas:
Asegúrate de actualizar las rutas de los archivos en el código para que coincidan con tu entorno local.
Notas Adicionales
Este proyecto está diseñado para facilitar la integración entre herramientas de Machine Learning y aplicaciones web.
Se recomienda consultar la documentación de TensorFlow.js y Google Sheets API para comprender mejor las integraciones realizadas.
