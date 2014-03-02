Ext.define('App.view.HMWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.hmwindow',
    width: 800,
    height: 600,
    minHeight: 400,
    minWidth: 550,
    hidden: false,
    maximizable: true,
    title: 'Column Chart',
    animate:'true',
    autoShow: true,
    layout: 'fit',
    fitContainer: function () {
        var me = this,
              parent = me.floatParent,
              container = parent ? parent.getTargetEl() : me.container;

        me.setSize(container.getViewSize(false));
        me.setPosition.apply(me, parent || (container.dom !== document.body) ?
          [0, 0] :
         container.getXY());
    }
});