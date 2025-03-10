"use strict";(self.webpackChunk_plone_volto=self.webpackChunk_plone_volto||[]).push([[6279],{"../../../node_modules/.pnpm/@dnd-kit+utilities@3.2.2_react@18.2.0/node_modules/@dnd-kit/utilities/dist/utilities.esm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CSS:function(){return CSS},add:function(){return add},canUseDOM:function(){return canUseDOM},findFirstFocusableNode:function(){return findFirstFocusableNode},getEventCoordinates:function(){return getEventCoordinates},getOwnerDocument:function(){return getOwnerDocument},getWindow:function(){return getWindow},hasViewportRelativeCoordinates:function(){return hasViewportRelativeCoordinates},isDocument:function(){return isDocument},isHTMLElement:function(){return isHTMLElement},isKeyboardEvent:function(){return isKeyboardEvent},isNode:function(){return isNode},isSVGElement:function(){return isSVGElement},isTouchEvent:function(){return isTouchEvent},isWindow:function(){return isWindow},subtract:function(){return subtract},useCombinedRefs:function(){return useCombinedRefs},useEvent:function(){return useEvent},useInterval:function(){return useInterval},useIsomorphicLayoutEffect:function(){return useIsomorphicLayoutEffect},useLatestValue:function(){return useLatestValue},useLazyMemo:function(){return useLazyMemo},useNodeRef:function(){return useNodeRef},usePrevious:function(){return usePrevious},useUniqueId:function(){return useUniqueId}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function useCombinedRefs(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>node=>{refs.forEach((ref=>ref(node)))}),refs)}const canUseDOM="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function isWindow(element){const elementString=Object.prototype.toString.call(element);return"[object Window]"===elementString||"[object global]"===elementString}function isNode(node){return"nodeType"in node}function getWindow(target){var _target$ownerDocument,_target$ownerDocument2;return target?isWindow(target)?target:isNode(target)&&null!=(_target$ownerDocument=null==(_target$ownerDocument2=target.ownerDocument)?void 0:_target$ownerDocument2.defaultView)?_target$ownerDocument:window:window}function isDocument(node){const{Document:Document}=getWindow(node);return node instanceof Document}function isHTMLElement(node){return!isWindow(node)&&node instanceof getWindow(node).HTMLElement}function isSVGElement(node){return node instanceof getWindow(node).SVGElement}function getOwnerDocument(target){return target?isWindow(target)?target.document:isNode(target)?isDocument(target)?target:isHTMLElement(target)||isSVGElement(target)?target.ownerDocument:document:document:document}const useIsomorphicLayoutEffect=canUseDOM?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function useEvent(handler){const handlerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(handler);return useIsomorphicLayoutEffect((()=>{handlerRef.current=handler})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return null==handlerRef.current?void 0:handlerRef.current(...args)}),[])}function useInterval(){const intervalRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return[(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((listener,duration)=>{intervalRef.current=setInterval(listener,duration)}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{null!==intervalRef.current&&(clearInterval(intervalRef.current),intervalRef.current=null)}),[])]}function useLatestValue(value,dependencies){void 0===dependencies&&(dependencies=[value]);const valueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return useIsomorphicLayoutEffect((()=>{valueRef.current!==value&&(valueRef.current=value)}),dependencies),valueRef}function useLazyMemo(callback,dependencies){const valueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const newValue=callback(valueRef.current);return valueRef.current=newValue,newValue}),[...dependencies])}function useNodeRef(onChange){const onChangeHandler=useEvent(onChange),node=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),setNodeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((element=>{element!==node.current&&(null==onChangeHandler||onChangeHandler(element,node.current)),node.current=element}),[]);return[node,setNodeRef]}function usePrevious(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{ref.current=value}),[value]),ref.current}let ids={};function useUniqueId(prefix,value){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(value)return value;const id=null==ids[prefix]?0:ids[prefix]+1;return ids[prefix]=id,prefix+"-"+id}),[prefix,value])}function createAdjustmentFn(modifier){return function(object){for(var _len=arguments.length,adjustments=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)adjustments[_key-1]=arguments[_key];return adjustments.reduce(((accumulator,adjustment)=>{const entries=Object.entries(adjustment);for(const[key,valueAdjustment]of entries){const value=accumulator[key];null!=value&&(accumulator[key]=value+modifier*valueAdjustment)}return accumulator}),{...object})}}const add=createAdjustmentFn(1),subtract=createAdjustmentFn(-1);function hasViewportRelativeCoordinates(event){return"clientX"in event&&"clientY"in event}function isKeyboardEvent(event){if(!event)return!1;const{KeyboardEvent:KeyboardEvent}=getWindow(event.target);return KeyboardEvent&&event instanceof KeyboardEvent}function isTouchEvent(event){if(!event)return!1;const{TouchEvent:TouchEvent}=getWindow(event.target);return TouchEvent&&event instanceof TouchEvent}function getEventCoordinates(event){if(isTouchEvent(event)){if(event.touches&&event.touches.length){const{clientX:x,clientY:y}=event.touches[0];return{x:x,y:y}}if(event.changedTouches&&event.changedTouches.length){const{clientX:x,clientY:y}=event.changedTouches[0];return{x:x,y:y}}}return hasViewportRelativeCoordinates(event)?{x:event.clientX,y:event.clientY}:null}const CSS=Object.freeze({Translate:{toString(transform){if(!transform)return;const{x:x,y:y}=transform;return"translate3d("+(x?Math.round(x):0)+"px, "+(y?Math.round(y):0)+"px, 0)"}},Scale:{toString(transform){if(!transform)return;const{scaleX:scaleX,scaleY:scaleY}=transform;return"scaleX("+scaleX+") scaleY("+scaleY+")"}},Transform:{toString(transform){if(transform)return[CSS.Translate.toString(transform),CSS.Scale.toString(transform)].join(" ")}},Transition:{toString(_ref){let{property:property,duration:duration,easing:easing}=_ref;return property+" "+duration+"ms "+easing}}}),SELECTOR="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function findFirstFocusableNode(element){return element.matches(SELECTOR)?element:element.querySelector(SELECTOR)}}}]);