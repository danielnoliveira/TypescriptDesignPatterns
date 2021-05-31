interface IChair {
  hasLegs():number;
  sitOn():boolean;
}

class VictorianChair implements IChair {
  hasLegs(): number {
    return 4;
  }
  sitOn(): boolean {
    return true;
  }
  
}

class ModernChair implements IChair {
  hasLegs(): number {
    return 0;
  }
  sitOn(): boolean {
    return true;
  }
  
}

class ArtDecoChair implements IChair {
  hasLegs(): number {
    return 4;
  }
  sitOn(): boolean {
    return true;
  }
  
}

interface ISofa {
  hasCushions(): number;
}

class VictorianSofa implements ISofa {
  hasCushions(): number {
    return 2;
  }
}

class ModernSofa implements ISofa {
  hasCushions(): number {
    return 0;
  }  
}
class ArtDecoSofa implements ISofa{
  hasCushions(): number {
    return 1;
  }
}

interface ICoffeeTable {
  hasLegs():number;
  getShape():string;
}

class VictorianCoffeeTable implements ICoffeeTable {
  hasLegs(): number {
    return 4;
  }
  getShape(): string {
    return 'oval';
  }
  
}
class ModernCoffeeTable implements ICoffeeTable {
  hasLegs(): number {
    return 4;
  }
  getShape(): string {
    return 'oval';
  }
  
}
class ArtDecoCoffeeTable implements ICoffeeTable {
  hasLegs(): number {
    return 0;
  }
  getShape(): string {
    return 'rect';
  }
  
}

interface IFurnitureFactory {
  createChair():IChair;
  createSofa():ISofa;
  createCoffeeTable():ICoffeeTable;
  pickSet():[IChair,ISofa,ICoffeeTable];
}

class VictorianFurnitureFactory implements IFurnitureFactory {
  pickSet(): [IChair, ISofa, ICoffeeTable] {
    let chair = this.createChair();
    let sofa = this.createSofa();
    let coffeeTable = this.createCoffeeTable();
    return [chair,sofa,coffeeTable];
  }
  createChair(): IChair {
    return new VictorianChair();
  }
  createSofa(): ISofa {
    return new VictorianSofa();
  }
  createCoffeeTable(): ICoffeeTable {
    return new VictorianCoffeeTable();
  } 
}

class ModernFurnitureFactory implements IFurnitureFactory {
  pickSet(): [IChair, ISofa, ICoffeeTable] {
    let chair = this.createChair();
    let sofa = this.createSofa();
    let coffeeTable = this.createCoffeeTable();
    return [chair,sofa,coffeeTable];
  }
  createChair(): IChair {
    return new ModernChair();
  }
  createSofa(): ISofa {
    return new ModernSofa();
  }
  createCoffeeTable(): ICoffeeTable {
    return new ModernCoffeeTable();
  }
}

class ArtDecoFurnitureFactory implements IFurnitureFactory {
  pickSet(): [IChair, ISofa, ICoffeeTable] {
    let chair = this.createChair();
    let sofa = this.createSofa();
    let coffeeTable = this.createCoffeeTable();
    return [chair,sofa,coffeeTable];
  }
  createChair(): IChair {
    return new ArtDecoChair();
  }
  createSofa(): ISofa {
    return new ArtDecoSofa();
  }
  createCoffeeTable(): ICoffeeTable {
    return new ArtDecoCoffeeTable();
  }
}


function clientCode(factory:IFurnitureFactory) {
  const furnitureSet = factory.pickSet();
  console.log('Conjunto de mobilia:');
  console.log(furnitureSet[0],furnitureSet[1],furnitureSet[2]);
}

console.log('Victorian Furniture');
clientCode(new VictorianFurnitureFactory());


console.log('\nModern Furniture');
clientCode(new ModernFurnitureFactory());

console.log('\nArtDeco Furniture');
clientCode(new ArtDecoFurnitureFactory());