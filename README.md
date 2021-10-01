# :earth_americas: GrantaNear

GrantaNear es un smart contract creado bajo el Near protocol, el cual permite crear campañas para la recaudacion de fondos en nears dedicados a una causa especifica. Este smart contract permite:

- Crear una campaña.
- Conseguir informacion de una campaña.
- Conseguir lista de campañas.
- Donar a una campaña.
- Eliminar una campaña.

# :gear: Instalación

Para la instalación local de este projecto:

## Pre - requisitos

- Asegúrese de haber instalado Node.js ≥ 12 (recomendamos usar nvm).

- Asegúrese de haber instalado yarn: npm install -g yarn.

- Instalar dependencias: yarn install.

- Crear un test near account NEAR test account.

- Instalar el NEAR CLI globally: near-cli es una interfaz de linea de comando (CLI) para interacturar con NEAR blockchain.

# :key: Configurar NEAR CLI

Configura tu near-cli para autorizar tu cuenta de prueba creada recientemente:

```html
near login
```

# :page_facing_up: Clonar el repositorio

```html
git clone https://github.com/jgmercedes/grantaNearContract.git
```

```html
cd grantaNearContract
```

# :hammer_and_wrench: Build del proyecto y despliegue en development mode.

Instalar las dependencias necesarias con npm.

```html
npm install
```

Hacer el build y deployment en development mode.

```html
yarn devdeploy
```

## Comando para crear un proyecto:

```html
near call
<your deployed contract>
  crearProyecto "{ \"titulo\": \"Proyecto de prueba\", \"descripcion\": \"Este es un proyecto de prueba\", \"fondos\": 10 }"  --account-id <your test account>
```

## Comando para conseguir informacion de un proyecto:

```html
near call
<your deployed contract>
  dev-1633055352015-39715469037087 obtenerProyecto "{\"id\": 0}" --account-id <your test account>
```

## Comando para conseguir la lista de proyectos:

```html
near view
<your deployed contract>
  listarProyectos "{}"
```

## Comando para votar por un proyecto:

```html
near call
<your deployed contract>
  votarProyecto "{\"id\": 0}" --account-id
  <your test account>
```

## Comando para eliminar un proyecto:

```html
near call
<your deployed contract>
  eliminarProyecto "{\"id\": 0}" --account-id <your test account>
```

# :world_map: Explora el codigo:

GrantaNear smart contract file system.

```bash
├── assembly
│   ├── __tests__
│   │   ├── as-pect.d.ts                            # As-pect unit testing headers for type hints
│   │   └── main.spec.ts                            # Unit test for the contract
│   ├── as_types.d.ts                               # AssemblyScript headers for type hint
│   ├── index.ts                                    # Contains the smart contract code
│   ├── models.ts                                   # Contains models accesible to the smart contract
│   │   └── Campaing.ts                             # Contains Campaing model.
│   └── tsconfig.json                               # Typescript configuration file
├── neardev
│   ├── dev-account                                 # In this file the provisional deploy smart contract account is saved
│   └── dev-account.env                             # In this file the provisional deploy smart contract account is saved like a environment variable
├── out
│   └── main.wasm                                   # Compiled smart contract code using to deploy
├── as-pect.config.js                               # Configuration for as-pect (AssemblyScript unit testing)
├── asconfig.json                                   # Configuration file for Assemblyscript compiler
├── package-lock.json                               # Project manifest lock version
├── package.json                                    # Node.js project manifest (scripts and dependencies)
├── README.md                                       # This file
└── yarn.lock                                       # Project manifest lock version
```

# Gracias por visitar nuestro proyecto. :wave:

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
