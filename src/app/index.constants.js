(function() {
  'use strict';
  angular
    .module('ennmoom')
    //malarkey,moment
    .constant('uiDatetimePickerConfig', {
      dateFormat: 'yyyy-MM-dd HH:mm',
      defaultTime: '00:00:00',
      html5Types: {
        date: 'yyyy-MM-dd',
        'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
        'month': 'yyyy-MM'
      },
      initialPicker: 'date',
      reOpenDefault: false,
      enableDate: true,
      enableTime: true,
      buttonBar: {
        show: true,
        now: {
          show: true,
          text: '现在',
          cls: 'btn-sm btn-primary'
        },
        today: {
          show: true,
          text: '今天',
          cls: 'btn-sm btn-primary'
        },
        clear: {
          show: true,
          text: '清空',
          cls: 'btn-sm btn-primary'
        },
        date: {
          show: true,
          text: '日期',
          cls: 'btn-sm btn-primary'
        },
        time: {
          show: true,
          text: '时间',
          cls: 'btn-sm btn-primary'
        },
        close: {
          show: true,
          text: '关闭',
          cls: 'btn-sm btn-primary'
        }
      },
      closeOnDateSelection: true,
      closeOnTimeNow: true,
      appendToBody: false,
      altInputFormats: [],
      ngModelOptions: {},
      saveAs: false,
      readAs: false
    })
})();


