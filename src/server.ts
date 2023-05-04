// 1. yarn add @types/express --dev (DEPENDENCIA DE TIPAGEM)
// 2. O node não reconhece import export : não roda "node src/server.ts" no terminal por exemplo. Ele não entende typescript?
//  2.1 instalar a dependencia do typescript (yarn add typescript)
//  2.2 iniciar o arquivo de configuração do typescript (yarn tsc --init)
//  2.3 yarn tsc : cria um server.js dentro da pasta src(isso não é bom)
//  2.4 para resolver alterar o "outDir" no arquivo de configuração do typescript.
//      com isso vc atribui uma pasta diferente para receber esses arquivos emitidos
//      agora consegue rodar node dist/server.js 
//      mas isso não é nada produtivo, imagina se eu quiser fazer um alateração no arquivo server.ts
// COMO ASSIM SÓ VAI USAR O TYPESCRIT EM AMBIENTE DE DESENVOLVIMENTO?

import express from 'express';
import { createCourse } from './routes';

const app = express();

app.get('/', createCourse);

app.listen(3333);