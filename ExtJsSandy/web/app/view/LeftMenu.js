Ext.define('App.view.LeftMenu', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.leftmenu',
    requires: [
        'Ext.layout.container.Accordion',
        'Ext.grid.*'
    ],
    xtype: 'layout-accordion',
    layout: 'accordion',
    width: 300,
    title: 'Menu',
    defaults: {
        bodyPadding: 1
    },

    initComponent: function () {
        Ext.apply(this, {
            items: [{
                title: 'Reservaties',
                html: 'Empty'
            }, {
                title: 'Overzichten',
                html: 'Empty'
            }, {
                title: 'Klanten',
                html: 'Empty'
            }, {
                title: 'Andere',
                html: 'Empty'
            }]
        });
        this.callParent();
    },

    changeRenderer: function (val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '</span>';
        }
        return val;
    },

    pctChangeRenderer: function (val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '%</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '%</span>';
        }
        return val;
    }
})