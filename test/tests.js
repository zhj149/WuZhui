// let ajax = wuzhui.ajax;
// //const appToken = '7F0B6740588DCFA7E1C29C627B8C87379F1C98D5962FAB01D0D604307C04BFF0182BAE0B98307143'
// //         '$appToken': "E26297B41339791C2F79EA9F5D66CC090C47F8265F984EA7239322642C0B333D65E49B0DDC581C3C",
// //         '$token': "EFF37347E349626066055C5DA0EE895BA324ECCEE1DE8DED406F81087BFAC8B02819259C34553F88"
// wuzhui.ajaxTimeout = 1000 * 60 * 100;
// wuzhui.ajax = function (url: string, data: any) {
//     data = $.extend({
//         '$appToken': "E26297B41339791C2F79EA9F5D66CC090C47F8265F984EA7239322642C0B333D65E49B0DDC581C3C",
//         '$token': "EFF37347E349626066055C5DA0EE895BA324ECCEE1DE8DED406F81087BFAC8B02819259C34553F88"
//     }, data || {});
//     if (data.startRowIndex)
//         data.StartRowIndex = data.startRowIndex;
//     if (data.maximumRows)
//         data.MaximumRows = data.maximumRows;
//     return ajax.apply(wuzhui, [url, data]).then((data) => {
//         if (data.Type == 'DataSourceSelectResult') {
//             return {
//                 dataItems: data.DataItems,
//                 totalRowCount: data.TotalRowCount
//             };
//         }
//         return data;
//     });
// }
requirejs(['gridView']); //'dataSource', 
