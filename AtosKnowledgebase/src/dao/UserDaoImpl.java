package dao;

import java.util.List;
import database.DatabaseDao;
import database.DatabaseDaoImpl;

public class UserDaoImpl implements UserDao {
	
	private static final DatabaseDao DB = new DatabaseDaoImpl();

	@Override
	public void addUser(String id, String fn, String mn, String ln, String dob, String function, List<String> competence, boolean vip) {
		DB.saveUser(new User(id, fn, mn, ln, dob, function, competence, vip));
	}

	@Override
	public void deleteUser(String id) {
		DB.deleteUser(id);
	}

	@Override
	public void updateUser(String id, String fn, String mn, String ln, String dob, String function, List<String> competence, boolean vip) {
		DB.updateUser(new User(id, fn, mn, ln, dob, function, competence, vip), id);
	}

	@Override
	public List<User> getUsers() {
		return DB.getUsers();
	}

	@Override
	public User getUser(String id) {
		return DB.getUser(id);
	}

}
