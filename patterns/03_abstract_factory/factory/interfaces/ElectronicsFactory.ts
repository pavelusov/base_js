import {PhoneInterface} from "../../goods/interfaces/PhoneGood";
import {ComputerInterface} from "../../goods/interfaces/ComputerGood";

export interface ElectronicsFactory {
    createPhone(): PhoneInterface;
    createComputer(): ComputerInterface;
}
