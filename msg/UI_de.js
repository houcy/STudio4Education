/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

var MSG = {
    title: "S4E",
    appName: "udio4Education",
    blocks: "Bausteine",
    prog: "Program",
    catLogic: "💡 Logik",
    catLoops: "⟳ Schleifen",
    catMath: "+ Mathematik",
    catText: "ℜ Text",
    catLists: "☰ Listen",
    catColour: "🌈 Farbe",
    catVariables: "❓ Variablen",
    catFunctions: "ƒ(x) Funktionen",
    listVariable: "Liste",
    textVariable: "Text",
    screenshot: "Download Screenshot",
    xmlError: "Deine gespeicherte Datei konnte nicht geladen werden. Vielleicht wurde sie mit einer anderen Version von Blockly erstellt.",
    badXml: "Fehler beim Parsen von XML:\n%1\n\nWähle 'OK' zum Verwerfen deiner Änderungen oder 'Abbrechen' zum weiteren Bearbeiten des XML.",
    languageSpan: "choose language",
    interfaceColorSpan: "interface theme",
    codeEditorColorSpan: "code editor theme",
    themeSpan: "choose  theme",
    renderSpan: "choose renderer",
    fullScreenButton_span: "full screen",
    undoButton_span: "Undo",
    redoButton_span: "Redo",
    boardSpan: "choose board",
    boardButtonSpan: "list boards",
    verifyButton_span: "Verify code",
    serialSpan: "choose COM port",
    serialButtonSpan: "list COM port",
    uploadButton_span: "Upload",
    serialConnectButton_span: "Serial monitor",
    saveCodeButton_span: "Export Code",
    newButton_span: "New project",
    saveXMLButton_span: "Save to BlocklyDuino file",
    loadXMLfakeButton_span: "Load BlocklyDuino file",
    loadXML_span: "Replace existing blocks?\n'Cancel' will merge.",
    loadXML_error_span: "Error parsing XML:\n",
    resetButton_span: "Reset BlocklyDuino",
    helpButton_span: "About",
    editorReadOnlyToggle_span: "code editor writable or read-only",
    copyCodeButton_span: "copy code to clipboard",
    accessibilitySpan: "Enable Accessibility Mode (Shift + Ctrl + K):",
    defaultCursorSpan: "Default Cursor",
    basicCursorSpan: "Basic Cursor",
    lineCursorSpan: "Line Cursor",
    keyMappingSpan: "Open Key Mappings",
    themeClassicSpan: "Classic",
    themeModernSpan: "Modern",
    themeDeuteranopiaSpan: "Deuteranopia/Protanopia",
    themeTritanopiaSpan: "Tritanopia",
    themeZelosSpan: "Zelos",
    themeHighContrastSpan: "High Contrast",
    themeDarkSpan: "Dark",
    themeBwSpan: "Black & White",
    compilationInProgress: "Board",
    keyMappingModalSpan: "Set key mappings below",
    detailedCompilation_span: "Detailed compilation verbose",
    CLI_title_span: "Arduino CLI setup",
    installBoard_title_span: "board install to CLI",
    searchlLib_title_span: "search for a library",
    installLib_title_span: "library install to CLI",
    actionName0: "previous",
    actionName1: "next",
    actionName2: "in",
    actionName3: "out",
    actionName4: "insert",
    actionName5: "mark",
    actionName6: "disconnect",
    actionName7: "toolbox",
    actionName8: "exit",
    actionName9: "move workspace cursor up",
    actionName10: "move workspace cursor down",
    actionName11: "move workspace cursor left",
    actionName12: "move workspace cursor right",
    actionName13: "toggle keyboard navigation",
    setup_sideButton_span: "setup",
    fontSizeSpan: "rendering",
    optionFontSizeBlocks: "Blocks Font Size",
    optionFontSizePage: "Page Font Size",
    optionFontSpacingPage: "Page Font Spacing",
    keyMappingExplanationSpan: "accessibility: <a href='https://github.com/BlocklyDuino/BlocklyDuino-v2' target='_blank'>online documentation</a>",
    //CLI_functions.js
    config_sideButton_span: "Arduino CLI control",
    CLI_githubLinkButton_span: "documentation",
    coreUpdateButton_msg: "Updating...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    cleanCLIcacheButton_msg: "Cleaning...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    cleanCLIcacheButton_error_msg: "Error deleting folder .\\tmp",
    cleanCLIcacheButton_success_msg: "Cleaned!",
    listBoardsButton_msg: "Searching for board...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    installBoardsButton_msg: "Installing board support, wait...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    searchlLibButton_msg: "Searching for library...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    installLibButton_msg: "Installing library...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    coreUpdateButton_span: "update core and libraries",
    cleanCLIcacheButton_span: "cleaning cache",
    listBoardsButton_span: "detection and list boards",
    installBoardsInput_span: "name of board to support",
    installBoardsButton_span: "install this board type",
    searchlLibInput_span: "name of library to search",
    searchlLibButton_span: "search this library",
    installLibInput_span: "name of library to install",
    installLibButton_span: "install this library",
    //IDE_functions.js
    IDE_connect: 'Connect to port ',
    IDE_select_port: 'Select a port !',
    IDE_select_board: 'Select a board !',
    IDE_verif_progress: '\nVerification: in progress...\n<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>',
    IDE_verif_ok: '\nVerification: OK',
    IDE_upload1: 'Board ',
    IDE_upload2: ' on port ',
    IDE_upload3: '\nUpload: in progress...\n<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>',
    IDE_upload_ok: '\nUpload: OK',
    serial_btn_start: "<span class='fa fa-play'></span> Start",
    serial_info_stop: 'stop<br>',
    serial_btn_stop: "<span class='fa fa-pause'></span> Stop",
    serial_info_start: 'communication starting<br>',
    serial_CSV: 'Export data to CSV',
    inputTextSerial: 'Text',
    btn_serialSend_span: 'Send',
    btn_serialConnect_span: 'Start',
    btn_serialPeekClear_span: 'Clean',
    btn_serialPeekCSV_span: 'Export',
    btn_serialChart_span: 'Graph',
    btn_serialChartPause_span: 'Start'
};