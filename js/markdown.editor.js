var simplemde = new SimpleMDE({
    autofocus: true,
    autosave: {
        enabled: true,
        uniqueId: Math.random(),
        delay: 1000,
    },
    blockStyles: {
        bold: "__",
        italic: "_"
    },
    element: document.getElementById("editor"),
    forceSync: true,
    hideIcons: ["guide", "heading"],
    indentWithTabs: false,
    initialValue: "",
    insertTexts: {
        horizontalRule: ["", "\n\n-----\n\n"],
        image: ["![](http://", ")"],
        link: ["[", "](http://)"],
        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
    },
    lineWrapping: false,
    parsingConfig: {
        allowAtxHeaderWithoutSpace: true,
        strikethrough: false,
        underscoresBreakWords: true,
    },
    placeholder: "请输入...",
   /* previewRender: function(plainText) {
        console.log(plainText)
        return customMarkdownParser(plainText); // Returns HTML from a custom parser
    },
    previewRender: function(plainText, preview) { // Async method
        setTimeout(function(){
            preview.innerHTML = customMarkdownParser(plainText);
        }, 250);
        return "Loading...";
    },*/
    promptURLs: true,
    renderingConfig: {
        singleLineBreaks: false,
        codeSyntaxHighlighting: true,
    },
    shortcuts: {
        drawTable: "Cmd-Alt-T"
    },
    showIcons: ["code", "table"],
    spellChecker: false,
    status: false,
    status: ["autosave", "lines", "words", "cursor"], // Optional usage
    status: ["autosave", "lines", "words", "cursor", {
        className: "keystrokes",
        defaultValue: function(el) {
            this.keystrokes = 0;
            el.innerHTML = "0 Keystrokes";
        },
        onUpdate: function(el) {
            el.innerHTML = ++this.keystrokes + " Keystrokes";
        }
    }], // Another optional usage, with a custom status bar item that counts keystrokes
    styleSelectedText: false,
    tabSize: 4,
    //toolbar: flase,
    //toolbarTips: false,
});