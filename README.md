# EDITORIA DIGITALE - a.a. 2023/2024

## Relazione
Come generare la relazione al progetto d'esame

Supponendo che Node.js e NPM siano installati, eseguire l'istallazione di mermaid

``
npm i -g mermaid-filter
``

#### Per codice utilizzato per generare un PDF dal Markdown:

``
pandoc -s RelazioneProgettoEsame.md -o RelazioneProgettoEsame.pdf --citeproc -F mermaid-filter.cmd -V block-headings -V geometry:margin=1in
``
- `-s`: Questa opzione indica a Pandoc di creare un documento di output "standalone". In altre parole, genera un documento autonomo invece di un frammento. Questo è utile se si desidera creare un documento completo anziché solo una parte di un documento.

- `RelazioneProgettoEsame.md`: Questo è il nome del tuo file di input in formato Markdown. È il documento sorgente da cui Pandoc creerà il file PDF.

- `-o RelazioneProgettoEsame.pdf`: Questa opzione specifica il nome del file di output. In questo caso, il file di output sarà denominato "RelazioneProgettoEsame.pdf".

- `--citeproc`: Questa opzione abilita il supporto per la citazione e la bibliografia. Utilizza il sistema di citazione CSL (Citation Style Language) per formattare le citazioni nel documento.

- `-F mermaid-filter.cmd`: Questa opzione indica l'uso di un filtro chiamato "mermaid-filter". I filtri in Pandoc consentono di estendere le funzionalità di Pandoc tramite script o programmi esterni. In questo caso, il filtro "mermaid-filter" potrebbe essere utilizzato per il rendering di grafici Mermaid nel documento. ".cmd" è necessario se si utilizza Windows.
- `-V block-headings`: è necessario aggiungere per far rispettare gli headings4, dato che non c'è un equivalente in latex
- `-V geometry:margin=1in`: l'ho utilizzato per rimpicciolire i margini, rendendo le immagini più leggibili

#### Per generare un Word dal Markdown della relazione utilizzare il seguente comando:

``
pandoc --reference-doc template.docx -s RelazioneProgettoEsame.md -o RelazioneProgettoEsame.docx --citeproc -F mermaid-filter.cmd -V geometry:margin=1in
``

- `--reference-doc template.docx`: Questo parametro specifica il documento di riferimento (template) da utilizzare come modello per la conversione. Nel tuo caso, "template.docx" è il documento di riferimento da cui Pandoc prenderà il formato, lo stile e altre impostazioni per il file di output.

- `-s`: Questa opzione indica a Pandoc di creare un documento di output "standalone". In altre parole, genera un documento autonomo invece di un frammento. Questo è utile se si desidera creare un documento completo anziché solo una parte di un documento.

- `RelazioneProgettoEsame.md`: Questo è il nome del tuo file di input in formato Markdown. È il documento sorgente da cui Pandoc creerà il file DOCX.

- `-o RelazioneProgettoEsame.docx`: Questa opzione specifica il nome del file di output. In questo caso, il file di output sarà denominato "RelazioneProgettoEsame.docx".

- `--citeproc`: Questa opzione abilita il supporto per la citazione e la bibliografia. Utilizza il sistema di citazione CSL (Citation Style Language) per formattare le citazioni nel documento.

- `-F mermaid-filter.cmd`: Questa opzione indica l'uso di un filtro chiamato "mermaid-filter". I filtri in Pandoc consentono di estendere le funzionalità di Pandoc tramite script o programmi esterni. In questo caso, il filtro "mermaid-filter" potrebbe essere utilizzato per il rendering di grafici Mermaid nel documento.".cmd" è necessario se si utilizza Windows.
- - `-V geometry:margin=1in`: l'ho utilizzato per rimpicciolire i margini
