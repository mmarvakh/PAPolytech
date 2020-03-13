import javax.swing.*;

public class OptionPaneExample {
    JFrame f;
    OptionPaneExample(String ans){
        f=new JFrame();
        JOptionPane.showMessageDialog(f,ans);
    }
}
