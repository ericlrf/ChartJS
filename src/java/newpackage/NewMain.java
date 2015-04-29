package newpackage;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Formatter;
import com.opencsv.CSVReader;
import java.io.FileReader;
import java.util.List;

public class NewMain {

    private static void escrever(String dados) {
        File arq = new File("ipca.xml");
        if (arq.exists()) {
            try {
//            arq.createNewFile();
                FileWriter fileWriter = new FileWriter(arq, false);
                try (PrintWriter printWriter = new PrintWriter(fileWriter)) {
                    printWriter.println(dados);
                    printWriter.flush();
                }
            } catch (IOException e) {
            }
        } else {
            try {
                try (Formatter saida = new Formatter("ipca.xml")) {
                    saida.format(dados);
                }
            } catch (Exception e) {
            }
        }
    }
    private static void escrever2(String dados2) {
        File arq = new File("ipca2.xml");
        if (arq.exists()) {
            try {
//            arq.createNewFile();
                FileWriter fileWriter = new FileWriter(arq, false);
                try (PrintWriter printWriter = new PrintWriter(fileWriter)) {
                    printWriter.println(dados2);
                    printWriter.flush();
                }
            } catch (IOException e) {
            }
        } else {
            try {
                try (Formatter saida = new Formatter("ipca2.xml")) {
                    saida.format(dados2);
                }
            } catch (Exception e) {
            }
        }
    }

    public static void main(String[] args) throws Exception {

        String dados = "";
        String dados2 = "";
//        String dados = 
//                  "<note>"
//                + "<to>Tove</to>"
//                + "<from>Jani</from>"
//                + "<heading>Reminder</heading>"
//                + "<body>Don't forget me this weekend!</body>"
//                + "</note>";

        CSVReader reader = new CSVReader(new FileReader("ac ao ano/91_15.csv"), '\t', '"', 0);
        CSVReader reader2 = new CSVReader(new FileReader("pc ao mes/91_15.csv"), '\t', '"', 0);
        ////
//        dados = dados.concat("<root>");
        List<String[]> allRows = reader.readAll();
        for (String[] row : allRows) {
//            dados = dados.concat("<grupo>");
            for (int i = 0; i < row.length; i++) {
//                dados = dados.concat("<nos>");
                dados = dados.concat(row[i]);
//                dados = dados.concat("</nos>");
            }
//            dados = dados.concat("</grupo>");
        }
//        dados = dados.concat("</root>");
        ////
        ////
//        dados2 = dados2.concat("<root>");
        List<String[]> allRows2 = reader2.readAll();
        for (String[] row : allRows2) {
//            dados2 = dados2.concat("<grupo>");
            for (int i = 0; i < row.length; i++) {
//                dados2 = dados2.concat("<nos>");
                dados2 = dados2.concat(row[i]);
//                dados2 = dados2.concat("</nos>");
            }
//            dados2 = dados2.concat("</grupo>");
        }
//        dados2 = dados2.concat("</root>");
        ////
        System.out.println(dados);
        System.out.println(dados2);
        NewMain.escrever(dados);
        NewMain.escrever2(dados2);
        
    }
}
