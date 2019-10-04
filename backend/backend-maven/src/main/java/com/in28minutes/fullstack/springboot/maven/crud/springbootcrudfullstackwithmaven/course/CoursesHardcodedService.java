package com.in28minutes.fullstack.springboot.maven.crud.springbootcrudfullstackwithmaven.course;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CoursesHardcodedService {

	private static List<Course> courses = new ArrayList<>();
	private static long idCounter = 0;

	static {
		
		courses.add(new Course(++idCounter, "Tutor1", "Advanced Professional Development","5:00pm"));
		courses.add(new Course(++idCounter, "Tutor1", "SEPT","6:00pm"));
		courses.add(new Course(++idCounter, "Tutor2", "Software engineering fundamentals", "3.30pm"));
		courses.add(new Course(++idCounter, "Tutor2",
				"Advanced programming techniques" , "5.00pm"));
	}

	public List<Course> findAll() {
		return courses;
	}

	public Course save(Course course) {
		if (course.getId() == -1 || course.getId() == 0) {
			course.setId(++idCounter);
			courses.add(course);
		} else {
			deleteById(course.getId());
			courses.add(course);
		}
		return course;
	}

	public Course deleteById(long id) {
		Course course = findById(id);

		if (course == null)
			return null;

		if (courses.remove(course)) {
			return course;
		}

		return null;
	}

	public Course findById(long id) {
		for (Course course : courses) {
			if (course.getId() == id) {
				return course;
			}
		}

		return null;
	}
}