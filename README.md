# RM Negócio Imobiliário — Atendimento IA no n8n

Fluxo de WhatsApp com quatro agentes especialistas, reconhecimento de texto, áudio, imagem e PDF, memória persistente e coleta progressiva de documentos para análise de crédito.

## Isolamento obrigatório do Supabase

Este projeto está autorizado a operar **somente** no Supabase:

- Nome: **RM NEGOCIO IMOBILIARIO**
- Project ref: `uwzfgksmnqgaxtscwxow`
- URL fixa no workflow: `https://uwzfgksmnqgaxtscwxow.supabase.co`

O fluxo usa exclusivamente estas tabelas dedicadas:

- `ia_contatos_imobiliaria`
- `ia_memoria_imobiliaria`
- `ia_mensagens_imobiliaria`

Todos os requests REST apontam diretamente para o project ref autorizado. A credencial Supabase já existente no n8n é reutilizada apenas para autenticação. Se a credencial não pertencer a esse projeto, a requisição falha sem redirecionar dados para outro Supabase.

## Atendimento com quatro agentes

1. Terrenos e loteamentos
2. Casas, sobrados e geminados
3. Apartamentos na planta e lançamentos
4. Imóveis usados e prontos

A triagem identifica o segmento, mantém o histórico, evita repetir perguntas e prioriza a coleta progressiva de documentos para análise de crédito e seleção de imóveis compatíveis com renda, entrada, FGTS, localização e objetivo do cliente.

## Credenciais reutilizadas

O workflow mantém as referências das credenciais já existentes na mesma instalação do n8n:

- `OpenAI account 2`
- `Supabase account`

A rota do webhook foi preservada como `whatsapp-imob` para evitar reconfigurar a Evolution API.

O repositório é público. Por segurança, a versão publicada no GitHub **não contém o valor bruto da chave da Evolution API nem URLs assinadas de arquivos**. A versão de importação direta, gerada para uso no mesmo n8n, pode manter esses dados somente no arquivo entregue ao responsável pelo projeto.

## Arquivos

- `n8n/workflow-rm-imobiliario-4-agentes.json`: versão pública sem segredos.
- `n8n/source/workflow-rm-imobiliario-4-agentes.json.gz.b64`: fonte compactada validada.
- `prompts/PROMPT_MASTER_RM_IMOBILIARIO.md`: regras dos agentes.

## Atualização automática no GitHub

Sempre que a fonte, o gerador ou a automação for alterada na branch `main`, o GitHub Actions executa `n8n/build-workflow.mjs`, valida o JSON e publica o arquivo final em `n8n/workflow-rm-imobiliario-4-agentes.json`.

## Testes antes de ativar

1. Desative o workflow antigo para evitar conflito no webhook `whatsapp-imob`.
2. Importe a versão direta no mesmo n8n onde as credenciais já existem.
3. Teste texto, áudio, imagem, PDF, documento de titular e cônjuge, retorno de cliente, pedido de atendimento humano e mídia do Frankfurt.
4. Ative o novo workflow somente após concluir os testes.

## Segurança documental

O fluxo identifica o tipo de documento sem repetir CPF, RG, conta, assinatura ou outros números sensíveis. O documento é associado ao titular, cônjuge ou compositor somente quando houver evidência; se estiver ilegível, o agente solicita apenas o reenvio necessário.