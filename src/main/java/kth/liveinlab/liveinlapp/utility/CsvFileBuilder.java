package kth.liveinlab.liveinlapp.utility;

import kth.liveinlab.liveinlapp.model.EventData;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

public class CsvFileBuilder {

    public CsvFileBuilder(){

    }

    public void makeCsvFromEventData(ArrayList<EventData> data, String title) throws IOException {
        ArrayList<String[]> rows = new ArrayList<>();
        rows.add(new String[]{"type", "value", "timestamp"});
        for(EventData d : data){
            String[] s = {d.getCategory(),d.getValueafter(),d.getTimestamp()};
            rows.add(s);
        }
        File csvOutputFile = new File("C:\\RandomUtveckling\\KTH\\"+title+".csv");
        if(!csvOutputFile.exists()) {
            csvOutputFile.createNewFile();
        }
        try (PrintWriter pw = new PrintWriter(csvOutputFile)) {
            rows.stream()
                    .map(this::convertToCSV)
                    .forEach(pw::println);
        }
    }

    public String convertToCSV(String[] data) {
        return String.join(",", data);
    }

}
