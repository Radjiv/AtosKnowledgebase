package dao;

import java.util.List;

import database.DatabaseDao;
import database.DatabaseDaoImpl;

public class UserDaoImpl implements UserDao {

	
	private DatabaseDao database = new DatabaseDaoImpl();

	@Override
	public void addUser(String id, String fn, String mn, String ln, String dob, String function, List<String> competence, boolean vip) {
		database.saveUser(new User(id, fn, mn, ln, dob, function, competence, vip));
	}

	@Override
	public void deleteUser(String id) {
		database.deleteUser(id);
	}

	@Override
	public void updateUser(String id, String fn, String mn, String ln, String dob, String function, List<String> competence, boolean vip) {
		database.updateUser(new User(id, fn, mn, ln, dob, function, competence, vip), id);
	}

	@Override
	public List<User> getUsers() {
		return database.getUsers();
	}

	@Override
	public User getUser(String id) {
		return database.getUser(id);
	}

}
