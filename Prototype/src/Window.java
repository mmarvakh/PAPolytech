import javax.swing.*;
import java.awt.*;
import javax.swing.Icon;
import javax.swing.ImageIcon;

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
        ImageIcon icon = new ImageIcon("TimberImage.png");
        String[] options = {Firstlevel.lvl211, Firstlevel.lvl212, Firstlevel.lvl213, Firstlevel.lvl214, Firstlevel.lvl215,Firstlevel.backup};
        String n = (String) JOptionPane.showInputDialog(null, "What do you want?",
                "First level", JOptionPane.QUESTION_MESSAGE, icon, options, options[2]);
        switch (n) {
            case Firstlevel.lvl211:
                answer(Firstlevel.ans11);
                break;
            case Firstlevel.lvl212:
                answer(Firstlevel.ans12);
                break;
            case Firstlevel.lvl213:
                answer(Firstlevel.ans13);
                break;
            case Firstlevel.lvl214:
                answer(Firstlevel.ans14);
                break;
            case Firstlevel.lvl215:
                answer(Firstlevel.ans15);
                break;
            case Firstlevel.backup:
                backup();
        }
    }
    public static void case12(){
        ImageIcon icon = new ImageIcon("BusinessImage.png");
        String[] options = {Firstlevel.lvl221, Firstlevel.lvl222, Firstlevel.lvl223, Firstlevel.lvl224, Firstlevel.lvl225,Firstlevel.backup};
        String n = (String) JOptionPane.showInputDialog(null, "What do you want?",
                "First level", JOptionPane.QUESTION_MESSAGE, icon, options, options[2]);
        switch (n) {
            case Firstlevel.lvl221:
                answer(Firstlevel.ans21);
                break;
            case Firstlevel.lvl222:
                answer(Firstlevel.ans22);
                break;
            case Firstlevel.lvl223:
                answer(Firstlevel.ans23);
                break;
            case Firstlevel.lvl224:
                answer(Firstlevel.ans24);
                break;
            case Firstlevel.lvl225:
                answer(Firstlevel.ans25);
                break;
            case Firstlevel.backup:
                backup();
        }
    }
    public static void case13(){
        ImageIcon icon = new ImageIcon("TreeImage.png");
        String[] options = {Firstlevel.lvl231, Firstlevel.lvl232, Firstlevel.lvl233, Firstlevel.lvl234, Firstlevel.lvl235,Firstlevel.backup};
        String n = (String) JOptionPane.showInputDialog(null, "What do you want?",
                "First level", JOptionPane.QUESTION_MESSAGE, icon, options, options[2]);
        switch (n) {
            case Firstlevel.lvl231:
                answer(Firstlevel.ans31);
                break;
            case Firstlevel.lvl232:
                answer(Firstlevel.ans32);
                break;
            case Firstlevel.lvl233:
                answer(Firstlevel.ans33);
                break;
            case Firstlevel.lvl234:
                answer(Firstlevel.ans34);
                break;
            case Firstlevel.lvl235:
                answer(Firstlevel.ans35);
                break;
            case Firstlevel.backup:
                backup();
        }
    }
    public static void case14(){
        ImageIcon icon = new ImageIcon("VillageImage.png");
        String[] options = {Firstlevel.lvl241, Firstlevel.lvl242, Firstlevel.lvl243, Firstlevel.lvl244, Firstlevel.lvl245,Firstlevel.backup};
        String n = (String) JOptionPane.showInputDialog(null, "What do you want?",
                "First level", JOptionPane.QUESTION_MESSAGE, icon, options, options[2]);
        switch (n) {
            case Firstlevel.lvl241:
                answer(Firstlevel.ans41);
                break;
            case Firstlevel.lvl242:
                answer(Firstlevel.ans42);
                break;
            case Firstlevel.lvl243:
                answer(Firstlevel.ans43);
                break;
            case Firstlevel.lvl244:
                answer(Firstlevel.ans44);
                break;
            case Firstlevel.lvl245:
                answer(Firstlevel.ans45);
                break;
            case Firstlevel.backup:
                backup();
        }
    }
    public static void case15(){
        ImageIcon icon = new ImageIcon("WatcherImage.png");
        String[] options = {Firstlevel.lvl251, Firstlevel.lvl252, Firstlevel.lvl253, Firstlevel.lvl254, Firstlevel.lvl255,Firstlevel.backup};
        String n = (String) JOptionPane.showInputDialog(null, "What do you want?",
                "First level", JOptionPane.QUESTION_MESSAGE, icon, options, options[2]);
        switch (n) {
            case Firstlevel.lvl251:
                answer(Firstlevel.ans51);
                break;
            case Firstlevel.lvl252:
                answer(Firstlevel.ans52);
                break;
            case Firstlevel.lvl253:
                answer(Firstlevel.ans53);
                break;
            case Firstlevel.lvl254:
                answer(Firstlevel.ans54);
                break;
            case Firstlevel.lvl255:
                answer(Firstlevel.ans55);
                break;
            case Firstlevel.backup:
                backup();
        }
    }

    public static void answer(String ans) {
        ImageIcon icon = new ImageIcon("FSCImage.png");
        JFrame frame = new JFrame("JOptionPane showMessageDialog example");
        JOptionPane.showMessageDialog(frame, ans, "Ответ", JOptionPane.INFORMATION_MESSAGE, icon);
    }
    public static void backup(){
        begin();
    }
}