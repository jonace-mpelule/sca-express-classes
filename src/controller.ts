import { GreetingsService } from "./service";

class GreetingController {
    private greetingsService: GreetingsService

    constructor() {
        this.greetingsService = new GreetingsService()
    }

    handleSayHello() {
        const greeting = this.greetingsService.sayHello("Jonace")
        console.log(greeting)
    }


}



const greetingController = new GreetingController()

greetingController.handleSayHello()

