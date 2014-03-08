Ext.define('App.view.overview.LineChart', {
    extend:'Ext.chart.Chart',
    alias: 'widget.linechart',
    style: 'background:#fff',
    requires:[
    'Ext.chart.*',
    'Ext.fx.target.Sprite',
    'Ext.layout.container.Fit',
    ],
        animate: true,
        shadow: true,
        store: store1,
        axes: [{
            type: 'Numeric',
            position: 'left',
            fields: ['data1'],
            label: {
                renderer: Ext.util.Format.numberRenderer('0,0')
            },
          //  title: 'Aantal bezoeken',
            grid: true,
            minimum: 0
        }, {
            type: 'Category',
            position: 'bottom',
            fields: ['name'],
         //   title: 'Maand'
        }],
        series: [{
            type: 'line',
            axis: 'left',
            highlight: true,
            tips: {
                trackMouse: true,
                renderer: function (storeItem, item) {
                    this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data1') + ' $');
                }
            },
            label: {
                display: 'insideEnd',
                'text-anchor': 'middle',
                field: 'data1',
                renderer: Ext.util.Format.numberRenderer('0'),
                orientation: 'vertical',
                color: '#333'
            },
            xField: 'name',
            yField: 'data1'
        }]
    });