# Calculadora de Salud
##  Requerimientos de la calculadora IMC

### Test
Release: http://104.198.244.0:5003/
Deploy: https://fazst-imc-calculator.web.app/

### CAPITULO 1
Introducción
1.1	Propósito. 
El presente documento tiene el propósito de explicar el desarrollo del software que se elaborará así tal cual explicar sus funcionalidades y su relevancia para todos los usuarios que lleguen a utilizarlo.

1.2	Alcance. 
La calculadora deberá ser capaz de poder calcular el IMC de una persona y deberá mostrar al usuario su clasificación del peso ideal tomando en cuenta los siguientes datos:
•	Peso (Kg)
•	Estatura (m)
•	Sexo
•	Edad

1.3	Definiciones.
A continuación, se muestran algunos acrónimos y abreviaturas con su respectiva definición para tener un mejor entendimiento del documento.

•	IMC: índice de masa corporal, es un indicador simple de la relación entre el peso y la talla que se utiliza frecuentemente para identificar el sobrepeso y la obesidad en adultos.
•	Software: Conjunto de programas y rutinas que permiten a la computadora realizar determinadas tareas. 
•	El peso ideal (PI): se entiende como el peso corporal que confiere la mayor esperanza de vida a una persona.

### CAPITULO 2
2.	Descripción General

2.1 Descripción 
•	Misión: crear un software fácil de usar para que el usuario entienda de la mejor manera posible la interfaz y el funcionamiento de esta. 
•	Visión: que el programa logré otorgar la información adecuada.

2.2 Funcionalidad
•	La interfaz tendrá la función del ingreso de datos. (Peso, estatura, sexo, edad)
•	Se validará que los valores sean números flotantes en peso.
•	Se validará que los valores sean números flotantes en estatura.
•	Se validar a que los valores sean números enteros en Edad.
•	Se validará que el dato sea tipo string en sexo.
•	Ticket, tendrá la función de imprimir el   IMC del usuario acompañado con una tabla de las categorías del IMC.
2.3 Restricciones
El programa de la calculadora IMC podrá ser utilizado únicamente en dispositivos con conexión a internet, ya que es una herramienta fundamental para el programa.

### CAPITULO 3 
3.1 Requerimientos específicos

3.1.1 requerimientos comunes de las interfaces 
Como ya mencionado anteriormente la interfaz necesita recopilar los datos del usuario para poder calcular su IMC correspondiente. 

3.1.2 Interfaces de usuario
La interfaz deberá solicitar solo los datos necesarios (peso, estatura, sexo, edad) para la obtención del resultado final y así lograr una interacción más factible

3.1.3 Interfaces de Hardware 
•	Monitor: mostrara las interfaces preparadas para que el usuario tenga una mejor experiencia.
•	Mouse: es una herramienta fundamental para el usuario para poder así navegar dentro del sistema
•	Teclado: de igual forma es una herramienta primordial ya que en ella se van a digitar los datos en la interfaz.
•	Ticket: El sistema imprimirá en pantalla el resultado del IMC del usuario con sus datos correspondientes acompañado de una tabla de categorías IMC.


3.2 Requerimientos funcionales

3.2.1 Accesibilidad  
El programa podrá realizar su función con los usuarios que cuenten con los requisitos mencionados anteriormente.

3.2.2 Datos a Ingresar
Los campos que estarán integrados a la interfaz permitirá que el usuario ingrese los datos necesarios para calcular su IMC para la obtención de un resultado preciso y conciso. 
Peso: Se solicitará que el usuario ingrese su peso en kilogramos. Este es un dato primordial para la obtención del IMC.
Estatura: Se solicitará que el usuario ingrese su peso en kilogramos, ya que al igual que estatura, el peso es un dato primordial para la obtención del IMC.
Sexo: Se solicitará que el usuario seleccione su sexo (femenino o masculino), para poder hacer una comparación adecuada e informar la categoría del IMC en la que se encuentra el usuario. 
Edad: Se solicitará que el usuario ingrese su edad, para así obtener un cálculo exacto de la categoría en la que encuentra el usuario.

3.2.3 Validación y cálculo de datos ingresados.
Ya que el usuario haya proporcionado los datos anteriormente mencionados, el sistema procederá a validar los datos, tomando en cuenta que cada dato tiene su función correspondiente.
•	Estatura: Se validará que el dato ingresado sea tipo flotante y se reservará para la operación matemática.
•	Peso: Se validará que el dato ingresado sea tipo flotante y que se encuentre dentro del rango establecido, (1 - 250) se reservará para la operación matemática. 
•	Edad: Se validará que el dato ingresado sea tipo entero y que se encuentre dentro del rango establecido, (1-120) se reservará para la comparación de la categoría IMC.
•	Sexo: Se validará que el dato ingresado sea tipo String y que se encuentre dentro del rango establecido, (F/M) se reservará para la comparación de la categoría IMC.
Una vez obtenido el valor del peso y estatura, se procede a realizar el cálculo del IMC, se realizará una división del peso sobre la altura elevada al cuadrado: peso/(altura*altura)
Después se procederá a imprimir la tabla de categorías IMC, a la vez señalar en que categoría se encuentra el usuario dependiendo del IMC obtenido, su edad y su sexo.

3.2.4 Impresión de resultados: 
El sistema proporcionara el resultado obtenido del IMC acompañado de una tabla en el cual presenta la información concisa de las categorías del peso ideal. 


## ImcCalculatorAngular
Calculadora de salud imc, asc, mcm, act, pi

## Requisitos
- [x] Mostrar imc

- [x] Mostrar mcm

- [x] Mostar asc

- [x] Mostrar act

## Pruebas
- [x] Estatura: 168 cm, Peso: 50 kg = 17.7
- [x] Estatura: 170 cm, Peso: 89 kg = IMC: 30.8
- [x] Estatura: 155 cm, Peso: 55 kg = IMC: 22.9
- [x] Estatura: 185 cm, Peso: 93 kg = IMC: 27.2
- [x] Estatura: 1.68 metros, Edad: 18, Peso: 50 kg, Sexo: M = ASC: 1.6
- [x] Estatura: 1.70 metros, Edad: 22, Peso: 89 kg, Sexo: H = ASC: 2.0
- [x] Estatura: 1.55 metros, Edad: 21, Peso: 55 kg, Sexo: M = ASC:1.5
- [x] Estatura: 1.85 metros, Edad: 29, Peso: 93 kg, Sexo H = ASC:2.2
- [x] Estatura: 1.68 metros, Peso: 50 kg, Sexo: M = MSM:41.74
- [x] Estatura: 1.70 metros, Peso: 89 kg, Sexo: H = MSM:54.11
- [x] Estatura: 1.55 metros, Peso: 55 kg, Sexo: M = MSM:37.78
- [x] Estatura: 1.85 metros, Peso: 93 kg, Sexo H =MSM:61.56
- [x] Estatura: 1.68 metros, Edad: 18, Peso: 50 kg, Sexo: M = ACT: 28.19
- [x] Estatura: 1.70 metros, Edad: 22, Peso: 89 kg, Sexo: H = ACT: 38.02
- [x] Estatura: 1.55 metros, Edad: 21, Peso: 55 kg, Sexo: M = ACT: 28.04
- [x] Estatura: 1.85 metros, Edad: 29, Peso: 93 kg, Sexo H = ACT:40.61
