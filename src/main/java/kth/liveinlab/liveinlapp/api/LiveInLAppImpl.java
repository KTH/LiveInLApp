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
            ResultSet rs = stmt.executeQuery("SELECT column_name,data_type FROM information_schema.columns WHERE table_name = 'Temp';");
            while(rs.next()) {
                DataTableObject row = new DataTableObject();
                row.setColumnName(rs.getString("column_name"));
                row.setDataType(rs.getString("data_type"));
                res.add(row);
            }
            rs.close();
            stmt.close();
            conn.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        String logMessage = "HELLO FROM  getTableData:::"+res.get(1).getColumnName() + " " + res.get(1).getDataType();
        System.out.println(logMessage);
        return new ResponseEntity<Object>(res, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Object> getExampleData(HttpServletRequest request) {
        String url = "jdbc:postgresql://localhost/kth_live_in_lab";
        String[] values = new String[0];
        Properties props = new Properties();
        props.setProperty("user","postgres");
        props.setProperty("password","password");
        try {
            Connection conn = DriverManager.getConnection(url, props);
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM \"Temp\" WHERE id = 3");
            ResultSetMetaData resultSetMetaData = rs.getMetaData();
            final int columnCount = resultSetMetaData.getColumnCount();
            while(rs.next()) {
                values = new String[columnCount];
                for (int i = 1; i <= columnCount; i++) {
                    values[i - 1] = rs.getString(i);
                }
            }
            rs.close();
            stmt.close();
            conn.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        String logMessage = "HELLO FROM getExampledata::: " + values[0].toString() + " :: " + values[1].toString() + " :: " + values[2].toString();
        System.out.println(logMessage);
        return new ResponseEntity<Object>(values, HttpStatus.OK);
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
