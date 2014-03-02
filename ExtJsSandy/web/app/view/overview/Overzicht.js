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
            html:'Mijn gegevens',
            region: 'center'
        }
    ],

   
});