package kth.liveinlab.liveinlapp.api;

import kth.liveinlab.liveinlapp.model.DataTableObject;
import kth.liveinlab.liveinlapp.model.RequestForm;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import javax.servlet.http.HttpServletRequest;

@Component
@RestController
@RequestMapping("/api")
public interface LiveInLAppAPI {


    @GET
    @RequestMapping("/helloWorld")
    @Produces({MediaType.TEXT_PLAIN})
    String helloWorld(HttpServletRequest request);

    @GET
    @RequestMapping("/getTableData")
    @Produces({MediaType.APPLICATION_JSON})
    ResponseEntity<Object> getTableData(HttpServletRequest request);

    @GET
    @RequestMapping("/getExampleData")
    @Produces({MediaType.APPLICATION_JSON})
    ResponseEntity<Object>  getExampleData(HttpServletRequest request);

    @POST
    @RequestMapping("/requestForm/submit")
    @Produces({MediaType.APPLICATION_JSON})
    String requestForm(@RequestBody String requestForm);

}