package kth.liveinlab.liveinlapp.database;

import kth.liveinlab.liveinlapp.model.EventData;
import kth.liveinlab.liveinlapp.model.RequestForm;

import java.sql.*;
import java.util.ArrayList;
import java.util.Properties;

public class DatabaseQueryHandler {

    String url = "jdbc:postgresql://localhost/kth_live_in_lab";
    Properties props;


    public DatabaseQueryHandler(){
        props = new Properties();
        props.setProperty("user","postgres");
        props.setProperty("password","password");
    }

    public ArrayList<EventData> doQuery(RequestForm requestForm) throws SQLException {

        ArrayList<EventData> dbList = new ArrayList<EventData>();
        StringBuilder categories = new StringBuilder();
        categories.append("''");
        for(String s : requestForm.getTestbedLiL()){
            categories.append(",'").append(s).append("'");
        }
        Connection conn = DriverManager.getConnection(url, props);
        Statement stmt = conn.createStatement();
        String startDate = requestForm.getStartDate().replace("Z"," ").replace("T"," ");
        String query = "SELECT * FROM \"event_data\" WHERE timestamp > "+"'"+startDate+"' and category IN ("+categories+")";
        ResultSet rs = stmt.executeQuery(query);
        while(rs.next()) {
            EventData dataRow = new EventData();
            dataRow.setAcknowledgetime(rs.getString("acknowledgetime"));
            dataRow.setAggregatedserverguid(rs.getString("aggregatedserverguid"));
            dataRow.setAlarmstate(rs.getString("alarmstate"));
            dataRow.setAlarmtext(rs.getString("alarmtext"));
            dataRow.setAssignedstate(rs.getString("assignedstate"));
            dataRow.setAssignedtodomain(rs.getString("assignedtodomain"));
            dataRow.setAssignedtoname(rs.getString("assignedtoname"));
            dataRow.setCategory(rs.getString("category"));
            dataRow.setCategory2(rs.getString("category2"));
            dataRow.setTimestamp(rs.getString("timestamp"));
            dataRow.setValueafter(rs.getString("valueafter"));
            dataRow.setValuebefore(rs.getString("valuebefore"));
            dbList.add(dataRow);
        }
        rs.close();
        stmt.close();
        conn.close();
        return dbList;
    }

}
