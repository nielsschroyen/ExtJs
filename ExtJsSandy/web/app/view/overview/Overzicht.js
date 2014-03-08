Ext.define('App.view.overview.Overzicht', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.overzicht',
    bodyStyle: { "background-color": "white" },
    layout: {
        type: 'border',
        padding: '5 5 5 5' // pad the layout from the window edges
        
    },

    items: [
    {
        xtype: 'fieldset',
        checkboxToggle: false,
        region: 'north',
        title: 'Selecteer een periode',
        defaultType: 'textfield',
        collapsed: false,
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
                checkboxToggle: false,
                title: 'Algemeen',
                defaultType: 'textfield',
                collapsed: false,
                layout: 'anchor',
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
                checkboxToggle: false,
                title: 'Services',
                defaultType: 'textfield',
                collapsed: false,
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
                    , width: 350
                },
                { xtype: 'linechart', flex: 1, margin:'10' }
            ]
           ,
            region: 'center'
        }
    ],
});