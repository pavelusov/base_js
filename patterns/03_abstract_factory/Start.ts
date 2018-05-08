import {ElectronicsFactory} from "./factory/interfaces/ElectronicsFactory";
import {AppleFactory} from "./factory/implements/AppleFactory";
import {SamsungFactory} from "./factory/implements/SamsungFactory";
import {PhoneGood} from "./goods/interfaces/PhoneGood";
import {ComputerGood} from "./goods/interfaces/ComputerGood";

let factory: ElectronicsFactory;

let manufacturer: string = "Samsung";

switch (manufacturer) {
    case "Apple":
        factory = new AppleFactory();
        break;
    case "Samsung":
        factory = new SamsungFactory();
        break;
}

let computer: ComputerGood = factory.createComputer();
let phone: PhoneGood = factory.createPhone();
computer.buy();
phone.buy();
