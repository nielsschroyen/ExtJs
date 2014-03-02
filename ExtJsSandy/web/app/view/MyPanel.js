Ext.define('App.view.MyPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mypanel',
    width: 400,
    layout: 'border',
    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 5
    },
    title: 'Hoogmaatheide portaal',
    requires: ['App.view.LeftMenu'],
    items: [{
        xtype: 'leftmenu',
        region: 'west',
        floatable: false,
    }, {
        
            layout: 'absolute',
            collapsible: false,
            region: 'center',
            margins: '5 0 0 0',
            items:[{
                title: 'Panel 1',
                x: 250,
                y: 250,
                html: 'Positioned at x:50, y:50'
            }],
    }]
});