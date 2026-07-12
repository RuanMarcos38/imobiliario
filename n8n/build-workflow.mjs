import fs from 'node:fs';
import zlib from 'node:zlib';

const source = 'n8n/source/workflow-rm-imobiliario-4-agentes.json.gz.b64';
const target = 'n8n/workflow-rm-imobiliario-4-agentes.json';
const encoded = fs.readFileSync(source, 'utf8').trim();
const workflow = zlib.gunzipSync(Buffer.from(encoded, 'base64')).toString('utf8');

JSON.parse(workflow);
fs.writeFileSync(target, `${workflow}\n`, 'utf8');
console.log(`Workflow validado e gerado em ${target}`);
