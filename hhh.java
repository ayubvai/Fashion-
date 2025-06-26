
package javaapplication8;
 class Overloade{

    void add(int a, int b){
        int c;
        c=(a+b);
        System.out.println("The ans is:" +c);
       

    }
    void add( double a, double b){
        double c;
        c=(a+b);
        System.out.println("The ans is:"+c);
        
    }
    void add (int a, int b, int c){
        int d;
        d=(a+b+c);
        System.out.println("The ans is:" +d);
      

    }
}
public class JavaApplication8 {

    public static void main(String[] args) {
             Overloade s = new Overloade();
        s.add(4,5);
        s.add(5.5,4.5);
        s.add(5,6,6);
    }
    
}