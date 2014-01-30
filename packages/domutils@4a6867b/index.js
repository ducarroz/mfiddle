function getChildren(e){return e.children}function getParent(e){return e.parent}function getSiblings(e){var t=getParent(e);return t?getChildren(t):[e]}function getAttributeValue(e,t){return e.attribs&&e.attribs[t]}function hasAttrib(e,t){return hasOwnProperty.call(e.attribs,t)}function getName(e){return e.name}function find(e,t,n,i){for(var r,a=[],o=0,s=t.length;s>o&&!(e(t[o])&&(a.push(t[o]),0>=--i))&&(r=getChildren(t[o]),!(n&&r&&r.length>0&&(r=find(e,r,n,i),a=a.concat(r),i-=r.length,0>=i)));o++);return a}function findOneChild(e,t){for(var n=0,i=t.length;i>n;n++)if(e(t[n]))return t[n];return null}function findOne(e,t){for(var n=null,i=0,r=t.length;r>i&&!n;i++)e(t[i])?n=t[i]:t[i].children&&t[i].children.length>0&&(n=findOne(e,t[i].children));return n}function findAll(e,t){for(var n=[],i=0,r=t.length;r>i;i++){e(t[i])&&n.push(t[i]);var a=getChildren(t[i]);a&&a.length&&(n=n.concat(findAll(e,a)))}return n}function filter(e,t,n,i){return Array.isArray(t)||(t=[t]),"number"==typeof i&&isFinite(i)?1===i?(t=n===!1?findOneChild(e,t):findOne(e,t),t?[t]:[]):find(e,t,n!==!1,i):n===!1?t.filter(e):findAll(e,t)}function getAttribCheck(e,t){return"function"==typeof t?function(n){return n.attribs&&t(n.attribs[e])}:function(n){return n.attribs&&n.attribs[e]===t}}var ElementType=require("domelementtype"),DomUtils=module.exports,isTag=DomUtils.isTag=ElementType.isTag;DomUtils.getChildren=getChildren,DomUtils.getParent=getParent,DomUtils.getAttributeValue=getAttributeValue,DomUtils.hasAttrib=hasAttrib,DomUtils.getName=getName,DomUtils.getSiblings=getSiblings,DomUtils.findOne=findOne,DomUtils.findAll=findAll,DomUtils.filter=filter,DomUtils.testElement=function(e,t){for(var n in e)if(e.hasOwnProperty(n)){if("tag_name"===n){if(!isTag(t)||!e.tag_name(t.name))return!1}else if("tag_type"===n){if(!e.tag_type(t.type))return!1}else if("tag_contains"===n){if(isTag(t)||!e.tag_contains(t.data))return!1}else if(!t.attribs||!e[n](t.attribs[n]))return!1}else;return!0};var Checks={tag_name:function(e){return"function"==typeof e?function(t){return isTag(t)&&e(t.name)}:"*"===e?isTag:function(t){return isTag(t)&&t.name===e}},tag_type:function(e){return"function"==typeof e?function(t){return e(t.type)}:function(t){return t.type===e}},tag_contains:function(e){return"function"==typeof type?function(t){return!isTag(t)&&e(t.data)}:function(t){return!isTag(t)&&t.data===e}}};DomUtils.getElements=function(e,t,n,i){var r=[];for(var a in e)e.hasOwnProperty(a)&&(a in Checks?r.push(Checks[a](e[a])):r.push(getAttribCheck(a,e[a])));return 0===r.length?[]:1===r.length?filter(r[0],t,n,i):filter(function(e){return r.some(function(t){return t(e)})},t,n,i)},DomUtils.getElementById=function(e,t,n){return Array.isArray(t)||(t=[t]),findOne(getAttribCheck("id",e),t,n!==!1)},DomUtils.getElementsByTagName=function(e,t,n,i){return filter(Checks.tag_name(e),t,n,i)},DomUtils.getElementsByTagType=function(e,t,n,i){return filter(Checks.tag_type(e),t,n,i)},DomUtils.removeElement=function(e){if(e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),e.parent){var t=e.parent.children;t.splice(t.lastIndexOf(e),1)}},DomUtils.replaceElement=function(e,t){if(e.prev&&(e.prev.next=t,t.prev=e.prev),e.next&&(e.next.prev=t,t.next=e.next),e.parent){var n=e.parent.children;n.splice(n.lastIndexOf(e),1,t),t.parent=e.parent}},DomUtils.getInnerHTML=function(e){if(!e.children)return"";for(var t=e.children,n=t.length,i="",r=0;n>r;r++)i+=DomUtils.getOuterHTML(t[r]);return i};var booleanAttribs={__proto__:null,async:!0,autofocus:!0,autoplay:!0,checked:!0,controls:!0,defer:!0,disabled:!0,hidden:!0,loop:!0,multiple:!0,open:!0,readonly:!0,required:!0,scoped:!0,selected:!0,"/":!0},emptyTags={__proto__:null,area:!0,base:!0,basefont:!0,br:!0,col:!0,frame:!0,hr:!0,img:!0,input:!0,isindex:!0,link:!0,meta:!0,param:!0,embed:!0};DomUtils.getOuterHTML=function(e){var t=e.type;if(t===ElementType.Text)return e.data;if(t===ElementType.Comment)return"<!--"+e.data+"-->";if(t===ElementType.Directive)return"<"+e.data+">";if(t===ElementType.CDATA)return"<!CDATA "+DomUtils.getInnerHTML(e)+"]]>";var n="<"+e.name;if("attribs"in e)for(var i in e.attribs)if(e.attribs.hasOwnProperty(i)){n+=" "+i;var r=e.attribs[i];r?n+='="'+r+'"':i in booleanAttribs||(n+='=""')}return e.name in emptyTags&&0===e.children.length?n+" />":n+">"+DomUtils.getInnerHTML(e)+"</"+e.name+">"},DomUtils.getText=function getText(e){return Array.isArray(e)?e.map(getText).join(""):isTag(e)||e.type===ElementType.CDATA?getText(e.children):e.type===ElementType.Text?e.data:""};