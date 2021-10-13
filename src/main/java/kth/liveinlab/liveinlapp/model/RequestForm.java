package kth.liveinlab.liveinlapp.model;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder({
        "testbedLiL",
        "testbedEM",
        "testbedAH",
        "dataFreq",
        "startDate",
        "endDate",
        "title",
        "desc"
})
public class RequestForm {

    @JsonProperty("testbedLiL")
    private List<String> testbedLiL = null;
    @JsonProperty("testbedEM")
    private List<String> testbedEM = null;
    @JsonProperty("testbedAH")
    private List<String> testbedAH = null;
    @JsonProperty("dataFreq")
    private List<String> dataFreq = null;
    @JsonProperty("startDate")
    private String startDate;
    @JsonProperty("endDate")
    private String endDate;
    @JsonProperty("title")
    private String title;
    @JsonProperty("desc")
    private String desc;
    @JsonProperty("fileType")
    private String fileType;

    @JsonProperty("testbedLiL")
    public List<String> getTestbedLiL() {
        return testbedLiL;
    }

    @JsonProperty("testbedLiL")
    public void setTestbedLiL(List<String> testbedLiL) {
        this.testbedLiL = testbedLiL;
    }

    @JsonProperty("testbedEM")
    public List<String> getTestbedEM() {
        return testbedEM;
    }

    @JsonProperty("testbedEM")
    public void setTestbedEM(List<String> testbedEM) {
        this.testbedEM = testbedEM;
    }

    @JsonProperty("testbedAH")
    public List<String> getTestbedAH() {
        return testbedAH;
    }

    @JsonProperty("testbedAH")
    public void setTestbedAH(List<String> testbedAH) {
        this.testbedAH = testbedAH;
    }

    @JsonProperty("dataFreq")
    public List<String> getDataFreq() {
        return dataFreq;
    }

    @JsonProperty("dataFreq")
    public void setDataFreq(List<String> dataFreq) {
        this.dataFreq = dataFreq;
    }

    @JsonProperty("startDate")
    public String getStartDate() {
        return startDate;
    }

    @JsonProperty("startDate")
    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    @JsonProperty("endDate")
    public String getEndDate() {
        return endDate;
    }

    @JsonProperty("endDate")
    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    @JsonProperty("title")
    public String getTitle() {
        return title;
    }

    @JsonProperty("title")
    public void setTitle(String title) {
        this.title = title;
    }

    @JsonProperty("desc")
    public String getDesc() {
        return desc;
    }

    @JsonProperty("desc")
    public void setDesc(String desc) {
        this.desc = desc;
    }

    @JsonProperty("fileType")
    public String getFileType() {
        return fileType;
    }

    @JsonProperty("fileType")
    public void setFileType(String fileType) {
        this.fileType = fileType;
    }
}