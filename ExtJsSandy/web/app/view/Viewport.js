// 'App' is the name of the application we gave in init.js under config 'name'

Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: {
        type: 'border',
        padding: '5 5 5 5' // pad the layout from the window edges
    },
    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 5
    },
    requires: ['App.view.LeftMenu','App.view.overview.Overzicht','App.view.HMWindow'],
    items: [
        {
            id: 'app-header',
            xtype: 'box',
            region: 'north',
            collapsible: false,
            height: 40,
            html: 'Hoogmaatheide Portaal'
        },{
        xtype: 'leftmenu',
        region: 'west',
        floatable: false,
        margins: '5 5 0 0',
    }, {

        layout: 'absolute',
        collapsible: false,
        region: 'center',
        margins: '5 0 0 0',
        items: [{
            xtype: 'hmwindow',
            x: 50,
            y: 50,
            items: [{ xtype: 'overzicht' }]
        }],
    }
    ]
});