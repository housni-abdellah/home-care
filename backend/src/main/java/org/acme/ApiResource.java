package org.acme;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/api")
public class ApiResource {

    @GET
    @Path("hello")
    public String hello() {
        return "Hello from from backend";
    }
}