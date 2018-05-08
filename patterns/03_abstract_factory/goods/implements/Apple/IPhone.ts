import {PhoneGood} from "../../interfaces/PhoneGood";


export class IPhone implements PhoneGood {
    name: string;
    company: string;
    desc: string;
    price: number;
    id: number;

    buy(): void {
        console.log("Buy IPhone");
    }

    info(): string {
        return this.desc;
    }

}
