/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es2022: true
  },
  // Uses eslint default ruleset
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022
  },
  rules: {
    curly: "error"
  },
  globals: {
    $: "readonly",
    $$: "readonly",
    $A: "readonly",
    applyTooltip: "readonly",
    Ajax: "readonly",
    Atomics: "readonly",
    AutoScroller: "readonly",
    Behaviour: "readonly",
    breadcrumbs: "readonly",
    buildFormTree: "readonly",
    CodeMirror: "readonly",
    ComboBox: "readonly",
    COMBOBOX_VERSION: "writeable",
    createFilterMenuButton: "readonly",
    createSearchBox: "readonly",
    crumb: "readonly",
    ensureVisible: "readonly",
    escapeHTML: "readonly",
    findAncestor: "readonly",
    findAncestorClass: "readonly",
    findElementsBySelector: "readonly",
    findFormParent: "readonly",
    fireEvent: "readonly",
    Form: "readonly",
    getElementOverflowParams: "readonly",
    global: "readonly",
    Hash: "readonly",
    hoverNotification: "readonly",
    iota: "writeable",
    isInsideRemovable: "readonly",
    isPageVisible: "readonly",
    isRunAsTest: "readonly",
    layoutUpdateCallback: "readonly",
    loadScript: "readonly",
    makeButton: "readonly",
    notificationBar: "readonly",
    object: "readonly",
    objectToUrlFormEncoded: "readonly",
    onSetupWizardInitialized: "readonly",
    Prototype: "readonly",
    refillOnChange: "readonly",
    refreshPart: "readonly",
    registerSortableDragDrop: "readonly",
    renderOnDemand: "readonly",
    rootURL: "readonly",
    safeValidateButton: "readonly",
    section: "readonly",
    setupWizardExtensions: "readonly",
    SharedArrayBuffer: "readonly",
    shortenName: "readonly",
    Sortable: "readonly",
    toQueryString: "readonly",
    ts_refresh: "readonly",
    updateOptionalBlock: "readonly",
    Utilities: "readonly",
    UTILITIES_VERSION: "writeable",
    YAHOO: "readonly",
    YUI: "readonly"
  }
};
