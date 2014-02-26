Ext.define('App.view.MyPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mypanel',
    width: 400,
    height: 300,
    layout: 'column',
    title: 'Hoogmaatheide portaal',
    requires: ['App.view.LeftMenu'],
    items: [{
        xtype: 'leftmenu'
    }, {
        xtype: 'button',
        text: 'button2'
    }]
});