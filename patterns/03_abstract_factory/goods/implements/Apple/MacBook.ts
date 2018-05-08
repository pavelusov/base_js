import {ComputerGood} from "../../interfaces/ComputerGood";

export class MacBook implements ComputerGood {
    name: string;
    company: string;
    desc: string;
    price: number;
    id: number;

    buy(): void {
        console.log("Buy MacBook");
    }

    info(): string {
        return this.desc;
    }

}
