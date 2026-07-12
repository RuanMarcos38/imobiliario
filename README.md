# RM Negócio Imobiliário — Atendimento IA no n8n

Fluxo de WhatsApp com quatro agentes especialistas, reconhecimento de texto, áudio, imagem e PDF, memória persistente e coleta progressiva de documentos para análise de crédito.

## Isolamento obrigatório do Supabase

Este projeto está autorizado a operar **somente** no Supabase:

- Nome: **RM NEGOCIO IMOBILIARIO**
- Project ref: `uwzfgksmnqgaxtscwxow`
- URL: `https://uwzfgksmnqgaxtscwxow.supabase.co`

O node **Validar Projeto Supabase** interrompe o fluxo quando `SUPABASE_URL` não contém esse project ref. O fluxo usa somente:

- `ia_contatos_imobiliaria`
- `ia_memoria_imobiliaria`
- `ia_mensagens_imobiliaria`

Nenhuma tabela dos outros projetos é usada ou modificada.

## Arquivos

- `n8n/workflow-rm-imobiliario-4-agentes.json`: fluxo pronto para importar.
- `prompts/PROMPT_MASTER_RM_IMOBILIARIO.md`: prompts completos e regras.
- `.env.example`: variáveis necessárias, sem segredos.

## Atualização automática no GitHub

A fonte validada do workflow fica em `n8n/source/workflow-rm-imobiliario-4-agentes.json.gz.b64`. Sempre que essa fonte, o gerador ou a automação for atualizado na branch `main`, o GitHub Actions executa `n8n/build-workflow.mjs`, valida o JSON e publica automaticamente o arquivo final em `n8n/workflow-rm-imobiliario-4-agentes.json`.

## Configuração no n8n

1. Importe o JSON.
2. Configure a credencial OpenAI nos nodes de modelo, transcrição, imagem e PDF.
3. Cadastre as variáveis do `.env.example` no ambiente do n8n/Hostinger.
4. Confirme que `SUPABASE_URL` é exatamente `https://uwzfgksmnqgaxtscwxow.supabase.co`.
5. Configure o webhook na Evolution API.
6. Teste texto, áudio, foto de documento, PDF, pedido de atendimento humano e retorno de cliente já atendido.
7. Ative o workflow somente após os testes.

## Segurança

O arquivo original continha uma chave da Evolution API e URLs assinadas diretamente no fluxo. A versão revisada não contém chaves, tokens, service role, URLs assinadas ou números privados. Revogue a chave antiga exposta e crie uma nova antes de ativar o fluxo.

## Funcionamento documental

O fluxo identifica o tipo de documento sem repetir números sensíveis, registra o documento recebido na memória do cliente e orienta o agente a solicitar apenas a próxima pendência. Em caso de casal ou composição de renda, a documentação é controlada por pessoa.
