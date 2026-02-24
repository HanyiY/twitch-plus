
package com.laioffer.twitch.hello;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {



    @GetMapping("/hello")
    public Person sayHello() {
        return new Person("John Doe", "LaiOffer",
                new Address("123 Main St", "San Jose", "CA", "USA"),
                new Book("1984", "George Orwell"));
    }
}
//
//    @GetMapping("/bye")
//        public String saybye() {
//            return "Bye World!";
//        }



