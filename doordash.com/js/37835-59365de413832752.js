"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37835],{37835:function(a,b,c){c.r(b),c.d(b,{TooltipBoundariesElement:function(){return p.AnchoredLayerBoundariesElement},TooltipContentAlignment:function(){return m},TooltipContentWrapperDisplayMode:function(){return e},TooltipInteractionType:function(){return d},TooltipPosition:function(){return p.AnchoredLayerPosition},TooltipSize:function(){return n},TooltipType:function(){return f},default:function(){return H}});var d,e,f,g,h,i,j=c(10071),k=j.Spacing.XSmall,l=j.Spacing.XxSmall,m=j.InlineChildrenAlignment,n={Small:j.InsetSize.XxSmall,Large:j.InsetSize.Small},o=c(87379),p=c(39838),q=(0,o.default)(j.Inset).attrs({innerRef:function(a){return a.innerRef}}).withConfig({displayName:"styles__TooltipContainer",componentId:"sc-j9mwbp-0"})(["background:",";border-radius:","px;box-shadow:",";display:flex;align-items:flex-start;"],function(a){return a.tooltipType.Normal.Background},function(a){return a.containerShape===j.Shape.Pill?2*a.size:a.borderRadius},j.Shadows.Large),r=o.default.button.withConfig({displayName:"styles__TooltipButton",componentId:"sc-j9mwbp-1"})(["appearance:none;outline:none;border:none;padding:0;height:32px;width:32px;border-radius:","px;display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;"," &&:focus{",";}"],function(a){return a.borderRadius},function(a){var b=a.tooltipType,c=a.size;return(0,o.css)(["border:4px solid ",";margin:-","px;background:",";color:",";&:hover{background:",";color:",";}&:active{background:",";color:",";}"],b.Normal.Background,c/4,b.Normal.Background,b.Normal.Foreground,b.Hovered.Background,b.Hovered.Foreground,b.Pressed.Background,b.Hovered.Foreground)},function(a){return(0,j.getFocusStyles)({theme:a.theme})}),s=(0,o.default)(j.Inset).withConfig({displayName:"styles__IconContainer",componentId:"sc-j9mwbp-2"})(["max-height:24px;display:flex;align-items:center;"]),t=function(a){var b=a.position,c=a.tooltipType;switch(b){case p.AnchoredLayerPosition.TopLeft:case p.AnchoredLayerPosition.TopCenter:case p.AnchoredLayerPosition.TopRight:var d=(0,o.css)(["border-left:","px solid transparent;border-right:","px solid transparent;border-top:","px solid ",";bottom:-","px;"],6,6,6,c.Normal.Background,6);switch(b){case p.AnchoredLayerPosition.TopLeft:case p.AnchoredLayerPosition.TopRight:return(0,o.css)(["",";",":","px;"],d,b===p.AnchoredLayerPosition.TopLeft?"left":"right",k);case p.AnchoredLayerPosition.TopCenter:default:return(0,o.css)(["",";left:0px;right:0px;"],d)}case p.AnchoredLayerPosition.RightTop:case p.AnchoredLayerPosition.RightCenter:case p.AnchoredLayerPosition.RightBottom:var e=(0,o.css)(["border-top:","px solid transparent;border-bottom:","px solid transparent;border-right:","px solid ",";left:-","px;"],6,6,6,c.Normal.Background,6);switch(b){case p.AnchoredLayerPosition.RightTop:case p.AnchoredLayerPosition.RightBottom:return(0,o.css)(["",";",":","px;"],e,b===p.AnchoredLayerPosition.RightTop?"top":"bottom",1.5*k);case p.AnchoredLayerPosition.RightCenter:default:return(0,o.css)(["",";margin:auto;top:0px;bottom:0px;"],e)}case p.AnchoredLayerPosition.LeftTop:case p.AnchoredLayerPosition.LeftCenter:case p.AnchoredLayerPosition.LeftBottom:var f=(0,o.css)(["border-top:","px solid transparent;border-bottom:","px solid transparent;border-left:","px solid ",";right:-","px;"],6,6,6,c.Normal.Background,6);switch(b){case p.AnchoredLayerPosition.LeftTop:case p.AnchoredLayerPosition.LeftBottom:return(0,o.css)(["",";",":","px;"],f,b===p.AnchoredLayerPosition.LeftTop?"top":"bottom",k);case p.AnchoredLayerPosition.LeftCenter:default:return(0,o.css)(["",";margin:auto;top:0px;bottom:0px;"],f)}case p.AnchoredLayerPosition.BottomLeft:case p.AnchoredLayerPosition.BottomCenter:case p.AnchoredLayerPosition.BottomRight:var g=(0,o.css)(["border-left:","px solid transparent;border-right:","px solid transparent;border-bottom:","px solid ",";top:-","px;"],6,6,6,c.Normal.Background,6);switch(b){case p.AnchoredLayerPosition.BottomLeft:case p.AnchoredLayerPosition.BottomRight:return(0,o.css)(["",";",":","px;"],g,b===p.AnchoredLayerPosition.BottomLeft?"left":"right",1.5*k);case p.AnchoredLayerPosition.BottomCenter:default:return(0,o.css)(["",";left:0px;right:0px;"],g)}default:return(0,o.css)([""])}},u=o.default.div.withConfig({displayName:"styles__Arrow",componentId:"sc-j9mwbp-3"})(["width:0;height:0;position:absolute;",";"],t);(g=d||(d={})).Hover="HOVER",g.Focus="FOCUS",g.Click="CLICK",g.ToggleHover="TOGGLE_HOVER",g.ToggleFocus="TOGGLE_FOCUS",g.ToggleClick="TOGGLE_CLICK",g.Controlled="CONTROLLED",(h=e||(e={})).Flex="flex",h.InlineFlex="inline-flex",h.InlineBlock="inline-block",h.Block="block",h.Inline="inline",(i=f||(f={})).Informational="Informational",i.Highlight="Highlight";var v=c(46873),w=c(67294),x=c(77910);function y(a){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function z(){return(z=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function A(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function B(a,b){return(B=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}function C(a){if(void 0===a)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function D(a){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function E(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var F=function(a){switch(a){case p.AnchoredLayerPosition.TopLeft:case p.AnchoredLayerPosition.BottomLeft:return[-k,l];case p.AnchoredLayerPosition.TopRight:case p.AnchoredLayerPosition.BottomRight:return[k,l];case p.AnchoredLayerPosition.RightTop:case p.AnchoredLayerPosition.LeftTop:return[-k,1.5*l];case p.AnchoredLayerPosition.RightBottom:case p.AnchoredLayerPosition.LeftBottom:return[k,1.5*l];case p.AnchoredLayerPosition.TopCenter:case p.AnchoredLayerPosition.BottomCenter:return[0,l];case p.AnchoredLayerPosition.RightCenter:case p.AnchoredLayerPosition.LeftCenter:default:return[0,1.5*l]}},G=function(a){!function(a,b){if("function"!=typeof b&&null!==b)throw TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&B(a,b)}(l,a);var b,c,g,h,i,k=(b=l,c=function a(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(b){return!1}}(),function(){var a,d,e,f=D(b);if(c){var g=D(this).constructor;e=Reflect.construct(f,arguments,g)}else e=f.apply(this,arguments);return a=this,d=e,d&&("object"===y(d)||"function"==typeof d)?d:C(a)});function l(){!function(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}(this,l);for(var a,b,c,e,f,g,h,i,j,m,n,o,q,r,s,t,u,v,w,x,y,z,A,B,D,F=arguments.length,G=Array(F),H=0;H<F;H++)G[H]=arguments[H];return D=k.call.apply(k,[this].concat(G)),E(C(D),"state",{arrowElement:void 0,isVisible:D.props.defaultIsVisible||!1,isFlipped:!1}),E(C(D),"getActualPosition",function(a){return D.state.isFlipped?p.AnchoredLayerFlippedPositions[a]:a}),E(C(D),"toggleVisibility",function(){var a=D.state.isVisible;D.setState(function(a){return{isVisible:!a.isVisible}},function(){return D.propagateVisibilityChange(a)})}),E(C(D),"setVisibility",function(a){var b=D.state.isVisible;D.setState({isVisible:a},function(){return D.propagateVisibilityChange(b)})}),E(C(D),"propagateVisibilityChange",function(a){D.props.onVisibilityChange&&D.state.isVisible!==a&&D.props.onVisibilityChange(D.state.isVisible)}),E(C(D),"visibilityTimer",void 0),E(C(D),"setVisibilityWithTimer",function(a){D.props.interactionType===d.ToggleHover&&(a?(clearTimeout(D.visibilityTimer),D.state.isVisible||D.setVisibility(!0)):D.visibilityTimer=setTimeout(function(){return D.setVisibility(!1)},300))}),E(C(D),"getEventHandlersForInteractionType",function(a){switch(a){case d.Hover:return{onMouseEnter:function(){return D.setVisibility(!0)},onFocus:function(){return D.setVisibility(!0)}};case d.Focus:return{onFocus:function(){return D.setVisibility(!0)}};case d.Click:return{onClick:function(){return D.setVisibility(!0)},onFocus:function(){return D.setVisibility(!0)}};case d.ToggleHover:return{onMouseEnter:function(){D.setVisibilityWithTimer(!0)},onMouseLeave:function(){D.setVisibilityWithTimer(!1)},onFocus:function(){return D.setVisibilityWithTimer(!0)},onBlur:function(){return D.setVisibilityWithTimer(!1)}};case d.ToggleFocus:return{onFocus:function(){return D.setVisibility(!0)},onBlur:function(){return D.setVisibility(!1)}};case d.ToggleClick:return{onClick:function(){return D.toggleVisibility()}};case d.Controlled:default:return{}}}),E(C(D),"setArrowElement",function(a){D.setState({arrowElement:a})}),E(C(D),"handleClose",function(a){D.props.onClose?D.props.onClose(a):D.setVisibility(!1)}),E(C(D),"handleFlippedChange",function(a){var b=a.flipped;return D.setState({isFlipped:b})}),E(C(D),"isCloseVisible",function(a,b){if("boolean"==typeof b)return b;switch(a){case d.Hover:case d.Focus:case d.Click:case d.ToggleClick:return!0;case d.ToggleHover:case d.ToggleFocus:default:return!1}}),E(C(D),"tooltipTypes",{Informational:{Normal:{Background:null===(a=D.context)||void 0===a?void 0:null===(b=a.Colors)||void 0===b?void 0:b.TooltipInformationalBackground,Foreground:null===(c=D.context)||void 0===c?void 0:null===(e=c.Colors)||void 0===e?void 0:e.TooltipInformationalForeground},Hovered:{Background:null===(f=D.context)||void 0===f?void 0:null===(g=f.Colors)||void 0===g?void 0:g.TooltipInformationalBackgroundHovered,Foreground:null===(h=D.context)||void 0===h?void 0:null===(i=h.Colors)||void 0===i?void 0:i.TooltipInformationalForegroundHovered},Pressed:{Background:null===(j=D.context)||void 0===j?void 0:null===(m=j.Colors)||void 0===m?void 0:m.TooltipInformationalBackgroundPressed,Foreground:null===(n=D.context)||void 0===n?void 0:null===(o=n.Colors)||void 0===o?void 0:o.TooltipInformationalForegroundPressed}},Highlight:{Normal:{Background:null===(q=D.context)||void 0===q?void 0:null===(r=q.Colors)||void 0===r?void 0:r.TooltipHighlightBackground,Foreground:null===(s=D.context)||void 0===s?void 0:null===(t=s.Colors)||void 0===t?void 0:t.TooltipHighlightForeground},Hovered:{Background:null===(u=D.context)||void 0===u?void 0:null===(v=u.Colors)||void 0===v?void 0:v.TooltipHighlightBackgroundHovered,Foreground:null===(w=D.context)||void 0===w?void 0:null===(x=w.Colors)||void 0===x?void 0:x.TooltipHighlightForegroundHovered},Pressed:{Background:null===(y=D.context)||void 0===y?void 0:null===(z=y.Colors)||void 0===z?void 0:z.TooltipHighlightBackgroundPressed,Foreground:null===(A=D.context)||void 0===A?void 0:null===(B=A.Colors)||void 0===B?void 0:B.TooltipHighlightForegroundPressed}}}),D}return g=l,h=[{key:"render",value:function(){var a,b,c,g,h,i,k=this,l=this.props,o=l.boundariesElement,t=l.alignContent,x=void 0===t?m.Stretch:t,y=l.content,A=l.children,B=l.position,C=void 0===B?p.AnchoredLayerPosition.BottomCenter:B,D=l.iconStart,E=l.isVisible,G=l.contentDisplayMode,H=void 0===G?e.InlineFlex:G,I=l.type,J=void 0===I?f.Informational:I,K=l.size,L=void 0===K?n.Large:K,M=l.interactionType,N=void 0===M?d.ToggleHover:M,O=l.title,P=l.contentMaxLines,Q=l.titleMaxLines,R=l.shouldCloseBeVisible,S=l.uniqueId,T=this.getActualPosition(C),U=F(T),V=this.isCloseVisible(N,R),W="boolean"==typeof E?E:this.state.isVisible;return w.createElement(p.AnchoredLayer,{offset:U,position:C,arrowElement:this.state.arrowElement,shouldEscapeWithAnchor:!1,onFlippedChange:this.handleFlippedChange,boundariesElement:void 0===o?null:o,content:W&&w.createElement(v.Z,{disableFocusLock:!V},w.createElement(q,{onMouseEnter:function(){k.setVisibilityWithTimer(!0)},onMouseLeave:function(){k.setVisibilityWithTimer(!1)},borderRadius:null===(a=this.context)||void 0===a?void 0:null===(b=a.BorderRadius)||void 0===b?void 0:b.TooltipContainer,containerShape:null===(c=this.context)||void 0===c?void 0:null===(g=c.Shape)||void 0===g?void 0:g.Tooltip,id:S,role:"tooltip",position:T,tooltipType:this.tooltipTypes[J],size:L},w.createElement(u,{ref:this.setArrowElement,position:T,tooltipType:this.tooltipTypes[J]}),w.createElement(j.InlineChildren,{size:L,alignItems:x},D&&D.type&&w.createElement(s,{size:j.InsetSize.XxxSmall},w.createElement(j.Icon,z({shouldAdjustSmallSizesWhitespace:!0,size:L===n.Small?j.IconSize.Small:j.IconSize.Medium,color:j.IconColor["Tooltip".concat(J,"Foreground")]},D))),w.createElement(j.StackChildren,{size:j.StackChildrenSize.XxxxSmall},O&&w.createElement(j.Text,{tag:"string"==typeof O?"h2":void 0,styles:j.TextStyle.TooltipLabel,color:j.TextColor["Tooltip".concat(J,"Foreground")],display:j.TextDisplayMode.Block,maxLines:Q},O),y&&w.createElement(j.Text,{tag:"string"==typeof y?"p":void 0,styles:j.TextStyle.TooltipBody,color:j.TextColor["Tooltip".concat(J,"Foreground")],maxLines:P},y)),V&&w.createElement(r,{theme:this.context,"aria-label":"Close Tooltip",borderRadius:null===(h=this.context)||void 0===h?void 0:null===(i=h.BorderRadius)||void 0===i?void 0:i.TooltipButtonClose,onClick:this.handleClose,tooltipType:this.tooltipTypes[J],size:L},w.createElement(j.Icon,{shouldAdjustSmallSizesWhitespace:!0,type:j.IconType.Close,color:j.IconColor["Tooltip".concat(J,"Foreground")],size:j.IconSize.Small})))))},w.createElement("div",z({style:{display:H}},this.getEventHandlersForInteractionType(N)),A({describedBy:W?S:void 0})))}}],A(g.prototype,h),i&&A(g,i),l}(w.Component);E(G,"contextType",j.ThemingContext),E(G,"Positions",p.AnchoredLayerPosition),E(G,"BoundariesElements",p.AnchoredLayerBoundariesElement),E(G,"ContentAlignments",m),E(G,"InteractionTypes",d),E(G,"ContentDisplayModes",e),E(G,"Types",f),E(G,"Sizes",n),E(G,"defaultProps",{alignContent:m.Stretch,type:f.Informational,size:n.Large,defaultIsVisible:!1,position:p.AnchoredLayerPosition.BottomCenter,interactionType:d.ToggleHover,boundariesElement:null,contentDisplayMode:e.InlineFlex});var H=(0,x.n0)(G,{prefix:"Tooltip"});H.Positions=p.AnchoredLayerPosition,H.ContentAlignments=m,H.Types=f,H.Sizes=n,H.BoundariesElements=p.AnchoredLayerBoundariesElement,H.InteractionTypes=d,H.ContentDisplayModes=e}}])