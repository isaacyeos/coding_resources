## Description:
Allows you to produce families of related objects without specifying their concrete classes. Factory that returns factories. Provides an easy way to create a similar type of many objects. Terminology:
- Client: Client application that calls Abstract Factory.
- Abstract Factory: Common interface over all sub factories, declares a set of methods that return differnet abstract products.
- Concrete Factory: Sub factory of Abstract Factory and contains methods to create Concrete Product.
- Abstract Product: Interface for product that sub factory returns.
- Concrete Product: Object that is finally returned.

## Problem:
Creating product variants of a product family i.e. chairs, sofas and tables in Victorian, Art Deco and Modern designs. Need to create individual furniture objects so that they match other objects of the same family i.e. Victorian sofa, table and chair. 

## Solution:
1) Explicitly declare interfaces for each distinct product of product family. 
2) All variants of products will follow those interfaces. 
3) Declare the Abstract Factory which is an interface with a list of creation methods for all products.

```
FurnitureFactory <interface>:
createChair(): Chair
createTable(): Table
createSofa(): Sofa

VictorianFurnitureFactory:
createChair(): Chair
createTable(): Table
createSofa(): Sofa
```

## Advantages:
- Compatibility between products created by same factory class is guaranteed.
- Cleaner code since new product families can be introduced without breaking existing code.

## Disadvantages:
- Increased complexity in code and number of classes required.

## Example:
```python
import abc


class AbstractFactory(metaclass=abc.ABCMeta):
    """
    Declare an interface for operations that create abstract product
    objects.
    """

    @abc.abstractmethod
    def create_product_a(self):
        pass

    @abc.abstractmethod
    def create_product_b(self):
        pass


class ConcreteFactory1(AbstractFactory):
    """
    Implement the operations to create concrete product objects.
    """

    def create_product_a(self):
        return ConcreteProductA1()

    def create_product_b(self):
        return ConcreteProductB1()


class ConcreteFactory2(AbstractFactory):
    """
    Implement the operations to create concrete product objects.
    """

    def create_product_a(self):
        return ConcreteProductA2()

    def create_product_b(self):
        return ConcreteProductB2()


class AbstractProductA(metaclass=abc.ABCMeta):
    """
    Declare an interface for a type of product object.
    """

    @abc.abstractmethod
    def interface_a(self):
        pass


class ConcreteProductA1(AbstractProductA):
    """
    Define a product object to be created by the corresponding concrete
    factory.
    Implement the AbstractProduct interface.
    """

    def interface_a(self):
        pass


class ConcreteProductA2(AbstractProductA):
    """
    Define a product object to be created by the corresponding concrete
    factory.
    Implement the AbstractProduct interface.
    """

    def interface_a(self):
        pass


class AbstractProductB(metaclass=abc.ABCMeta):
    """
    Declare an interface for a type of product object.
    """

    @abc.abstractmethod
    def interface_b(self):
        pass


class ConcreteProductB1(AbstractProductB):
    """
    Define a product object to be created by the corresponding concrete
    factory.
    Implement the AbstractProduct interface.
    """

    def interface_b(self):
        pass


class ConcreteProductB2(AbstractProductB):
    """
    Define a product object to be created by the corresponding concrete
    factory.
    Implement the AbstractProduct interface.
    """

    def interface_b(self):
        pass


def main():
    for factory in (ConcreteFactory1(), ConcreteFactory2()):
        product_a = factory.create_product_a()
        product_b = factory.create_product_b()
        product_a.interface_a()
        product_b.interface_b()


if __name__ == "__main__":
    main()
```
