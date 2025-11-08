const TAG_NAME = '';
customElement.define(
		TAG_NAME,
		class Component extends HTMLElement {
				static TAG_NAME = TAG_NAME;

				static get observedAttributes() {
						return [];
				}

				static __registerElement() {
						customElement.define(TAG_NAME, Component);
				}

				constructor() {
						super();
						this.attachShadow({ mode: 'open' });
						this.__initDom(this.shadowRoot);
						this.__attachEventListeners();
				}

				attributeChangedCallback(name, oldValue, newValue) {
						if(oldValue === newValue) return;
						console.debug('Attribute changed', name, oldValue, newValue);
						switch(name) {
								break;
						default:
								console.error('Unknown attribute');
						}
				}

				render() {
						//const clone2 = template.content.cloneNode(true)
						let template = document.createElement('div'),
								styles = document.createElement('style');
						template.innerHTML = Component.html;
						styles.textContent = Component.css;
						return [styles, ...Array.prototype.slice.call(template.childNodes).filter(n => !(n instanceof Text))];
				}

				_initDom(rootElem) {
						rootElem.append(...this.render());
						return this;
				}

				_attachEventListeners() {
						return this;
				}

				static css = ``;
				static html = ``;
		}
);
export default customElement.get(TAG_NAME);
