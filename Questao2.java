// Questão 2 (Executar em Java)
import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;

public class Questao2 {
    public static void main(String[] args) {
        System.out.println("Questão 2");
        int valor = _getValor();

        _checkFibonacci(valor);
    }

    public static int _getValor(){
        Scanner sc1 = new Scanner(System.in);
        int valor;
        System.out.println("Informe um número inteiro para para verificar ");
        try{
            valor = sc1.nextInt();
            if (valor < 0) {
                System.out.println("Valor inválido. O número deve ser maior ou igual a 0");
                valor = _getValor();
            }
        } catch (Exception e) {
            System.out.println("Valor inválido. O número deve ser inteiro");
            valor = _getValor();
        }
        sc1.close();
        return valor;
    }

    public static void _checkFibonacci (int valor){
        if (valor == 0 || valor == 1) {
            _success(valor);
        } else {
            List<Integer> fib = new ArrayList<Integer>();
            boolean found = false;

            fib.add(0);
            fib.add(1);

            for (int i = 0; fib.get(i+1)<=valor; i++){
                int result = fib.get(i) + fib.get(i+1);
                if (result == valor) {
                    found = true;
                    break;
                } else {
                    fib.add(result);
                }
            }

            if (found){
                _success(valor);
            } else {
                _fail(valor);
            }
        }
        
    }

    public static void _success(int valor){
        System.out.println("O número " + valor + " pertence na sequência");
    }

    public static void _fail(int valor){
        System.out.println("O número " + valor + " não pertence na sequência");
    }

  }