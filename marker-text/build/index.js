!function(){"use strict";var e,a={391:function(){var e=window.wp.blocks,a=window.React,l=[{label:"Info",value:"info",className:"material-icons-outlined"},{label:"Info",value:"info",className:"material-icons"},{label:"Check",value:"check",className:"material-icons-outlined"},{label:"Check Circle",value:"check_circle",className:"material-icons-outlined"},{label:"Check Circle",value:"check_circle",className:"material-icons"},{label:"Error Outline",value:"error_outline",className:"material-icons-outlined"},{label:"Error",value:"error",className:"material-icons-outlined"},{label:"Priority High",value:"priority_high",className:"material-icons-outlined"},{label:"Warning",value:"warning_amber",className:"material-icons-outlined"},{label:"Warning",value:"warning",className:"material-icons-outlined"},{label:"Help Outline",value:"help_outline",className:"material-icons-outlined"},{label:"Help",value:"help",className:"material-icons-outlined"},{label:"Question Mark",value:"question_mark",className:"material-icons-outlined"},{label:"Star",value:"star",className:"material-icons"},{label:"Star Border",value:"star_border",className:"material-icons-outlined"},{label:"Sentiment Satisfied",value:"sentiment_satisfied",className:"material-icons-outlined"},{label:"Sentiment Neutral",value:"sentiment_neutral",className:"material-icons-outlined"},{label:"Sentiment Dissatisfied",value:"sentiment_dissatisfied",className:"material-icons-outlined"},{label:"Fiber Manual Record",value:"fiber_manual_record",className:"material-icons-outlined"},{label:"Close",value:"close",className:"material-icons-outlined"},{label:"Dangerous",value:"dangerous",className:"material-icons-outlined"},{label:"Thumb Up",value:"thumb_up",className:"material-icons-outlined"},{label:"Thumb Down",value:"thumb_down",className:"material-icons-outlined"},{label:"Feedback",value:"feedback",className:"material-icons-outlined"},{label:"なし",value:""}];const t=[{name:"info",color:"#0ea5e9"},{name:"success",color:"#22c55e"},{name:"warning",color:"#eab308"},{name:"danger",color:"#ef4444"},{name:"primary",color:"var(--su-primary)"},{name:"secondary",color:"var(--su-secondary)"}],r=(0,a.createElement)("svg",{className:"su-dashborad-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,a.createElement)("path",{d:"m20,10c0,5.52-4.48,10-10,10S0,15.52,0,10,4.48,0,10,0s10,4.48,10,10Zm-13.73.4c.68.08,1.06.42,1.06.99,0,.45-.38.84-.86.84-.41,0-.74-.1-1.07-.51l-1.21.89c.67.74,1.47,1.03,2.27,1.03,1.23,0,2.38-.98,2.38-2.35s-.99-2.17-2.19-2.24c-.74-.05-.98-.34-.98-.66,0-.39.26-.62.65-.62.25,0,.56.15.74.35l1.15-.84c-.54-.64-1.2-.9-1.89-.9-.97,0-2.06.84-2.06,2.03,0,1.1.79,1.87,2.01,2.01Zm6.52,3.23c1.87,0,3.01-1.21,3.01-3.25v-3.89h-1.44v4.02c0,1.06-.47,1.73-1.56,1.73-1.04,0-1.57-.62-1.57-1.73v-4.02h-1.46v3.77c0,1.95.98,3.37,3.04,3.37Z"}));var n=window.wp.blockEditor,s=window.wp.components,o=JSON.parse('{"u2":"humi-blocks/marker-text"}');(0,e.registerBlockType)(o.u2,{attributes:{content:{type:"string"},marker:{type:"string",default:"check"},markerColor:{type:"text"},markerClassName:{type:"string",default:"material-icons"}},edit:function(e){const{attributes:o,setAttributes:i}=e,{content:c,marker:m,markerColor:u,markerClassName:v}=o,d=(0,n.useBlockProps)({className:"marker-text",style:{"--su-marker-color":u}});return(0,a.createElement)("div",{...d},(0,a.createElement)(n.InspectorControls,{key:"setting"},(0,a.createElement)(s.PanelBody,{title:"マーカーの設定",initialOpen:!0,icon:r},(0,a.createElement)(s.BaseControl,{label:"マーカー",className:"su-components-base-control"},(0,a.createElement)("div",{className:"editor-icon"},l.map(((e,l)=>(0,a.createElement)("div",{key:l,className:e.value===m&&e.className===v?"editor-icon-item current":"editor-icon-item",onClick:()=>(e=>{""===e.value?i({marker:void 0}):i({marker:e.value,markerClassName:e.className})})(e)},""!==e.value?(0,a.createElement)("span",{className:e.className},e.value):(0,a.createElement)("div",{className:"editor-icon-item-blank"},"なし")))))),(0,a.createElement)(s.BaseControl,{label:"マーカーの色",className:"su-components-base-control"},(0,a.createElement)(s.ColorPalette,{colors:t,value:u,onChange:e=>i({markerColor:e})})))),(0,a.createElement)("span",{className:`${v} marker-text-icon`},m),(0,a.createElement)(n.RichText,{tagName:"span",className:"marker-text-content",value:c,onChange:e=>i({content:e}),placeholder:"テキストを入力"}))},save:function({attributes:e}){const{content:l,marker:t,markerColor:r,markerClassName:s}=e,o=n.useBlockProps.save({className:"marker-text",style:{"--su-marker-color":r}});return(0,a.createElement)("p",{...o},(0,a.createElement)("span",{className:`${s} marker-text-icon`},t),(0,a.createElement)(n.RichText.Content,{tagName:"span",className:"marker-text-content",value:l}))}})}},l={};function t(e){var r=l[e];if(void 0!==r)return r.exports;var n=l[e]={exports:{}};return a[e](n,n.exports,t),n.exports}t.m=a,e=[],t.O=function(a,l,r,n){if(!l){var s=1/0;for(m=0;m<e.length;m++){l=e[m][0],r=e[m][1],n=e[m][2];for(var o=!0,i=0;i<l.length;i++)(!1&n||s>=n)&&Object.keys(t.O).every((function(e){return t.O[e](l[i])}))?l.splice(i--,1):(o=!1,n<s&&(s=n));if(o){e.splice(m--,1);var c=r();void 0!==c&&(a=c)}}return a}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[l,r,n]},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},function(){var e={826:0,431:0};t.O.j=function(a){return 0===e[a]};var a=function(a,l){var r,n,s=l[0],o=l[1],i=l[2],c=0;if(s.some((function(a){return 0!==e[a]}))){for(r in o)t.o(o,r)&&(t.m[r]=o[r]);if(i)var m=i(t)}for(a&&a(l);c<s.length;c++)n=s[c],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(m)},l=self.webpackChunkmarker_text=self.webpackChunkmarker_text||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var r=t.O(void 0,[431],(function(){return t(391)}));r=t.O(r)}();