# Candyverse — protótipo inicial

Este é um protótipo visual/interativo do Candyverse, feito em HTML, CSS e JavaScript puro.

## Como abrir
1. Extraia o arquivo ZIP.
2. Abra `index.html` em um navegador para testar a interface.
3. Para testar a API Web Bluetooth, publique o site em HTTPS (por exemplo, GitHub Pages) e use um navegador compatível.

## O que já funciona
- Layout responsivo para celular e computador.
- Seleção visual entre Candy Bong ∞, ARMY Bomb Ver. 4 e ARMY Bomb SE.
- Prévia de cores e brilho na tela.
- Seleção de músicas demonstrativa.
- Abertura do seletor de dispositivos Bluetooth BLE, quando o navegador oferece suporte.

## O que ainda NÃO funciona
- O site ainda não identifica com segurança qual lightstick foi escolhida no seletor Bluetooth.
- Ainda não envia comandos para mudar as luzes de nenhuma lightstick.
- Ainda não conecta duas ou três lightsticks simultaneamente.
- Não reproduz MVs nem sincroniza luzes com áudio.

Para implementar o controle real, é necessário validar os serviços e características GATT e os comandos específicos de cada modelo, testar com os dispositivos físicos e adicionar adaptadores separados. Não confie na seleção genérica de um dispositivo como prova de compatibilidade.

## Compatibilidade
Web Bluetooth normalmente exige HTTPS ou localhost e suporte do navegador. Chrome/Edge em desktop e alguns Android são opções possíveis. iPhone/iPad e alguns navegadores não oferecem Web Bluetooth.

Projeto de fã, não oficial e sem vínculo com TWICE, BTS, JYP Entertainment ou HYBE.
