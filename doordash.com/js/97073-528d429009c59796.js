"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97073],{97073:function(a,b,c){c.d(b,{ZP:function(){return ak}}),(d=j||(j={})).Custom="CUSTOM",d.Toggle="TOGGLE",d.Checkbox="CHECKBOX",d.Radio="RADIO",d.Circle="CIRCLE",(e=k||(k={})).Checkbox="checkbox",e.Radio="radio",(f=l||(l={})).Start="flex-start",f.Center="center",f.End="flex-end",f.Baseline="baseline",(g=m||(m={})).Start="flex-start",g.Center="center",g.End="flex-end",(h=n||(n={}))[h.Small=20]="Small",h[h.Large=24]="Large",(i=o||(o={})).Leading="Leading",i.Trailing="Trailing";var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t=c(10071);function u(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var v={Black:t.TextColor.TextPrimary,Dark:t.TextColor.TextSecondary,Light:t.TextColor.SystemWhite,Primary:t.TextColor.TextPrimary,Tertiary:t.TextColor.TextTertiary,Ghost:t.TextColor.SystemGrey60,Red:t.TextColor.SystemRed60,Error:t.TextColor.TextError},w=(u(p={},n.Small,32),u(p,n.Large,64),p),x=(u(q={},n.Small,"Body2"),u(q,n.Large,"Body1"),q),y=(u(r={},w[n.Small],t.TextStyle.Medium12),u(r,w[n.Large],t.TextStyle.Medium16),r),z="0.15s",A=c(87379),B=c(67294),C=function(a){var b=a.fillColor;return a.size===n.Small?B.createElement("svg",{viewBox:"0 0 8 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},B.createElement("path",{d:"M7.20713 2.20711C7.59765 1.81658 7.59765 1.18342 7.20713 0.792893C6.81661 0.402369 6.18344 0.402369 5.79292 0.792893L3.00002 3.58579L2.20713 2.79289C1.81661 2.40237 1.18344 2.40237 0.792916 2.79289C0.402392 3.18342 0.402392 3.81658 0.792916 4.20711L2.29292 5.70711C2.68344 6.09763 3.31661 6.09763 3.70713 5.70711L7.20713 2.20711Z",fill:b})):B.createElement("svg",{viewBox:"0 0 10 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},B.createElement("path",{d:"M9.50001 2.4142C9.89054 2.02367 9.89053 1.39051 9.50001 0.999985C9.10949 0.609461 8.47632 0.609461 8.0858 0.999985L3.50001 5.58577L1.91422 3.99999C1.5237 3.60946 0.890535 3.60946 0.50001 3.99999C0.109486 4.39051 0.109486 5.02367 0.50001 5.4142L2.7929 7.70709C3.18343 8.09762 3.81659 8.09762 4.20712 7.70709L9.50001 2.4142Z",fill:b}))},D=function(a){var b=a.fillColor;return a.size===n.Small?B.createElement("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"},B.createElement("path",{d:"M9 3.49691e-07C9.55228 3.73832e-07 10 0.447716 10 1C10 1.55229 9.55228 2 9 2L1 2C0.447716 2 -2.41411e-08 1.55228 0 1C2.41411e-08 0.447715 0.447715 -2.41411e-08 1 0L9 3.49691e-07Z",fill:b})):B.createElement("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"},B.createElement("path",{d:"M8.33301 0.166992C8.79324 0.166992 9.16634 0.540089 9.16634 1.00033C9.16634 1.46056 8.79324 1.83366 8.33301 1.83366L1.66634 1.83366C1.2061 1.83366 0.833008 1.46056 0.833008 1.00033C0.833008 0.540088 1.2061 0.166992 1.66634 0.166992L8.33301 0.166992Z",fill:b}))},E=function(a){var b=a.size,c=a.type,d=b===n.Small?"Small":"Large";switch(c){case j.Checkbox:return"ControlCheckbox".concat(d);case j.Radio:return"ControlRadio".concat(d);case j.Toggle:return"ControlSwitch".concat(d);default:return}},F=function(a){var b,c;return a%2==0?(b=Math.round(a/2))%2>0?2*Math.floor(b/2):b:(c=Math.round(a/2))%2==0?2*Math.floor(c/2)+1:c},G=function(a){switch(a){case l.Start:return t.InlineChildren.Alignment.FlexStart;case l.Baseline:return t.InlineChildren.Alignment.Baseline;case l.Center:return t.InlineChildren.Alignment.Center;case l.End:return t.InlineChildren.Alignment.FlexEnd;default:return t.InlineChildren.Alignment.FlexStart}},H=function(a){switch(a){case m.Start:return t.InlineChildren.Justification.FlexStart;case m.Center:return t.InlineChildren.Justification.Center;case m.End:return t.InlineChildren.Justification.FlexEnd;default:return t.InlineChildren.Justification.FlexStart}},I=A.default.div.withConfig({displayName:"styles__ToggleContainer",componentId:"sc-t8krd2-0"})(["display:flex;user-select:none;flex-grow:1;flex-direction:column;"]),J=A.default.div.withConfig({displayName:"styles__InputContainer",componentId:"sc-t8krd2-1"})(["",";"],function(a){return!a.isCustom&&(0,A.css)(["height:","px;display:flex;align-items:center;"],a.size)}),K=A.default.div.withConfig({displayName:"styles__ErrorMessageContainer",componentId:"sc-t8krd2-2"})(["margin-top:","px;"],t.Spacing.XxSmall),L=function(a){var b=a.themeSize,c=b-a.borderWidth*(a.size===n.Small?3:4);return(0,A.css)(["height:","px;width:",";",' background:url("data:image/svg+xml,','") no-repeat center;'],c,a.kind===j.Toggle?"".concat(b/2,"px"):"".concat(c,"px"),"",(0,t.encodeIconSVG)(B.createElement(C,{size:a.size,fillColor:a.theme.Colors["".concat(a.kind===j.Toggle?"Switch":"Toggle","ForegroundOn").concat(a.disabled?"Disabled":"")]})))},M=function(a){var b=a.themeSize,c=b-4*a.borderWidth;return(0,A.css)(["height:","px;width:",";",' background:url("data:image/svg+xml,','") no-repeat center;'],c,a.kind===j.Toggle?"".concat(b/2,"px"):"".concat(c,"px"),"",(0,t.encodeIconSVG)(B.createElement(D,{size:a.size,fillColor:a.theme.Colors["ToggleForegroundOn".concat(a.disabled?"Disabled":"")]})))},N=function(a){var b={};return function(){var c="".concat(a.size,"-").concat(a.disabled,"-").concat(a.kind).concat(a.kind===j.Checkbox&&a.indeterminate?"-".concat(a.indeterminate):"");if(b.hasOwnProperty(c))return b[c];var d=a.kind===j.Checkbox&&a.indeterminate?M(a):L(a);return b[c]=d,d}},O=(0,A.css)(["transition:transform ease-in-out ",",opacity ease-in-out ",";",";"],z,z,function(a){return(a.checked||a.indeterminate)&&(0,A.css)(["opacity:1;",";"],N(a))}),P=(0,A.css)(["top:0;left:0;right:0;bottom:0;width:","px;height:","px;background-color:",";transform:scale(0.5);transition:transform ease-in-out ",",opacity ease-in-out ",";border-radius:100%;",";"],function(a){return F(a.themeSize)},function(a){return F(a.themeSize)},function(a){if(a.kind===j.Radio){if(a.disabled)return a.theme.Colors.ToggleBorderOnDisabled;if(a.error)return a.theme.Colors.TextError}return a.disabled?a.theme.Colors.ToggleBackgroundOnDisabled:a.theme.Colors.ToggleBackgroundOn},z,z,function(a){return a.checked&&(0,A.css)(["opacity:1;transform:scale(1);"])}),Q=function(a){return a.disabled?a.checked?a.theme.Colors.SwitchBorderOnDisabled:a.theme.Colors.SwitchBorderOffDisabled:a.error?a.theme.Colors.TextError:a.checked?a.theme.Colors.SwitchBorderOn:a.theme.Colors.SwitchBorderOff},R=function(a){return a.checked?(0,A.css)(["opacity:1;transform:translateX(50%);background-color:",";"],a.theme.Colors["SwitchForegroundOn".concat(a.disabled?"Disabled":"")]):null},S=function(a){return a.error?(0,A.css)(["border-color:",";"],a.theme.Colors.TextError):null},T=function(a){var b=y[a];return"\n    font-size: ".concat(b.size,"px;\n    font-family: ").concat((0,t.themedFontFamily)(b.family),";\n    color: ").concat(b.color,";\n    font-weight: ").concat(b.weight,";\n    line-height: ").concat(b.lineHeight,";\n    letter-spacing: ").concat(b.letterSpacing,";\n    text-transform: ").concat(b.textTransform,";\n  ")},U=(0,A.css)(["top:0;left:0;right:0;bottom:0;width:","px;height:","px;transform:translateX(-50%);transition:transform ease-in-out ",",opacity ease-in-out ",";border-radius:100%;opacity:1;background-color:",";border:","px solid ",";"," ",""],function(a){return a.themeSize},function(a){return a.themeSize},z,z,function(a){return a.theme.Colors["SwitchForegroundOff".concat(a.disabled?"Disabled":"")]},function(a){return a.borderWidth},Q,R,S),V=(0,t.withTheming)(A.default.input.withConfig({displayName:"styles__ToggleInput",componentId:"sc-t8krd2-3"})(["display:flex;flex-shrink:0;align-items:center;justify-content:center;width:",";height:","px;border:","px solid ",";border-radius:",";appearance:none;background-color:",";position:relative;outline:none;margin:0;transition:all ease-in-out 0.2s;cursor:pointer;&:disabled{border-color:",";background-color:",";cursor:not-allowed;}&&:focus,&&:active{",";}&::before,&::after{margin:auto;content:'';display:block;position:absolute;}&::after{opacity:0;"," "," ","}"," "," ",";",";",""],function(a){return a.kind===j.Toggle?"".concat(2*a.themeSize,"px"):"".concat(a.themeSize,"px")},function(a){return a.themeSize},function(a){return a.kind===j.Circle?"1px":a.borderWidth},function(a){return a.theme.Colors.ToggleBorderOff},function(a){return a.borderRadius},function(a){return a.theme.Colors.ToggleBackgroundOff},function(a){return a.theme.Colors.ToggleBorderOffDisabled},function(a){return a.theme.Colors.ToggleBackgroundOffDisabled},function(a){return(0,t.getFocusStyles)({theme:a.theme})},function(a){return a.kind===j.Checkbox&&O},function(a){return a.kind===j.Radio&&P},function(a){return a.kind===j.Toggle&&U},function(a){return(a.checked||a.indeterminate)&&(0,A.css)(["border-color:",";background-color:",";&:focus,&:active{border-color:",";}&:disabled{border-color:",";background-color:",";}"],a.theme.Colors.ToggleBorderOn,a.kind===j.Radio?a.theme.Colors.ToggleBackgroundOff:a.theme.Colors.ToggleBackgroundOn,a.theme.Colors.ToggleBorderOn,a.theme.Colors.ToggleBorderOnDisabled,a.kind===j.Radio?a.theme.Colors.ToggleBackgroundOffDisabled:a.theme.Colors.ToggleBackgroundOnDisabled)},function(a){return a.error&&(0,A.css)(["border-color:",";background-color:",";&:focus,&:active{border-color:",";}",";"],a.theme.Colors.TextError,a.theme.Colors.ToggleBackgroundOff,a.theme.Colors.TextError,(a.checked||a.indeterminate)&&(0,A.css)(["background-color:",";"],a.kind===j.Radio?a.theme.Colors.ToggleBackgroundOff:a.theme.Colors.TextError))},function(a){return a.kind===j.Circle&&(0,A.css)(["background-color:",";border-color:",";cursor:pointer;&::before{content:'","';max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"," padding:0 ","px;}&:hover:not(:disabled){border-color:",";background-color:",";}",";",";"],a.theme.Colors.ButtonSecondaryToggleBackgroundOff,a.theme.Colors.ButtonSecondaryToggleBorderOff,a.label,T(a.size),t.Spacing.XxxSmall,a.checked?a.theme.Colors.ButtonSecondaryToggleBorderOnHovered:a.theme.Colors.ButtonSecondaryToggleBorderOffHovered,a.checked?a.theme.Colors.ButtonSecondaryToggleBackgroundHovered:a.theme.Colors.ButtonSecondaryToggleBackgroundOffHovered,a.checked&&(0,A.css)(["background-color:",";border-color:",";color:",";&::before{color:",";}&:focus,&:active,&:hover:not(:disabled){border-color:",";}"],a.theme.Colors.ButtonSecondaryToggleBackground,a.theme.Colors.ButtonSecondaryToggleBorderOn,a.theme.Colors.ButtonSecondaryToggleForeground,a.theme.Colors.ButtonSecondaryToggleForeground,a.theme.Colors.ButtonSecondaryToggleBorderOnHovered),a.error&&(0,A.css)(["border-color:",";&::before{color:",";}&:focus,&:active,&:hover:not(:disabled){border-color:",";}",";"],a.theme.Colors.TextError,a.theme.Colors.TextError,a.theme.Colors.TextError,a.checked&&(0,A.css)(["background-color:",";"],a.theme.Colors.ButtonSecondaryToggleBackground)))},function(a){return a.kind===j.Toggle&&(0,A.css)(["border-color:",";background-color:",";&:disabled{border-color:"," background-color:",";}&:disabled:after{opacity:1;}",";"],a.error?a.theme.Colors.TextError:a.theme.Colors.SwitchBorderOff,a.theme.Colors.SwitchBackgroundOff,a.theme.Colors.SwitchBorderOffDisabled,a.theme.Colors.SwitchBackgroundOffDisabled,a.checked&&(0,A.css)(["background-color:",";border:","px solid ",";&:before{left:0;transform:translateX(50%);",";}&:focus,&:active{border-color:",";}&:disabled{border-color:",";background-color:",";}"],a.error?a.theme.Colors.TextError:a.theme.Colors.SwitchBackgroundOn,a.borderWidth,a.error?a.theme.Colors.TextError:a.theme.Colors.SwitchBorderOn,N(a),a.error?a.theme.Colors.TextError:a.theme.Colors.SwitchBorderOn,a.theme.Colors.SwitchBorderOnDisabled,a.theme.Colors.SwitchBackgroundOnDisabled))},function(a){return a.isToggleHidden&&(0,A.css)(["border:0;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;overflow:hidden;position:absolute;"])}));V.displayName="ToggleInput";var W=A.default.div.withConfig({displayName:"styles__LabelContainer",componentId:"sc-t8krd2-4"})(["& > *{cursor:pointer;",";}& > *:first-child{line-height:","px;}"],function(a){return a.isDisabled&&(0,A.css)(["opacity:0.5;cursor:not-allowed;"])},function(a){return a.size});W.displayName="LabelContainer";var X=c(53390),Y=c(77910),Z=c(29208),$=c.n(Z),_=c(41143),aa=c.n(_);function ab(a){return(ab="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function ac(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function ad(a,b){return(ad=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}function ae(a){if(void 0===a)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function af(a){return(af=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function ag(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var ah=(ag(s={},j.Toggle,k.Checkbox),ag(s,j.Checkbox,k.Checkbox),ag(s,j.Radio,k.Radio),ag(s,j.Circle,k.Checkbox),ag(s,j.Custom,void 0),s),ai=function(a){var b=a.htmlFor,c=a.label,d=a.isDisabled,e=a.size,f=a.color;return B.createElement(W,{isDisabled:d,size:e},B.createElement(t.Text,{color:f,htmlFor:b,tag:"label",styles:t.TextStyle[x[e]]},c))},aj=function(a){!function(a,b){if("function"!=typeof b&&null!==b)throw TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&ad(a,b)}(h,a);var b,c,d,e,f,g=(b=h,c=function a(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(b){return!1}}(),function(){var a,d,e,f=af(b);if(c){var g=af(this).constructor;e=Reflect.construct(f,arguments,g)}else e=f.apply(this,arguments);return a=this,d=e,d&&("object"===ab(d)||"function"==typeof d)?d:ae(a)});function h(){!function(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}(this,h);for(var a,b,c=arguments.length,d=Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=g.call.apply(g,[this].concat(d)),ag(ae(b),"state",{isFocused:!1}),ag(ae(b),"borderRadiusForType",(ag(a={},j.Radio,"100%"),ag(a,j.Toggle,"".concat($()(b.context,"BorderRadius.ToggleTypeToggle"),"px")),ag(a,j.Checkbox,"".concat($()(b.context,"BorderRadius.ToggleTypeCheckbox"),"px")),ag(a,j.Circle,"100%"),ag(a,j.Custom,void 0),a)),ag(ae(b),"handleChange",function(a){b.props.onChange&&!b.props.isDisabled&&(b.checkboxElement.focus(),b.props.onChange(!b.props.isSelected,a))}),ag(ae(b),"handleClick",function(a){b.props.onClick&&(b.props.onChange&&console.error("You should provide either an onClick or\n        an onChange, not both; an onClick is intended for\n        when you need to interact with the toggle but not\n        immediately update it, or when you need to select\n        it again with no state-change."),!b.props.isDisabled&&(b.checkboxElement.focus(),b.props.onClick(b.props.isSelected,a)))}),ag(ae(b),"setCheckboxRef",function(a){b.checkboxElement=a}),ag(ae(b),"setDefaultLabelColorByState",function(){return b.props.error?"TextError":h.LabelColors.Primary}),ag(ae(b),"handleFocus",function(a){var c=b.props.onFocus;b.setState({isFocused:!0}),c&&c(a)}),ag(ae(b),"handleBlur",function(a){var c=b.props.onBlur;b.setState({isFocused:!1}),c&&c(a)}),b}return d=h,e=[{key:"updateIndeterminateState",value:function(a){if(!(this.props.type!==j.Checkbox&&this.props.type!==j.Custom)){var b=(a?a.isIndeterminate:void 0)!==this.props.isIndeterminate,c=a?a.isSelected:void 0,d=c!==this.props.isSelected;this.checkboxElement&&(b||d)&&(this.checkboxElement.indeterminate=!!this.props.isIndeterminate)}}},{key:"componentDidUpdate",value:function(a){this.updateIndeterminateState(a)}},{key:"componentDidMount",value:function(){void 0!==this.props.isIndeterminate&&this.updateIndeterminateState()}},{key:"render",value:function(){var a=this.props,b=a.renderLabel,c=a.size,d=void 0===c?n.Large:c,e=a.alignToggle,f=void 0===e?l.Start:e,g=a.type,h=void 0===g?j.Checkbox:g,i=a.isLabelHidden,k=void 0!==i&&i,m=a.labelSide,p=void 0===m?o.Trailing:m,q=a.justifyToggle,r=a.isDisabled,s=a.isSelected,u=a.isIndeterminate,v=a.label,x=a.labelColor,y=a.name,z=a.onClick,A=a.onChange,C=a.inputType,D=a.uniqueId,F=a.error,L=a.accessibilityDescribedBy,M=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["renderLabel","size","alignToggle","type","isLabelHidden","labelSide","justifyToggle","isDisabled","isSelected","isIndeterminate","label","labelColor","name","onClick","onChange","inputType","uniqueId","error","accessibilityDescribedBy"]),N=h===j.Circle,O=!k&&!N,P=(void 0===b?ai:b)({htmlFor:D,label:v,isDisabled:r,size:d,color:x||this.setDefaultLabelColorByState(),isFocused:this.state.isFocused}),Q=(0,Y.vQ)({props:M});A||z||console.error("You should provide either an onClick or\n        an onChange; providing one of both is required\n        to use this controlled Toggle component.");var R=h===j.Custom;return aa()(!R||void 0!==C,"When using toggle type Custom, you must provide an input type (either InputTypes.Radio or InputTypes.Checkbox) to the inputType prop"),B.createElement(I,Q,B.createElement(t.InlineChildren,{alignItems:G(f),justifyContent:H(q),size:k||R?t.InlineChildrenSize.None:t.InlineChildrenSize.XxSmall},O&&p===o.Leading&&P,B.createElement(J,{size:d,isCustom:h===j.Custom},B.createElement(V,{borderRadius:this.borderRadiusForType[h],borderWidth:$()(this.context,"BorderWidth.Toggle"),themeSize:N?w[d]:$()(this.context,"Size.".concat(E({size:d,type:h})),d),isToggleHidden:R,"aria-label":k?v:null,"aria-describedby":L,label:N&&!k&&v?v:null,checked:!!s,indeterminate:!!u,disabled:r,error:F,id:D,ref:this.setCheckboxRef,kind:h,name:y,onBlur:this.handleBlur,onChange:this.handleChange,onFocus:this.handleFocus,size:N?w[d]:d,type:C||ah[h],onClick:this.handleClick})),O&&p===o.Trailing&&P),O&&F&&B.createElement(K,null,B.createElement(X.ErrorMessage,{error:F})))}}],ac(d.prototype,e),f&&ac(d,f),h}(B.PureComponent);ag(aj,"contextType",t.ThemingContext),ag(aj,"Alignment",l),ag(aj,"Justification",m),ag(aj,"LabelColors",v),ag(aj,"Sizes",n),ag(aj,"Types",j),ag(aj,"InputTypes",k),ag(aj,"LabelSides",o),ag(aj,"defaultProps",{size:n.Large,alignToggle:l.Start,isLabelHidden:!1,labelSide:o.Trailing,renderLabel:ai,type:j.Checkbox});var ak=(0,Y.n0)(aj,{prefix:"Toggle"});ak.Alignment=l,ak.Justification=m,ak.LabelColors=v,ak.Sizes=n,ak.Types=j,ak.InputTypes=k,ak.LabelSides=o}}])