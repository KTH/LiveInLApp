package kth.liveinlab.liveinlapp.model;

public class DataTableObject {
    private String column;
    private String datatype;
    private String exampleData;

    public String getColumn() {
        return column;
    }

    public void setColumn(String column) {
        this.column = column;
    }

    public String getDatatype() {
        return datatype;
    }

    public void setDataType(String datatype) {
        this.datatype = datatype;
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
