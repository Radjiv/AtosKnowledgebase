package test;

import javax.inject.Inject;

import dao.UserDao;

public class TestUser {
	
	@Inject
	private static UserDao userDao;

	public static void main(String[] args) {
		String id = "A888999";
		System.out.println(userDao.getUser(id));

	}

}
