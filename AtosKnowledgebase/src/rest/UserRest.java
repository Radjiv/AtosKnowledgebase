package rest;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import dao.User;
import dao.UserDao;

@Path("/user")
public class UserRest {

	@Inject
	private UserDao userDao;

	@POST
	@Path("/addUser")
	public void addUser(@FormParam("id") String id, @FormParam("fn") String fn, @FormParam("mn") String mn, @FormParam("ln") String ln,
			@FormParam("dob") String dob, @FormParam("func") String func, @FormParam("comp") List<String> comp, @FormParam("vip") boolean vip) {
		userDao.addUser(id.toUpperCase(), fn, mn, ln, dob, func, comp, vip);
	}

	@GET
	@Path("/getUser/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public User getUser(@PathParam("id") String id) {
		return userDao.getUser(id);
	}

	@GET
	@Path("/hello/{id}")
	// The Java method will produce content identified by the MIME Media
	// type "text/plain"
	@Produces("text/plain")
	public String getClichedMessage(@PathParam("id") String id) {
		// Return some cliched textual content
		return "Hello World" + id;
	}

	@GET
	@Path("/getUsers")
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> getUsers() {
		return userDao.getUsers();
	}

	@POST
	@Path("/deleteUser")
	public void deleteUser(@FormParam("id") String id) {
		userDao.deleteUser(id);
	}

	@POST
	@Path("/updateUser")
	public void updateUser(@FormParam("id") String id, @FormParam("fn") String fn, @FormParam("mn") String mn, @FormParam("ln") String ln,
			@FormParam("dob") String dob, @FormParam("func") String func, @FormParam("comp") List<String> comp, @FormParam("vip") boolean vip) {
		userDao.updateUser(id.toUpperCase(), fn, mn, ln, dob, func, comp, vip);
	}

}
