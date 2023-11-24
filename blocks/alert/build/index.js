!function(){"use strict";var e,l={521:function(){var e=window.wp.blocks,l=window.React,a=[{label:"Info",value:"info",className:"material-symbols-outlined"},{label:"Check",value:"check",className:"material-symbols-outlined"},{label:"Check Circle",value:"check_circle",className:"material-symbols-outlined"},{label:"Error",value:"error",className:"material-symbols-outlined"},{label:"Priority High",value:"priority_high",className:"material-symbols-outlined"},{label:"Warning",value:"warning",className:"material-symbols-outlined"},{label:"Help",value:"help",className:"material-symbols-outlined"},{label:"Question Mark",value:"question_mark",className:"material-symbols-outlined"},{label:"Star",value:"star",className:"material-symbols-outlined"},{label:"Sentiment Satisfied",value:"sentiment_satisfied",className:"material-symbols-outlined"},{label:"Sentiment Neutral",value:"sentiment_neutral",className:"material-symbols-outlined"},{label:"Sentiment Dissatisfied",value:"sentiment_dissatisfied",className:"material-symbols-outlined"},{label:"Fiber Manual Record",value:"fiber_manual_record",className:"material-symbols-outlined"},{label:"Change History",value:"change_history",className:"material-symbols-outlined"},{label:"Close",value:"close",className:"material-symbols-outlined"},{label:"Thumb Up",value:"thumb_up",className:"material-symbols-outlined"},{label:"Thumb Down",value:"thumb_down",className:"material-symbols-outlined"},{label:"Feedback",value:"feedback",className:"material-symbols-outlined"},{label:"なし",value:""}];const t=(0,l.createElement)("svg",{className:"su-dashborad-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,l.createElement)("path",{d:"m20,10c0,5.52-4.48,10-10,10S0,15.52,0,10,4.48,0,10,0s10,4.48,10,10Zm-13.73.4c.68.08,1.06.42,1.06.99,0,.45-.38.84-.86.84-.41,0-.74-.1-1.07-.51l-1.21.89c.67.74,1.47,1.03,2.27,1.03,1.23,0,2.38-.98,2.38-2.35s-.99-2.17-2.19-2.24c-.74-.05-.98-.34-.98-.66,0-.39.26-.62.65-.62.25,0,.56.15.74.35l1.15-.84c-.54-.64-1.2-.9-1.89-.9-.97,0-2.06.84-2.06,2.03,0,1.1.79,1.87,2.01,2.01Zm6.52,3.23c1.87,0,3.01-1.21,3.01-3.25v-3.89h-1.44v4.02c0,1.06-.47,1.73-1.56,1.73-1.04,0-1.57-.62-1.57-1.73v-4.02h-1.46v3.77c0,1.95.98,3.37,3.04,3.37Z"}));var s=window.wp.blockEditor,n=window.wp.components;(0,e.registerBlockType)("lito/alert",{edit:function({attributes:e,setAttributes:i}){const{iconName:r}=e,o=(0,s.useBlockProps)();return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.InspectorControls,null,(0,l.createElement)(n.PanelBody,{title:"アイコン",icon:t,initialOpen:!0},(0,l.createElement)(n.BaseControl,{label:"アラートアイコンを選択",id:"lito/alert/icon"},(0,l.createElement)("div",{className:"litob-editor-icon"},a.map(((e,a)=>{const t=e.value===r;return(0,l.createElement)("div",{key:a,className:"litob-editor-icon-item "+(t?"current":""),onClick:()=>(e=>{i({iconName:e.value})})(e)},""!==e.value?(0,l.createElement)("span",{className:"material-symbols-outlined"},e.value):(0,l.createElement)("div",{className:"litob-editor-icon-item-blank"},"なし"))})))))),(0,l.createElement)("div",{...o},(0,l.createElement)("div",{className:"alert"},""!==r&&(0,l.createElement)("span",{className:"material-symbols-outlined alert-icon"},r),(0,l.createElement)("div",{className:"litob-inner-blocks"},(0,l.createElement)(s.InnerBlocks,null)))))},save:function({attributes:e}){const a=s.useBlockProps.save(),{iconName:t}=e;return(0,l.createElement)("div",{...a},(0,l.createElement)("div",{className:"alert"},""!==t&&(0,l.createElement)("span",{className:"material-symbols-outlined alert-icon"},t),(0,l.createElement)("div",{className:"litob-inner-blocks"},(0,l.createElement)(s.InnerBlocks.Content,null))))}})}},a={};function t(e){var s=a[e];if(void 0!==s)return s.exports;var n=a[e]={exports:{}};return l[e](n,n.exports,t),n.exports}t.m=l,e=[],t.O=function(l,a,s,n){if(!a){var i=1/0;for(m=0;m<e.length;m++){a=e[m][0],s=e[m][1],n=e[m][2];for(var r=!0,o=0;o<a.length;o++)(!1&n||i>=n)&&Object.keys(t.O).every((function(e){return t.O[e](a[o])}))?a.splice(o--,1):(r=!1,n<i&&(i=n));if(r){e.splice(m--,1);var c=s();void 0!==c&&(l=c)}}return l}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[a,s,n]},t.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},function(){var e={826:0,431:0};t.O.j=function(l){return 0===e[l]};var l=function(l,a){var s,n,i=a[0],r=a[1],o=a[2],c=0;if(i.some((function(l){return 0!==e[l]}))){for(s in r)t.o(r,s)&&(t.m[s]=r[s]);if(o)var m=o(t)}for(l&&l(a);c<i.length;c++)n=i[c],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(m)},a=self.webpackChunklito_blocks_alert=self.webpackChunklito_blocks_alert||[];a.forEach(l.bind(null,0)),a.push=l.bind(null,a.push.bind(a))}();var s=t.O(void 0,[431],(function(){return t(521)}));s=t.O(s)}();