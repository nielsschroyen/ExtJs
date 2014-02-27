// 'App' is the name of the application we gave in init.js under config 'name'

Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: {
        type: 'border',
        padding: '0 5 5 5' // pad the layout from the window edges
    },
    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 15
    },
    requires: ['App.view.LeftMenu'], //Name must be identical to that of the Panel define i.e. Ext.define('App.view.MyPanel', { ....
    items: [
        {
            id: 'app-header',
            xtype: 'box',
            region: 'north',
            height: 40,
            html: 'Hoogmaatheide Portaal'
        },{
        xtype: 'leftmenu',
        region: 'west',
        floatable: false,
        margins: '5 5 0 0',
    }, {

        title: 'Main Content',
        collapsible: false,
        region: 'center',
        margins: '5 0 0 0',
        html: 'Main Page'
    }]
});