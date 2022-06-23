// Questão 5 (Executar em Java)
import java.util.Scanner;

public class Questao5 {
    public static void main(String[] args) {
        Scanner sc1 = new Scanner(System.in);
        String palavra;
        System.out.println("Informe uma palavra para ser invertida");
        palavra = sc1.nextLine();
        sc1.close();
        
        String inverso = "";

        for (int i = palavra.length()-1; i >= 0; i--) {
            inverso += palavra.charAt(i);
        }

        System.out.println("Inverso de " + palavra + ": " + inverso);
    }
  }
