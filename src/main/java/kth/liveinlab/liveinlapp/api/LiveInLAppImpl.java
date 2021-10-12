package kth.liveinlab.liveinlapp.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import kth.liveinlab.liveinlapp.model.DataTableObject;
import kth.liveinlab.liveinlapp.model.RequestForm;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

@Component
public class LiveInLAppImpl implements LiveInLAppAPI {
    @Override
    public String helloWorld(HttpServletRequest request) {
        String url = "jdbc:postgresql://localhost/kth_live_in_lab";
        String res = "";
        Properties props = new Properties();
        props.setProperty("user","postgres");
        props.setProperty("password","password");
        try {
            Connection conn = DriverManager.getConnection(url, props);
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT name FROM \"Temp\" WHERE id = 1");
            while(rs.next()) {
                res = rs.getString("name");
            }
            rs.close();
            stmt.close();
            conn.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return "<h1>"+res+"</h1><br/>";
    }

    @Override
    public ResponseEntity<Object> getTableData(HttpServletRequest request) {
        String url = "jdbc:postgresql://localhost/kth_live_in_lab";
        List<DataTableObject> res = new ArrayList<DataTableObject>();
        Properties props = new Properties();
        props.setProperty("user","postgres");
        props.setProperty("password","password");
        try {
            Connection conn = DriverManager.getConnection(url, props);
            Statement stmt = conn.createStatement();
            ResultSet rsTableData = stmt.executeQuery("SELECT column_name,data_type FROM information_schema.columns WHERE table_name = 'event_data';");
            while(rsTableData.next()) {
                DataTableObject row = new DataTableObject();
                row.setColumn(rsTableData.getString("column_name"));
                row.setDataType(rsTableData.getString("data_type"));
                res.add(row);
            }

            ResultSet rsExampleData = stmt.executeQuery("SELECT * FROM \"event_data\" WHERE externalseqno = 1");
            ResultSetMetaData resultSetMetaData = rsExampleData.getMetaData();
            final int columnCount = resultSetMetaData.getColumnCount();
            while(rsExampleData.next()) {
                for (int i = 1; i <= columnCount; i++) {
                    res.get(i - 1).setExampleData(rsExampleData.getString(i));
                }
            }

            rsTableData.close();
            rsExampleData.close();
            stmt.close();
            conn.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return new ResponseEntity<Object>(res, HttpStatus.OK);
    }

    @Override
    public String requestForm(String requestForm) {
        ObjectMapper mapper = new ObjectMapper();
        RequestForm reqForm = null;
        String res = "{\"status\":\"ok\"}";
        try {
            reqForm = mapper.readValue(requestForm,RequestForm.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "{\"status\":\"Data mapping failed\"}";
        }

        return res;
    }
}
