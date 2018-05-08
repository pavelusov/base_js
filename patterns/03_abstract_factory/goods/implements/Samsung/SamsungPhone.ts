import {PhoneGood} from "../../interfaces/PhoneGood";

export class SamsungPhone implements PhoneGood {
    name: string;
    company: string;
    desc: string;
    price: number;
    id: number;

    buy(): void {
        console.log("Buy the Samsung Phone");
    }

    info(): string {
        return this.desc;
    }

}
