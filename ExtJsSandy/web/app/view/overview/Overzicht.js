Ext.define('App.view.overview.Overzicht', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.overzicht',
    bodyStyle: { "background-color": "white" },
    defaultType: 'container',
    layout: {
        type: 'vbox',
        padding: '5 5 5 5',
        align: 'stretch',
    },

    items: [
    {
        xtype: 'fieldset',
        title: 'Selecteer een periode',
        defaultType: 'textfield',
        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },
        items: [{
            fieldLabel: 'Vanaf',
            name: 'first',
            xtype: 'datefield',
        }, {
            fieldLabel: 'Tot',
            name: 'last',
            xtype: 'datefield',
            allowBlank: false,

        }]
    }, {
        defaultType: 'container',
        flex: 1,
        layout: {
           type: 'hbox',
           align: 'stretch',
        },
        items: [
        {
            defaultType: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch',
            },
            items: [
                {
                xtype: 'fieldset',
                title: 'Algemeen',
                layout: 'anchor',
                width: 350,
                defaults: {
                anchor: '100%'
                     },
                    items: [
                        {
                            xtype: 'displayfield',
                            name: 'aantalHonden',
                            fieldLabel: 'Aantal honden',
                            value: '9'
                        },
                                {
                                    xtype: 'displayfield',
                                    name: 'omzet',
                                    fieldLabel: 'Omzet',
                                    value: '90 EUR'
                                }
                    ]
                },
                {
                xtype: 'fieldset',
                title: 'Services',
                layout: 'anchor',
                defaults: {
                anchor: '100%'
                     },
                    items: [
                        {
                            xtype: 'displayfield',
                            name: 'wandelService',
                            fieldLabel: 'Wandelservice',
                            value: '11%'
                        },
                                {
                                    xtype: 'displayfield',
                                    name: 'speelweide',
                                    fieldLabel: 'Speelweide',
                                    value: '33%'
                                }
                    ]
                }
                        
                    ]
                },
                { xtype: 'linechart', flex: 1, margin:'10' }
            ]
        }
    ],
});