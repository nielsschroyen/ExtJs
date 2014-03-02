Ext.define('App.view.LeftMenu', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.leftmenu',
    requires: [
        'Ext.layout.container.Accordion',
        'Ext.grid.*',
        'App.view.LeftChildMenu'
    ],
    xtype: 'layout-accordion',
    layout: 'accordion',
    width: 300,
    title: 'Menu',

    initComponent: function () {
        Ext.apply(this, {
            items: [{
                title: 'Reservaties',
                items: [
                {
                    xtype: 'leftchildmenu'
                }]
            }, {
                title: 'Overzichten',
                html: '<a href="#">ColumnChart</a>'
            }, {
                title: 'Klanten',
                
            }, {
                title: 'Andere',
                html: 'Empty'
            }]
        });
        this.callParent();
    }
})