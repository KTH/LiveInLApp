package kth.liveinlab.liveinlapp.api;

import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.sql.*;
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
}
