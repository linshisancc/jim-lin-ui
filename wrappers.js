(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"9kvl":function(t,e,n){"use strict";var r=n("FfOG");n.d(e,"a",(function(){return r["b"]}));n("bCY9")},afA6:function(t,e,n){"use strict";n.r(e);var r=n("0Owb"),o=n("q1tI"),i=n.n(o),a=n("q3YX"),p=n("qLMh"),s=n("9og8"),c=n("rlch"),l="import React from 'react';\nimport Alert from '../';\nimport '../style';\n\nexport default () => <Alert type=\"warning\">\u8fd9\u662f\u4e00\u6761\u544a\u8b66\u63d0\u793a</Alert>;",u="import pt from 'prop-types';\nimport React from 'react';\nexport interface IAlertProps extends React.PropsWithChildren {\n  /**\n   * @description      Alert \u7684\u7c7b\u578b\n   * @default          'info'\n   */\n  type?: 'info' | 'positive' | 'negative' | 'warning';\n}\n\nexport type typeColorMap = Record<Required<IAlertProps>['type'], string>;\n\nconst prefixCls = 'common-alert';\n\nconst colors: typeColorMap = {\n  info: '#5352ED',\n  positive: '#2ED573',\n  negative: '#FF4757',\n  warning: '#FFA502',\n};\n\nconst Alert: React.FC<IAlertProps> = ({ children, type = 'info', ...others }) => (\n  <div className={prefixCls} style={{ background: colors[type] }} {...others}>\n    {children}\n  </div>\n);\n\nAlert.propTypes = {\n  type: pt.oneOf(['info', 'positive', 'negative', 'warning']),\n};\n\nexport default Alert;",d="import './index.less';",m="@popupPrefix: common-alert;\n\n.@{popupPrefix} {\n  padding: 20px;\n  background: white;\n  border-radius: 3px;\n  color: white;\n  display: flex;\n}",f="import React from 'react';\nimport Button from '..';\nimport '../style';\n\nexport default () => <Button>\u8fd9\u662f\u4e00\u9897\u57fa\u7840\u6309\u94ae</Button>;",x="import React from 'react';\n\nconst Button: React.FC<any> = () => (\n  <button>\u6211\u662f\u4e00\u9897\u6d4b\u8bd5\u6309\u94ae</button>\n);\n\nexport default Button;",b="import './index.less';",h="@buttonPrefix: common-button;\n\n.@{buttonPrefix} {\n  padding: 20px;\n  background: gray;\n  border-radius: 5px;\n  color: violet;\n}",y={"alert-basic":{component:Object(c["c"])({loader:function(){var t=Object(s["a"])(Object(p["a"])().mark((function t(){return Object(p["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.e(5).then(n.bind(null,"Xvn/"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:l},"index.tsx":{import:"../",content:u},"style/index.ts":{import:"../style",content:d},"style/index.less":{import:"./index.less",content:m}},dependencies:{react:{version:"18.2.0"},"prop-types":{version:"15.8.1"}},componentName:"Alert",identifier:"alert-basic"}},"button-basic":{component:Object(c["c"])({loader:function(){var t=Object(s["a"])(Object(p["a"])().mark((function t(){return Object(p["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.e(4).then(n.bind(null,"Q8DY"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:f},"index.tsx":{import:"..",content:x},"style/index.ts":{import:"../style",content:b},"style/index.less":{import:"./index.less",content:h}},dependencies:{react:{version:"18.2.0"}},componentName:"Button",identifier:"button-basic"}}},v=n("x2v5"),w=n("KcUY"),g=n.n(w);e["default"]=t=>i.a.createElement(g.a,Object(r["a"])({},t,{config:a,demos:y,apis:v}))},q3YX:function(t){t.exports=JSON.parse('{"menus":{"en-US":{"/components":[{"title":"\u57fa\u7840\u7ec4\u4ef6","path":"/components/common","meta":{"order":1},"children":[{"path":"/components/common/alert","title":"Alert \u8b66\u544a\u63d0\u793a","meta":{}},{"path":"/components/common/button","title":"Button \u6309\u94ae","meta":{}}]}],"*":[{"path":"/","title":"jim lin UI","meta":{}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u7ec4\u4ef6","path":"/components","order":2}]},"title":"Happy UI","mode":"site","repository":{"url":"","branch":"master"},"theme":{"carrier":"dumi","hd":{"rules":[{"maxWidth":375,"mode":"vw","options":[100,750]},{"minWidth":376,"maxWidth":750,"mode":"vw","options":[100,1500]}]}},"exportStatic":{}}')},x2v5:function(t){t.exports=JSON.parse('{"Alert":{"default":[{"identifier":"type","description":"Alert \u7684\u7c7b\u578b","type":"\\"info\\" | \\"positive\\" | \\"negative\\" | \\"warning\\"","default":"info"}]},"Button":{"default":[]}}')}}]);