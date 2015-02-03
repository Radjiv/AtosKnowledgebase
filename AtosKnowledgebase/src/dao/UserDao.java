package dao;

import java.util.List;

public interface UserDao {

	public void addUser(String id, String fn, String mn, String ln, String dob, String function, List<String> competence);
	
	public void deleteUser(String id);
	
	public void updateUser(String id, String fn, String mn, String ln, String dob, String function, List<String> competence);
		
	public List<User> getUsers();
	
	public User getUser(String id);
	
	/*
	public String getRecordsByID(String id);

	public String getRecordsByName(String firstName, String middleName, String lastName);
	
	*/

}
