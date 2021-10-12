package kth.liveinlab.liveinlapp.utility;

import kth.liveinlab.liveinlapp.model.EventData;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

public class ExcelFileDesigner {

    private String name;
    private String description;

    public ExcelFileDesigner(String name, String description){
        this.name = name;
        this.description = description;
    }

    public boolean buildWorkbookFromDbResult(ArrayList<EventData> data){
        boolean res = false;

        // Create workbook and first sheet
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet(name);
        sheet.setColumnWidth(0,5000);
        sheet.setColumnWidth(1,3000);
        sheet.setColumnWidth(2,7500);

        // Create header
        Row headerRow = sheet.createRow(0);


        CellStyle hStyle = workbook.createCellStyle();
        hStyle.setAlignment(HorizontalAlignment.CENTER);
        hStyle.setFillForegroundColor(IndexedColors.LIGHT_ORANGE.getIndex());
        hStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

        XSSFFont textFont = (XSSFFont) workbook.createFont();
        textFont.setFontName("Arial");
        textFont.setFontHeightInPoints((short) 18);
        hStyle.setFont(textFont);

        Cell headerCell = headerRow.createCell(0);
        headerCell.setCellValue("Type");
        headerCell.setCellStyle(hStyle);

        headerCell = headerRow.createCell(1);
        headerCell.setCellValue("Value");
        headerCell.setCellStyle(hStyle);

        headerCell = headerRow.createCell(2);
        headerCell.setCellValue("Timestamp");
        headerCell.setCellStyle(hStyle); // header done

        CellStyle rowStyle = workbook.createCellStyle();
        rowStyle.setWrapText(true);
        rowStyle.setAlignment(HorizontalAlignment.CENTER);

        for(int i = 1; i<=data.size();i++){
            Row row = sheet.createRow(i);

            Cell cell = row.createCell(0);
            cell.setCellStyle(rowStyle);
            cell.setCellValue(data.get(i-1).getCategory());

            cell = row.createCell(1);
            cell.setCellStyle(rowStyle);
            cell.setCellValue(data.get(i-1).getValueafter());

            cell = row.createCell(2);
            cell.setCellStyle(rowStyle);
            cell.setCellValue(data.get(i-1).getTimestamp());
        }

        String excelFile = "C:\\RandomUtveckling\\KTH\\"+"temp.xlsx";
        try {
            FileOutputStream outputStream = new FileOutputStream(excelFile);
            workbook.write(outputStream);
            workbook.close();
            outputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return res;
    }

}
