function getTableData() {
  const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  return ws.getRange(1, 1, ws.getLastRow(), 2);
}
