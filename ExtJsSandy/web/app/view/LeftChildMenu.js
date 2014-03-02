﻿Ext.define('App.view.LeftChildMenu', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.leftchildmenu',
    xtype: 'array-grid',
    requires: [
        'Ext.grid.column.Action'
    ],
    hideHeaders: true,
    store: ReservatieMenu,
    stateful: true,
    collapsible: false,
    multiSelect: false,
    stateId: 'stateGrid',
    viewConfig: {
        enableTextSelection: false
    },
    listeners: {
        itemclick: function(dv, record, item, index, e) {
            Ext.create('App.view.HMWindow', {
                title: record.get('title'),
                height: 400,
                width: 400,
               
                
            }).show();
        }
    },

    columns: [
    {
        dataIndex: 'title',
        flex: 1,
    }
    ]


});