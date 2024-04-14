const style = document.createElement('style');
style.innerHTML = `
  * {
    color: darkblue !important;
    font-family: "Georgia" !important;
    /* "Times New Roman", Arial, Helvetica, "Lucida Console", "Courier New", monospace, "Georgia"*/
}
  body {
    font-size: 1.5em !important;
  }
  body * {
    font-size: inherit;
  }
`;
document.head.appendChild(style);