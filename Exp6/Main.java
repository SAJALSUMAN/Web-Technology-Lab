// Main.java
public class Main {
    public static void main(String[] args) {
        // Creating Employee objects
        Employee emp1 = new Employee(101, "Alice", 55000, "Developer", "IT");
        Employee emp2 = new Employee(102, "Bob", 60000, "Analyst", "Finance");
        Employee emp3 = new Employee(103, "Charlie", 70000, "Manager", "HR");
        Employee emp4 = new Employee(104, "Diana", 65000, "Team Lead", "IT");
        Employee emp5 = new Employee(105, "Eve", 50000, "Support Staff", "Operations");

        // Displaying Employee information
        System.out.println("Employee Information:");
        System.out.println("--------------------------");
        emp1.displayInfo();
        emp2.displayInfo();
        emp3.displayInfo();
        emp4.displayInfo();
        emp5.displayInfo();
    }
}
