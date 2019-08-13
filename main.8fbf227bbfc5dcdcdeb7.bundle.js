(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{408:function(module,__webpack_exports__,__webpack_require__){"use strict";var _storybook_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(108);__webpack_exports__.a=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_0__.create)({base:"dark",colorPrimary:"#122844",colorSecondary:"#285FCD",appBg:"#122844",appContentBg:_storybook_theming__WEBPACK_IMPORTED_MODULE_0__.color.lightest,appBorderColor:"#ccc",appBorderRadius:4,fontBase:"Source Sans Pro,sans-serif",fontCode:"monospace",textColor:_storybook_theming__WEBPACK_IMPORTED_MODULE_0__.color.darkest,textInverseColor:_storybook_theming__WEBPACK_IMPORTED_MODULE_0__.color.lightest,barTextColor:"#fff",barSelectedColor:"#eace6a",barBg:"#3865C1",inputBg:"#fff",inputBorder:"rgba(0,0,0,.3)",inputTextColor:_storybook_theming__WEBPACK_IMPORTED_MODULE_0__.color.darkest,inputBorderRadius:4,brandTitle:"OVH Design System",brandUrl:"https://ods.ovh",brandImage:"https://www.ovh.com/fr/order/domain/assets/images/logo/logo_ovh_mobile.svg"})},412:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a="# \\<ods-wc>\n\nThis webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.\n\n## Installation\n```bash\nnpm i ods-wc\n```\n\n## Usage\n```html\n<script type=\"module\">\n  import 'ods-wc/ods-wc.js';\n<\/script>\n\n<ods-wc></ods-wc>\n```\n\n## Testing using karma (if applied by author)\n```bash\nnpm run test\n```\n\n## Testing using karma via browserstack (if applied by author)\n```bash\nnpm run test:bs\n```\n\n## Demoing using storybook (if applied by author)\n```bash\nnpm run storybook\n```\n\n## Linting (if applied by author)\n```bash\nnpm run lint\n```\n"},413:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return OdsButton});var lit_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(189),lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(414);class OdsButton extends lit_element__WEBPACK_IMPORTED_MODULE_0__.a{static get properties(){return{ariaLabel:{type:String,attribute:"aria-label"},disabled:{type:Boolean,converter:value=>"true"===value||""===value},iconLeft:{type:String,attribute:"icon-left"},iconRight:{type:String,attribute:"icon-right"},id:{type:String},name:{type:String},size:{type:String},type:{type:String},value:{type:String},variant:{type:String}}}constructor(){super(),this.disabled=!1,this.size="m",this.type="button"}render(){return lit_element__WEBPACK_IMPORTED_MODULE_0__.b`
            <link rel="stylesheet" type="text/css" href="https://unpkg.com/@ovh-ux/ui-kit@3.4.0/dist/css/oui-ods.css">
            <style>        
                .oui-button_s {
                    padding: .3em .5em;
                    font-size: .9rem;
                    min-width: inherit;
                }
                .oui-button_success {
                    color: #fff;
                    background-color: #28a745;
                    border-color: #28a745;
                }
                .oui-button_danger {
                    color: #fff;
                    background-color: #dc3545;
                    border-color: #dc3545;
                }
                .oui-button_warning {
                    color: #212529;
                    background-color: #ffc107;
                    border-color: #ffc107;
                }
                .oui-button_info {
                    color: #fff;
                    background-color: #17a2b8;
                    border-color: #17a2b8;
                }
                .oui-button_light {
                    color: #212529;
                    background-color: #f8f9fa;
                    border-color: #f8f9fa;
                }
                .oui-button_dark {
                    color: #fff;
                    background-color: #343a40;
                    border-color: #343a40;
                }
            </style>
            <button
              aria-label=${OdsButton.ifDefined(this.ariaLabel)}
              class=${this.getButtonClass()}
              @click=${OdsButton.onClick}
              ?disabled=${this.disabled}      
              id=${OdsButton.ifDefined(this.id)}
              name=${OdsButton.ifDefined(this.name)}
              type=${this.type}
              value=${OdsButton.ifDefined(this.value)}
            >            
              ${OdsButton.renderIcon(this.iconLeft)}
              <span class="oui-button__text">
                <slot></slot>
              </span>
              ${OdsButton.renderIcon(this.iconRight)}
            </button>
        `}getButtonClass(){const res=["oui-button"];return this.variant&&res.push(`oui-button_${this.variant}`),this.iconLeft&&res.push("oui-button_icon-left"),this.iconRight&&res.push("oui-button_icon-right"),this.size&&res.push(`oui-button_${this.size}`),res.join(" ")}static renderIcon(icon){if(icon)return lit_element__WEBPACK_IMPORTED_MODULE_0__.b`<span aria-hidden="true" class=${icon}></span>`}static ifDefined(attr){return Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__.a)(attr||void 0)}static onClick(e){e.preventDefault()}}customElements.define("ods-button",OdsButton)},415:function(module,exports,__webpack_require__){__webpack_require__(416),__webpack_require__(520),module.exports=__webpack_require__(521)},521:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(522);var _storybook_polymer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(139),_open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(18),_storybook_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(257),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(407),_ods_theme__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__(812),__webpack_require__(408));const req=__webpack_require__(864);Object(_storybook_html__WEBPACK_IMPORTED_MODULE_3__.addDecorator)(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_4__.withA11y),Object(_storybook_html__WEBPACK_IMPORTED_MODULE_3__.addDecorator)(_open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_2__.h),Object(_open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_2__.a)({options:{name:"ODS-WC",isFullscreen:!1,panelPosition:"right",theme:_ods_theme__WEBPACK_IMPORTED_MODULE_6__.a}}),Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_1__.configure)(function loadStories(){req.keys().forEach(filename=>req(filename))},module)}.call(this,__webpack_require__(289)(module))},864:function(module,exports,__webpack_require__){var map={"./index.stories.js":865};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=864},865:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"withStorySource",function(){return withStorySource}),__webpack_require__.d(__webpack_exports__,"__STORY__",function(){return __STORY__}),__webpack_require__.d(__webpack_exports__,"__ADDS_MAP__",function(){return __ADDS_MAP__});var _open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(18),_README_md__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(412),_src_ods_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(413),withStorySource=__webpack_require__(866).withStorySource,__STORY__="import {\n  storiesOf,\n  html,\n  boolean,\n  text,\n  select,\n  addParameters,\n  withKnobs,\n  withClassPropertiesKnobs,\n} from '@open-wc/demoing-storybook';\n\nimport readme from '../README.md';\nimport { OdsButton } from '../src/ods-button';\n\nconst clog = text => console.log(text);\n\nstoriesOf('Components|Atoms', module).add(\n  `Button`,\n  () =>\n    withClassPropertiesKnobs(OdsButton, {\n      overrides: el => [\n        { key: `ariaLabel`, fn: () => text(`ariaLabel`, ``, `Other`) },\n        { key: `disabled`, fn: () => boolean(`disabled`, el.disabled, `Customize`) },\n        { key: `iconLeft`, fn: () => text(`iconLeft`, ``, `Customize`) },\n        { key: `iconRight`, fn: () => text(`iconRight`, ``, `Customize`) },\n        { key: `id`, fn: () => text(`id`, ``, `Other`) },\n        { key: `name`, fn: () => text(`name`, ``, `Other`) },\n        { key: `size`, fn: () => select(`size`, [`s`, `m`], el.size, `Customize`) },\n        { key: `type`, fn: () => select(`type`, [`button`, `submit`, `reset`], `button`, `Other`) },\n        { key: `value`, fn: () => text(`value`, ``, `Other`) },\n        {\n          key: `variant`,\n          fn: () =>\n            select(\n              `variant`,\n              [`primary`, `secondary`, `link`, `default`, `success`, `warning`, `danger`, `info`, `light`, `danger`],\n              `primary`,\n              `Customize`\n            ),\n        },\n      ],\n      template: html`\n        <ods-button onClick=\"clog('test')\">${text(`content`, `Button`, `Customize`)}</ods-button>\n      `,\n    }),\n  { notes: { markdown: readme }, options: { selectedPanel: 'storybooks/knobs/panel' } }\n);\n",__ADDS_MAP__={};Object(_open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_0__.e)("Components|Atoms",module).addDecorator(withStorySource(__STORY__,__ADDS_MAP__)).add("Button",()=>Object(_open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_0__.g)(_src_ods_button__WEBPACK_IMPORTED_MODULE_2__.a,{overrides:el=>[{key:"ariaLabel",fn:()=>Object(_open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_0__.f)("ariaLabel","","Other")},{key:"disabled",fn:()=>Object(_open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_0__.b)("disabled",el.disabled,"Customize")},{key:"iconLeft",fn:()=>Object(_open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_0__.f)("iconLeft","","Customize")},{key:"iconRight",fn:()=>Object(_open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_0__.f)("iconRight","","Customize")},{key:"id",fn:()=>Object(_open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_0__.f)("id","","Other")},{key:"name",fn:()=>Object(_open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_0__.f)("name","","Other")},{key:"size",fn:()=>Object(_open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_0__.d)("size",["s","m"],el.size,"Customize")},{key:"type",fn:()=>Object(_open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_0__.d)("type",["button","submit","reset"],"button","Other")},{key:"value",fn:()=>Object(_open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_0__.f)("value","","Other")},{key:"variant",fn:()=>Object(_open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_0__.d)("variant",["primary","secondary","link","default","success","warning","danger","info","light","danger"],"primary","Customize")}],template:_open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_0__.c`
            <ods-button onClick="clog('test')">${Object(_open_wc_demoing_storybook__WEBPACK_IMPORTED_MODULE_0__.f)("content","Button","Customize")}</ods-button>
          `}),{notes:{markdown:_README_md__WEBPACK_IMPORTED_MODULE_1__.a},options:{selectedPanel:"storybooks/knobs/panel"}})}.call(this,__webpack_require__(289)(module))}},[[415,1,2]]]);
//# sourceMappingURL=main.8fbf227bbfc5dcdcdeb7.bundle.js.map