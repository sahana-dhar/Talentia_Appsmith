export default {
    myVar1: [],
    myVar2: {},
		JSONForm1: {},
    myFun1(selectedRowData) {
        // Assuming selectedRowData contains the data of the selected row
        // You can access the data of the selected row from the `selectedRowData` parameter

        // Example: Update a form widget with the selected row data
        this.JSONForm1 = selectedRowData;

        // Make any other updates or API calls as needed
    },
    async myFun2() {
        // Use async-await or promises
        // await storeValue('varName', 'hello world')
    }
}
