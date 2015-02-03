package database;

import java.util.List;

import dao.User;

public interface DatabaseDao {

	public void saveUser (User user);
	
	public List<User> getUsers();
	
	public User getUser(String id);
	
	public void updateUser(User user, String id);
	
	public void deleteUser(String id);

}
