package kth.liveinlab.liveinlapp.api;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import javax.servlet.http.HttpServletRequest;

@Component
@RestController
@RequestMapping("/testing")
public interface LiveInLAppAPI {


    @GET
    @RequestMapping("/helloWorld")
    @Produces({MediaType.TEXT_PLAIN})
    String helloWorld(HttpServletRequest request);

}