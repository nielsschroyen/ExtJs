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
        
            title: 'Main Content',
            collapsible: false,
            region: 'center',
            margins: '5 0 0 0',
            html: 'Main Page'
    }]
});