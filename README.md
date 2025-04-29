### How to run the server 
- install packages after clonning run `npm install`
- run using `npm run dev`


## How to Recreate this Project
- npm init -y     # to initialize a node project
- create the src/ folder     * (this will content all your project files)
- run `tsc --init`      * to initialize your typescript project

## tsconfig.json

```
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "ES2017",
      "ESNext.AsyncIterable"
    ],
    "typeRoots": [
      "./node_modules/@types",
      "/src/types"
    ],
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "module": "CommonJS",
    "pretty": true,
    "sourceMap": true,
    "outDir": "./build",
    "allowJs": true,
    "noEmit": false,
    "baseUrl": "./src",
    "esModuleInterop": true,
  },
  "include": [
    "./src/**/*",
  ],
  "exclude": [
    "node_modules",
    "tests"
  ]
}
```


## package.json 

```
{
  "name": "sca-express-classes",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "ts-node ./src/server.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "@reflet/express": "^2.0.0",
    "express": "^4.19.2",
    "reflect-metadata": "^0.2.2"
  },
  "devDependencies": {
    "@types/node": "^22.14.1",
    "nodemon": "^3.1.10",
    "ts-node": "^10.9.2"
  }
}
```