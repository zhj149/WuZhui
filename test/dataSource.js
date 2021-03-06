let dataSource = new wuzhui.WebDataSource({
    //primaryKeys:[],
    select: () => Promise.resolve([]),
});
//let select_arguments = new wuzhui.DataSourceSelectArguments();
let selecting_event_fired = false;
let selected_event_fired = false;
dataSource.selecting.add((sender, args) => {
    selecting_event_fired = true;
});
dataSource.selected.add((sender, args) => {
    QUnit.test("", (assert) => {
        assert.notEqual(args, null);
    });
    selected_event_fired = true;
});
QUnit.asyncTest('Select 事件测试', (assert) => {
    dataSource.select().then(() => {
        assert.equal(selecting_event_fired, true, 'selecting 事件触发');
        assert.equal(selected_event_fired, true, 'selected 事件触发');
        QUnit.start();
    });
});
export default dataSource;
