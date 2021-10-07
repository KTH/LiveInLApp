package kth.liveinlab.liveinlapp.model;

public class DataTableObject {
    private String columnName;
    private String dataType;
    private String exampleData;

    public String getColumnName() {
        return columnName;
    }

    public void setColumnName(String columnName) {
        this.columnName = columnName;
    }

    public String getDataType() {
        return dataType;
    }

    public void setDataType(String dataType) {
        this.dataType = dataType;
    }

    public String getExampleData() {
        return exampleData;
    }

    public void setExampleData(String exampleData) {
        this.exampleData = exampleData;
    }

    public DataTableObject() {
    }
}
