import {ElectronicsFactory} from "../interfaces/ElectronicsFactory";
import {PhoneGood} from "../../goods/interfaces/PhoneGood";
import {ComputerGood} from "../../goods/interfaces/ComputerGood";
import {SamsungNotebook} from "../../goods/implements/Samsung/SamsungNotebook";
import {SamsungPhone} from "../../goods/implements/Samsung/SamsungPhone";

export class SamsungFactory implements ElectronicsFactory {
    createPhone(): PhoneGood {
        return new SamsungPhone;
    }

    createComputer(): ComputerGood {
        return new SamsungNotebook;
    }

}
