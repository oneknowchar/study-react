package org.zerock.mallapi.repository;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.zerock.mallapi.domain.Todo;

import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class TodoRepositoryTests {
	@Autowired
	private TodoRepository todoRepository;

	@Test
	public void test1() {
		log.info("todoRepository...........{}", todoRepository);
	}
	
	@Test
	public void insertTodo() {
		for(int i = 0; i < 100; i++	) {
			Todo todo = Todo.builder()
					.writer("user00")
					.title("this is title..")
					.content("this is content")
					.complete(false)
					.dueDate(LocalDate.now())
					.build();
			
			todoRepository.save(todo);
			
			log.info("todo >>> {}", todo);
			log.info("todo.tno >>> {}", todo.getTno());
		}
	}

}
