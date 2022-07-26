class Shape {
   public void print() {
     System.out.println("[Shape] Unkown!");
   }
}

class Rectangle extends Shape {
   private int x, y;

   public Rectangle(int x, int y) {
     this.x = x;
     this.y = y;
   }

   public void print() {
     System.out.println("[Rectangle] x = " + this.x + ", y = " + this.y);
   }
}

class Circle extends Shape {
   private int r;

   public Circle() { this.r = r; }

   public void print() {
     System.out.println("[Circle] Radio = " + this.r); }
}

public class ExampleJava {
  public static void main(String args[]) {
    Shape s1 = new Rectangle(3, 4);
    Shape s2 = new Circle(2);

    s1.print();
    s2.print();
  }
}
