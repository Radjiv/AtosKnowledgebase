package test;

import javax.inject.Inject;

import dao.User;
import dao.UserDao;
import dao.UserDaoImpl;
import database.DatabaseDaoImpl;

public class TestUser {
	
	//@Inject
	//private static UserDao userDao;

	public static void main(String[] args) {
		
		
		UserDaoImpl userdao = new UserDaoImpl();
		/**
		DatabaseDaoImpl db = new DatabaseDaoImpl();
		String id = "A888999";
		User user1 = db.getUser(id);
		System.out.println(user1);
		
		User user2 = userdao.getUser(id);
		System.out.println(user2);
			**/	
		userdao.deleteUser("999999");
		User user2 = userdao.getUser("999999");
		System.out.println(user2);
	}

}
