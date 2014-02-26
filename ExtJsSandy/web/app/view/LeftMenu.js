Ext.define('App.view.LeftMenu', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.leftmenu',
    requires: [
        'Ext.layout.container.Accordion',
        'Ext.grid.*'
    ],
    xtype: 'layout-accordion',
    layout: 'accordion',
    width: 500,
    height: 400,
    defaults: {
        bodyPadding: 10
    },

    initComponent: function () {
        Ext.apply(this, {
            items: [{
                title: 'Accordion Item 2',
                html: 'Empty'
            }, {
                title: 'Accordion Item 3',
                html: 'Empty'
            }, {
                title: 'Accordion Item 4',
                html: 'Empty'
            }, {
                title: 'Accordion Item 5',
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