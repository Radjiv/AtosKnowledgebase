package dao;

import java.util.List;

public interface UserDao {

	public void addUser(String id, String fn, String mn, String ln, String dob, String function, List<String> competence, boolean vip);

	public void deleteUser(String id);

	public void updateUser(String id, String fn, String mn, String ln, String dob, String function, List<String> competence, boolean vip);

	public List<User> getUsers();

	public User getUser(String id);
	
}
