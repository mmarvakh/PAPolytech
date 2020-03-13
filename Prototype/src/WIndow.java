import javax.swing.*;
import java.awt.*;

    class Window {
    public static void main(String[] args) {
        begin();
    }

    public static void begin() {
        String[] options = {Firstlevel.lvl11, Firstlevel.lvl12, Firstlevel.lvl13, Firstlevel.lvl14, Firstlevel.lvl15,};
        String n = (String) JOptionPane.showInputDialog(null, "Кто вы?",
                "First level", JOptionPane.QUESTION_MESSAGE, null, options, options[2]);
        switch (n) {
            case (Firstlevel.lvl11):
                //case111(Firstlevel.lvl111, Firstlevel.lvl112, Firstlevel.lvl113, Firstlevel.lvl114, Firstlevel.115);
                case11();
                break;
            case (Firstlevel.lvl12):
                case12();
                break;
            case (Firstlevel.lvl13):
                case13();
                break;
            case (Firstlevel.lvl14):
                case14();
                break;
            case (Firstlevel.lvl15):
                case15();
                break;
        }

    }

   /* public static void case111( String a, String b, String c, String d,String e ){
            String[] options = {a, b,c,d,e};
            String n = (String) JOptionPane.showInputDialog(null, "What do you want?",
                    "First level", JOptionPane.QUESTION_MESSAGE, null, options, options[2]);
            switch (n) {
                case (a):
                    System.out.println(Firstlevel.ans11);
                    break;
                case "Second question lvl 2":
                    System.out.println(Firstlevel.ans12);
                    break;
                case "Third question lvl 2":
                    System.out.println(Firstlevel.ans13);
                    break;
                case "Fourth question lvl 2":
                    System.out.println(Firstlevel.ans14);
                    break;
                case "Fifth question lvl 2":
                    System.out.println(Firstlevel.ans15);
                    break;
            }

        }
        */

    public static void case11(){
        String[] options = {Firstlevel.lvl211, Firstlevel.lvl212, Firstlevel.lvl213, Firstlevel.lvl214, Firstlevel.lvl215,};
        String n = (String) JOptionPane.showInputDialog(null, "What do you want?",
                "First level", JOptionPane.QUESTION_MESSAGE, null, options, options[2]);
        switch (n) {
            case "First question lvl 2":
                System.out.println(Firstlevel.ans11);
                break;
            case "Second question lvl 2":
                System.out.println(Firstlevel.ans12);
                break;
            case "Third question lvl 2":
                System.out.println(Firstlevel.ans13);
                break;
            case "Fourth question lvl 2":
                System.out.println(Firstlevel.ans14);
                break;
            case "Fifth question lvl 2":
                System.out.println(Firstlevel.ans15);
                break;
        }
    }
        public static void case12(){
            String[] options = {Firstlevel.lvl221, Firstlevel.lvl222, Firstlevel.lvl223, Firstlevel.lvl224, Firstlevel.lvl225,};
            String n = (String) JOptionPane.showInputDialog(null, "What do you want?",
                    "First level", JOptionPane.QUESTION_MESSAGE, null, options, options[2]);
            switch (n) {
                case "First question lvl 2":
                    System.out.println(Firstlevel.ans21);
                    break;
                case "Second question lvl 2":
                    System.out.println(Firstlevel.ans22);
                    break;
                case "Third question lvl 2":
                    System.out.println(Firstlevel.ans23);
                    break;
                case "Fourth question lvl 2":
                    System.out.println(Firstlevel.ans24);
                    break;
                case "Fifth question lvl 2":
                    System.out.println(Firstlevel.ans25);
                    break;
            }
        }
        public static void case13(){
            String[] options = {Firstlevel.lvl231, Firstlevel.lvl232, Firstlevel.lvl233, Firstlevel.lvl234, Firstlevel.lvl235,};
            String n = (String) JOptionPane.showInputDialog(null, "What do you want?",
                    "First level", JOptionPane.QUESTION_MESSAGE, null, options, options[2]);
            switch (n) {
                case "First question lvl 2":
                    System.out.println(Firstlevel.ans31);
                    break;
                case "Second question lvl 2":
                    System.out.println(Firstlevel.ans32);
                    break;
                case "Third question lvl 2":
                    System.out.println(Firstlevel.ans33);
                    break;
                case "Fourth question lvl 2":
                    System.out.println(Firstlevel.ans34);
                    break;
                case "Fifth question lvl 2":
                    System.out.println(Firstlevel.ans35);
                    break;
            }
        }
        public static void case14(){
            String[] options = {Firstlevel.lvl241, Firstlevel.lvl242, Firstlevel.lvl243, Firstlevel.lvl244, Firstlevel.lvl245,};
            String n = (String) JOptionPane.showInputDialog(null, "What do you want?",
                    "First level", JOptionPane.QUESTION_MESSAGE, null, options, options[2]);
            switch (n) {
                case "First question lvl 2":
                    System.out.println(Firstlevel.ans41);
                    break;
                case "Second question lvl 2":
                    System.out.println(Firstlevel.ans42);
                    break;
                case "Third question lvl 2":
                    System.out.println(Firstlevel.ans43);
                    break;
                case "Fourth question lvl 2":
                    System.out.println(Firstlevel.ans44);
                    break;
                case "Fifth question lvl 2":
                    System.out.println(Firstlevel.ans45);
                    break;
            }
        }
        public static void case15(){
            String[] options = {Firstlevel.lvl251, Firstlevel.lvl252, Firstlevel.lvl253, Firstlevel.lvl254, Firstlevel.lvl255,};
            String n = (String) JOptionPane.showInputDialog(null, "What do you want?",
                    "First level", JOptionPane.QUESTION_MESSAGE, null, options, options[2]);
            switch (n) {
                case "First question lvl 2":
                    //answer(Firstlevel.ans51);
                    System.out.println(Firstlevel.ans51);
                    break;
                case "Second question lvl 2":
                    System.out.println(Firstlevel.ans52);
                    break;
                case "Third question lvl 2":
                    System.out.println(Firstlevel.ans53);
                    break;
                case "Fourth question lvl 2":
                    System.out.println(Firstlevel.ans54);
                    break;
                case "Fifth question lvl 2":
                    System.out.println(Firstlevel.ans55);
                    break;
            }
        }

    /*JFrame f;
        public static void answer(String ans){
            JOptionPane.showInternalMessageDialog(null, ans,
                    "Ответ", JOptionPane.INFORMATION_MESSAGE);
        }
        */
}
