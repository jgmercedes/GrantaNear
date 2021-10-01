# GrantaNear :handshake:

GrantaNear es un smart contract de Near protocol, el cual permite que los developers de el ecosistema Near puedan dar a conocer sus proyectos a fin de estar entre los mas votados para que lleguen a ser fondeados para el desarollo de estos. Este smart contract permite:

- Añadir un proyecto usando el metodo crearProyecto.
- Chequear la lista de proyectos con el metodo listarProyectos.
- Verificar informacion de un proyecto con el metodo obtenerProyecto.
- Votar a favor de un proyecto con el metodo votarProyecto.
- Eliminar un proyecto creado con el metodo eliminarProyecto.

# Instalación :mechanic:

Para la instalación local de este projecto:

## Pre - requisitos

- Asegúrese de haber instalado Node.js ≥ 12 (recomendamos usar nvm).

- Asegúrese de haber instalado yarn: npm install -g yarn.

- Instalar dependencias: yarn install.

- Crear un test near account NEAR test account.

- Instalar el NEAR CLI globally: near-cli es una interfaz de linea de comando (CLI) para interacturar con NEAR blockchain.

# Configurar NEAR CLI :technologist:

Configura tu near-cli para autorizar tu cuenta de prueba creada recientemente:

```html
near login
```

# Clonar el repositorio :palms_up_together:

```html
git clone https://github.com/jgmercedes/GrantaNear.git
```

```html
cd GrantaNear
```

# Build del proyecto y despliegue en development mode. :rocket:

Instalar las dependencias necesarias con npm.

```html
npm install
```

Hacer el build y deployment en development mode.

```html
yarn devdeploy
```
# Comandos :construction:

## Comando para crear un proyecto:

```html
near call
<tu contrato desplegado>
  crearProyecto "{ \"titulo\": \"string\", \"descripcion\": \"string\", \"fondos\": number }"  --account-id <tu cuenta testnet>
```

## Comando para conseguir informacion de un proyecto:

```html
near call
<tu contrato desplegado>
  obtenerProyecto "{\"id\": number}" --account-id <tu cuenta testnet>
```

## Comando para conseguir la lista de proyectos:

```html
near view
<tu contrato desplegado>
  listarProyectos "{}"
```

## Comando para votar por un proyecto:

```html
near call
<tu contrato desplegado>
  votarProyecto "{\"id\": number}" --account-id
  <tu cuenta testnet>
```

## Comando para eliminar un proyecto:

```html
near call
<tu contrato desplegado>
  eliminarProyecto "{\"id\": number}" --account-id <tu cuenta testnet>
```

# :framed_picture: Explora el codigo:

GrantaNear smart contract file system.

```bash
├── assembly
│   ├── __tests__
│   │   ├── as-pect.d.ts                            # As-pect unidad de pruebas - headers for type hints
│   │   └── main.spec.ts                            # Test para el contrato
│   ├── as_types.d.ts                               # AssemblyScript - headers for type hint
│   ├── index.ts                                    # Contains the smart contract code
│   ├── models.ts                                   # Contiene modelos accesibles al contrato
│   │   └── Proyecto.ts                             # Contiene el modelo Proyecto.
│   └── tsconfig.json                               # Archivo de configuracion de Typescript
├── neardev
│   ├── dev-account                                 # En este archivo se guarda la cuenta de contrato inteligente de implementación provisional
│   └── dev-account.env                             # En este archivo, la cuenta se guarda como una variable de entorno
├── out
│   └── main.wasm                                   # Código de contrato inteligente compilado que se usa para el deploy
├── as-pect.config.js                               # Configuracion de as-pect (AssemblyScript unit testing)
├── asconfig.json                                   # Configuracion del Assemblyscript compiler
├── package-lock.json                               # Manifesto lock version del proyecto
├── package.json                                    # Manifesto de Node.js (scripts and dependencies)
├── README.md                                       # Este archivo
└── yarn.lock                                       # Manifesto yarn lock version
```

# Gracias por visitar nuestro proyecto. :clap:

Aqui les dejamos nuestro diseño - [UI/UX](https://www.canva.com/design/DAEri4aolfc/qkat_oy0bIIARVNcpDhthg/view?website#1).

## License

MIT License

Copyright (c) [2021]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
