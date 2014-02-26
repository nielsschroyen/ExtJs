// 'App' is the name of the application we gave in init.js under config 'name'

Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    requires: ['App.view.MyPanel'], //Name must be identical to that of the Panel define i.e. Ext.define('App.view.MyPanel', { ....
    items: [{
        xtype: 'mypanel'
    }]
});