class CustomWebComponent extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    get count() {
        return this.getAttribute('count');
    }

    set count(val) {
        this.setAttribute('count', val);
    }

    static get observedAttributes() {
        return ['count'];
    }

    attributeChangedCallback(prop, oldVal, newVal) {
        if(prop === 'count') this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <h1>Web Component</h1>
            ${this.count}<br>
            <button id='btn'>Increment</button>
        `;
    }
}

customElements.define('web-component', CustomWebComponent);