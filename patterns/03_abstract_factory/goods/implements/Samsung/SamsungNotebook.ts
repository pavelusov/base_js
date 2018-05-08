import {PhoneGood} from "../../interfaces/PhoneGood";

export class SamsungNotebook implements PhoneGood {
    name: string;
    company: string;
    desc: string;
    price: number;
    id: number;

    buy(): void {
        console.log("Buy the Samsung Notebook");
    }

    info(): string {
        return this.desc;
    }

}
