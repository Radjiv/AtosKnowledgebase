package database;

import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.query.Query;

import com.mongodb.MongoClient;

import dao.User;

public class DatabaseDaoImpl implements DatabaseDao {

	private Datastore datastore;
	private final String databaseName = "atosdb";

	public DatabaseDaoImpl() {
		try {
			final MongoClient mongoClient = new MongoClient("localhost", 27017);
			final Morphia morphia = new Morphia();
			morphia.mapPackage("database");
			datastore = morphia.createDatastore(mongoClient, databaseName);
		} catch (UnknownHostException e) {
			// TODO SIMON: Verwijder e.printStackTrace
			e.printStackTrace();
		}
	}

	@Override
	public void saveUser(User user) {
		datastore.save(user);
	}

	@Override
	public List<User> getUsers() {
		List<User> users = new ArrayList<>();
		Query<User> query = datastore.createQuery(User.class);// creates a query specific for that dbcollection
		// List list = query.asList();//gets all entities from that query
		for (int i = 0; i < query.asList().size(); i++) {
			User user = query.asList().get(i);
			users.add(user);
		}
		return users;
	}

	@Override
	public User getUser(String id) {
		User user = datastore.find(User.class, "id", id).get();
		return user;
	}

	@Override
	public void updateUser(User user, String id) {
		datastore.delete(User.class, id);
		datastore.save(user);
	}

	@Override
	public void deleteUser(String id) {
		datastore.delete(User.class, id);
	}
}