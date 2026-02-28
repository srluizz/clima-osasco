# Monitor de Temperatura - Osasco

Aplicação web moderna para consulta de dados meteorológicos em tempo real da cidade de Osasco - SP, focada em código limpo e performance. O projeto utiliza o ambiente Node.js para servir arquivos estáticos e consome APIs externas para geolocalização e previsão do tempo.

## Tecnologias

* JavaScript (ES6+): Uso de módulos, funções assíncronas e manipulação dinâmica do DOM.
* Node.js: Servidor HTTP nativo construído sem frameworks para maior controle do fluxo de requisições.
* Tailwind CSS: Estilização via classes utilitárias com processo de build otimizado.
* Open-Meteo API: Integração com serviços de Geocoding e Forecast.

## Como Executar

Para rodar este projeto localmente, siga os passos abaixo:

1. Instale as dependências:
   npm install

2. Inicie o compilador do Tailwind CSS (mantenha este terminal aberto):
   npm run dev:css

3. Em um novo terminal, inicie o servidor da aplicação:
   npm run dev:server

4. Acesse o endereço em seu navegador:
   http://localhost:3000

## Funcionalidades Técnicas

* MIME Types: Suporte a múltiplos formatos de arquivos (HTML, CSS, JS, PNG) via servidor nativo.
* Processamento Assíncrono: Gerenciamento de múltiplas chamadas de API (Geocoding e Forecast).
* Design Responsivo: Interface adaptável construída com foco na experiência do usuário.

## Autor

Desenvolvido por Luiz como parte dos estudos.