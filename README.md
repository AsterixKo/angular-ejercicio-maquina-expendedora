Ejercicio
# Máquina Expendedora

Vamos a programar nuestra propia máquina expendedora de productos (refrescos y patatas). Es una máquina que permite pagar únicamente con tarjeta de crédito y, en principio, tiene un número infinito de productos en cada “casilla”. Esta máquina tiene 3 columnas y 4 filas de productos. Es decir, en total puede alojar 12 tipos de productos (se pueden repetir).

1. Vamos a empezar haciendo la lógica de la aplicación que gestiona la máquina. Los productos de tu máquina deben estar representados en una estructura de datos. Piensa qué estructura de datos podría ser la más adecuada para almacenarlos y crea en tu código una variable con la misma. Pon en cada “casilla” un producto de ejemplo: cocacola, cerveza, campesinas, onduladas…


2. Todos los productos de la máquina pueden ser vendidos. Utilizando lo que ya conoces sobre POO (Programación Orientada a Objetos), haz que todos los productos tengan un método “sold” que imprima por consola “El producto NOMBRE ha sido vendido”. Además todos los productos deben tener un nombre.


3. Utilizando lo que ya conoces sobre POO, haz que podamos tener 2 subtipos de productos:
Sólidos → Tienen una propiedad “weigth” que indica el peso del producto.
Líquidos → Tienen una propiedad llamada “ml” que indica los mililitros del producto.


4. Crea una función “sellProduct” que reciba como argumentos las coordenadas de la fila y la columna del producto que el cliente quiere comprar. Cuando se llame a la función, esta debe utilizar el método “sold” del producto correspondiente, para que se muestre el mensaje de que el producto ha sido vendido.


5. Nuestra máquina, como las máquinas expendedoras reales, tiene que verificar primero que el pago con tarjeta que estamos solicitando se ha realizado completamente. Una vez verificado es cuando expide el producto.

En esta máquina tenemos la particularidad de que un 10% de los pagos con tarjeta se rechazan por problemas de conexión a Internet de la máquina.

Implementa esta lógica utilizando una promesa que se resuelva correctamente en el 90% de los casos y se rechace en un 10% de los casos (de forma aleatoria). Esta promesa debe ser retornada por una función que se llame “checkPayment”.


6. Crea la interfaz gráfica de tu aplicación. Usa una cuadrícula de 3x4 casillas donde se mostrarán los productos que tiene la máquina.


7. Debe existir también una 5º fila (la última) de esa cuadrícula que será donde “caiga” el producto que solicitamos. Esa 5º fila no estará dividida en casillas visibles, sino que será una única casilla a nivel visual.


8. Cuando hagamos click sobre un producto, la máquina intentará realizar la venta, llamando a la función correspondiente. Si el pago se realiza correctamente, la máquina hará la venta, haciendo que el producto vendido aparezca también en la 5º fila indicada en el punto previo.


Nota: Puedes hacer el ejercicio con JS normal, pero ¿te atreves a hacerlo con TypeScript?

## Retos PRO

9. Como reto adicional, implementa en tu código (tanto interfaz como lógica) la existencia de saldo del comprador. Es decir, el comprador tiene un saldo finito y, conforme compra productos, deben reflejarse los cambios en el mismo. Si el comprador no dispone de saldo suficiente, debe indicarse en un mensaje en el display de la máquina.


10. Como reto adicional, implementa en tu código (tanto interfaz como lógica) la existencia de stock de los productos. Es decir, existe un número finito de productos en cada posición. Si se acaban, la máquina debe mostrar que dicha posición está vacía.


11. Como reto adicional, implementa en tu código (interfaz y lógica) restricciones al consumo de alcohol entre las 22h y las 8h. Es decir, si un cliente solicita una cerveza (o cualquier otro producto con alcohol) en ese periodo, la máquina debe rechazar la petición y mostrar un mensaje “No disponible” en el display.


Tenemos los numeros de tarjeta de credito declarados en typescript con sus correspondientes saldos.
Si pagamos con una tarjeta desconocida simplemente realiza la compra pero no mostrara el saldo restante.

```
const creditCard1 = new CreditCard(1111111111111111, 100, 'Sherri Snyder');
const creditCard2 = new CreditCard(2222222222222222, 5, 'Irma Fletcher');
const creditCard3 = new CreditCard(3333333333333333, 10, 'Sonia Jackson');
```