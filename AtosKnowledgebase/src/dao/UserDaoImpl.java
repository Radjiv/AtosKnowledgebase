package dao;

import java.util.List;

import javax.inject.Inject;

import database.DatabaseDao;

public class UserDaoImpl implements UserDao {
	
	@Inject
	private DatabaseDao database;

	@Override
	public void addUser(String id, String fn, String mn, String ln, String dob, String function, List<String> competence) {
		database.saveUser(new User(id, fn, mn, ln, dob, function, competence));		
	}
	
	@Override
	public void deleteUser(String id){
		database.deleteUser(id);
	}

	@Override
	public void updateUser(String id, String fn, String mn, String ln, String dob, String function, List<String> competence) {;
		database.updateUser(new User(id, fn, mn, ln, dob, function, competence), id);
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
