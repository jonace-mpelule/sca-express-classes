import { Service } from "./service";

class Controller {
    private services: Service
    constructor() {
        this.services = new Service()
    }

    handleSayHello(name: string) {
        const greeting = this.services.sayHello(name)
        console.log(greeting)
    }

}


const controller = new Controller()
controller.handleSayHello("Jonace M")