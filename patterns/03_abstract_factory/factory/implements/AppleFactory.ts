import {ElectronicsFactory} from "../interfaces/ElectronicsFactory";
import {PhoneGood} from "../../goods/interfaces/PhoneGood";
import {ComputerGood} from "../../goods/interfaces/ComputerGood";
import {IPhone} from "../../goods/implements/Apple/IPhone";
import {MacBook} from "../../goods/implements/Apple/MacBook";

export class AppleFactory implements ElectronicsFactory {
    createPhone(): PhoneGood {
        return new IPhone;
    }

    createComputer(): ComputerGood {
        return new MacBook;
    }

}
