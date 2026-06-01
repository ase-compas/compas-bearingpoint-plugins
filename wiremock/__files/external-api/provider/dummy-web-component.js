export default class PluginsHubElement extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<h3>Hello World Plugin</h3><p>Count: <span id="c">0</span></p><pre id="x"></pre>`;
    }

    set doc(d) { 
        this.querySelector('#x').textContent = d ? new XMLSerializer().serializeToString(d) : '(no doc)'; 
    }
    set editCount(n) { this.querySelector('#c').textContent = n; }
}
