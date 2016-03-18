using System;


namespace GarmentsAng {
    public partial class Default : System.Web.UI.Page {
        protected void Page_Load(object sender, EventArgs e) {
            A a = new A();
            //Response.Write(a.test());
            A b = new B();
            //Response.Write(b.test());
            B c = new C();
            // Response.Write(c.test());
            //PrimeNumbers();
            //B1 bnew = new B1();
            //Response.Write(bnew.x());
            //Response.Write(bnew.y());
            //AbTest bnew1 = new B1();
            //Response.Write(bnew1.y());
            //D d = new D();
            //Response.Write(d.DoWork(2));
            //E f = new F();
            //Response.Write(f.DoWork(2));
            Z z = new Z();
            z.F();
        }
        public void PrimeNumbers() {
            int n = 100;
            bool isPrime = true;
            for (int i = 2; i < n; i++) {
                for (int j = 2; j <= n; j++) {
                    if (i != j && i % j == 0) {
                        isPrime = false;
                        break;
                    }


                }
                if (isPrime) {
                    Response.Write("\t" + i);
                }
                isPrime = true;
            }
        }
    }
    abstract class AbTest {
        public abstract string x();
        public virtual string y() { return " nnnnn "; }
    }
    class B1 : AbTest {
        public override string x() { return " Response ::: x"; }
        public override string y() {
            string str = String.Empty;
            try {
                int a = 9; int c = 0;
                int b = 9 / c;
            }
            catch (Exception ex) {

            }
            str = " Response ::: y";
            return str;
        }
    }
    public class A {
        public string test() {
            return " Response ::: A";
        }
    }
    public class B : A {
        public new virtual string test() {
            return " Response ::: B";
        }

    }
    public class C : B {
        public override string test() {
            return " Response ::: C";
        }


    }

    // compile with: /target:library
    public class D {
        public virtual string DoWork(int i) {
            i = i + 1;
            return " Response ::: D " + i;
        }
    }

    public abstract class E : D {
        public abstract override string DoWork(int i);
        //return " Response ::: E";
    }

    public class F : E {
        public override string DoWork(int i) {
            i = i + 2;
            return " Response ::: F " + i;
        }
        public sealed class D1 {
            // Class members here.
        }



    }

    public class X {
        public virtual void F() { Console.WriteLine("X.F"); }
        public virtual void F2() { Console.WriteLine("X.F2"); }
    }
    public class Y : X {
        sealed public override void F() { Console.WriteLine("Y.F"); }
        public override void F2() { Console.WriteLine("Y.F2"); }
    }
    public class Z : Y {
        // Attempting to override F causes compiler error CS0239.
        // protected override void F() { Console.WriteLine("C.F"); }

        // Overriding F2 is allowed.
        public override void F2() { Console.WriteLine("Z.F2"); }
    }
}